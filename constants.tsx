
import React from 'react';
import { 
  Smartphone, 
  Cpu, 
  Layers, 
  Zap, 
  Droplets, 
  Wifi
} from 'lucide-react';

export const WHATSAPP_LINK = "https://wa.me/557998592854?text=Olá%2C%20vim%20pelo%20site%20da%20JK%20Infotech%20e%20gostaria%20de%20agendar%20um%20orçamento.";

export const BRANDS = [
  "iPhone", "Samsung", "Xiaomi", "Motorola", "LG", "Asus", "Huawei", "Realme"
];

export const SERVICES = [
  {
    id: '1',
    title: 'Troca de Vidro',
    description: 'Preserve sua tela original trocando apenas o vidro quebrado com tecnologia de ponta para todas as marcas.',
    icon: <Layers className="w-8 h-8 text-orange-500" />
  },
  {
    id: '2',
    title: 'Reparo de Placas',
    description: 'Consertos avançados em micro-componentes, recuperação de trilhas e soldas BGA em iPhone e Android.',
    icon: <Cpu className="w-8 h-8 text-orange-500" />
  },
  {
    id: '3',
    title: 'Danos por Água',
    description: 'Limpeza química e desoxidação profissional para recuperar aparelhos molhados de qualquer modelo.',
    icon: <Droplets className="w-8 h-8 text-orange-500" />
  },
  {
    id: '4',
    title: 'Troca de Bateria',
    description: 'Baterias de alta qualidade com garantia para devolver a autonomia ao seu smartphone.',
    icon: <Zap className="w-8 h-8 text-orange-500" />
  },
  {
    id: '5',
    title: 'Câmeras e Sensores',
    description: 'Reparo de foco, troca de lentes e substituição de sensores biométricos (FaceID/TouchID).',
    icon: <Smartphone className="w-8 h-8 text-orange-500" />
  },
  {
    id: '6',
    title: 'Conectividade',
    description: 'Soluções para problemas de Wi-Fi, Bluetooth e sinal de operadora em qualquer dispositivo.',
    icon: <Wifi className="w-8 h-8 text-orange-500" />
  }
];

export const STATS = [
  { label: 'Anos de Experiência', value: '10+' },
  { label: 'Aparelhos Reparados', value: '15k+' },
  { label: 'Técnicos Certificados', value: '05' },
  { label: 'Clientes Satisfeitos', value: '12k+' }
];

export const REPAIR_STEPS = [
  {
    step: '01',
    title: 'Diagnóstico Gratuito',
    description: 'Traga seu aparelho para uma avaliação técnica detalhada sem compromisso.'
  },
  {
    step: '02',
    title: 'Orçamento Rápido',
    description: 'Aprovamos o valor e o prazo com você antes de iniciar qualquer serviço.'
  },
  {
    step: '03',
    title: 'Reparo Especializado',
    description: 'Nossos especialistas realizam o conserto utilizando peças premium.'
  }
];

export const HOURS = [
  { day: 'Segunda a Sexta', hours: '08:00 - 12:00 / 14:00 - 17:00' },
  { day: 'Sábado', hours: '08:00 - 12:00' },
  { day: 'Domingo', hours: 'Fechado' }
];

export const FAQS = [
  {
    question: "Quanto tempo demora um reparo de tela?",
    answer: "A maioria das trocas de tela ou vidro são concluídas no mesmo dia, geralmente entre 2 a 4 horas, dependendo da demanda."
  },
  {
    question: "Vocês dão garantia nos serviços?",
    answer: "Sim! Todos os nossos reparos possuem garantia de 90 dias contra defeitos de fabricação das peças ou falhas na execução."
  },
  {
    question: "É seguro enviar meu iPhone para reparo de placa?",
    answer: "Totalmente. Somos especialistas em microssoldagem e reparos avançados em iPhones e Androids, com laboratório equipado com o que há de mais moderno."
  }
];
