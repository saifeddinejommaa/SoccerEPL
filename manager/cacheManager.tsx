import {User} from '../domain/entities/user';
import {getFromCache, saveToCache} from '../services/StorageService';

export const saveUser = async (userData: User): Promise<boolean> => {
  try {
    await saveToCache('user', userData);
    return true;
  } catch (error) {
    console.error('Error saving data to cache:', error);
    return false;
  }
};

export const isUserConnected = async (): Promise<boolean> => {
  try {
    const user = await getFromCache('user');
    return user !== null && user !== undefined;
  } catch (error) {
    console.error('Error checking user connection:', error);
    return false;
  }
};
