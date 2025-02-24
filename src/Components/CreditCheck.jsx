import { CreditCard, Lock, ArrowRight } from 'lucide-react';

const CreditCheck = () => {
  return (
    <div className="relative w-full lg:w-96 overflow-hidden creditcard">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/creditscore.jpg" 
          alt="Background pattern" 
          className="object-cover w-full h-full opacity-60"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 bg-gradient-to-br from-white/90 to-teal-50/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Header Section */}
        <div className="flex items-center justify-center mb-4">
          <CreditCard className="w-8 h-8 text-[#2A6877] mr-2" />
          <h1 className="text-xl font-bold text-gray-800">
            Free Credit Score Check
          </h1>
        </div>

        {/* Main Content */}
        <div className="text-center mb-6">
          <p className="text-gray-600 mb-4">
            Get your Equifax Credit Score instantly
          </p>
          
          {/* Features */}
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex items-center justify-center text-gray-700">
              <Lock className="w-4 h-4 mr-2 text-[#2A6877]" />
              <span>100% Secure & Confidential</span>
            </div>
            <div className="text-sm text-gray-500">No Credit Card Required</div>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="https://cmi.rocks/go/67b8b9159014f?aff_utm_source=fb&aff_utm_medium=call&aff_utm_campaign=b2c&aff_utm_content=DA"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center bg-[#2A6877] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#1d4a54] transition-colors duration-300 w-full max-w-xs"
        >
          Check Your Score
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </a>

        {/* Trust Indicators */}
      </div>
    </div>
  );
};

export default CreditCheck;