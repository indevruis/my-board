import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default async function Detail(req, res) {
  const db = (await connectDB).db("my-board");
  const post = await db
    .collection("post")
    .findOne({ _id: new ObjectId(req.params.id) });
  return (
    <div className="detail-page">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <Link href={'/board'}>
        <FontAwesomeIcon icon={faX} className="x-icon" />
      </Link>
    </div>
  );
}
