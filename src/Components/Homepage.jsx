import { FaRegCheckCircle, FaSearchLocation } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { BsDatabaseFillLock } from "react-icons/bs";
import { useState } from "react";
import { FaCircleDollarToSlot, FaArrowRight } from "react-icons/fa6";
import { Modal, ModalBody, ModalHeader, Spinner } from "reactstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Homepage() {
  const [loanAmount, setLoanAmount] = useState("");
  const [income, setIncome] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [bank, setBank] = useState("");
  const [province, setProvince] = useState("");
  const [incomeSource, setIncomeSource] = useState("");
  const [homeStatus, setHomeStatus] = useState("");
  const [modal, setModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phoneNumber,setPhoneNumber] = useState("")

  const toggleSuccessModal = () => setSuccessModal(!successModal);
  const toggleErrorModal = () => setErrorModal(!errorModal);

  const toggle = () => setModal(!modal);

  const gmtDateTime = new Date().toUTCString();

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

  const handleCloseSuccess = () => {
    resetFormData(); // Reset form data when closing the success modal
    toggleSuccessModal(); // Close the success modal
  };

  const resetFormData = () => {
    setLoanAmount("");
    setIncome("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setBank("");
    setProvince("");
    setPhoneNumber("");
    setIncomeSource("");
    setHomeStatus("");
  };

  const formatPhoneNumber = (phone) => {
    // Remove all non-numeric characters
    const cleaned = phone.replace(/\D/g, "");
    // Format the number
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
    }
    return phone; // Return original if it doesn't match the expected pattern
  };


  const cleanPhoneNumber = phoneNumber.replace(/[^\d+]/g, "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      loanAmount,
      bank,
      province,
      incomeSource,
      income,
      phoneNumber: cleanPhoneNumber,
      homeStatus,
      timestamp: gmtDateTime,
    };

    setLoading(true);
    try {
      await fetch("https://nulldebt-backend.onrender.com/proxy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(formData);

      toggleSuccessModal();
      resetFormData();
      toggle();
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toggleErrorModal();
      setLoading(false);
    }
  };

  return (
    <div className="w-[100%] h-auto min-h-[90vh] bg-white px-[20px] lg:pl-[150px] py-[30px] lg:!py-[100px] flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between gap-10">
      <div className="flex flex-col items-start justify-start">
        <p className="text-2xl lg:text-4xl text-[#2A6877] font-bold w-full lg:w-[500px] text-center lg:!text-left">
          Fast. Flexible. Reliable Payday Loans for Canadians
        </p>

        <p className="text-xl lg:text-2xl font-semibold mt-3 text-center lg:!text-left w-[100%]">
          Apply Now and Get up to $50,000!
        </p>
        <div className="mt-10 hidden lg:flex flex-col lg:flex-row gap-5">
          <div className="flex items-center justify-start gap-2 w-[200px]">
            <FaRegCheckCircle className="fill-[#2A6877]" size={30} />
            <p className="font-semibold">Fast Approvals</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <FaCalendarDays className="fill-[#2A6877]" size={30} />
            <p className="font-semibold">Flexible Repayment Options</p>
          </div>
        </div>
        <div className="mt-3 hidden lg:flex flex-col lg:flex-row gap-5">
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
      <div
        className="w-[full] lg:!w-[400px] flex items-center justify-center flex-col border-solid border-[1px] border-[#c9cacd] px-4 rounded-xl py-10"
        style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
      >
        <FaCircleDollarToSlot size={100} className="mb-3 lg:!mb-10" />
        <h1 className="text-center text-2xl text-[#2a6877] font-semibold mb-2 lg:!mb-5">
          How much do you need?
        </h1>

        <div className="flex flex-col">
          <div className="flex mb-2 lg:mb-5">
            <span className="flex items-center justify-center w-[50px] h-auto border-[1px] border-solid border-gray-200 font-bold">
              $
            </span>
            <input
              type="text"
              placeholder="$50,000"
              value={loanAmount}
              onChange={(e) => handleChange(e, setLoanAmount)}
              className="w-[250px] border-[1px] border-solid border-gray-200 rounded-md p-2 outline-none"
            />
          </div>
          <button
            type="submit"
            className={`w-full mt-2 lg:!mt-5 bg-[#2a6877] py-2 text-white rounded-md flex items-center justify-center gap-3 ${
              !loanAmount ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={loanAmount ? toggle : undefined}
            disabled={!loanAmount}
          >
            Get Started <FaArrowRight />
          </button>

          <Modal
            isOpen={modal}
            toggle={toggle}
            className="w-[95%] lg:w-[800px]"
          >
            {/* <div className="flex items-end justify-end py-2">
                <CgClose size={30} />
            </div> */}
            <ModalHeader toggle={toggle}></ModalHeader>
            <ModalBody>
              <div>
                <p className="text-md lg:text-lg font-semibold text-center mt-1">
                  Don&apos;t Let Financial Stress Hold You Back
                </p>
                <p className="text-sm lg:text-lg font-medium mb-3 text-center">
                  Fill out our online application now and get access to up to{" "}
                  <span className="text-[#2A6877] font-bold">$50,000</span>
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="w-full h-auto rounded-xl py-2 px-1 lg:px-4"
                >
                  <label
                    htmlFor="firstName"
                    className="text-[#2A6877] mb-1 font-semibold mt-3"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border-[1px] border-solid border-gray-200 rounded-md p-2"
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />

                  <label
                    htmlFor="lastName"
                    className="text-[#2A6877] mb-1 font-semibold mt-3"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full border-[1px] border-solid border-gray-200 rounded-md p-2"
                    required
                  />
                  <div className="flex flex-col">
                    <label
                      htmlFor="Email"
                      className="text-[#2A6877] mb-1 font-semibold mt-3"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border-[1px] border-solid border-gray-200 rounded-md p-2"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="Loan Amount"
                      className="text-[#2A6877] mb-1 font-semibold mt-3"
                    >
                      Loan Amount
                    </label>
                    <input
                      type="text"
                      placeholder="Loan Amount"
                      value={loanAmount}
                      onChange={(e) => handleChange(e, setLoanAmount)}
                      className="w-full border-[1px] border-solid border-gray-200 rounded-md p-2"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                  <label
                      htmlFor="Bank"
                      className="text-[#2A6877] mb-1 font-semibold mt-3"
                    >
                      Phone Number
                    </label>
                  <PhoneInput
                    country={"ca"}
                    value={phoneNumber}
                    countryCodeEditable={false}
                    onChange={(value) => setPhoneNumber(value)}
                  />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="Bank"
                      className="text-[#2A6877] mb-1 font-semibold mt-3"
                    >
                      Bank
                    </label>
                    <input
                      type="text"
                      placeholder="Bank"
                      onChange={(e) => setBank(e.target.value)}
                      className="w-full border-[1px] border-solid border-gray-200 rounded-md p-2"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="Province"
                      className="text-[#2A6877] mb-1 font-semibold mt-3"
                    >
                      Province
                    </label>
                    <input
                      type="text"
                      placeholder="Province"
                      onChange={(e) => setProvince(e.target.value)}
                      className="w-full border-[1px] border-solid border-gray-200 rounded-md p-2"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="income-source"
                      className="text-[#2A6877] mb-1 font-semibold mt-3"
                    >
                      Income Source
                    </label>
                    <select
                      id="income-source"
                      onChange={(e) => setIncomeSource(e.target.value)}
                      className="w-full border-[1px] border-solid border-gray-200 rounded-md p-2"
                      required
                    >
                      <option>Select an Option</option>
                      <option value="job-income">Job Income</option>
                      <option value="self-employed">Self-Employed</option>
                      <option value="benefits">Benefits</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="Monthly Income"
                      className="text-[#2A6877] mb-1 font-semibold mt-3"
                    >
                      Monthly Income
                    </label>
                    <input
                      type="text"
                      placeholder="Monthly Income"
                      value={income}
                      onChange={(e) => handleChange(e, setIncome)}
                      className="w-full border-[1px] border-solid border-gray-200 rounded-md p-2"
                      required
                    />
                  </div>

                  <div className="flex flex-col w-full mt-3">
                    <label
                      htmlFor="income-source"
                      className="text-[#2A6877] mb-1 font-semibold mt-3"
                    >
                      Do you Rent or Own a Home?
                    </label>
                    <select
                      id="income-source"
                      onChange={(e) => setHomeStatus(e.target.value)}
                      className="w-full border-[1px] border-solid border-gray-200 rounded-md p-2"
                      required
                    >
                      <option>Select an Option</option>
                      <option value="Owns House">I own a House</option>
                      <option value="Rents House">I am renting a house</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className={`w-full mt-5 bg-[#2a6877] py-2 text-white rounded-md flex items-center justify-center ${
                      loading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Spinner color="light" size="sm" />
                        <span className="ml-2">Loading...</span>
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </form>
              </div>
            </ModalBody>
          </Modal>

          <Modal
            isOpen={successModal}
            toggle={handleCloseSuccess}
            className="w-[95%] lg:w-[400px]"
          >
            <ModalHeader toggle={handleCloseSuccess}>Success</ModalHeader>
            <ModalBody>
              <p className="text-center text-lg font-semibold">
                Your form has been submitted successfully!
              </p>
              <button
                onClick={handleCloseSuccess}
                className="w-full mt-5 bg-[#2a6877] py-2 text-white rounded-md"
              >
                Close
              </button>
            </ModalBody>
          </Modal>

          {/* Error Modal */}
          <Modal
            isOpen={errorModal}
            toggle={toggleErrorModal}
            className="w-[95%] lg:w-[400px]"
          >
            <ModalHeader toggle={toggleErrorModal}>Error</ModalHeader>
            <ModalBody>
              <p className="text-center text-lg font-semibold">
                There was an error submitting your form. Please try again.
              </p>
              <button
                onClick={toggleErrorModal}
                className="w-full mt-5 bg-red-600 py-2 text-white rounded-md"
              >
                Close
              </button>
            </ModalBody>
          </Modal>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Homepage;
