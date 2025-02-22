import { FaRegCheckCircle, FaSearchLocation } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { BsDatabaseFillLock } from "react-icons/bs";
// import { useState } from "react";
// import { FaCircleDollarToSlot, FaArrowRight } from "react-icons/fa6";
// import { Modal, ModalBody, ModalHeader, Spinner } from "reactstrap";
// import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

function Homepage() {
  // const [loanAmount, setLoanAmount] = useState("");
  // const [income, setIncome] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [bank, setBank] = useState("");
  // const [province, setProvince] = useState("");
  // const [incomeSource, setIncomeSource] = useState("");
  // const [homeStatus, setHomeStatus] = useState("");
  // const [modal, setModal] = useState(false);
  // const [successModal, setSuccessModal] = useState(false);
  // const [errorModal, setErrorModal] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [phoneNumber, setPhoneNumber] = useState("");

  // const toggleSuccessModal = () => setSuccessModal(!successModal);
  // const toggleErrorModal = () => setErrorModal(!errorModal);

  // const toggle = () => setModal(!modal);

  // const gmtDateTime = new Date().toUTCString();

  // const handleChange = (e, setState) => {
  //   // Get raw input value and strip non-numeric characters except commas
  //   let rawValue = e.target.value.replace(/[^0-9]/g, "");

  //   // Update state with the formatted value
  //   if (rawValue) {
  //     let formattedValue = new Intl.NumberFormat("en-US", {
  //       style: "currency",
  //       currency: "USD",
  //       minimumFractionDigits: 0,
  //     }).format(rawValue);
  //     setState(formattedValue); // Use the passed state setter function
  //   } else {
  //     setState(""); // Allow empty input
  //   }
  // };

  // const handleCloseSuccess = () => {
  //   resetFormData(); // Reset form data when closing the success modal
  //   toggleSuccessModal(); // Close the success modal
  // };

  // const resetFormData = () => {
  //   setLoanAmount("");
  //   setIncome("");
  //   setFirstName("");
  //   setLastName("");
  //   setEmail("");
  //   setBank("");
  //   setProvince("");
  //   setPhoneNumber("");
  //   setIncomeSource("");
  //   setHomeStatus("");
  // };

  // const formatPhoneNumber = (phone) => {
  //   const cleaned = phone.replace(/\D/g, "");
  //   const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/);
  //   if (match) {
  //     return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
  //   }
  //   return phone;
  // };

  // const cleanPhoneNumber = phoneNumber.replace(/[^\d+]/g, "");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formData = {
  //     firstName,
  //     lastName,
  //     email,
  //     loanAmount,
  //     bank,
  //     province,
  //     incomeSource,
  //     income,
  //     phoneNumber: cleanPhoneNumber,
  //     homeStatus,
  //     timestamp: gmtDateTime,
  //   };

  //   setLoading(true);
  //   try {
  //     await fetch("https://nulldebt-backend.onrender.com/proxy", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (window.fbq) {
  //       window.fbq("track", "Lead", {
  //         content_name: `${email} ${firstName} ${cleanPhoneNumber}`,
  //         value: loanAmount.replace(/[^0-9]/g, ""),
  //         currency: "USD",
  //       });
  //     }

  //     toggleSuccessModal();
  //     resetFormData();
  //     toggle();
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     toggleErrorModal();
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="w-[100%] h-auto min-h-[50vh] lg:min-h-[90vh] bg-white px-[20px] py-[60px] lg:!py-[100px] flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-center gap-10">
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl lg:text-6xl text-[#2A6877] font-bold w-full lg:w-[900px] text-center lg:!text-center">
          Fast. Flexible. Reliable Payday Loans for Canadians
        </p>

        <p className="text-xl lg:text-2xl font-semibold mt-3 text-center lg:!text-center w-[100%] lg:mb-10">
          Apply Now and Get up to $50,000!
        </p>
        <div className="mt-10 hidden lg:flex flex-col lg:flex-row gap-5 justify-center items-center">
          <div className="flex items-center justify-start gap-2 w-[200px]">
            <FaRegCheckCircle className="fill-[#2A6877]" size={30} />
            <p className="font-semibold">Fast Approvals</p>
          </div>
          <div className="flex items-center justify-start gap-2 w-[300px]">
            <FaCalendarDays className="fill-[#2A6877]" size={30} />
            <p className="font-semibold">Flexible Repayment Options</p>
          </div>
        </div>
        <div className="mt-3 hidden lg:flex flex-col lg:flex-row gap-5 justify-start">
          <div className="flex items-center justify-start gap-2 w-[200px]">
            <BsDatabaseFillLock className="fill-[#2A6877]" size={30} />
            <p className="font-semibold">Secure and Private</p>
          </div>
          <div className="flex items-center justify-start gap-2 w-[300px]">
            <FaSearchLocation className="fill-[#2A6877]" size={30} />
            <p className="font-semibold">Accessible Anywhere in Canada</p>
          </div>
        </div>
        <Link to='/get-started?source=fb&amount=500&affiliate_sub1=b2c&affiliate_sub2=calls' className="mt-5 lg:mt-10">
          <span className="bg-[#2A6877] text-white px-5 py-2 font-semibold rounded-md ">
            Get Started
          </span>
        </Link>
      </div>
      {/* <div className="w-[full] lg:!w-[400px]">
        <LeadScoutForm/>
      </div> */}
    </div>
  );
}

export default Homepage;
