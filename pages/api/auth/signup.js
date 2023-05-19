import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function Signup(req, res) {
  if (req.method === "POST") {
    try {
      const db = (await connectDB).db("my-board");
      const result = await db.collection("user");

      const hash = await bcrypt.hash(req.body.password, 10);
      req.body.password = hash;

      const existingUser = await result.findOne({ email: req.body.email });
      if (existingUser) {
        res
          .status(422)
          .json({ result: false, error: "이미 가입된 계정이에요." });
      } else {
        await result.insertOne(req.body);
        res.redirect(302, "/board");
      }
    } catch (error) {
      res
        .status(500)
        .json({ result: false, error: "회원가입에 실패했습니다." });
    }
  }
}
