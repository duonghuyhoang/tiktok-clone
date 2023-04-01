import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import AcccountItem from '../../AccountItem';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import styles from './Search.module.scss';
import useDebounce from '../../../hooks/useDebounce';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500);

    const inputRef = useRef();
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        axios
            .get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
                params: {
                    q: debounce,
                    type: 'less',
                },
            })
            .then((res) => {
                setSearchResult(res.data.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debounce]);
    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <form className={cx('form-search')} action="">
            <HeadlessTippy
                appendTo={() => document.body}
                interactive
                onClickOutside={handleHideResult}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('searchResult')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AcccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <input
                    ref={inputRef}
                    value={searchValue}
                    className={cx('search-input')}
                    onChange={(e) => {
                        const searchValue = e.target.value;
                        if (!searchValue.startsWith(' ')) {
                            setSearchValue(searchValue);
                        }
                    }}
                    placeholder="Tìm kiếm tài khoản và video"
                    onFocus={() => setShowResult(true)}
                />
            </HeadlessTippy>
            {!!searchValue && !loading && (
                <button
                    className={cx('clear-btn')}
                    onClick={() => {
                        setSearchValue('');
                        inputRef.current.focus();
                    }}
                >
                    <i class="fa-solid fa-circle-xmark"></i>
                </button>
            )}
            {loading && (
                <div className={cx('loading')}>
                    <i class="fa-solid fa-spinner"></i>
                </div>
            )}

            <button
                className={cx('search-btn')}
                onMouseDown={(e) => {
                    e.preventDefault();
                }}
            >
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    );
}

export default Search;
