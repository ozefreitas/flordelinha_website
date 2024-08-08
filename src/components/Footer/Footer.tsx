import styles from "./footer.module.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id="footer" className={styles.mainFooterContainer}>
      <div id="socials" className={styles.socialsContainer}>
        <div id="facebook" className={styles.indivSocial}>
          <FaFacebookSquare size="2rem" color="black"></FaFacebookSquare>
          <Link to="/">Facebook</Link>
        </div>
        <div id="instagram" className={styles.indivSocial}>
          <FaInstagramSquare size="2rem" color="black"></FaInstagramSquare>
          <Link to="/">Instagram</Link>
        </div>
        <div id="whatsapp" className={styles.indivSocial}>
          <FaWhatsappSquare size="2rem" color="black"></FaWhatsappSquare>
          <Link to="/">WhatsApp</Link>
        </div>
      </div>
      <div id="pagelist" className={styles.pageListContainer}>
        <Link>Sobre</Link>
        <Link>Bebé</Link>
        <Link>Flores</Link>
        <Link>Acessórios</Link>
        <Link>Anjinhos</Link>
        <Link>Contactos</Link>
      </div>
      <div id="quickcontacts" className={styles.quickContactsContainer}>
        <span>
          Telemóvel: <p>936472902</p>
        </span>
        <span>
          Email: <p>flordelinha@gmail.com</p>
        </span>
      </div>
      <div id="copyrights" className={styles.copyrightsContainer}>
        Todos os diretos reservados (2024). <br />É proibida a replicação exata
        dos produtos Flor de Linha para venda. Para postagem, deve ser
        mencionado o web site ou uma das redes sociais.
      </div>
    </div>
  );
}
