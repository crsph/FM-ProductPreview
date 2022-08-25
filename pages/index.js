import Head from "next/head";
import Image from "next/image";
import { getProduct } from "../lib/products";
import mobileImage from "../public/image-product-mobile.jpg";
import desktopImage from "../public/image-product-desktop.jpg";
import Button from "../components/button";
import styles from "../styles/Home.module.scss";
import useWindowDimension from "../utils/window-dimension";

export default function Home({ productData }) {
  const { width, height } = useWindowDimension();
  const productImage = width <= 375 ? mobileImage : desktopImage;

  return (
    <div className={styles["container"]}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles["preview-container"]}>
        <div className={styles["image-container"]}>
          <Image
            src={productImage}
            alt="Picture of chanel perfume"
            layout="responsive"
            priority
          />
        </div>

        <div className={styles["description-container"]}>
          <p className={styles["product-label"]}>{productData.label}</p>
          <p className={styles["product-title"]}>{productData.title}</p>
          <p className={styles["product-description"]}>
            {productData.description}
          </p>
           <div className={styles["product-price-container"]}>
            <p className={styles["product-price-container__current"]}>
              {productData.currentPrice}
            </p>
            <p className={styles["product-price-container__previous"]}>
              {productData.previousPrice}
            </p>
          </div>

          <Button />
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const productData = await getProduct();

  return {
    props: {
      productData,
    },
  };
}