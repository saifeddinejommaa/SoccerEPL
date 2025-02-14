import {inject, injectable} from 'inversify';
import {Team} from '../../domain/entities/Team';
import {TeamRepository} from '../../domain/repositories/TeamRepository';
import TYPES from '../../di/Types';
import {HttpService} from '../services/HttpService';
import {API_ENDPOINTS} from '../../config';

@injectable()
export class TeamRepositoryImp implements TeamRepository {
  constructor(@inject(TYPES.HttpService) private httpService: HttpService) {}

  async getAllTeams(): Promise<Team[]> {
    return this.httpService.get<Team[]>(API_ENDPOINTS.GET_TEAMS);
  }

  async getTeamById(): Promise<Team> {
    return this.httpService.get<Team>(API_ENDPOINTS.GET_TEAMS);
  }
}
