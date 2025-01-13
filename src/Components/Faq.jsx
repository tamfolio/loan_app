import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "How much can I borrow with a payday loan from NullDebt?",
      content: `You can borrow up to $50,000, depending on your eligibility and financial needs. Our flexible options ensure you get the amount that suits your situation.`,
    },
    {
      title: "How long does the approval process take?",
      content:
        "Answer: The approval process is quick and straightforward. Once you submit your application, you can receive a decision within minutes, and funds are typically transferred within 24 hours after approval.",
    },
    {
      title: "Will my credit score affect my application?",
      content: `Not necessarily. We work with clients of all credit backgrounds, including those with bad credit or no credit history. Our focus is on your ability to repay, not just your credit score. `,
    },
    {
      title: "Are there any hidden fees or penalties for early repayment?",
      content: `No, there are no hidden fees or penalties for early repayment. We prioritize transparency to ensure you fully understand your loan terms and have flexibility in repaying early if you choose`,
    },
    {
      title: "Application Requirements",
      content: `<ul>
              <li>Must be a Canadian resident.</li>
              <li>At least 18 years of age.</li>
              <li>Have a stable income source.</li>
              <li>Possess a valid bank account.</li>
            </ul>`,
    },
  ],
};

const styles = {
  bgColor: "transparent",
  titleTextColor: "#2A6877",
  rowTitleColor: "#0a0a0a",
  rowContentColor: "#535353",
  // arrowColor: "red",
  rowContentPaddingTop: "10px",
  rowContentPaddingBottom: "10px",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};


function FaqSection() {
  return (
    <div className="w-full h-auto py-20 gradient flex flex-col items-center justify-center px-[20px] lg:px-[80px]">
      <h1 className="text-[#2A6877] text-2xl font-bold mb-20">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-[300px] flex flex-col items-start justify-start">
          <h1 className="text-[20px] lg:text-[40px] text-[#0a0a0a] font-bold mb-[20px] lg:mb-[40px] text-center lg:text-left">
            Got questions? We are here to assist!
          </h1>
          <p className="text-[#535353] text-center lg:text-left ">
            Send us an email at{" "}
            <span className="text-[#0a0a0a] underline">
              example@nulldebt.com
            </span>
          </p>
        </div>
        <div className="flex gap-[90px] w-full lg:w-[700px] flex-wrap">
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
