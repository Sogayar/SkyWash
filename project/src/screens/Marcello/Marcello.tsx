import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import { Textarea } from "../../components/ui/textarea";

export const Marcello = (): JSX.Element => {
  // Services data
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

  // Benefits data
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
    {/* Alteração 1 
    <div className="bg-[#3f5e6f] flex flex-row justify-center w-full">
      <div className="bg-[#3f5e6f] overflow-hidden w-[393px] relative">
      */}
    <div className="bg-[#3f5e6f] flex flex-row justify-center w-full">
      <div className="bg-[#3f5e6f] overflow-hidden w-full max-w-[393px] mx-auto relative">
        {/* Header */}
        <header className="relative w-full">
          <div className="w-[393px] h-24 bg-[#021b36]">
            <div className="absolute top-[67px] left-[124px] font-['Montserrat',Helvetica] text-2xl">
              <span className="text-white">Sky</span>
              <span className="text-[#63c1f7]">Wash</span>
            </div>
            <div className="absolute top-[69px] right-5">
              <img className="w-8 h-8" alt="Menu" src="/menu.svg" />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative w-[393px] h-[817px] [background:linear-gradient(181deg,rgba(2,27,54,1)_62%,rgba(5,61,92,1)_100%)]">
          <div className="relative flex justify-center">
            <img
              className="w-[346px] h-[310px] mt-[38px] object-cover"
              alt="Drone cleaning facade"
              src="/snaptik-app-7390345030453513505-ezgif-com-optimize-1.png"
            />
            <img
              className="absolute h-[311px] right-0 top-[36px]"
              alt="Line"
              src="/line-11.svg"
            />
            <img
              className="absolute h-[311px] left-[50px] top-[37px]"
              alt="Line"
              src="/line-11.svg"
            />
            <img
              className="absolute w-[348px] top-[36px] left-[50px]"
              alt="Line"
              src="/line-10.svg"
            />
            <img
              className="absolute w-[348px] top-[346px] left-[52px]"
              alt="Line"
              src="/line-10.svg"
            />
          </div>

          <div className="flex justify-between px-7 mt-4">
            <img className="w-6 h-6" alt="Caret left" src="/caretleft.svg" />
            <img className="w-6 h-6" alt="Caret right" src="/caretright.svg" />
          </div>

          <div className="w-[350px] mt-8 mx-auto font-['Montserrat',Helvetica] text-center">
            <h1 className="text-[32px] leading-normal">
              <span className="text-white tracking-[0]">
                Limpeza de fachadas com{" "}
              </span>
              <span className="font-semibold text-[#63c1f7] tracking-[0]">
                tecnologia
              </span>
              <span className="text-white tracking-[0]"> de </span>
              <span className="font-semibold text-[#63c1f7] tracking-[0]">
                drones
              </span>
            </h1>
            <p className="text-xl text-white tracking-[0.20px] mt-8">
              Mais segurança, menos custos e eficiência máxima para seu edifício
            </p>
          </div>

          <div className="flex justify-center mt-16">
            <img
              className="w-12 h-12"
              alt="Caret circle down"
              src="/caretcircledown.svg"
            />
          </div>

          <Button className="w-[364px] h-10 mt-8 mx-auto bg-[#27d09a] rounded-[10px] font-bold text-white text-base">
            Solicite um orçamento
          </Button>
        </section>

        {/* About Company Section */}
        <section className="w-[393px]">
          <h2 className="w-full h-[102px] pt-10 font-['Montserrat',Helvetica] font-bold text-white text-xl text-center tracking-[2.00px]">
            SOBRE A EMPRESA
          </h2>

          <div className="w-[303px] mx-auto font-['Montserrat',Helvetica] text-[17px] text-center">
            <p className="text-white tracking-[0.29px]">
              A <span className="font-extrabold">Sky</span>
              <span className="font-extrabold text-[#63c1f7]">Wash</span> é uma
              parceria da Presconsult Engenharia, empresa com mais de 15 anos de
              atuação em consultoria do Distrito Federal e a Drone Wash, empresa
              paulista com comprovada experiência na área inovadora de limpezas
              especiais com utilização de drone.
            </p>
            <p className="text-white tracking-[0.29px] mt-6">
              Buscamos com essa união trazer os benefícios e a segurança deste
              novo processo de limpeza para Brasília!
            </p>
            <p className="text-white tracking-[0.29px] mt-6">
              Entre em contato e conheça mais a respeito deste serviço,
              estaremos de prontidão para melhor atendê-lo
            </p>
          </div>

          <Button className="w-[366px] h-10 mt-16 mx-auto bg-[#27d09a] rounded-lg font-bold text-white text-base">
            Comece sua limpeza de fachada agora
          </Button>
        </section>

        {/* Benefits Section */}
        <section className="mt-8 [background:linear-gradient(177deg,rgba(63,94,111,1)_42%,rgba(93,115,126,1)_100%)]">
          <div className="w-[393px] h-[102px] font-['Montserrat',Helvetica] font-bold text-white text-2xl text-center pt-8">
            SERVIÇOS PRESTADOS
          </div>

          <div className="w-[277px] mx-auto font-['Montserrat',Helvetica] font-normal text-white text-sm text-center">
            Oferecemos soluções completas para manutenção e limpeza de edifícios
            comerciais utilizando tecnologia de drones.
          </div>

          <Card className="w-[371px] mx-auto mt-8 bg-[#63c1f7fa] rounded-lg shadow-none">
            <CardContent className="p-2.5">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="w-[350px] h-[131px] mb-4 bg-white rounded-[8.78px] shadow-[0px_4px_4px_#00000040]"
                >
                  <CardContent className="p-0 flex flex-col items-center justify-center h-full">
                    <div className="w-10 h-10 rounded-[20px] bg-[#52a7d733] flex items-center justify-center">
                      <img
                        className="w-[27px] h-[27px]"
                        alt={benefit.title}
                        src={benefit.icon}
                      />
                    </div>
                    <h3 className="font-['Montserrat',Helvetica] font-bold text-black text-base text-center mt-1">
                      {benefit.title}
                    </h3>
                    <p className="w-[338px] font-['Montserrat',Helvetica] font-normal text-black text-[15px] text-center mt-1">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>

          <Button className="w-[364px] h-10 mt-4 mx-auto bg-[#27d09a] rounded-lg font-bold text-white text-base">
            Fale com um especialista
          </Button>
        </section>

        {/* Services Section */}
        <section className="[background:linear-gradient(178deg,rgba(93,115,126,1)_66%,rgba(142,149,153,1)_100%)]">
          {services.map((service, index) => (
            <div key={index} className="mt-8">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-[#52a7d733] rounded-[20px] flex items-center justify-center">
                  <img
                    className="w-6 h-6"
                    alt={service.title}
                    src={service.icon}
                  />
                </div>
                <h3 className="w-[390px] font-['Montserrat',Helvetica] font-bold text-white text-[15px] text-center mt-2">
                  {service.title}
                </h3>
                <p className="w-[277px] font-['Montserrat',Helvetica] font-normal text-white text-sm text-center mt-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

          <Separator className="w-[393px] h-0.5 mt-16 bg-white" />
        </section>

        {/* Additional Information Section */}
        <section className="[background:linear-gradient(178deg,rgba(93,115,126,1)_66%,rgba(142,149,153,1)_100%)]">
          <h2 className="w-[394px] font-['Montserrat',Helvetica] font-bold text-white text-2xl text-center pt-8">
            Informações Adicionais
          </h2>

          <div className="w-[332px] mx-auto mt-4 font-['Montserrat',Helvetica] text-[17px] text-center">
            <p className="text-white tracking-[0.29px]">
              A <span className="font-extrabold">Sky</span>
              <span className="font-extrabold text-[#63c1f7]">Wash</span> é
              pioneira na limpeza de fachadas com tecnologia de drones em
              Brasília, oferecendo soluções inovadoras que promovem{" "}
              <span className="font-semibold">segurança</span>,
              <span className="font-semibold"> economia</span> e{" "}
              <span className="font-semibold">eficiência</span> para seus
              clientes.
            </p>
            <p className="text-white tracking-[0.29px] mt-8">
              Com uma equipe altamente qualificada e equipamentos de última
              geração, transformamos a manutenção de edifícios, eliminando
              riscos e reduzindo custos operacionais, garantindo um serviço mais
              ágil e sustentável.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section>
          <Separator className="w-[393px] h-0.5 bg-white" />

          <div className="w-[391px] text-center mt-4">
            <h2 className="font-['Montserrat',Helvetica] font-bold text-white text-2xl tracking-[0.24px]">
              Benefícios
            </h2>

            <p className="w-[251px] mx-auto mt-4 font-['Montserrat',Helvetica] text-xl tracking-[0.20px]">
              <span className="text-white tracking-[0.04px]">
                Bem vindo ao{" "}
              </span>
              <span className="font-semibold text-[#52a7d7] tracking-[0.04px]">
                Futuro
              </span>
            </p>
          </div>

          <div className="w-[348px] mx-auto mt-8 font-['Montserrat',Helvetica] text-white text-base tracking-[0.16px]">
            <p>
              Já imaginou realizar tarefas de limpeza e manutenção de forma mais
              segura, rápida e econômica?
            </p>
            <p className="mt-4">
              Com a tecnologia de drones, isso é possível! Esqueça os riscos e
              desafios dos métodos tradicionais, como andaimes e acesso por
              corda.
            </p>
            <p className="mt-4">
              Com os drones, você ganha eficiência sem comprometer a segurança.
            </p>
          </div>

          <div
            className="w-[328px] h-[246px] mx-auto mt-8 bg-cover"
            style={{ backgroundImage: "url('..//drone.png')" }}
          />

          <Separator className="w-[393px] h-0.5 mt-8 bg-white" />
        </section>

        {/* Contact Form Section */}
        <section className="[background:linear-gradient(180deg,rgba(142,149,153,1)_60%,rgba(224,224,224,1)_100%)]">
          <h2 className="w-[346px] mx-auto pt-8 font-['Montserrat',Helvetica] font-bold text-white text-xl">
            Solicite um Orçamento
          </h2>

          <div className="w-[334px] mx-auto mt-4 font-['Montserrat',Helvetica] text-white text-base">
            <p>
              Preencha o formulário ao lado e nossa equipe entrará em contato em
              até 24 horas com uma proposta personalizada para seu edifício
              <span className="text-xl">.</span>
            </p>
          </div>

          <div className="flex items-center mt-8">
            <div className="w-10 h-10 ml-[22px] bg-[#ffffff33] rounded-[20px] flex items-center justify-center">
              <img
                className="w-6 h-6"
                alt="Phone"
                src="/lucide-phone-call.svg"
              />
            </div>
            <p className="ml-4 font-['Montserrat',Helvetica] text-white text-xl tracking-[1.00px]">
              (61) 9 9654-7496
            </p>
          </div>

          <div className="flex items-center mt-4">
            <div className="w-10 h-10 ml-[22px] bg-[#ffffff33] rounded-[20px] flex items-center justify-center">
              <img className="w-6 h-6" alt="Email" src="/lucide-mail.svg" />
            </div>
            <p className="ml-4 font-['Montserrat',Helvetica] text-white text-xl">
              marcelloavidos@gmail.com
            </p>
          </div>

          <Card className="w-[355px] mx-auto mt-8 bg-[#dde0e5] rounded-lg">
            <CardContent className="p-6">
              <form>
                <div className="mb-4">
                  <label className="font-['Montserrat',Helvetica] text-black text-xl mb-1 block">
                    Nome
                  </label>
                  <Input
                    className="w-full h-[33px] rounded-lg border border-solid border-[#00000033]"
                    placeholder="Insira seu nome completo"
                  />
                </div>

                <div className="mb-4">
                  <label className="font-['Montserrat',Helvetica] text-black text-xl mb-1 block">
                    Email
                  </label>
                  <Input
                    className="w-full h-[33px] rounded-lg border border-solid border-[#00000033]"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="mb-4">
                  <label className="font-['Montserrat',Helvetica] text-black text-xl mb-1 block">
                    Telefone
                  </label>
                  <Input
                    className="w-full h-[33px] rounded-lg border border-solid border-[#00000033]"
                    placeholder="(00) 9 0000-0000"
                  />
                </div>

                <div className="mb-4">
                  <label className="font-['Montserrat',Helvetica] text-black text-xl mb-1 block">
                    Endereço
                  </label>
                  <Input
                    className="w-full h-[33px] rounded-lg border border-solid border-[#00000033]"
                    placeholder="Condomínio Meu Lar"
                  />
                </div>

                <div className="mb-4">
                  <label className="font-['Montserrat',Helvetica] text-black text-xl mb-1 block">
                    Mensagem
                  </label>
                  <Textarea
                    className="w-full h-[118px] rounded-lg border border-solid border-[#00000033]"
                    placeholder="Descreva sua necessidade..."
                  />
                </div>

                <Button className="w-full h-[41px] bg-[#27d09a] rounded-lg font-bold text-white text-base">
                  Enviar solicitação
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Footer Section */}
        <footer className="bg-[#e0e0e0] pt-8 pb-4">
          <h3 className="font-['Montserrat',Helvetica] font-bold text-black text-xl text-center">
            Redes Sociais
          </h3>

          <div className="flex justify-center mt-4 space-x-8">
            <div className="w-10 h-10 bg-[#063f5b] rounded-[20px] flex items-center justify-center">
              <img
                className="w-6 h-6"
                alt="Instagram"
                src="/lucide-instagram.svg"
              />
            </div>
            <div className="w-10 h-10 bg-[#063f5b] rounded-[20px] flex items-center justify-center">
              <img className="w-6 h-6" alt="Facebook" src="/vector.svg" />
            </div>
          </div>

          <Separator className="w-[296px] h-0.5 mx-auto mt-8" />

          <p className="font-['Montserrat',Helvetica] font-bold text-[#00000080] text-sm text-center mt-2">
            ©2025 Preconsult. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
};
