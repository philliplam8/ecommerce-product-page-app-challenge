// pages/index.tsx

import Head from "next/head";
import { Layout } from "../components/Layout";
import { Product } from "../components/Product";

export default function Home() {
  // Demo Product Details
  const originalPrice: number = 250;
  const discount: number = 50;
  const discountedPrice: number = (originalPrice * discount) / 100;

  return (
    <div>
      <Head>
        <title>Frontend Mentor | E-commerce product page</title>
        <meta
          name="description"
          content="Frontend Mentor - E-Commerce Product Page Challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Product
          company="Sneaker Company"
          name="Fall Limited Edition Sneakers"
          description="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
          originalPrice={originalPrice}
          discount={discount}
          discountedPrice={discountedPrice}
        />
      </Layout>
    </div>
  );
}
