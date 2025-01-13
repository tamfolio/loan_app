function HowItWorks() {
  return (
    <div className="w-full h-auto py-10 lg:py-20 bg-white flex flex-col items-center justify-center lg:px-[80px] px-[20px]">
      <h1 className="text-[#2A6877] text-2xl font-bold">How it Works</h1>
      <p className="mb-20 text-center lg:!text-left">
        Step by Step guide on how to access loans from Nulldebt
      </p>
      <div className="flex items-start justify-start w-[100%]">
        <div className="flex items-start lg:items-center justify-start gap-6">
          <span className="font-bold text-[#2A6877] text-[25px] lg:text-[65px] border-solid border-[5px] border-[#2a6877] px-2 lg:px-4 rounded-md lg:rounded-xl">01</span>
          <div>
            <h1 className="text-2xl font-bold mb-2 lg:mb-4">Apply Online</h1>
            <p>
              Fill out our quick and easy application form; it only takes a few
              minutes.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-[100%] mt-10">
        <div className="flex items-start lg:items-center justify-start gap-6">
          <span className="font-bold text-[#2A6877] text-[25px] lg:text-[65px] border-solid border-[5px] border-[#2a6877] px-2 lg:px-4 rounded-md lg:rounded-xl">02</span>
          <div>
            <h1 className="text-2xl font-bold mb-2 lg:mb-4">Get Approved</h1>
            <p>
            We&apos;ll review your application and provide instant feedback.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-end w-[100%] mt-10">
        <div className="flex items-start lg:items-center justify-start gap-6">
          <span className="font-bold text-[#2A6877] text-[25px] lg:text-[65px] border-solid border-[5px] border-[#2a6877] px-2 lg:px-4 rounded-md lg:rounded-xl">03</span>
          <div>
            <h1 className="text-2xl font-bold mb-2 lg:mb-4">Receive Your Funds</h1>
            <p>
            Once approved, your funds will be transferred directly to your account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
