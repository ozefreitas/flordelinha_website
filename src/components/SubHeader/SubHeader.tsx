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
  console.log(isSubHeaderOpen);
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
      >
        <div className={styles.smallerFormattingContainer}>
          <div
            id="babysubcategories"
            className={`${styles.subCategories} ${
              !isSubHeaderOpen.baby ? styles.notShow : `${styles.show} ${styles.fade_in}`
            }`}
          >
            <div>Prendedor de Chupetas</div>
            <div>Chocalhos</div>
            <div>Peluches Pequenos</div>
            <div>Botinhas/Sapatinhos</div>
            <div>Meias</div>
          </div>
          <div
            id="flowerssubcategories"
            className={`${styles.subCategories} ${
              !isSubHeaderOpen.flowers ? styles.notShow : `${styles.show} ${styles.fade_in}`
            }`}
          >
            <div>Tulipas</div>
            <div>Rosas</div>
            <div>Girassóis</div>
            <div>Lavanda</div>
            <div>Dálias</div>
            <div>Gerberas</div>
            <div>Margaridas</div>
          </div>
          <div
            id="accessoriessubcategories"
            className={`${styles.subCategories} ${
              !isSubHeaderOpen.accessories ? styles.notShow : `${styles.show} ${styles.fade_in}`
            }`}
          ></div>
          <div
            id="angelssubcategories"
            className={`${styles.subCategories} ${
              !isSubHeaderOpen.angels ? styles.notShow : `${styles.show} ${styles.fade_in}`
          }`}
          ></div>
        </div>
      </div>
    </div>
  );
}
