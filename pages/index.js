import Head from "next/head";
import Image from "next/image";
import { getProduct } from "../lib/products";
import mobileImage from "../public/image-product-mobile.jpg";
import desktopImage from "../public/image-product-desktop.jpg";
import Button from "../components/button";
import styles from "../styles/Home.module.scss";
import useWindowDimension from "../utils/window-dimension";

export default function Home({ productData }) {
  const { width } = useWindowDimension();
  const productImage = width <= 390 ? mobileImage : desktopImage;

  return (
    <div className={styles["container"]}>
      <Head>
        <title>FM Product preview</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className={styles["main-container"]}>
        <div className={styles["image-container"]}>
          <Image
            src={productImage}
            alt="Picture of chanel perfume"
            layout="responsive"
            priority
          />
        </div>

        <div className={styles["product-card-container"]}>
          <p className={styles["product-card-container__label"]}>
            {productData.label}
          </p>
          <p className={styles["product-card-container__title"]}>
            {productData.title}
          </p>
          <p className={styles["product-card-container__description"]}>
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
