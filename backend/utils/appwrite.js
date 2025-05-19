import { Client, Users, Databases } from 'appwrite';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client()
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject('682356cf0017dee7bf4b')
  .setKey(standard_ec169ae7c3c67d842f7502edb26c8ec13204cc0d4590c69a16a5092e2b107192386e673eb49317e5e0e8ced3282a9c94943b940352889a0193216e80965c6d42287137fb0633edacac886314e8399ebba799d34c8ec7634989df6f542c0301cf0ae7571ee97a7c8f60c5e38c9ce0b8692b2cd627aeabd0553544913965cdb18e);

export const users = new Users(client);
export const databases = new Databases(client);
