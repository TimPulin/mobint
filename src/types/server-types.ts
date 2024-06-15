import type { CompanyInstance } from '@/stores/companies-store';

export type ServerResponse = {
  companies: Array<CompanyInstance>;
  limit: number;
  offset: number;
};
