import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function EditHandler(req, res) {
  if (req.method == "POST") {
    const db = (await connectDB).db("my-board");
    const result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(req.body.id) }, { $set: req.body });
    res.redirect(302, "/board");
  }
}
