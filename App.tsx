
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight, 
  ChevronRight,
  Instagram,
  MessageCircle
} from 'lucide-react';
import { SERVICES, STATS, REPAIR_STEPS, HOURS, FAQS, WHATSAPP_LINK, BRANDS } from './constants.tsx';

const LOGO_URL = "https://i.imgur.com/u0PSdAo.jpeg";
const INSTAGRAM_URL = "https://www.instagram.com/jkinfotech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen selection:bg-orange-500 selection:text-white">
      {/* Header */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src={LOGO_URL} 
              alt="JK Infotech Logo" 
              className="w-10 h-10 rounded-xl object-cover border border-white/10"
            />
            <span className="text-xl font-bold font-outfit tracking-tight">INFOTECH</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            {['Início', 'Serviços', 'Sobre', 'Contato'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-white transition-colors uppercase tracking-widest text-[11px]"
              >
                {item}
              </button>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-[12px] uppercase tracking-wider hover:bg-orange-500 hover:text-white transition-all"
            >
              Orçamento Online
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/5 p-8 flex flex-col gap-6 md:hidden">
            {['Início', 'Serviços', 'Sobre', 'Contato'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-2xl font-semibold text-left"
              >
                {item}
              </button>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-primary text-white p-4 rounded-xl text-center font-bold"
            >
              WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="início" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-orange-500/10 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 glass text-[12px] font-medium tracking-widest text-orange-500 uppercase">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Assistência Técnica Multi-marcas
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-outfit leading-[1.1]">
              iPhone, Samsung <br />
              <span className="text-gradient">& muito mais.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
              Especialistas em reparos avançados de placas e troca de vidros para <b>iPhone, Samsung, Xiaomi, Motorola</b> e todas as principais marcas do mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-orange-500 hover:text-white transition-all group"
              >
                Agendar Reparo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => scrollToSection('serviços')}
                className="px-8 py-4 rounded-full border border-white/10 glass font-bold hover:bg-white/5 transition-all"
              >
                Ver Serviços
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-orange-500/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=1200&auto=format&fit=crop" 
              alt="Reparo de Smartphone" 
              className="relative rounded-[2rem] w-full aspect-[4/5] object-cover border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Brands Marquee */}
      <section className="py-12 bg-zinc-950 overflow-hidden border-y border-white/5">
        <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span key={i} className="text-3xl md:text-4xl font-black font-outfit opacity-20 hover:opacity-100 transition-opacity cursor-default px-8">
              {brand}
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-24 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm">Nossas Especialidades</h2>
              <h3 className="text-4xl md:text-5xl font-bold font-outfit">Suporte Completo para <br /> seu Smartphone.</h3>
            </div>
            <p className="text-gray-400 max-w-md text-lg">
              Trabalhamos com toda a linha iPhone, Samsung, Xiaomi e Motorola. Temos as ferramentas e o conhecimento para qualquer desafio técnico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="glass p-8 rounded-[2rem] hover:border-orange-500/50 transition-all group flex flex-col justify-between h-full">
                <div>
                  <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-orange-500/10 transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                  <p className="text-gray-400 leading-relaxed mb-8">{service.description}</p>
                </div>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-orange-500 hover:text-orange-400">
                  Saiba Mais <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center md:text-left">
                <p className="text-4xl md:text-5xl font-bold font-outfit mb-2">{stat.value}</p>
                <p className="text-gray-500 uppercase tracking-widest text-[11px] font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 -z-10 w-1/3 h-full bg-orange-500/5 blur-[100px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm">Como Trabalhamos</h2>
            <h3 className="text-4xl font-bold font-outfit">3 Passos Simples para o Reparo</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>
            
            {REPAIR_STEPS.map((step, idx) => (
              <div key={idx} className="text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mx-auto relative">
                  <span className="text-2xl font-bold text-gradient">{step.step}</span>
                  {idx < 2 && (
                    <div className="md:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-white/10 to-transparent"></div>
                  )}
                </div>
                <h4 className="text-2xl font-bold">{step.title}</h4>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=800&auto=format&fit=crop" alt="Repair Lab" className="rounded-3xl aspect-square object-cover" />
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" alt="Electronics" className="rounded-3xl aspect-square object-cover mt-8" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass p-6 rounded-2xl text-center min-w-[180px]">
              <p className="text-orange-500 font-bold text-3xl">99%</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Taxa de Sucesso em Placas</p>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm">Nossa História</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-outfit leading-tight">Excelência Técnica em <br /> Cada Microssolda.</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              A JK Infotech nasceu com o propósito de oferecer serviços de alta complexidade que as assistências comuns não realizam. Somos especializados em recuperação de placas lógicas e troca de vidros preservando a originalidade do LCD em aparelhos <b>iPhone, Samsung, Xiaomi</b> e muitos outros.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-1 bg-orange-500 rounded-full text-white"><ArrowRight size={12} /></div>
                <div>
                  <p className="font-bold">Laboratório Avançado</p>
                  <p className="text-sm text-gray-500">Equipado com microscópios de precisão e insumos de primeira linha.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 p-1 bg-orange-500 rounded-full text-white"><ArrowRight size={12} /></div>
                <div>
                  <p className="font-bold">Especialistas em Todas as Marcas</p>
                  <p className="text-sm text-gray-500">Constantemente atualizados com as novas tecnologias Apple, Samsung, Xiaomi e Android em geral.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm">Dúvidas Frequentes</h2>
            <h3 className="text-4xl font-bold font-outfit">Perguntas comuns</h3>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group glass rounded-2xl overflow-hidden border border-white/5 transition-all">
                <summary className="p-6 cursor-pointer list-none flex justify-between items-center hover:bg-white/5 transition-colors">
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <ChevronRight size={20} className="group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section id="contato" className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">Onde Estamos</h2>
              <h3 className="text-4xl font-bold font-outfit mb-8">Visite nossa loja física.</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                    <MapPin />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Endereço</p>
                    <p className="text-gray-400">Av. Simão Dias, Poço Verde - SE, 49490-000</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                    <Clock />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Horário de Funcionamento</p>
                    {HOURS.map((h, i) => (
                      <div key={i} className="text-gray-400 text-sm flex justify-between w-full max-w-xs">
                        <span className="font-medium">{h.day}:</span>
                        <span className="text-right">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                    <Phone />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Contato Direto</p>
                    <p className="text-gray-400">(79) 98592-854</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass p-8 rounded-[2rem] space-y-6">
              <h4 className="text-2xl font-bold">Solicite seu Orçamento Grátis</h4>
              <p className="text-gray-400">Clique no botão abaixo para conversar com um técnico agora mesmo pelo WhatsApp.</p>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-primary p-4 rounded-xl flex items-center justify-center gap-2 font-bold hover:scale-[1.02] transition-transform"
              >
                <MessageCircle size={24} />
                Iniciar Conversa no WhatsApp
              </a>
            </div>
          </div>
          
          <div className="h-[400px] lg:h-full min-h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all">
            <div className="w-full h-full bg-zinc-900 relative flex items-center justify-center">
              <div className="text-center space-y-4 px-8">
                <MapPin size={48} className="text-orange-500 mx-auto" />
                <p className="font-bold text-xl uppercase tracking-widest">Poço Verde, SE</p>
                <p className="text-gray-500">Localizados no centro para melhor te atender.</p>
                <a 
                  href="https://www.google.com/maps/search/Av.+Simão+Dias,+Poço+Verde+49490+000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 border border-white/20 rounded-full hover:bg-white/5 transition-colors"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img 
              src={LOGO_URL} 
              alt="JK Infotech Logo" 
              className="w-10 h-10 rounded-xl object-cover border border-white/10"
            />
            <span className="text-lg font-bold font-outfit tracking-tight">JK INFOTECH</span>
          </div>
          
          <div className="flex gap-6">
            <a 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 glass rounded-full hover:text-orange-500 transition-colors"
              title="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} JK Infotech. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
