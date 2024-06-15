import styles from './message.module.css';
type MessageOnPagePropsType = {
  text: string;
};
export default function MessageOnPage(props: MessageOnPagePropsType) {
  const { text } = props;
  return <p className={styles.text}>{text}</p>;
}
