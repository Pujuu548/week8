import styles from './Button.module.css';

const Button = (props) => {
  const { className, children, link, onClick } = props;

  if (link) {
    return (
      <a className={`${styles.button} ${className}`} href={link}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;