import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function EditHandler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    if (session.user.eamil === req.body.author) {
      if (req.method == "POST") {
        const db = (await connectDB).db("my-board");
        const result = await db
          .collection("post")
          .updateOne({ _id: new ObjectId(req.body.id) }, { $set: req.body });
        res.redirect(302, "/board");
      }
    } else {
      res.status(422).json("본인의 글만 수정이 가능합니다.");
    }
  } else {
    res.status(422).json("로그인이 필요합니다.");
  }
}
