import React from 'react'
import styles from '../styles/Avatar.module.css'

export const Avatar = ({ src, height =45, text }) => {

  return (
    <span>
        <img className={styles.Avatar} src={src} alt="avatar" height={height} width={height} />
        {text}
    </span>
);
};

export default Avatar