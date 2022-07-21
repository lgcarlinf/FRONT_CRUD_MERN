import { SiWhatsapp, SiLinkedin, SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer
        className="h-[5%] bg-[#172957] rounded-t-[50px] flex justify-between px-8 ext-white w-full md:w-3/4 max-w-2xl text-[#b8b8b8] p-6"
        style={{ transition: "all .3s" }}
      >
        <a
          href="https://api.whatsapp.com/send/?phone=51981199260&text&type=phone_number&app_absent=0"
          className="flex items-center sm:text-sm text-xs"
          style={{ transition: "all .3s" }}
        >
          <SiWhatsapp
            className="icon"
            style={{ paddingRight: "4px", fontSize: "20px", color: "white" }}
          />
          @LuiggyDev
        </a>

        <a
          href="https://www.linkedin.com/in/luiggycf/"
          className="flex items-center sm:text-sm text-xs"
          style={{ transition: "all .3s" }}
        >
          <SiLinkedin
            className="icon"
            style={{ paddingRight: "4px", fontSize: "20px", color: "white" }}
          />
          @LuiggyDev
        </a>
        <a
          href="https://github.com/lgcarlinf"
          className="flex items-center sm:text-sm text-xs"
          style={{ transition: "all .3s" }}
        >
          <SiGithub
            className="icon"
            style={{ paddingRight: "4px", fontSize: "20px", color: "white" }}
          />
          @LuiggyDev
        </a>
      </footer>
    </>
  );
};

export default Footer;
