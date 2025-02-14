import {useInjection} from 'inversify-react';
import {CacheManager} from '../../manager/CacheManager';
import TYPES from '../../di/Types';
import {inject} from 'inversify';
import {User} from '../entities/User';
import {injectable} from 'inversify-props';

@injectable()
export class Authenticate {
  constructor(@inject(TYPES.CacheManager) private cacheManager: CacheManager) {}

  async execute(): Promise<boolean> {
    const timeout = setTimeout(async () => {
      return await this.cacheManager.saveUser(
        new User(
          1,
          'JOMMAA',
          'sejomma@gmail.com',
          '28a33dc5-4930-4938-918d-37a09e4f7a64',
        ),
      );
    }, 2000);

    return true;
  }
}
