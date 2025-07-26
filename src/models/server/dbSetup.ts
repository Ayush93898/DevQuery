// in this file we setup the db

import { db } from "../name";

// importing all the collection we previously made
import createAnswerCollection from "./ans.collection";
import createCommentCollection from "./comment.collection";
import createQuestionCollection from "./question.collection";
import createVoteCollection from "./vote.collection";
import getOrCreateStorage from "./storage.collection";

import { databases } from "./config";

export default async function getOrCreateDb() {
  try {
    // getting the db
    await databases.get(db);
    console.log("Database connection");
  } catch (error) {
    try {
      // if can't get , create new db
      await databases.create(db, db);
      console.log("database created");

      // now create collection
      await Promise.all([
        createAnswerCollection,
        createCommentCollection,
        createQuestionCollection,
        createVoteCollection,
        getOrCreateStorage,
      ]);
      console.log("Collection created");
      console.log("Database connected");
    } catch (error) {
        console.log("Error creating database or collection",error)
    }
  }
}
