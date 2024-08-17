import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  subscriptionId: process.env.AZURE_SUBSCRIPTION_ID as string,
  resourceGroupName: process.env.AZURE_RESOURCE_GROUP as string,
  tenantId: process.env.AZURE_TENANT_ID as string,
  clientId: process.env.AZURE_CLIENT_ID as string,
  clientSecret: process.env.AZURE_CLIENT_SECRET as string,
  objectId: process.env.AZURE_OBJECT_ID as string,
  environment: process.env.ENVIRONMENT || 'dev',
  location: 'southafricanorth',  
};