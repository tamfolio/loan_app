import { FaRocket,FaBalanceScale } from "react-icons/fa";
import { FaHandshake,FaMoneyCheckDollar } from "react-icons/fa6";

function WhyChoose() {
  return (
    <div className="w-full h-auto py-20 gradient flex flex-col items-center justify-center">
      <h1 className="text-[#2A6877] text-2xl font-bold mb-10">
        Why Choose NullDebt?
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="w-[280px] bg-white h-auto rounded-xl flex flex-col items-center py-10 px-2">
          <div className="w-[80px] h-[80px] rounded-full bg-transparent  flex items-center justify-center">
            <FaRocket size={45} className="fill-[#2A6877]"/>
          </div>
          <h1 className="text-[#1B424C] font-medium text-xl mt-[20px]">
            Loan Amounts up to $50,000
          </h1>
          <p className="text-[#6F6969] text-[18px] text-center mt-3 h-[100px]">
            From small expenses to larger financial needs, we provide flexible
            options to match your situation.
          </p>
        </div>
        <div className="w-[280px] bg-white h-auto rounded-xl flex flex-col items-center py-10 px-2">
          <div className="w-[80px] h-[80px] rounded-full bg-transparent  flex items-center justify-center">
          <FaHandshake size={45} className="fill-[#2A6877]"/>
          </div>
          <h1 className="text-[#1B424C] font-medium text-xl mt-[20px]">
            Quick Approvals
          </h1>
          <p className="text-[#6F6969] text-[18px] text-center mt-3 h-[100px]">
            Get approved in minutes and receive your funds fast - because we
            understand time is of the essence
          </p>
        </div>
        <div className="w-[280px] bg-white h-auto rounded-xl flex flex-col items-center py-10 px-2">
          <div className="w-[80px] h-[80px] rounded-full bg-transparent  flex items-center justify-center">
          <FaBalanceScale size={45} className="fill-[#2A6877]"/>
          </div>
          <h1 className="text-[#1B424C] font-medium text-xl mt-[20px]">
            No Hidden Fees
          </h1>
          <p className="text-[#6F6969] text-[18px] text-center mt-3 h-[100px]">
            Transparency is at the core of our service. What you see is what you
            get.
          </p>
        </div>
        <div className="w-[280px] bg-white h-auto rounded-xl flex flex-col items-center py-10 px-2">
          <div className="w-[80px] h-[80px] rounded-full bg-transparent  flex items-center justify-center">
          <FaMoneyCheckDollar size={45} className="fill-[#2A6877]"/>
          </div>
          <h1 className="text-[#1B424C] font-medium text-xl mt-[20px] text-center">
            All Credit Types Allowed
          </h1>
          <p className="text-[#6F6969] text-[18px] text-center mt-3 h-[100px]">
            Have bad credit? No problem! We&apos;re here to support everyone,
            regardless of their financial history
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
