# Azure Keyvault Deployment

### Description:
This repository contains a TypeScript-based solution for deploying Azure Key Vaults with multiple secrets using GitHub Actions. The script is designed to facilitate the deployment of Key Vaults in various environments, such as development, staging, and production, by dynamically adjusting the Key Vault name and configuration based on environment variables.

### Features:
**Environment-Aware Deployment:** The Key Vault name is dynamically generated based on the specified environment (e.g., dev, staging, prod), ensuring consistency and avoiding naming conflicts.

**Region-Specific Deployment:** Supports deployment to the South Africa North Azure region, with the flexibility to adjust the region as needed.

**Automated Secret Management:** Allows for the seamless addition of multiple secrets to the deployed Key Vault, with a clear structure for extending or modifying the list of secrets.

**GitHub Actions Integration:** The repository is set up to be triggered by GitHub Actions workflows, enabling automated and continuous deployment pipelines.

**Error Handling and Logging:** Comprehensive error handling is built into the script, ensuring that any issues are logged and can be easily debugged.

### How to Use:
**1. Clone the Repository:**

```
git clone https://github.com/Azure-Platform/keyvault-deployment
```
**2. Configure Environment Variables:**

Set up your `.env` file with the necessary Azure credentials and environment details (e.g., `AZURE_SUBSCRIPTION_ID`, `AZURE_RESOURCE_GROUP`, `AZURE_TENANT_ID`, `AZURE_OBJECT_ID`, `AZURE_CLIENT_ID`, `AZURE_CLIENT_SECRET`, `ENVIRONMENT`).

**3. Deploy via GitHub Actions:**

Push your changes to the main branch to trigger the GitHub Actions workflow, which will deploy the Key Vault and add the specified secrets.

**4. Monitor Deployment:**

Use the GitHub Actions interface to monitor the deployment process and ensure that the Key Vault and secrets are created successfully.

#### Target Audience:
This repository is ideal for DevOps engineers, cloud architects, and developers who need to manage secure secrets and sensitive configuration settings in Azure, particularly in environments where automation and continuous integration are crucial.