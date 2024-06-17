import { useLoader } from '@/context/LoaderContext';
import styles from './loader.module.css';

type LoaderPropsType = {
  children?: React.ReactNode;
};
export default function Loader(props: LoaderPropsType) {
  const { children } = props;

  const { isShow } = useLoader();

  if (!isShow) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}></div>
      {children}
    </div>
  );
}
