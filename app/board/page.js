import { connectDB } from "@/util/database";
import List from "./List";

export default async function Board() {
  const db = (await connectDB).db("my-board");
  const result = await db.collection("post").find().toArray();
  return (
    <div className="list-bg">
      {result.map((a, i) => {
        return <List a={a} key={i} />;
      })}
    </div>
  );
}
