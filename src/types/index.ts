export interface IPost {
  id: string | number;
  title: string;
  titleTH?: string;
  excerpt: string;
  excerptTH?: string;
  date: string;
  category: string;
  image: string;
  content: string;
  contentTH?: string;
}

export interface IEvent {
  id: string | number;
  title: string;
  titleTH?: string;
  subtitle?: string;
  subtitleTH?: string;
  excerpt?: string;
  description?: string;
  descriptionTH?: string;
  date?: string;
  time?: string;
  day?: string;
  month?: string;
  category: string;
  image: string;
  content?: string;
  contentTH?: string;
}

export interface IService {
  id?: string | number;
  name?: string;
  title?: string;
  desc?: string;
  description?: string;
  image?: string;
  heroImage?: string;
  Icon?: any;
}

export interface IDoctor {
  id: number | string;
  name: string;
  nameTH?: string;
  role: string;
  roleTH?: string;
  image: string;
  expert: string;
  expertTH?: string;
}
