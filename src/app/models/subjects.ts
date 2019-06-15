export interface Subject {
  id: string;
  userId: string;
  title: string;
  subtitle?: string;
  summary: string;
  categories?: string[];
  dateCreated: string;
  dateModified: string;
}
