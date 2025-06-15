export interface FooterLink {
    label: string;
    href: string;
  }
  
  export interface FooterSection {
    title: string;
    links: FooterLink[];
  }
  
  export interface PaymentMethod {
    name: string;
    bgColor: string;
    textColor: string;
    displayText: string;
    width?: string;
  } 