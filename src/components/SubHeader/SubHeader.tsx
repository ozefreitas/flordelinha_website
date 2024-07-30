import styles from "./subheader.module.css";

interface Subheaderprops {
  isSubHeaderOpen: {
    baby: boolean;
    flowers: boolean;
    accessories: boolean;
    angels: boolean;
  };
}

export default function SubHeader({ isSubHeaderOpen }: Subheaderprops) {
  return (
    <div id="subheader" className={styles.flexContainer}>
      <div
        className={`${styles.mainSubHeaderContainer} ${
          isSubHeaderOpen.baby ||
          isSubHeaderOpen.flowers ||
          isSubHeaderOpen.accessories ||
          isSubHeaderOpen.angels
            ? styles.open
            : ""
        }`}
      ></div>
    </div>
  );
}
