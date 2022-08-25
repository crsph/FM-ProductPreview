import styles from "../styles/Button.module.scss";
import cartLogo from "../public/icon-cart.svg";
import Image from "next/image";

export default function Button() {
  return (
    <button className={styles["button"]}>
      <Image src={cartLogo} alt="#" />
      <p>Add to Cart</p>
    </button>
  );
}
