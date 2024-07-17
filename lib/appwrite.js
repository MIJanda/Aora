import { Client, Account, ID } from 'react-native-appwrite';

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.rebode.aora',
  projectId: '66974f79000be6593ea4',
  databaseId: '66976e00001a80250476',
  userCollectionId: '66976e5b0014f3edd673',
  videoCollectionId: '66976ec1001a0e3b4677',
  storageId: '669772e40008f72d6c62'
}
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);

export const createUser = () => {

}
