import { Outlet } from "react-router-dom";
import HeaderComponent from "./wrap/HeaderComponent";
import SideComponent from "./wrap/SideComponent";
import ToolComponent from "./wrap/ToolComponent";

export default function WrapComponent() {
  return (
    <div id="wrap" className="wrap">
      <HeaderComponent />
      <SideComponent />
      <Outlet />   {/* Main 영역 */}
      <ToolComponent />
    </div>
  );
}
