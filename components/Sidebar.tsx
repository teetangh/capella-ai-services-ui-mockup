import SidebarSections from './SidebarSections';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen lg:block hidden">
      <div className="p-4">
        <SidebarSections />
      </div>
    </aside>
  );
}