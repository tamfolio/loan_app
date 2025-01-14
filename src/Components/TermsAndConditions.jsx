import Navbar from "./Navbar";

function TermsAndConditions() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col px-3 lg:!px-10 items-start justify-center pb-5">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-2xl text-black font-bold">Terms & Conditions</h1>
          <p className="mb-10 mt-2 text-justify lg:text-center">
            Welcome to NullDebt. By using our service, you acknowledge and agree
            to the following terms and conditions. Please read them carefully
            before proceeding.
          </p>
        </div>

        <div className="mb-3">
          <h2 className="text-left font-bold text-2xl">
            1. Broker, Not a Lender
          </h2>
          <p className="text-justify">
            NullDebt operates as a broker, not a lender. This means that we do
            not make credit decisions, offer loans, or issue financial products.
            Our service connects you with lenders and service providers who can
            provide the financial solutions you seek. NullDebt is not the
            creditor or issuer of any products featured on this platform.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-left font-bold text-2xl">
            2. No Guarantee of Funds
          </h2>
          <p className="text-justify">
            While we strive to connect you with lenders or service providers
            that match your needs, there is no guarantee that you will receive
            funds. Loan approval, terms, and conditions are solely at the
            discretion of the lender or service provider
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-left font-bold text-2xl">
            3. Use of Personal Information
          </h2>
          <p className="text-justify">
            By using this service, you consent to the collection, use, and
            sharing of your personal and financial information as follows:
            <ul
              style={{ listStyleType: "square", color: "black" }}
              className="flex flex-col gap-2 ml-4"
            >
              <li className="mt-2">
                {" "}
                NullDebt may obtain consumer and related information about you
                from one or more consumer reporting agencies to connect you with
                lenders and service providers.
              </li>
              <li>
                Your information may be sent to lenders and/or service providers
                on your behalf to verify your identity, assess your
                debt-to-income ratio, and determine your eligibility for their
                services.
              </li>
              <li>
                Lenders and/or service providers may use this information to
                make prequalification decisions and other credit determinations.
                They may also obtain consumer reports about you from reporting
                agencies.
              </li>
            </ul>
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-left font-bold text-2xl">
            4. Additional Services
          </h2>
          <p className="text-justify">
            Additional products or services displayed on this platform are
            offered solely by the respective vendors or providers. NullDebt is
            not responsible for the quality, terms, or outcomes of these
            additional services. Any agreements made with these third parties
            are at your discretion and are subject to their terms and policies.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-left font-bold text-2xl">
            5. Accuracy of Information
          </h2>
          <p className="text-justify">
            You affirm that all the information you provide through this service
            is accurate, complete, and truthful. Any false or misleading
            information may result in the termination of your application and/or
            refusal of services by lenders or service providers.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-left font-bold text-2xl">6. No Endorsement</h2>
          <p className="text-justify">
            The inclusion of any lender or service provider on this platform
            does not constitute an endorsement or recommendation by NullDebt.
            You are encouraged to review the terms, conditions, and policies of
            any lender or provider before entering into an agreement.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-left font-bold text-2xl">
          7. Limitation of Liability
          </h2>
          <p className="text-justify">
          NullDebt is not responsible for:
            <ul
              style={{ listStyleType: "square", color: "black" }}
              className="flex flex-col gap-2 ml-4"
            >
              <li className="mt-2">
                {" "}
                The decisions or actions of any lender or service provider..
              </li>
              <li>
              Any direct, indirect, or consequential damages resulting from the use of this platform or the services of any third-party provider.
              </li>
            </ul>
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-left font-bold text-2xl">8. Security</h2>
          <p className="text-justify">
            Every endeavor is made to protect your personal information;
            however, we cannot guarantee that personal information will not be
            intercepted or decrypted by others. We accept no responsibility for
            such interception or decryption.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-left font-bold text-2xl">9. Amendments</h2>
          <p className="text-justify">
            NullDebt reserves the right to amend these terms and conditions at
            any time without prior notice. Continued use of this service
            signifies your acceptance of the updated terms.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
