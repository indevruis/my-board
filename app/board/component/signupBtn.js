import Link from "next/link";

export default function SignUpBtn() {
  return (
    <Link href={'/board/register'}>
      <button className="loginBtn">SignUp</button>
    </Link>
  );
}
