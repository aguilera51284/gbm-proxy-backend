/**
 * Application routes with its version
 * https://github.com/Sairyss/backend-best-practices#api-versioning
 */

// Root
const tickersRoot = 'tickers';

// Api Versions
const v1 = 'v1';

export const routesV1 = {
  version: v1,
  tickers: {
    root: tickersRoot,
    detail: `/${tickersRoot}/:symbol`,
    eod: `/${tickersRoot}/eod/details`,
  },
};
