import styles from './button.module.scss';
import {ReactElement} from "react";

const Button = (props: {
    text: string,
    content?: ReactElement,
    type?: 'primary',
}) => {
    return <>
        <a href='#!' className={`${styles.button} ${props.type ? styles[props.type] : ''}`}>
            {props.text}
            <div className={styles.content}>
                {props.content}
            </div>
        </a>
    </>
}

export default Button;