export default function PrimaryNavbar() {
  return (
    <header className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className="font-semibold text-lg">CAPELLA</span>
        </div>
      </div>

      <div className="flex-1 max-w-md mx-4 lg:mx-8 hidden sm:block">
        <div className="relative">
          <input
            type="text"
            placeholder="Search   Capella"
            className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-2 rounded-md pl-10"
          />
          <div className="absolute left-3 top-2.5">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-6">
        <nav className="hidden lg:flex items-center gap-6">
          <a href="#" className="text-gray-300 hover:text-white">Playground</a>
          <a href="#" className="text-gray-300 hover:text-white">Feedback</a>
          <a href="#" className="text-gray-300 hover:text-white flex items-center gap-1">
            Help
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-white flex items-center gap-1">
            Resource Center
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button className="lg:hidden p-2 text-gray-300 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
          <span className="text-white font-medium text-sm">RA</span>
        </div>
      </div>
    </header>
  );
}