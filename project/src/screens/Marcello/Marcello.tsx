import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import { Textarea } from "../../components/ui/textarea";

export const Marcello = (): JSX.Element => {
  const services = [
    {
      title: "Limpeza de Vidros e Fachadas",
      description:
        "Limpeza profissional de vidros, fachadas e superfícies externas com tecnologia especializada e sem riscos.",
      icon: "/lucide-building-2.svg",
    },
    {
      title: "Manutenção Preventiva",
      description:
        "Identificação precoce de problemas estruturais, infiltrações e danos que podem comprometer seu edifício.",
      icon: "/lucide-shield-check.svg",
    },
    {
      title: "Inspeção com Drones",
      description:
        "Mapeamento detalhado da estrutura com imagens em alta resolução e relatórios técnicos completos.",
      icon: "/group-6.png",
    },
    {
      title: "Lavagem de painéis solares",
      description:
        "Limpeza técnica de módulos fotovoltaicos com drones, garantindo eficiência na geração de energia.",
      icon: "/vector-2.svg",
    },
  ];

  const benefits = [
    {
      title: "Segurança",
      description:
        "Eliminamos os riscos associados aos métodos antigos de limpeza em altura",
      icon: "/lucide-shield.svg",
    },
    {
      title: "Tecnologia",
      description:
        "Utilizamos drones especializados com sistema de limpeza de última geração",
      icon: "/lucide-cpu.svg",
    },
    {
      title: "Economia",
      description:
        "Redução de até 40% nos custos comparados aos métodos convencionais",
      icon: "/piggybank.svg",
    },
    {
      title: "Agilidade",
      description:
        "Serviço realizado em menos tempo, com mínima interferência na operação da usina.",
      icon: "/vector-1.svg",
    },
  ];

  return (
    <div className="bg-[#3f5e6f] w-full min-h-screen">
      <div className="w-full max-w-[393px] mx-auto bg-[#3f5e6f] overflow-hidden">
        {/* Header */}
        <header className="w-full h-24 bg-[#021b36] flex items-center justify-between px-6">
          <h1 className="text-white text-2xl font-['Montserrat']">
            <span>Sky</span>
            <span className="text-[#63c1f7]">Wash</span>
          </h1>
          <img className="w-8 h-8" alt="Menu" src="/menu.svg" />
        </header>

        {/* Hero Section */}
        <section className="w-full px-4 py-10 bg-gradient-to-b from-[#021b36] to-[#053d5c] text-white text-center">
          <img
            className="w-full object-cover rounded"
            alt="Drone cleaning facade"
            src="/snaptik-app-7390345030453513505-ezgif-com-optimize-1.png"
          />

          <div className="mt-10">
            <h2 className="text-2xl leading-snug">
              Limpeza de fachadas com <span className="text-[#63c1f7] font-semibold">tecnologia de drones</span>
            </h2>
            <p className="text-base mt-4">
              Mais segurança, menos custos e eficiência máxima para seu edifício
            </p>
          </div>

          <div className="mt-6">
            <img className="w-8 h-8 mx-auto" alt="Scroll" src="/caretcircledown.svg" />
          </div>

          <Button className="w-full mt-6 bg-[#27d09a] rounded-lg font-bold text-white text-base">
            Solicite uma visita
          </Button>
        </section>

        {/* About Section */}
        <section className="w-full px-4 py-10 text-white text-center">
          <h2 className="text-xl font-bold tracking-wide mb-6">SOBRE A <span className="font-extrabold">Sky</span>
              <span className="font-extrabold text-[#63c1f7]">Wash</span></h2>
          <div className="space-y-6 text-[17px]">
            <p>
              A Na interseção entre tecnologia de ponta e excelência operacional, nasce a SkyWash — 
              fruto de uma parceria estratégica com a DroneWash, empresa consolidada em São Paulo, 
              que compartilhou sua experiência técnica e visão inovadora para tornar possível essa 
              transformação em solo brasiliense.
            </p>
            <p>
              Criada pela Preconsult, referência em engenharia há mais de 15 anos no Distrito Federal, 
              a SkyWash representa o encontro entre visão empreendedora, inovação local e 
              compromisso com o futuro.
            </p>
            <p>
              Pioneira em Brasília, é a primeira empresa da capital a integrar drones ao processo de 
              limpeza de fachadas, inaugurando uma nova era na manutenção predial: autônoma, precisa 
              e de alta performance.
            </p>
            <p>
              Unimos engenharia, inovação e cuidado com a estética urbana para oferecer soluções que 
              eliminam os riscos das limpezas convencionais em altura, reduzem significativamente os 
              custos logísticos e elevam o padrão de conservação dos edifícios. 
            </p>
            <p>
              A SkyWash opera com drones de última geração e alto desempenho, transformando a 
              forma como os prédios cuidam da sua imagem arquitetônica. Mais do que limpeza, 
              entregamos uma nova experiência em serviços inteligentes de conservação predial — 
              segura, eficiente, sustentável e tecnologicamente superior.
            </p>
              
          </div>
          <Button className="w-full mt-10 bg-[#27d09a] rounded-lg font-bold text-white text-base">
            Comece sua limpeza de fachada agora
          </Button>
        </section>

        {/* Benefits Section */}
        <section className="w-full px-4 py-10 bg-gradient-to-b from-[#3f5e6f] to-[#5d737e] text-white text-center">
          <h2 className="text-2xl font-bold mb-2">SERVIÇOS PRESTADOS</h2>
          <p className="text-sm mb-6">
            Oferecemos soluções completas para manutenção e limpeza de edifícios comerciais utilizando drones.
          </p>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white text-black p-4 rounded shadow">
                <CardContent className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-[#52a7d733] rounded-full flex items-center justify-center mb-2">
                    <img className="w-6 h-6" alt={benefit.title} src={benefit.icon} />
                  </div>
                  <h3 className="font-bold text-base">{benefit.title}</h3>
                  <p className="text-sm mt-1 text-center px-2">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button className="w-full mt-6 bg-[#27d09a] rounded-lg font-bold text-white text-base">
            Fale com um especialista
          </Button>
        </section>

        {/* Services Section */}
        <section className="w-full px-4 py-10 bg-gradient-to-b from-[#5d737e] to-[#8e9599] text-white text-center">
          <h2 className="text-2xl font-bold mb-2">SERVIÇOS PRESTADOS</h2>
          <p className="text-sm mb-6">
            Oferecemos soluções completas para manutenção e limpeza de edifícios utilizando a tecnologia de drones.
          </p>
          {services.map((service, index) => (
            <div key={index} className="mb-8">
              <div className="w-10 h-10 bg-[#52a7d733] rounded-full flex items-center justify-center mx-auto mb-2">
                <img className="w-6 h-6" alt={service.title} src={service.icon} />
              </div>
              <h3 className="font-bold text-base">{service.title}</h3>
              <p className="text-sm mt-1 px-2">{service.description}</p>
            </div>
          ))}
          <Separator className="w-full h-0.5 bg-white" />
        </section>

        {/* Additional Info Section */}
        <section className="w-full px-4 py-10 bg-gradient-to-b from-[#8e9599] to-[#e0e0e0] text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Informações Adicionais</h2>
          <div className="space-y-6 text-[17px]">
            <p>
              A <span className="font-extrabold">Sky</span>
              <span className="font-extrabold text-[#63c1f7]">Wash</span> é pioneira na limpeza de fachadas com
              tecnologia de drones em Brasília, oferecendo soluções que promovem
              <span className="font-semibold"> segurança</span>, <span className="font-semibold"> economia</span> e
              <span className="font-semibold"> eficiência</span>.
            </p>
            <p>
              Com equipe qualificada e equipamentos de última geração, eliminamos riscos, reduzimos custos e garantimos
              agilidade e sustentabilidade.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full px-4 py-10 bg-gradient-to-b from-[#e0e0e0] to-[#ffffff] text-black">
          <h2 className="text-xl font-bold text-center mb-6">Solicite um Orçamento</h2>
          <p className="text-base text-center mb-4">
            Preencha o formulário abaixo e nossa equipe entrará em contato em até 24h com uma proposta personalizada.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img className="w-6 h-6" src="/lucide-phone-call.svg" alt="Phone" />
              <p className="text-lg">(61) 9 9654-7496</p>
            </div>
            <div className="flex items-center gap-4">
              <img className="w-6 h-6" src="/lucide-mail.svg" alt="Email" />
              <p className="text-lg">marcelloavidos@gmail.com</p>
            </div>
          </div>

          <Card className="bg-[#dde0e5] mt-8">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block font-bold">Nome</label>
                  <Input className="w-full border rounded" placeholder="Insira seu nome completo" />
                </div>
                <div>
                  <label className="block font-bold">Email</label>
                  <Input className="w-full border rounded" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block font-bold">Telefone</label>
                  <Input className="w-full border rounded" placeholder="(00) 9 0000-0000" />
                </div>
                <div>
                  <label className="block font-bold">Endereço</label>
                  <Input className="w-full border rounded" placeholder="Condomínio Meu Lar" />
                </div>
                <div>
                  <label className="block font-bold">Mensagem</label>
                  <Textarea className="w-full border rounded" placeholder="Descreva sua necessidade..." />
                </div>
                <Button className="w-full bg-[#27d09a] rounded font-bold text-white">
                  Enviar solicitação
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="w-full px-4 py-8 bg-[#e0e0e0] text-center text-black">
          <h3 className="font-bold text-xl">Redes Sociais</h3>
          <div className="flex justify-center mt-4 gap-6">
            <div className="w-10 h-10 bg-[#063f5b] rounded-full flex items-center justify-center">
              <img className="w-6 h-6" src="/lucide-instagram.svg" alt="Instagram" />
            </div>
            <div className="w-10 h-10 bg-[#063f5b] rounded-full flex items-center justify-center">
              <img className="w-6 h-6" src="/vector.svg" alt="Facebook" />
            </div>
          </div>
          <Separator className="w-full h-0.5 my-6 bg-black/30" />
          <p className="text-sm text-[#00000080] font-bold">©2025 Preconsult. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
};
