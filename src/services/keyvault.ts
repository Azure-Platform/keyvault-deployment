import { EnvironmentCredential } from '@azure/identity';
import { KeyVaultManagementClient } from '@azure/arm-keyvault';
import { logger } from '../utils/logger';
import { config } from '../config/env';

export const createKeyVault = async (): Promise<string> => {
  const credentials = new EnvironmentCredential();
  const managementClient = new KeyVaultManagementClient(credentials, config.subscriptionId);

  const vaultName = `github-vault-${config.environment}`;

  logger.info(`Creating Key Vault "${vaultName}" in ${config.location}...`);

  const result = await managementClient.vaults.beginCreateOrUpdateAndWait(config.resourceGroupName, vaultName, {
    location: config.location,
    properties: {
      sku: {
        family: 'A',
        name: 'standard',
      },
      tenantId: config.tenantId,
      accessPolicies: [
        {
          tenantId: config.tenantId,
          objectId: config.objectId, 
          permissions: {
            secrets: ['get', 'list', 'set'],
            keys: ['get', 'list', 'update', 'create']
          }
        }
      ]
    },
  });

  logger.info(`Key Vault "${result.name}" created successfully.`);
  return result.name as string;
}
