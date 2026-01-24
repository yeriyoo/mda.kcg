import { Outlet } from "react-router-dom";
import TopComponent from "./main/TopComponent";

export default function MainComponent() {
  return (
    <main id="main">
      <TopComponent />
      <Outlet />
    </main>
  );
}
