import { mobintAPI } from './axios-instance';
import { ServerResponse } from '@/types/server-types';

export function getCards(offset: number, limit: number) {
  const response = mobintAPI.post<ServerResponse>('getAllCompaniesError', {
    offset,
    limit,
  });

  return response;
}
