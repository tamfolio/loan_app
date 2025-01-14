import Navbar from "./Navbar";

function TermsOfUse() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col px-3 lg:!px-10 items-start justify-center pb-5">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-2xl text-black font-bold">Terms of Use</h1>
          <p className="mb-10 mt-2 text-justify lg:text-center">
            Important Disclosures - Please Review Carefully
          </p>
        </div>
        <p className="mb-3 text-justify">
          For individuals facing serious financial challenges, seeking
          professional financial advice or exploring alternative options may be
          advisable. NullDebt Canada is not a lender. We do not fund customer
          loans or make lending decisions. Rather, we connect prospective
          customers with a network of vetted lenders and lending partners.
          NullDebt Canada neither endorses nor assumes responsibility for the
          actions or policies of any lender or lending partner. We operate
          independently, without acting as a broker or agent for any lender, and
          earn commissions from lenders or partners—often using a model where
          high bidders receive priority for potential customer referrals.
          Importantly, NullDebt Canada services are always free for consumers.
        </p>
        <p className="text-justify mb-3">
          Please note that some lenders in our network may operate under tribal
          regulations, which are subject to federal and tribal law rather than
          state regulations or usury caps. Rates from these lenders may be
          higher, and dispute resolutions may occur in tribal jurisdictions.
          Before accepting a loan, carefully review the terms and conditions
          provided by any lender or lending partner to ensure they are suitable
          for your financial situation. If you are unable to meet repayment
          terms, we encourage you to decline the loan offer.
        </p>

        <div className="mb-3">
          <h2 className="text-left font-bold text-xl">Service Availability</h2>
          <p className="text-justify">
            NullDebt Canada services may not be available in all states. We do
            not connect consumers with lenders or partners in states where
            certain loan types are restricted or where we lack a trusted lending
            partner. Please read and fully understand the terms of any loan
            offered to you, and if you find the terms unsuitable, you are
            encouraged to decline the offer.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-left font-bold text-xl">
            Credit Checks and Authorization
          </h2>
          <p className="text-justify">
            By submitting your information on this website, you authorize
            NullDebt Canada and our partners to conduct credit checks, which may
            involve verifying your Social Security number, driver’s license
            number, or other identification. This may include reviewing your
            credit profile with major bureaus such as Experian, Equifax,
            TransUnion, or alternative credit bureaus. Please note, text
            messaging opt-in data and consent will not be shared with third
            parties.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-left font-bold text-xl">
            Loan Terms Provided by Lenders and Partners
          </h2>
          <p className="text-justify">
            Lenders and lending partners are responsible for presenting loan
            terms, including details on rates, fees, late fees, and options
            (where legally permitted) for renewing, rolling over, or
            refinancing. NullDebt Canada has no involvement in or control over
            the terms offered by lenders in our network. Please ensure you
            review all loan terms carefully, and if repayment terms do not meet
            your needs, consider declining the loan offer.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-left font-bold text-xl">
            Important Note on Credit Impact
          </h2>
          <p className="text-justify">
            Missing or delaying payments may adversely affect your credit score.
            Only consider loan terms you can meet on schedule, and if you
            encounter difficulty making a payment, promptly contact your lender
            or lending partner to discuss alternative arrangements.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsOfUse;
