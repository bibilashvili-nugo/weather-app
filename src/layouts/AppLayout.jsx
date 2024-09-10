import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <div className="w-full min-h-screen ">
      <Header />
      <main className="pl-14">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
