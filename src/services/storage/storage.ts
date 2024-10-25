import {MMKVStorage} from './implementation/MMKVStorage';

export interface Storage {
  getItem: <T = unknown>(key: string) => Promise<T | null>;
  setItem: <T>(key: string, value: T) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

// export const storage: Storage = asyncStorage;
export let storage: Storage = MMKVStorage;

export function initializeStorage(storageImpl: Storage) {
  storage = storageImpl;
}
