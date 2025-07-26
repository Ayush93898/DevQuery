// in this codebase we conenct client to the appwrite serve
import env from "@/app/env";
import { Client, Account, Avatars, Storage, Databases } from "appwrite";

// creation of client
const client = new Client()
  .setEndpoint(env.appwrite.endpoint)
  .setProject(env.appwrite.projectId);

const databases = new Databases(client); // creation of databases
const storage = new Storage(client); // creation of storage
const avatars = new Avatars(client); // creation of avatar 
const account = new Account(client); // creation of storage, // For current user only

export default { databases, account, storage, avatars };

// as appwrite is (browser-focused)