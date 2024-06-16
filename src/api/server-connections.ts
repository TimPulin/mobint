import { mobintAPI } from './axios-instance';
import { ServerResponse } from '@/types/server-types';

export function getCards(offset: number, limit: number = 10) {
  const response = mobintAPI.post<ServerResponse>('getAllCompaniesIdeal', {
    offset,
    limit,
  });

  return response;
}
