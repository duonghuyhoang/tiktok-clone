import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../assets/images';
import Search from '../Search';
import Button from '../../../components/button';
import Menu from '../../../components/Popper/Menu';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <Link to={'/'}>
                        <img src={images.logo} alt="tiktok" />
                    </Link>
                </div>

                <Search />

                <div className={cx('actions')}>
                    <Button text>
                        <i class="fa-regular fa-plus" style={{ marginRight: 7 }}></i>Upload
                    </Button>
                    <Button primary>Log in</Button>

                    <Menu>
                        <button className={cx('more-btn')}>
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
