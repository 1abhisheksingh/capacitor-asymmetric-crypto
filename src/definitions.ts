export interface AsymmetricCryptoPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
