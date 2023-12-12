import styles from "./Avatar.module.css";

// https://avatars.githubusercontent.com/u/44756508?v=4

export function Avatar(props) {
  const { src, hasBorder = true } = props;
  
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt=""
    />
  );
}
/* Quando imagens são um input do usuário (dinamica baseado em cada user da aplicação) não colocamos texto alternativo " alt='' "  */
