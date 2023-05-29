import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Write() {
  return (
    <div className="write-page">
      <form action="/api/board/post/new" method="POST" className="write-form">
        <div className="write-div">
          <div className="write-title">Title</div>
          <input type="text" className="write-input" name="title" />
        </div>
        <div className="write-div">
          <div className="write-title">Content</div>
          <input type="text" className="write-input" name="content" />
        </div>
        <div className="write-div">
          <div className="write-title">Writer</div>
          <input type="text" className="write-input" name="writer" />
        </div>
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
