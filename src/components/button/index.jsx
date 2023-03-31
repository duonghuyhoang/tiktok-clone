import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary,
    outline,
    small,
    large,
    text,
    children,
    disabled,
    rounded,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    if (disabled) {
        delete props.onClick;
    }
    const classes = cx('wrapper', { primary, outline, small, large, text, disabled, rounded });
    return (
        <Comp className={classes}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
