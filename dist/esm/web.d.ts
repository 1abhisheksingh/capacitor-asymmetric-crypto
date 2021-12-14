import { WebPlugin } from '@capacitor/core';
import type { AsymmetricCryptoPlugin } from './definitions';
export declare class AsymmetricCryptoWeb extends WebPlugin implements AsymmetricCryptoPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
