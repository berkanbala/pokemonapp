import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import classNames from "classnames";
import { ThemeSwitch } from "../themeSwitch/themeSwitch";
export const Header = (props: Props) => {
  const { className } = props;
  return (
    <div className={classNames(className, styles.container)}>
      <ul>
        <li>Pokemon App</li>
        <li>
          <Link to="/">Home</Link>
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
