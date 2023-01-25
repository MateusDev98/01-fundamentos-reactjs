import styles from "./Avatar.module.css";

export function Avatar(props) {
  const { name, role, infoPlacement } = props;
  return (
    <div
      className={
        infoPlacement === "bottom" ? styles.bottom : `${styles.profile}`
      }
    >
      {infoPlacement === "start" && (
        <>
          <div className={styles.defaultPlacement}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/44756508?v=4"
            alt=""
          />
        </>
      )}
      {infoPlacement !== "start" && infoPlacement && (
        <>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/44756508?v=4"
            alt=""
          />
          <div className={styles.defaultPlacement}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </>
      )}
      {!infoPlacement && (
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/44756508?v=4"
          alt=""
        />
      )}
    </div>
  );
}
/* Quando imagens são um input do usuário (dinamica baseado em cada user da aplicação) não colocamos texto alternativo " alt='' "  */
