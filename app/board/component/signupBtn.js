import Link from "next/link";

export default function SignUpBtn() {
  return (
    <Link href={'/register'}>
      <button className="loginBtn">SignUp</button>
    </Link>
  );
}
