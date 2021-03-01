import styles from '../styles/Button.module.scss';
import classNames from 'classnames/bind';

export default function Button({ children, outline, transparent, ...other}) {
  const cx = classNames.bind(styles);
  const classname = cx({
    button: true,
    outline: outline,
    transparent: transparent,
  });

  return (
    <button {...other} className={classname}>
      {children}
    </button>
  )
}