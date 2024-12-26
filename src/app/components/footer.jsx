import Image from "next/image";
import Link from "next/link";
import meImg from "../../../public/me.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <Link href={"/"}>
          <Image src={meImg} alt="logo" width={100} height={100} />
        </Link>
      </div>
      <div></div>
      <div></div>
    </footer>
  );
};

export default Footer;
