import {Container} from 'inversify';
import {TeamRepository} from '../domain/repositories/TeamRepository';
import {TeamRepositoryImp} from '../data/repositories/TeamRepositoryImp';
import {PlayerRepository} from '../domain/repositories/PlayerRepository';
import {PlayerRepositoryImp} from '../data/repositories/PlayerRepositoryImp';
import TYPES from './Types';
import {CacheManager} from '../manager/CacheManager';
import {GetAllPlayersByTeam} from '../domain/useCases/GetAllPlayersByTeam';
import {GetAllTeams} from '../domain/useCases/GetAllTeams';
import {HttpService} from '../data/services/HttpService';
import { Authenticate } from '../domain/useCases/Authenticate';

const container = new Container();

container.bind<TeamRepository>(TYPES.TeamRepository).to(TeamRepositoryImp);

container
  .bind<PlayerRepository>(TYPES.PlayerRepository)
  .to(PlayerRepositoryImp);

container.bind<CacheManager>(TYPES.CacheManager).to(CacheManager);

container
  .bind<GetAllPlayersByTeam>(TYPES.GetPlayersByTeam)
  .to(GetAllPlayersByTeam);

container.bind<GetAllTeams>(TYPES.GetAllTeams).to(GetAllTeams);

container.bind<HttpService>(TYPES.HttpService).to(HttpService);

container.bind<Authenticate>(TYPES.Authenticate).to(Authenticate)

export {container};
