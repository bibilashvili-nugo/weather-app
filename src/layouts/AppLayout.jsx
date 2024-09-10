import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="w-full min-h-screen pt-9">
      <header className="pl-14">
        <h1>My App Header</h1>
      </header>
      <main className="pl-14">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
