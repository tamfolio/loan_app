function CreditCheck() {
  return (
    <div className="bg-white w-full flex flex-col items-center justify-center px-[20px] text-center lg:px-[80px] gap-[40px] py-[80px] border-solid border-[2px] border-muted">
      <h1 className="text-[32px] lg:text-[60px] text-[#2A6877] font-extrabold">
        Get your Equifax Credit Score for free
      </h1>
      <a
        href="https://cmi.rocks/go/67b8b9159014f?aff_utm_source=fb&aff_utm_medium=call&aff_utm_campaign=b2c&aff_utm_content=DA"
        target="blank"
      >
        <span className="bg-[#2a6877] text-white py-2 px-3 rounded-md text-[24px]">
          Start Here
        </span>
      </a>
    </div>
  );
}

export default CreditCheck;
