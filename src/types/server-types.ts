import type { CompanyInstance } from '@/stores/companies-store';

export type ServerResponse = {
  data: {
    companies: Array<CompanyInstance>;
    limit: number;
    offset: number;
  };
};
