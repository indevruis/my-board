import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Register() {
  return (
    <div className="write-page">
      <form action="/api/auth/signup" method="POST" className="write-form">
        <h4 className="register-title">회원가입</h4>
        <div className="write-div">
          <input
            name="name"
            type="text"
            placeholder="이름"
            className="write-input"
          />
        </div>
        <div className="write-div">
          <input
            name="email"
            type="text"
            placeholder="이메일"
            className="write-input"
          />
        </div>
        <div className="write-div">
          <input
            name="password"
            type="password"
            placeholder="비번"
            className="write-input"
          />
        </div>
        <button type="submit" className="signup-btn">
          가입요청
        </button>
      </form>
      <Link href={"/board"}>
        <FontAwesomeIcon icon={faX} className="x-icon" />
      </Link>
    </div>
  );
}
