import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    if(req.query.author === session.user.email){
    if (req.method === "DELETE") {
      try {
        const db = (await connectDB).db("my-board");
        const result = await db
          .collection("post")
          .deleteOne({ _id: new ObjectId(req.query.id) });
        res.status(200).json('삭제 성공')
      } catch (error) {
        res.status(500);
      }
    }} else {
      res.status(422).json("본인의 글만 삭제가 가능합니다.")
    }
  } else {
    res.status(422).json("로그인이 필요합니다.");
  }
}
