
import PrimaryNavbar from '../components/PrimaryNavbar';
import SecondaryNavigation from '../components/SecondaryNavigation';
import TertiaryNavigation from '../components/TertiaryNavigation';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Primary Navigation */}
      <PrimaryNavbar />

      {/* Secondary Navigation - CBC-DEV */}
      <SecondaryNavigation />

      {/* Tertiary Navigation - Service Tabs */}
      <TertiaryNavigation />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Top Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
              {/* Integrate Agent App */}
              <a href="/agent" className="block bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="6" height="6" rx="1"/>
                    <rect x="15" y="3" width="6" height="6" rx="1"/>
                    <rect x="3" y="15" width="6" height="6" rx="1"/>
                    <rect x="15" y="15" width="6" height="6" rx="1"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Integrate your Agent app</h3>
                <p className="text-gray-600 text-sm">
                  Power your agents with a secure, high-performance memory store and operational layer designed for scale.
                </p>
              </a>

              {/* Get Started with RAG Apps */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <circle cx="12" cy="12" r="8"/>
                    <circle cx="12" cy="8" r="2"/>
                    <path d="M12 14v4"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Get started with RAG Apps</h3>
                <p className="text-gray-600 text-sm">
                  Power fast scalable RAG apps with automated embedding and vector indexing.
                </p>
              </div>

              {/* Semantic Search */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Get Started with Semantic Search</h3>
                <p className="text-gray-600 text-sm">
                  Enable lightning-fast, semantically rich search across billions of vectors with Capella&apos;s Hyperscale Vector Index.
                </p>
              </div>
            </div>

            {/* Accelerate Your AI Journey */}
            <div className="mb-6 lg:mb-8">
              <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-900">Accelerate Your AI Journey</h2>
              <div className="flex flex-wrap gap-2 lg:gap-4">
                <button className="px-3 lg:px-4 py-2 bg-blue-600 text-white rounded border hover:bg-blue-700 text-sm lg:text-base">Workflow 1 →</button>
                <button className="px-3 lg:px-4 py-2 bg-blue-600 text-white rounded border hover:bg-blue-700 text-sm lg:text-base">Workflow 2 →</button>
                <button className="px-3 lg:px-4 py-2 bg-blue-600 text-white rounded border hover:bg-blue-700 text-sm lg:text-base">Workflow 3 →</button>
                <button className="px-3 lg:px-4 py-2 bg-blue-600 text-white rounded border hover:bg-blue-700 text-sm lg:text-base">Workflow 4 →</button>
              </div>
            </div>

            {/* Platform Capabilities */}
            <div className="mb-6 lg:mb-8">
              <h2 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6 flex items-center gap-2 text-gray-900">
                <span className="text-xl lg:text-2xl">✨</span>
                Platform Capabilities
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                {/* Hyperscale Vector Index */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">Hyperscale Vector Index</h3>
                      <p className="text-gray-600 text-sm">Information about this capability here in less than 2 lines to help user make decision.</p>
                    </div>
                  </div>
                </div>

                {/* Model Service */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">Model Service</h3>
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded font-medium">New</span>
                      </div>
                      <p className="text-gray-600 text-sm">Information about this capability here in less than 2 lines to help user make decision.</p>
                    </div>
                  </div>
                </div>

                {/* AI Functions */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">AI Functions</h3>
                      <p className="text-gray-600 text-sm">Information about this capability here in less than 2 lines to help user make decision.</p>
                    </div>
                  </div>
                </div>

                {/* Agent Catalog */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">Agent Catalog</h3>
                      <p className="text-gray-600 text-sm">Information about this capability here in less than 2 lines to help user make decision.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sample Applications */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-900">
                  <span className="text-2xl">📁</span>
                  Sample Applications
                </h2>
                <a href="#" className="text-blue-600 hover:underline text-sm font-medium">View community apps</a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Sample 1 */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition-colors">
                  <h3 className="font-semibold mb-2 text-gray-900">Sample 1</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Store and query vector embeddings at scale. Built-in support for semantic search and similarity matching.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded font-medium">Vectorization</span>
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded font-medium">Model</span>
                  </div>
                </div>

                {/* Sample 2 */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition-colors">
                  <h3 className="font-semibold mb-2 text-gray-900">Sample 2</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Build production-ready retrieval augmented generation apps with our optimized RAG framework.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-medium">AI Functions</span>
                  </div>
                </div>

                {/* Sample 3 */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition-colors">
                  <h3 className="font-semibold mb-2 text-gray-900">Sample 3</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Information about this capability here in less than 2 lines to help user make decision.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded font-medium">Vectorization</span>
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded font-medium">Model</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
                Developer Portal 
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
                Github 
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
                Documentation 
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
