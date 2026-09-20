export type ServiceCategory = 'all' | 'level' | 'mastery' | 'belly' | 'fragment' | 'special';

export interface ServiceItem {
  id: string;
  category: 'level' | 'mastery' | 'belly' | 'fragment' | 'special';
  name: string;
  requirement?: string;
  options: {
    unit: string;
    price: number;
    notes?: string;
  }[];
  popular?: boolean;
}

export interface TestimonialItem {
  id: string;
  title: string;
  tag: string;
  customerNote: string;
  serviceDetail: string;
  paymentMethod: string;
  proofType: 'mastery' | 'level' | 'payment';
  beforeStat?: string;
  afterStat?: string;
  rating: number;
}

export interface SecurityChecklist {
  step: number;
  title: string;
  desc: string;
  criticalTip: string;
  icon: string;
}
