// Types from `react`!
import { FunctionComponent, PropsWithChildren } from "react";

// Types from `vite/client`!
import styles from "./Container.module.css";

export const Container: FunctionComponent<PropsWithChildren> = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};
