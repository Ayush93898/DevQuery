// in this file we make question collection in the database, and also create fields (like title, content,authorId,...etc)
import { Permission } from "node-appwrite";
import { questionCollection, db } from "../name";
import { databases } from "./config";

// function for creating collection
export default async function createQuestionCollection() {
  await databases.createCollection(db, questionCollection, questionCollection, [
    Permission.read("any"), // anyone can read
    // but CRUD op done by the logged-in user
    Permission.read("users"),
    Permission.create("users"),
    Permission.update("users"),
    Permission.delete("users"),
  ]);

  console.log("Question collection is created");

  //   now creating the attributes (fields)
  await Promise.all([
    databases.createStringAttribute(db, questionCollection, "title", 120, true),
    databases.createStringAttribute(
      db,
      questionCollection,
      "content",
      12000,
      true
    ),
    databases.createStringAttribute(
      db,
      questionCollection,
      "autherId",
      50,
      true
    ),
    databases.createStringAttribute(
      db,
      questionCollection,
      "tags",
      50,
      true,
      undefined,
      true
    ),
    databases.createStringAttribute(
      db,
      questionCollection,
      "attachmentId",
      50,
      false
    ),
  ]);

  console.log("Question attributes created")
}
