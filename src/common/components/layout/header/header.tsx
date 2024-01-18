import { Link } from "react-router-dom";
import { ThemeSwitch } from "../../themeSwitch/themeSwitch";
import styles from "./header.module.scss";
import classNames from "classnames";
export const Header = (props: Props) => {
  const { className } = props;

  return (
    <div className={classNames(className, styles.container)}>
      <ul>
        <li>
          <Link to="/">Pokemon App</Link>
        </li>
        <li>
          <Link to="/" className={styles.home}>
            Home
          </Link>
        </li>
        <li>
          <ThemeSwitch />
        </li>
      </ul>
    </div>
  );
};

interface Props {
  className: string;
}
