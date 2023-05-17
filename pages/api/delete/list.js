import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      const db = (await connectDB).db("my-board");
      const result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(req.query.id) });
      res.send('성공')
    } catch (error) {
      res.status(500);
    }
  }
}
