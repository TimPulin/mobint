import { mobintAPI } from './axios-instance';
import { ServerResponse } from '@/types/server-types';

export function getCards(offset: number, limit: number) {
  const response = mobintAPI.post<any, ServerResponse>('getAllCompaniesIdeal', {
    offset,
    limit,
  });

  return response;
}
