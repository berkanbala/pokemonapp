import classnames from "classnames";
import styles from "./loading.module.scss";

export const Loading = ({ className }: Props) => {
  return (
    <div className={classnames(styles.container, className)}>
      <div className={styles.loadingIcon} />
    </div>
  );
};

interface Props {
  className?: string;
}
