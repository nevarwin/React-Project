export interface job {
  id: string;
  title: string;
  type: string;
  description: string;
  salary: string;
  location: string;
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
}
