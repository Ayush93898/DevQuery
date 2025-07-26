// in this code base we write the code for creating the storage collection and its fields

import { Permission } from "node-appwrite";
import { questionAttachmentBucket } from "../name";
import { storage } from "./config";

export default async function getOrCreateStorage() {
  try {
    //Checks if a file storage bucket already exists
    await storage.getBucket(questionAttachmentBucket);
    console.log("Storage connected");
  } catch (error) {
    try {
      await storage.createBucket(  // If Bucket Doesn’t Exist → Create It
        questionAttachmentBucket,
        questionAttachmentBucket,
        [
          Permission.read("any"),
          // CRUD operation can be done by only the users
          Permission.create("users"),
          Permission.read("users"),
          Permission.update("users"),
          Permission.delete("users"),
        ],
        false,
        undefined,
        undefined,
        ["jpg", "png", "gif", "jpeg", "webp", "heic"]
      );
      console.log("Storage created");
      console.log("Storage connected");
    } catch (error) {
      console.log("Error creating storage", error);
    }
  }
}
