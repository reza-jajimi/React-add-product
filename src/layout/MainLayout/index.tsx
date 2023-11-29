import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto min-h-[calc(100vh-280px)] p-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
