import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';
import { IApiPokemons } from './interfaces';

async function req(endpoint: string): Promise<IApiPokemons> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint));
  return fetch(uri).then((res) => res.json());
}
export default req;
