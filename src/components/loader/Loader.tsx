import styles from './loader.module.css';

type LoaderPropsType = {
  isShow: boolean;
};
export default function Loader(props: LoaderPropsType) {
  const { isShow } = props;

  if (!props.isShow) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}></div>
      <p>Подгрузка компаний</p>
    </div>
  );
}
