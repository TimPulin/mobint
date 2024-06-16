import type { CompanyInstance } from '@/stores/companies-store';

export type ServerResponse = {
  companies: Array<CompanyInstance>;
  limit: number;
  offset: number;
};

export type ServerError = {
  code: string;
  message: string;
  response: any;
};
