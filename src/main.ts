import { createKeyVault } from './services/keyvault';
import { addSecrets } from './services/secrets';
import { logger } from './utils/logger';
export const main = async (): Promise<void> => {
    try {
        logger.info('Deployment process started.');

        const vaultName = await createKeyVault();
        if (!vaultName) {
            throw new Error('Key Vault creation failed: vault name is undefined.');
        }
        logger.info(`Key Vault "${vaultName}" created successfully.`);

        logger.info('Adding secrets to the Key Vault...');
        await addSecrets(vaultName);
        logger.info('Secrets added successfully.');

        logger.info('Key Vault creation and secret addition completed successfully.');

    } catch (error) {
        if (error instanceof Error) {
            
            logger.error(`Deployment failed with error: ${error.message}`);
            logger.error(`Stack Trace: ${error.stack}`);

        } else {
            logger.error('Deployment failed with an unknown error.');
        }

        process.exit(1);
    }
};

main()

