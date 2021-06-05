import { IUrlConfig } from '../utils/interfaces';

export enum configEndpoint{
  getPokemons='getPokemons',
  getPokemonTypes='getPokemonTypes'
}

export const config: IUrlConfig = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        }
      },
      getPokemonTypes: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/types',
        },
      },
    },
  },
};
export default config;
