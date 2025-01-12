import { useState } from "react";
import { BsDatabaseFillLock } from "react-icons/bs";
import { FaArrowRight, FaRegCheckCircle, FaSearchLocation } from "react-icons/fa";
import { FaCalendarDays, FaCircleDollarToSlot } from "react-icons/fa6";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

function Homepage() {
    const [loanAmount, setLoanAmount] = useState("");
    const [income, setIncome] = useState("");
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    const handleChange = (e, setState) => {
      let rawValue = e.target.value.replace(/[^0-9]/g, "");
      if (rawValue) {
        let formattedValue = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
        }).format(rawValue);
        setState(formattedValue);
      } else {
        setState("");
      }
    };
  
    return (
      <div className="w-full h-auto min-h-[90vh] bg-white px-5 md:pl-[150px] py-[50px] md:py-[100px] flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <p className="text-2xl md:text-4xl text-[#2A6877] font-bold w-full md:w-[500px]">
            Fast. Flexible. Reliable Payday Loans for Canadians
          </p>
          <p className="text-lg md:text-2xl font-semibold mt-3">
            Apply Now and Get up to $50,000!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-2 lg:gap-5">
            <div className="flex items-center gap-2 w-full sm:w-[200px]">
              <FaRegCheckCircle className="fill-[#2A6877]" size={30} />
              <p className="font-semibold">Fast Approvals</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarDays className="fill-[#2A6877]" size={30} />
              <p className="font-semibold">Flexible Repayment Options</p>
            </div>
          </div>
          <div className="mt-3 flex flex-col sm:flex-row gap-2 lg:gap-5">
            <div className="flex items-center gap-2 w-full sm:w-[200px]">
              <BsDatabaseFillLock className="fill-[#2A6877]" size={30} />
              <p className="font-semibold">Secure and Private</p>
            </div>
            <div className="flex items-center gap-2">
              <FaSearchLocation className="fill-[#2A6877]" size={30} />
              <p className="font-semibold">Accessible Anywhere in Canada</p>
            </div>
          </div>
        </div>
  
        {/* Right Content */}
        <div
          className="w-full md:w-[400px] flex items-center justify-center flex-col border-solid border-[1px] border-[#c9cacd] rounded-xl px-5 py-10"
          style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
        >
          <FaCircleDollarToSlot size={100} className="mb-10" />
          <h1 className="text-center text-xl md:text-2xl text-[#2a6877] font-semibold mb-5">
            How much do you need?
          </h1>
  
          <div className="flex flex-col">
            <div className="flex mb-2">
              <span className="flex items-center justify-center w-[50px] h-auto border-[1px] border-solid border-gray-200 font-bold">
                $
              </span>
              <input
                type="text"
                placeholder="$50,000"
                value={loanAmount}
                onChange={(e) => handleChange(e, setLoanAmount)}
                className="w-full md:w-[300px] border-[1px] border-solid border-gray-200 rounded-md p-2 outline-none"
              />
            </div>
  
            <button
              type="submit"
              className="w-full mt-5 bg-[#2a6877] py-2 text-white rounded-md flex items-center justify-center gap-3"
              onClick={toggle}
            >
              Get Started <FaArrowRight />
            </button>
            <Modal isOpen={modal} toggle={toggle} className="w-[90%] md:w-[800px]">
              <ModalHeader toggle={toggle}></ModalHeader>
              <ModalBody>
                <div>
                  <p className="text-lg font-semibold text-center mt-1">
                    Don&apos;t Let Financial Stress Hold You Back
                  </p>
                  <p className="text-sm font-medium mb-3 text-center">
                    Fill out our online application now and get access to up to{" "}
                    <span className="text-[#2A6877]">$50,000</span>
                  </p>
                  <form action="" className="w-full h-auto rounded-xl py-2 px-4">
                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                          className="w-full border-[1px] border-solid border-gray-200 rounded-md p-2"
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
                          className="w-full border-[1px] border-solid border-gray-200 rounded-md p-2"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
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
                          className="w-full border-[1px] border-solid border-gray-200 rounded-md p-2"
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
                          className="w-full border-[1px] border-solid border-gray-200 rounded-md p-2"
                        />
                      </div>
                    </div>
                    {/* Remaining Fields */}
                    <div className="flex flex-col mt-3">
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
                        className="w-full border-[1px] border-solid border-gray-200 rounded-md p-2"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full mt-5 bg-[#2a6877] py-2 text-white rounded-md"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
  
  export default Homepage;
  