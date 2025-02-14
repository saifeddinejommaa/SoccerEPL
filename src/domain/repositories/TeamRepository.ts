import {Team} from '../entities/Team';

export interface TeamRepository {
  getAllTeams(): Promise<Team[]>;

  getTeamById(): Promise<Team>;
}
