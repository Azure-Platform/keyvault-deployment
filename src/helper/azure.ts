import { EnvironmentCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';

const vaultName = 'your-keyvault-name'; 
const credential = new EnvironmentCredential();

export async function listSecrets() {

    const vaultUrl = `https://${vaultName}.vault.azure.net`;

    const client = new SecretClient(vaultUrl, credential);

    try {
        console.log('Listing all secrets:');
        for await (const secretProperties of client.listPropertiesOfSecrets()) {
            console.log(`- ${secretProperties.name}`);
        }
    } catch (error) {
        console.error('Error listing secrets:', error);
    }
}



export const getSecretByName = async (secretName: string) => {

  const vaultUrl = `https://${vaultName}.vault.azure.net`;

  const client = new SecretClient(vaultUrl, credential);

  try {
    const secret = await client.getSecret(secretName);
    console.log(`Secret Name: ${secret.name}`);
    console.log(`Secret Value: ${secret.value}`);
  } catch (error) {
    console.error(`Error retrieving secret "${secretName}":`, error);
  }
}
