import classNames from 'classnames/bind';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import styles from './Sidebar.module.scss';
import SuggestedAccounts from './accounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title={'For You'} to={'/'} icon={<i class="fa-solid fa-house"></i>} />
                <MenuItem title={'Following'} to={'/following'} icon={<i class="fa-solid fa-user-group"></i>} />
                <MenuItem title={'LIVE'} to={'/live'} icon={<i class="fa-solid fa-video"></i>} />
            </Menu>
            <SuggestedAccounts lable={'Suggested account'} />
            <SuggestedAccounts lable={'Following account'} />
        </aside>
    );
}

export default Sidebar;
