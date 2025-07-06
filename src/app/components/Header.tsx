function Header() {
    return (
      <header className="flex justify-between items-center w-full pt-8 px-12">
        <span className="text-gray-200 font-mono text-lg">IN 01:42</span>
        <span className="text-gray-400 flex items-center gap-1">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="inline-block"><circle cx="12" cy="12" r="10" stroke="#A3A3A3" strokeWidth="2"/></svg>
          Mumbai, India
        </span>
      </header>
    );
  }

export default Header;