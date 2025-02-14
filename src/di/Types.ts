const TYPES = {
  HttpService: Symbol.for('HttpService'),

  PlayerRepository: Symbol.for('PlayerRepository'),

  TeamRepository: Symbol.for('TeamRepository'),

  GetPlayersByTeam: Symbol.for('GetPlayersByTeam'),

  GetAllTeams: Symbol.for('GetAllTeams'),

  CacheManager: Symbol.for('CacheManager'),

  Authenticate: Symbol.for("Authenticate")
};

export default TYPES;
