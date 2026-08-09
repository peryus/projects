import { db } from "../db.js";
import { ObjectId } from "mongodb";

export async function getUsers() {
  return await db
      .collection("comments")
      .find({})
      .limit(10)
      .toArray();
}

export async function findComments(query = {}, projection = {}) {
  return await db
      .collection("comments")
      .find(query, { projection })
      .toArray();
}

export async function addOne(data) {
  return await db.collection("comments").insertOne(data);
}

export async function addMany(dataArray) {
  return await db.collection("comments").insertMany(dataArray);
}

export async function updateOne(id, updateData) {
  return await db
      .collection("comments")
      .updateOne(
          { _id: new ObjectId(id) },
          { $set: updateData }
      );
}

export async function updateMany(filter, updateData) {
  return await db
      .collection("comments")
      .updateMany(
          filter,
          { $set: updateData }
      );
}

export async function replaceOne(id, replacement) {
  return await db
      .collection("comments")
      .replaceOne(
          { _id: new ObjectId(id) },
          replacement
      );
}

export async function deleteOne(id) {
  return await db
      .collection("comments")
      .deleteOne({ _id: new ObjectId(id) });
}

export async function deleteMany(filter) {
  return await db
      .collection("comments")
      .deleteMany(filter);
}