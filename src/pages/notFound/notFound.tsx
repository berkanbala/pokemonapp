import styles from "./notFound.module.scss";
import Psyduck from "../../common/media/images/psyduck.png";
export const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404 Page Not Found</h1>
      <div className={styles.content}>
        <div className={styles.image}>
          <img alt="Pokemon Not Found" src={Psyduck} width={400} height={550} />
        </div>
      </div>
    </div>
  );
};
