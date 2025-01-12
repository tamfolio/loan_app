import Navbar from "./Navbar";

function TermsAndConditions() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col px-10">
        <div className="flex items-center justify-center">
        <h1 className="text-2xl text-black font-bold">Terms & Conditions</h1>
        <p>
          Welcome to NullDebt. By using our service, you acknowledge and agree
          to the following terms and conditions. Please read them carefully
          before proceeding.
        </p>
        </div>
        

        <div>
          <h2 className="text-left font-bold">1. Broker, Not a Lender</h2>
          <p>
            NullDebt operates as a broker, not a lender. This means that we do
            not make credit decisions, offer loans, or issue financial products.
            Our service connects you with lenders and service providers who can
            provide the financial solutions you seek. NullDebt is not the
            creditor or issuer of any products featured on this platform.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
