import Image from "next/image";
import logo from "@/assets/logo.png";

function Logo() {
  return <Image src={logo} height={100} width={100} alt={"Logotype"} />;
}

export default Logo;
