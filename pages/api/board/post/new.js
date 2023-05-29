import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";

export default async function handler(req, res) {
  const date = new Date();
  const today = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };

  const session = await getServerSession(req, res, authOptions);
  
  if (session) {
    if (req.method == "POST") {
      if (req.body.title === "" || req.body.writer === "") {
        res.status(422).json("제목을 작성하세요.");
      }
      try {
        const db = (await connectDB).db("my-board");
        const result = await db.collection("post").insertOne({
          title: req.body.title,
          content: req.body.content,
          writer: req.body.writer,
          date: `${today.year}/${today.month}/${today.day}`,
          author: session.user.email,
        });
        res.redirect(302, "/board");
      } catch (error) {
        res.status(500).json("실패");
      }
    }
  } else {
    res.status(422).json("로그인이 필요합니다.");
  }
}
