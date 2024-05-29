import NavLink from "./nav-link";

// 除了子组件之外，其它内容都是共享的。
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode; // 这里需要传入子组件
}) {
  return (
    <div className="flex min-h-full flex-col bg-gray-100">
      <div className="p-2 bg-slate-600 text-white flex-shrink-0">
        <NavLink />
      </div>
      <div className="flex-1 flex flex-col bg-slate-50 text-slate-950 p-2">
        {/* Main content */}
        {children}
      </div>
    </div>
  );
}
