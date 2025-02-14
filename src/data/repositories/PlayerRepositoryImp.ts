import {injectable, inject} from 'inversify';
import {HttpService} from '../services/HttpService';
import TYPES from '../../di/Types';
import {Player} from '../../domain/entities/Player';
import {PlayerRepository} from '../../domain/repositories/PlayerRepository';
import {API_ENDPOINTS} from '../../config';

@injectable()
export class PlayerRepositoryImp implements PlayerRepository {
  constructor(@inject(TYPES.HttpService) private httpService: HttpService) {}

  async getAllPlayersByTeam(): Promise<Player[]> {
    return this.httpService.get<Player[]>(API_ENDPOINTS.GET_PLAYERS);
  }
}
