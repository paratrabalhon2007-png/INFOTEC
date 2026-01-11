
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BusinessHours {
  day: string;
  hours: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
