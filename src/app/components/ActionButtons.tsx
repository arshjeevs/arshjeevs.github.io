function ActionButtons() {
    return (
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
        <button className="bg-[#232323] text-pink-400 px-6 py-3 rounded-lg flex items-center gap-2 font-medium hover:bg-[#2a2a2a] border border-[#232323]">
          <span className="w-2 h-2 bg-pink-400 rounded-full inline-block"></span>
          Available for new opportunities
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke="#A3A3A3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button className="bg-[#232323] text-gray-200 px-6 py-3 rounded-lg flex items-center gap-2 font-medium hover:bg-[#2a2a2a] border border-[#232323]">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 17v-6m0 0V7m0 4h4m-4 0H8" stroke="#A3A3A3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Download CV
        </button>
      </div>
    );
  }

export default ActionButtons;