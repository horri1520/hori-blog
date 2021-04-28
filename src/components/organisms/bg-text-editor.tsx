import styles from '../../styles/components/organisms/bg-text-editor.module.scss';

type Props = {
  text: string;
  setText: (text: string) => void;
};

const BgTextEditor: React.VFC<Props> = ({ text, setText }: Props) => {
  return (
    <div className={styles.root}>
      <textarea
        className={styles.textarea}
        value={text}
        onChange={event => setText(event.target.value)}
      />
    </div>
  );
};

export default BgTextEditor;
