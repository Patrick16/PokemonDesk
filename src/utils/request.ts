import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';
import { IApiPokemons, IQuery } from './interfaces';

async function req(endpoint: string, query?: IQuery): Promise<IApiPokemons> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
  return fetch(uri).then((res) => res.json());
}
export default req;
