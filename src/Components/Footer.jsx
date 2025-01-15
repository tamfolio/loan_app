import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-black w-full h-auto py-5 flex flex-col items-center justify-between px-[20px] lg:px-[100px]">
      <div className="flex flex-col lg: flex-row w-[100%] items-center justify-between">
        <div>
          <img src="/assets/nulldebt.png" alt="" className="w-[200px] mb-2" />
        </div>
        <div className="text-white flex flex-col lg:flex-row items-center gap-5">
          <Link to="/terms_of_use">Terms of Use</Link>
          <Link to="/terms_and_conditions">Terms and Conditions</Link>
          <p className="mb-0">
            <a
              href="mailto:info@nulldebtcanada.com"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Contact
            </a>
          </p>
        </div>
        <div className="fill-white flex gap-5 mt-5 lg:mt-0">
          <a
            href="https://www.facebook.com/profile.php?id=61567490777485&mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare className="fill-white" size={20} />
          </a>

          <a
            href="https://www.instagram.com/nulldebt.ca?igsh=MTJwam01d3dwc2gyeA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="fill-white" size={20} />
          </a>
        </div>
      </div>
      <p className="text-white mt-5 font-bold">&copy;NullDebtCanada, 2025</p>
    </div>
  );
}

export default Footer;
