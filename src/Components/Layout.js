import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <div>
      {/* Header before all routes */}
      <Header />
      {/* <Outlet> renders whatever child route is currently active in `App.js` */}
      <Outlet />
      {/* Footer after all routes */}
      <Footer />
    </div>
  );
}

export default Layout;
