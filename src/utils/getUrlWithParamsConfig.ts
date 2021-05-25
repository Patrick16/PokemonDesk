import config from '../config';
import { IQuery, IServer, IUri } from './interfaces';

interface IUrl extends IServer, IUri {
  query?: IQuery;
}

function getUrlWithParamsConfig(endpointConfig: string, query?: IQuery): IUrl {
  return {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query,
  };
}
export default getUrlWithParamsConfig;
