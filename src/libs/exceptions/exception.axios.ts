import { ExceptionBase } from './exception.base';
import { AXIOS_REQUEST_ERROR } from './exception.codes';

/**
 * Used to indicate an error related to Axios HTTP requests
 *
 * @class AxiosRequestException
 * @extends {ExceptionBase}
 */
export class AxiosRequestException extends ExceptionBase {
  static readonly defaultMessage = 'Axios request error';

  constructor(message?: string, readonly status?: number) {
    super(message || AxiosRequestException.defaultMessage);
  }

  readonly code = AXIOS_REQUEST_ERROR;
}
