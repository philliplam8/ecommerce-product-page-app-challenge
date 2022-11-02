// components/Layout.tsx

import { Nav } from "../Nav";
import { Footer } from "../Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Nav />
      <main className="max-w-[1024px] m-auto">{children}</main>
      <Footer />
    </>
  );
}
