import { registerPlugin } from '@capacitor/core';

import type { AsymmetricCryptoPlugin } from './definitions';

const AsymmetricCrypto = registerPlugin<AsymmetricCryptoPlugin>('AsymmetricCrypto', {
  web: () => import('./web').then(m => new m.AsymmetricCryptoWeb()),
});

export * from './definitions';
export { AsymmetricCrypto };
