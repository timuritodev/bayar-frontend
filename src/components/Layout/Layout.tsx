import { useRouter } from 'next/router';
import { FC, ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      {router.pathname === '/' ?
        <div>{children}</div>
        : <>
          <Header />
          <div>{children}</div>
          <Footer />
        </>}
    </div>
  );
};

export default Layout;
