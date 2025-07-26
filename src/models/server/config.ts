// in this file we also connect server to the appwrite, but this is bit different from the client one
// why?
// bcz the client side sdk and server side sdk are meant for different environments
//ou don’t use .setKey() on client, if you did this: Your secret key is now visible to anyone on your website.

import env from "@/app/env";
import { Client, Users, Databases, Avatars, Storage } from "node-appwrite";
//"node-appwrite" (server-focused)

let client = new Client()
  .setEndpoint(env.appwrite.endpoint)
  .setProject(env.appwrite.projectId)
  .setKey(env.appwrite.apikey); // for admin-level access

const databases = new Databases(client);
const users = new Users(client); // For all users (admin-level access)
const avatars = new Avatars(client);
const storage = new Storage(client);

export { databases, users, avatars, storage };
