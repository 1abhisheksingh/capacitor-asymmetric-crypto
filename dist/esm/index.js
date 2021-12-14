import { registerPlugin } from '@capacitor/core';
const AsymmetricCrypto = registerPlugin('AsymmetricCrypto', {
    web: () => import('./web').then(m => new m.AsymmetricCryptoWeb()),
});
export * from './definitions';
export { AsymmetricCrypto };
//# sourceMappingURL=index.js.map