// lib/appwrite.js
import { Client, Account, ID, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint('https://fra.cloud.appwrite.io/v1') // your Appwrite endpoint
  .setProject('682356cf0017dee7bf4b'); // your project ID

const account = new Account(client);
const databases = new Databases(client); // ✅ Add this line

export { account, databases, ID }; // ✅ Export `databases`
