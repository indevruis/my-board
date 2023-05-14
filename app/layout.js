import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main-header">
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
          <span>게시판 프로젝트</span>
        </div>
        <div className="main-body">
          <div className="main-navbar">
            <Link href="/">
              <FontAwesomeIcon icon={faHouse} className="navbar-icon" />
              <span>Home</span>
            </Link>
            <Link href="/board">
              <FontAwesomeIcon icon={faPenToSquare} className="navbar-icon" />
              <span>Board</span>
            </Link>
          </div>
          <div className="main-page">{children}</div>
        </div>
      </body>
    </html>
  );
}
