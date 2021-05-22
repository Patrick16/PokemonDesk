export interface IStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

export interface IPokemon {
  name_clean: string;
  abilities: string[];
  stats: IStats;
  types: string[];
  img: string;
  name: string;
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
}

export interface IApiPokemons {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: IPokemon[];
}

export interface IServer {
  protocol: string;
  host: string;
}

export interface IUri {
  pathname: string;
}

export interface IAnyEndpoint {
  [s: string]: IEndpoint;
}

export interface IEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  uri: IUri;
}

export interface IClient {
  server: IServer;
  endpoint: IAnyEndpoint;
}

export interface IUrlConfig {
  client: IClient;
}
