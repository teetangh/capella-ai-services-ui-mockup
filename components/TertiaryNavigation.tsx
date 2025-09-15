export default function TertiaryNavigation() {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex flex-wrap gap-2 text-xs">
        <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
          Operational
        </button>
        <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
          Columnar
        </button>
        <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
          App Services
        </button>
        <div className="relative">
          <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded flex items-center gap-1">
            <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
            AI Services
          </button>
          <span className="absolute -top-1 -right-1 px-1 py-0.5 bg-orange-100 text-orange-600 text-xs rounded font-medium leading-none">PREVIEW</span>
        </div>
        <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
          Projects
        </button>
        <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
          People
        </button>
        <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
          Teams
        </button>
        <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
          Billing
        </button>
        <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
          Support
        </button>
        <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
          Settings
        </button>
      </div>
    </nav>
  );
}