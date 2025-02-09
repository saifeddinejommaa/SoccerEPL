import storage from "./StorageConfig";

export const saveToCache = async (key: string, value: any) => {
  try {
    await storage.save({
      key,
      data: value,
      expires: null, 
    });
    console.log(`Data saved with key: ${key}`);
  } catch (error) {
    console.error('Error saving data to cache:', error);
  }
};

export const getFromCache = async (key: string) => {
  try {
    const value = await storage.load({ key });
    console.log(`Data retrieved for key: ${key}`, value);
    return value;
  } catch (error) {
    console.error('Error retrieving data from cache:', error);
    return null;
  }
};

export const removeFromCache = async (key: string) => {
  try {
    await storage.remove({ key });
    console.log(`Data removed with key: ${key}`);
  } catch (error) {
    console.error('Error removing data from cache:', error);
  }
};