import SectionWrapper from "./SectionWrapper";

const diferenciais = [
  "Estratégia personalizada para cada marca",
  "Conteúdo criativo e alinhado ao seu público",
  "Gestão completa do seu perfil",
  "Resultados mensuráveis",
];

export default function Sobre() {
  return (
    <SectionWrapper id="sobre">
      <h2 className="font-heading text-4xl font-bold text-center mb-8">
        Sobre <span className="text-primary">mim</span>
      </h2>
      <p className="text-text-muted text-lg text-center max-w-2xl mx-auto leading-relaxed">
        Olá! Sou Vitorya, Social Media apaixonada por transformar ideias em
        conteúdo que gera conexão real. Trabalho com marcas que querem crescer de
        forma autêntica nas redes sociais.
      </p>
      <div className="grid sm:grid-cols-2 gap-4 mt-10 max-w-2xl mx-auto">
        {diferenciais.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 bg-surface rounded-xl p-4 shadow-sm"
          >
            <span className="text-primary text-xl mt-0.5">✦</span>
            <span className="text-text">{item}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
