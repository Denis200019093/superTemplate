import { FC, ReactNode } from "react";

import Header from "../Header";

import "./MainLayout.scss";
import Footer from "layouts/Footer";

interface IProps {
  children: ReactNode;
}

const MainLayout: FC<IProps> = ({ children }) => {
  return (
    <main className="main">
      <div className="main__limited-block">
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
