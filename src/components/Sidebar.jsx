import { PencilSimpleLine } from "phosphor-react";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt=""
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/44756508?v=4"
          alt=""
        />
        {/* Quando imagens são um input do usuário (dinamica baseado em cada user da aplicação) não colocamos texto alternativo " alt='' "  */}
        <strong>John Doe</strong>
        <span>Web developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilSimpleLine size={20} weight="bold" /> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
