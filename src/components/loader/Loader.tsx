import styles from './loader.module.css';

type LoaderPropsType = {
  isShow: boolean;
  children?: React.ReactNode;
};
export default function Loader(props: LoaderPropsType) {
  const { isShow, children } = props;

  if (!isShow) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}></div>
      {children}
    </div>
  );
}
