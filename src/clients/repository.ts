import type { ClientConfig, ClientStatus } from './schema';
import { ClientConfigSchema } from './schema';

export interface IClientRepository {
  getBySlug(slug: string): Promise<ClientConfig | null>;
  getAll(filter?: { status?: ClientStatus }): Promise<ClientConfig[]>;
  exists(slug: string): Promise<boolean>;
}

export class FileSystemClientRepository implements IClientRepository {
  private getLoadedClients(): ClientConfig[] {
    const modules = import.meta.glob<{ default: ClientConfig }>('./data/*.ts', { eager: true });
    const clients: ClientConfig[] = [];

    for (const path in modules) {
      const mod = modules[path];
      if (mod && mod.default) {
        try {
          const validated = ClientConfigSchema.parse(mod.default);
          clients.push(validated);
        } catch (err: any) {
          console.error(`[ERRO] Falha ao validar cliente em ${path}:`, err.message);
        }
      }
    }
    return clients;
  }

  async getBySlug(slug: string): Promise<ClientConfig | null> {
    const clients = this.getLoadedClients();
    const found = clients.find(c => c.slug === slug);
    return found || null;
  }

  async getAll(filter?: { status?: ClientStatus }): Promise<ClientConfig[]> {
    let clients = this.getLoadedClients();
    if (filter && filter.status) {
      clients = clients.filter(c => c.status === filter.status);
    }
    return clients;
  }

  async exists(slug: string): Promise<boolean> {
    const client = await this.getBySlug(slug);
    return !!client;
  }
}

// Singleton
let currentRepo: IClientRepository | null = null;

export function getClientRepository(): IClientRepository {
  if (!currentRepo) {
    currentRepo = new FileSystemClientRepository();
  }
  return currentRepo;
}