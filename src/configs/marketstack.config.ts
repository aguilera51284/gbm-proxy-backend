import { get } from 'env-var';
import '../libs/utils/dotenv';

export const marketstackConfig = {
  MARKETSTACK_PUBLIC_ACCESS_KEY: get('MARKETSTACK_PUBLIC_ACCESS_KEY')
    .required()
    .asString(),
  MARKETSTACK_API_URL: get('MARKETSTACK_API_URL').required().asString(),
};
