import styles from '../styles/Button.module.scss';
import classNames from 'classnames/bind';
import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
  outline?: boolean, 
  transparent?: boolean, 
}

export default function Button({ children, outline, transparent, ...other } : ButtonProps) {
  const cx = classNames.bind(styles);

  const classname: string = cx({
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