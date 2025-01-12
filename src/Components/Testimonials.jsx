

function Testimonials() {
  return (
    <div className="w-full h-auto py-20 bg-white flex flex-col items-center justify-center">
        <h1 className="text-[#2A6877] text-4xl font-bold mb-20">Testimonials</h1>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
            <div className="w-[300px]">
                <img src="/assets/male-avatar1.jpg" className="w-[100px] h-[100px] rounded-full object-cover mb-5"/>
                <p className="font-medium mb-6">&ldquo;I never thought a payday loan could be so easy and stress-free. Thanks to <span className="text-[#2A6877] font-semibold">NullDebt</span> for their transparency!&rdquo;</p>
                <p className="font-bold">James R.</p>
                <p className="text-gray-400 font-medium">Vancouver</p>
            </div>
            <div className="w-[300px]">
                <img src="/assets/female-avatar.jpg" className="w-[100px] h-[100px] rounded-full object-cover mb-5"/>
                <p className="font-medium mb-6">&ldquo;<span className="text-[#2A6877] font-semibold">NullDebt</span> was a lifesaver! The process was smooth, and I got the funds the same day. Highly recommend!&rdquo;</p>
                <p className="font-bold">Sarah L..</p>
                <p className="text-gray-400 font-medium">Toronto</p>
            </div>
            <div className="w-[300px]">
                <img src="/assets/male-avatar2.jpg" className="w-[100px] h-[100px] rounded-full object-cover mb-5"/>
                <p className="font-medium mb-6">&ldquo;<span className="text-[#2A6877] font-semibold">NullDebt</span> made it so easy to cover my unexpected medical bill. The approval was fast, and the terms were transparent.&rdquo;</p>
                <p className="font-bold">Justin C.</p>
                <p className="text-gray-400 font-medium">Manitoba</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
