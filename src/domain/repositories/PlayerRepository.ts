import {Player} from '../entities/Player';

export interface PlayerRepository {
  getAllPlayersByTeam(): Promise<Player[]>;
}
