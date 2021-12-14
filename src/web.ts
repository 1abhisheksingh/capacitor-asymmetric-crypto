import { WebPlugin } from '@capacitor/core';

import type { AsymmetricCryptoPlugin } from './definitions';

export class AsymmetricCryptoWeb extends WebPlugin implements AsymmetricCryptoPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
