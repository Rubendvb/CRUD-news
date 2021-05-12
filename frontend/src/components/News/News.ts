export interface Report {
  title: string;
  description: string;
  url: string;
  date: string;
  updateAt?: string | Date;
  createdAt?: string | Date;
  _id?: string;
}
