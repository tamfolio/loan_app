import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black w-full h-auto py-5 flex flex-col items-center justify-between px-[100px]">
      <div className="flex w-[100%] items-center justify-between">
        <div>
          <img src="/assets/nulldebt.png" alt="" className="w-[200px] mb-2" />
        </div>
        <div className="text-white flex gap-5">
          <p>Terms of Use</p>
          <p>Terms and Conditions</p>
          <p>Contact</p>
        </div>
        <div className="fill-white flex gap-5">
          <FaFacebookSquare className="fill-white" size={20} />
          <FaInstagramSquare className="fill-white" size={20} />
        </div>
      </div>
      <p className="text-white mt-5 font-bold">&copy;NullDebtCanada, 2025</p>
    </div>
  );
}

export default Footer;
