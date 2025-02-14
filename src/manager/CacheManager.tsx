import {injectable} from 'inversify';
import {User} from '../domain/entities/User';
import {getFromCache, saveToCache} from '../services/StorageService';

@injectable()
export class CacheManager {
  private readonly CACHE_KEY = 'user';

  // Save user data to cache
  async saveUser(userData: User): Promise<boolean> {
    try {
      await saveToCache(this.CACHE_KEY, userData);
      return true;
    } catch (error) {
      console.error('Error saving data to cache:', error);
      return false;
    }
  }

  // Check if the user is connected by verifying cache presence
  async isUserConnected(): Promise<boolean> {
    try {
      const user = await getFromCache(this.CACHE_KEY);
      return user !== null && user !== undefined;
    } catch (error) {
      console.error('Error checking user connection:', error);
      return false;
    }
  }
}
