import { connectDB } from "@/util/database";
import List from "./List";

export default async function Board() {
  const db = (await connectDB).db("my-board");
  const postList = await db.collection("post").find().toArray();
  return (
    <div className="list-bg">
      {postList.map((post, i) => {
        return <List post={post} key={i} />;
      })}
    </div>
  );
}
