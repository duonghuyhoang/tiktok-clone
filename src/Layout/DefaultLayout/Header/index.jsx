import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Header.module.scss';
import images from '../../../assets/images';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '../../../components/Popper';

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2]);
        }, 0);
    });

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <form className={cx('form-search')} action="">
                    <Tippy
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <PopperWrapper>
                                <div className={cx('container')} tabIndex="-1" {...attrs}>
                                    Ket qua
                                </div>
                            </PopperWrapper>
                        )}
                    >
                        <input id="Hi" className={cx('search-input')} placeholder="Tìm kiếm tài khoản và video" />
                    </Tippy>

                    <button className={cx('clear-btn')}>
                        <i class="fa-solid fa-circle-xmark"></i>
                    </button>
                    <div className={cx('loading')}>
                        <i class="fa-solid fa-spinner"></i>
                    </div>

                    <button className={cx('search-btn')}>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
