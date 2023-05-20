import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(req, res) {
  const db = (await connectDB).db("my-board");
  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(req.params.id) });
  return (
    <div className="write-page">
      <form action="/api/post/edit" method="POST" className="write-form">
        <div className="write-div">
          <div className="write-title">Title</div>
          <input
            type="text"
            className="write-input"
            name="title"
            defaultValue={result.title}
          />
        </div>
        <div className="write-div">
          <div className="write-title">Content</div>
          <input
            type="text"
            className="write-input"
            name="content"
            defaultValue={result.content}
          />
        </div>
        <div className="write-div">
          <div className="write-title">Writer</div>
          <input
            type="text"
            className="write-input"
            name="writer"
            defaultValue={result.writer}
          />
        </div>
        <input
          type="text"
          className="write-input"
          name="id"
          defaultValue={req.params.id}
          style={{ display: 'none' }}
        />
        <input
          type="text"
          className="write-input"
          name="author"
          defaultValue={result.author}
          style={{ display: 'none' }}
        />
        <div className="write-btn">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
      <Link href={"/board"}>
        <FontAwesomeIcon icon={faX} className="x-icon" />
      </Link>
    </div>
  );
}
