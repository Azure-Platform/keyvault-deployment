import { EnvironmentCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';
import { logger } from '../utils/logger';

export const addSecrets = async (vaultName: string): Promise<void> => {
  const credentials: EnvironmentCredential = new EnvironmentCredential();
  const client: SecretClient = new SecretClient(`https://${vaultName}.vault.azure.net/`, credentials);

  const secrets = [
    { name: 'secret1', value: 'value1' },
    { name: 'secret2', value: 'value2' },
    { name: 'secret3', value: 'value3' },
  ];

  for (const secret of secrets) {
    await client.setSecret(secret.name, secret.value);
    logger.info(`Secret "${secret.name}" added to Key Vault.`);
  }
}
