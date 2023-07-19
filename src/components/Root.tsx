 import SidebarLayout from "./UI/Layouts/SidebarLayout";
import Navigation from "./UI/Navigation";
import { Outlet } from "react-router-dom";
function Root() {
  return <SidebarLayout lSidebar={<Navigation />} mainContent={<Outlet />} />;
}

export default Root;
