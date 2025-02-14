import {inject, injectable} from 'inversify';
import TYPES from '../../di/Types';
import type {TeamRepository} from '../repositories/TeamRepository';
import {Team} from '../entities/Team';

@injectable()
export class GetAllTeams {
  constructor(
    @inject(TYPES.TeamRepository) private teamRepository: TeamRepository,
  ) {}

  async execute(): Promise<Team[]> {
    return await this.teamRepository.getAllTeams();
  }
}
