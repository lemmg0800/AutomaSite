import { getClientRepository } from './repository';
import type { ClientConfig } from './schema';

export async function getPublishedClients(): Promise<ClientConfig[]> {
  const repo = getClientRepository();
  const all = await repo.getAll();
  return all.filter(c => c.status === 'published' || c.status === 'ativo');
}

export async function getAllClients(): Promise<ClientConfig[]> {
  const repo = getClientRepository();
  return repo.getAll();
}

export async function resolveClient(slug: string): Promise<ClientConfig | null> {
  const repo = getClientRepository();
  return repo.getBySlug(slug);
}