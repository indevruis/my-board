import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const date = new Date();
  const today = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
  if (req.method == "POST") {
    if (req.body.title === "" || req.body.writer === "") {
      return res.status(500).json("제목을 작성하세요.");
    }
    try {
      const db = (await connectDB).db("my-board");
      const result = await db
        .collection("post")
        .insertOne({
          title: req.body.title,
          content: req.body.content,
          writer: req.body.writer,
          date: `${today.year}/${today.month}/${today.day}`,
        });
        console.log(result)
      return res.redirect(302, "/board");
    } catch (error) {
      return res.status(500).json("실패");
    }
  }
}
