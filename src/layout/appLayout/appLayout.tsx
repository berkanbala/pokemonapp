import { Outlet } from "react-router-dom";
import { Footer } from "../../common/components/layout/footer/footer";
import { Header } from "../../common/components/layout/header/header";
import styles from "./appLayout.module.scss";
export const AppLayout = () => {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <div className={styles.outlet}>
        <Outlet />
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};
