import Image from "next/image";
import logo from "../assets/logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
      <div className="flex space-x-2 items-center">
        <Image src={logo} alt="logo" height={30} width={30} />

        <div>
          <h1 className="font-bold">AI Image Generator</h1>
          <h2 className="text-xs">
            Powered by{" "}
            <span className="text-blue-500">
              DALLE, Chat GPT & Microsoft Azure
            </span>
          </h2>
        </div>
      </div>

      <div className="flex text-xs md:text-base divide-x items-center text-gray-500">
        <Link
          href="https://github.com/AliAhmed2004?tab=repositories"
          className="px-2 font-light text-right"
        >
          Github Repository
        </Link>
      </div>
    </header>
  );
};

export default Header;
