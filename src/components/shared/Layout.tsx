import { Outlet } from "react-router-dom";
import Slidebar from "./Slidebar";
import Header from "./Header";

function Layout() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Slidebar />
      <div className="flex-1">
        <Header />
        <div className="p-4">{<Outlet />}</div>
      </div>
    </div>
  );
}

export default Layout;
