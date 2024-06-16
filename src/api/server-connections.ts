import { mobintAPI } from './axios-instance';
import { ServerResponse } from '@/types/server-types';

export function getCards(offset: number, limit: number) {
  const data = JSON.stringify({ limit, offset });
  const response = mobintAPI.post<any, ServerResponse>('getAllCompaniesIdeal', data);

  return response;
}
