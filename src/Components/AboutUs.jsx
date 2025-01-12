function AboutUs() {
  return (
    <div className="w-full h-auto py-20 gradient flex flex-col items-center justify-center px-[20px] lg:px-[150px]">
      <h1 className="text-[#2A6877] text-3xl font-bold mb-20">About us</h1>
      <div className="flex flex-col lg:flex-row items-start justify-center gap-20">
        <div className="flex flex-col w-full lg:w-[50%]">
          <p className="mb-10 font-semibold">
            Welcome to <span className="text-[#2A6877]">NullDebt</span>, your trusted partner in financial relief and
            empowerment. We specialize in providing tailored payday loan
            solutions to Canadian residents, offering fast, reliable, and
            stress-free access to funds when you need them most. Whether
            you&apos;re covering an unexpected expense, managing a financial
            gap, or planning for life&apos;s next big step, we&apos;re here to
            help you take control of your finances
          </p>
          <p className="mb-10 font-semibold">
            At <span className="text-[#2A6877]">NullDebt</span>, we believe that everyone deserves a chance to thrive
            financially, regardless of their credit history. Our mission is to
            provide accessible and transparent lending options that empower
            individuals to navigate financial challenges with confidence.
          </p>
        </div>
        <div>
            <img src="/assets/about.jpg" alt="" className="w-[500px] rounded-lg"/>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
