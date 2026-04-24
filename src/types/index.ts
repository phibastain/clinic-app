export interface IPost {
  id: string | number;
  title: string;
  titleTH?: string;
  titleAR?: string;
  excerpt: string;
  excerptTH?: string;
  excerptAR?: string;
  date: string;
  category: string;
  image: string;
  content: string;
  contentTH?: string;
  contentAR?: string;
}

export interface IEvent {
  id: string | number;
  slug?: string;
  title: string;
  titleTH?: string;
  titleAR?: string;
  titleRU?: string;
  subtitle?: string;
  subtitleTH?: string;
  subtitleAR?: string;
  subtitleRU?: string;
  excerpt?: string;
  description?: string;
  descriptionTH?: string;
  descriptionAR?: string;
  descriptionRU?: string;
  date?: string;
  time?: string;
  day?: string;
  month?: string;
  category: string;
  image: string;
  content?: string;
  contentTH?: string;
  contentAR?: string;
  contentRU?: string;
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
  nameAR?: string;
  role: string;
  roleTH?: string;
  roleAR?: string;
  image: string;
  expert: string;
  expertTH?: string;
  expertAR?: string;
}
