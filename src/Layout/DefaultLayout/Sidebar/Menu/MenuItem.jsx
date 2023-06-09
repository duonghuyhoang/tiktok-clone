import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

function MenuItem({ title, to, icon }) {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            <span className={cx('icon')}> {icon}</span>
            <span className={cx('item')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
