import styles from "./subheader.module.css";
import { Link } from "react-router-dom";

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
              !isSubHeaderOpen.baby
                ? styles.notShow
                : `${styles.show} ${styles.fade_in}`
            }`}
          >
            <div>
              <Link>Prendedor de Chupetas</Link>
            </div>
            <div>
              <Link>Chocalhos</Link>
            </div>
            <div>
              <Link>Peluches Pequenos</Link>
            </div>
            <div>
              <Link>Botinhas/Sapatinhos</Link>
            </div>
            <div>
              <Link>Meias</Link>
            </div>
          </div>
          <div
            id="flowerssubcategories"
            className={`${styles.subCategories} ${
              !isSubHeaderOpen.flowers
                ? styles.notShow
                : `${styles.show} ${styles.fade_in}`
            }`}
          >
            <div>
              <Link>Tulipas</Link>
            </div>
            <div>
              <Link>Rosas</Link>
            </div>
            <div>
              <Link>Girassóis</Link>
            </div>
            <div>
              <Link>Lavanda</Link>
            </div>
            <div>
              <Link>Dálias</Link>
            </div>
            <div>
              <Link>Gerberas</Link>
            </div>
            <div>
              <Link>Margaridas</Link>
            </div>
          </div>
          <div
            id="accessoriessubcategories"
            className={`${styles.subCategories} ${
              !isSubHeaderOpen.accessories
                ? styles.notShow
                : `${styles.show} ${styles.fade_in}`
            }`}
          >
            <div>
              <Link>Prendedores de Cabelo</Link>
            </div>
            <div>
              <Link>Carros</Link>
            </div>
            <div>
              <Link>Canídeos</Link>
            </div>
          </div>
          <div
            id="angelssubcategories"
            className={`${styles.subCategories} ${
              !isSubHeaderOpen.angels
                ? styles.notShow
                : `${styles.show} ${styles.fade_in}`
            }`}
          >
            <div>
              <Link>Amigurumis</Link>
            </div>
            <div>
              <Link>Peluches</Link>
            </div>
            <div>
              <Link>Desmontáveis</Link>
            </div>
            <div>
              <Link>Personalizados</Link>
            </div>
            <div>
              <Link>Artigos Únicos</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
