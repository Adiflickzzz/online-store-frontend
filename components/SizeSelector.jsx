import React from "react";

const SizeSelector = () => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <div className="text-base font-bold">Select Size</div>
        <div className="text-base font-semibold text-black/[0.5] cursor-pointer ">
          Select Guide
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 py-2">
        {/* <div className="border rounded-xl text-center py-3 font-medium hover:border-black/[0.5] hover:bg-slate-100 hover:scale-105 transition-all duration-200 cursor-pointer">
          UK 6
        </div>
        <div className="border rounded-xl text-center py-3 font-medium hover:border-black/[0.5] hover:bg-slate-100 hover:scale-105 transition-all duration-200 cursor-pointer">
          UK 6.5
        </div>
        <div className="border rounded-xl text-center py-3 font-medium hover:border-black/[0.5] hover:bg-slate-100 hover:scale-105 transition-all duration-200 cursor-pointer">
          UK 7
        </div>
        <div className="border rounded-xl text-center py-3 font-medium hover:border-black/[0.5] hover:bg-slate-100 hover:scale-105 transition-all duration-200 cursor-pointer">
          UK 7.5
        </div>
        <div className="border rounded-xl text-center py-3 font-medium hover:border-black/[0.5] hover:bg-slate-100 hover:scale-105 transition-all duration-200 cursor-pointer">
          UK 8
        </div>
        <div className="border rounded-xl text-center py-3 font-medium hover:border-black/[0.5] hover:bg-slate-100 hover:scale-105 transition-all duration-200 cursor-pointer">
          UK 8.5
        </div>
        <div className="border rounded-xl text-center py-3 font-medium hover:border-black/[0.5] hover:bg-slate-100 hover:scale-105 transition-all duration-200 cursor-pointer">
          UK 9
        </div>
        <div className="border rounded-xl text-center cursor-not-allowed py-3 font-medium bg-black/[0.1] opacity-50">
          UK 9.5
        </div>
        <div className="border rounded-xl text-center cursor-not-allowed py-3 font-medium bg-black/[0.1] opacity-50">
          UK 10
        </div>
        <div className="border rounded-xl text-center cursor-not-allowed py-3 font-medium bg-black/[0.1] opacity-50">
          UK 10.5
        </div> */}
      </div>
    </div>
  );
};

export default SizeSelector;
