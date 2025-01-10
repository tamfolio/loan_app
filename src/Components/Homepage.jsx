import { FaRegCheckCircle, FaSearchLocation } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { BsDatabaseFillLock } from "react-icons/bs";
import { useState } from "react";
import { FaCircleDollarToSlot,FaArrowRight } from "react-icons/fa6";
function Homepage() {
  const [loanAmount, setLoanAmount] = useState("");
  const [income, setIncome] = useState("");

  const handleChange = (e, setState) => {
    // Get raw input value and strip non-numeric characters except commas
    let rawValue = e.target.value.replace(/[^0-9]/g, "");

    // Update state with the formatted value
    if (rawValue) {
      let formattedValue = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
      }).format(rawValue);
      setState(formattedValue); // Use the passed state setter function
    } else {
      setState(""); // Allow empty input
    }
  };

  return (
    <div className="w-[100%] h-auto min-h-[90vh] bg-white pl-[150px] py-[100px] flex items-center justify-between gap-10">
      <div className="">
        <p className="text-4xl text-[#2A6877] font-bold w-[500px] text-left">
          Fast. Flexible. Reliable Payday Loans for Canadians
        </p>
        <p className="text-2xl font-semibold mt-3">
          Apply Now and Get up to $50,000!
        </p>
        <div className="mt-10 flex gap-5">
          <div className="flex items-center justify-start gap-2 w-[200px]">
            <FaRegCheckCircle className="fill-[#2A6877]" size={30} />
            <p className="font-semibold">Fast Approvals</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <FaCalendarDays className="fill-[#2A6877]" size={30} />
            <p className="font-semibold">Flexible Repayment Options</p>
          </div>
        </div>
        <div className="mt-3 flex gap-5">
          <div className="flex items-center justify-start gap-2 w-[200px]">
            <BsDatabaseFillLock className="fill-[#2A6877]" size={30} />
            <p className="font-semibold">Secure and Private</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <FaSearchLocation className="fill-[#2A6877]" size={30} />
            <p className="font-semibold">Accessible Anywhere in Canada</p>
          </div>
        </div>
      </div>
      <div className="w-[600px] flex items-center justify-center flex-col border-solid border-[1px] border-[#F0F1F3] rounded-xl px-5 py-10">
        <FaCircleDollarToSlot size={100} className="mb-10" />
        <h1 className="text-center text-2xl text-[#2a6877] font-semibold mb-5">
          How much do you need?
        </h1>

        <div className="flex flex-col">
          <div className="flex mb-2">
            <span className="flex items-center justify-center w-[50px] h-auto border-[1px] border-solid border-gray-200 font-bold">$</span>
            <input
              type="text"
              placeholder="$50,000"
              value={loanAmount}
              onChange={(e) => handleChange(e, setLoanAmount)}
              className="w-[400px] border-[1px] border-solid border-gray-200 rounded-md p-2 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-5 bg-[#2a6877] py-2 text-white rounded-md flex items-center justify-center gap-3"
          >
            Get Started <FaArrowRight/>
          </button>
        </div>
      </div>
      {/* <div>
        <p className="text-xl font-bold">Don&apos;t Let Financial Stress Hold You Back</p>
        <p className="text-md font-semibold mb-3">
          Fill out our online application now and get access to up to{" "}
          <span className="text-[#2A6877]">$50,000</span>
        </p>
        <form
          action=""
          className="w-[600px] h-auto border-solid border-[1px] border-[#F0F1F3] rounded-xl p-5"
        >
          <div className="flex gap-3 items-center justify-between">
            <div className="flex flex-col">
              <label
                htmlFor="firstName"
                className="text-[#2A6877] mb-1 font-semibold"
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="w-[250px] border-[1px] border-solid border-gray-200 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="lastName"
                className="text-[#2A6877] mb-1 font-semibold"
              >
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-[250px] border-[1px] border-solid border-gray-200 rounded-md p-2"
              />
            </div>
          </div>
          <div className="flex gap-3 items-center justify-between mt-3">
            <div className="flex flex-col">
              <label
                htmlFor="Email"
                className="text-[#2A6877] mb-1 font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-[250px] border-[1px] border-solid border-gray-200 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="Loan Amount"
                className="text-[#2A6877] mb-1 font-semibold"
              >
                Loan Amount
              </label>
              <input
                type="text"
                placeholder="Loan Amount"
                value={loanAmount}
                onChange={(e) => handleChange(e, setLoanAmount)}
                className="w-[250px] border-[1px] border-solid border-gray-200 rounded-md p-2"
              />
            </div>
          </div>
          <div className="flex gap-3 items-center justify-between mt-3">
            <div className="flex flex-col">
              <label
                htmlFor="Bank"
                className="text-[#2A6877] mb-1 font-semibold"
              >
                Bank
              </label>
              <input
                type="text"
                placeholder="Bank"
                className="w-[250px] border-[1px] border-solid border-gray-200 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="Province"
                className="text-[#2A6877] mb-1 font-semibold"
              >
                Province
              </label>
              <input
                type="text"
                placeholder="Province"
                className="w-[250px] border-[1px] border-solid border-gray-200 rounded-md p-2"
              />
            </div>
          </div>
          <div className="flex gap-3 items-center justify-between mt-3">
            <div className="flex flex-col">
              <label
                htmlFor="income-source"
                className="text-[#2A6877] mb-1 font-semibold"
              >
                Income Source
              </label>
              <select
                id="income-source"
                className="w-[250px] border-[1px] border-solid border-gray-200 rounded-md p-2"
              >
                <option value="job-income">Job Income</option>
                <option value="self-employed">Self-Employed</option>
                <option value="benefits">Benefits</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="Monthly Income"
                className="text-[#2A6877] mb-1 font-semibold"
              >
                Monthly Income
              </label>
              <input
                type="text"
                placeholder="Monthly Income"
                value={income}
                onChange={(e) => handleChange(e, setIncome)}
                className="w-[250px] border-[1px] border-solid border-gray-200 rounded-md p-2"
              />
            </div>
          </div>
          <div className="flex flex-col w-full mt-3">
              <label
                htmlFor="income-source"
                className="text-[#2A6877] mb-1 font-semibold"
              >
                Do you Rent or Own a Home?
              </label>
              <select
                id="income-source"
                className="w-full border-[1px] border-solid border-gray-200 rounded-md p-2"
              >
                <option value="Owns House">I own a House</option>
                <option value="Rents House">I am renting a house</option>
              </select>
            </div>
            <button type="submit" className="w-full mt-5 bg-[#2a6877] py-2 text-white rounded-md">Submit</button>
        </form>
      </div> */}
      <div></div>
    </div>
  );
}

export default Homepage;
