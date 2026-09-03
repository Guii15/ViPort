// Baixa a imagem de capa de cada post em src/data/portfolio.js, converte pra
// WebP e atualiza o campo `localImage` de cada item automaticamente.
//
// Uso: node scripts/baixar-thumbnails.js
//
// Reexecutar é seguro: reprocessa todos os itens e sobrescreve os arquivos.

import { Buffer } from "node:buffer";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { instagramHandle, portfolioItems } from "../src/data/portfolio.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "src/assets/portfolio");
const DATA_FILE = path.join(ROOT, "src/data/portfolio.js");

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";

function fileNameFor(item) {
  return `post-${String(item.id).padStart(2, "0")}.webp`;
}

async function baixarImagem(item) {
  const url = `${item.instagramUrl}media/?size=l`;
  const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const buffer = Buffer.from(await res.arrayBuffer());
  const fileName = fileNameFor(item);
  await sharp(buffer)
    .resize({ width: 600 })
    .webp({ quality: 80 })
    .toFile(path.join(OUT_DIR, fileName));

  return fileName;
}

function serializeItem(item) {
  const fields = [
    `id: ${item.id}`,
    `image: ${item.image === null || item.image === undefined ? "null" : JSON.stringify(item.image)}`,
    `caption: ${JSON.stringify(item.caption)}`,
    `instagramUrl: ${JSON.stringify(item.instagramUrl)}`,
  ];
  if (item.localImage) {
    fields.push(`localImage: ${JSON.stringify(item.localImage)}`);
  }
  return `  { ${fields.join(", ")} },`;
}

async function salvarData(items) {
  const content = `export const instagramHandle = ${JSON.stringify(instagramHandle)};

export const portfolioItems = [
${items.map(serializeItem).join("\n")}
];
`;
  await writeFile(DATA_FILE, content, "utf-8");
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const results = [];
  let sucesso = 0;

  for (const item of portfolioItems) {
    try {
      const fileName = await baixarImagem(item);
      results.push({ ...item, localImage: fileName });
      sucesso++;
      console.log(`✓ post ${item.id} -> ${fileName}`);
    } catch (err) {
      results.push({ ...item, localImage: undefined });
      console.log(`✗ post ${item.id}: ${err.message}`);
    }
    // pequeno intervalo entre requisições pra não apanhar rate limit do Instagram
    await new Promise((resolve) => setTimeout(resolve, 400));
  }

  await salvarData(results);

  console.log(`\n${sucesso}/${portfolioItems.length} imagens baixadas com sucesso.`);
  if (sucesso < portfolioItems.length) {
    console.log(
      "Os itens que falharam ficaram sem `localImage` e vão cair no fallback \"Arte em breve\" no carrossel."
    );
  }
}

main();
