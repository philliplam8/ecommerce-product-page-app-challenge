// components/Layout.tsx

import { Nav } from "../Nav";
import { Footer } from "../Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <div className="min-h-screen h-full flex flex-col justify-between">
        <div>
          <Nav />
          <main className="max-w-[1180px] m-auto">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
