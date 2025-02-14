import {inject, injectable} from 'inversify';
import TYPES from '../../di/Types';
import type {PlayerRepository} from '../repositories/PlayerRepository';
import {Player} from '../entities/Player';

@injectable()
export class GetAllPlayersByTeam {
  constructor(
    @inject(TYPES.PlayerRepository) private playerRepository: PlayerRepository,
  ) {}

  async execute(): Promise<Player[]> {
    return await this.playerRepository.getAllPlayersByTeam();
  }
}
