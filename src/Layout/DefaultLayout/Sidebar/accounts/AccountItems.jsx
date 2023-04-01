import classNames from 'classnames/bind';
import styles from './Accounts.module.scss';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../../components/Popper';
import Button from '../../../../components/button';

const cx = classNames.bind(styles);

function AccountItems() {
    return (
        <Tippy
            interactive
            delay={[800, 400]}
            offset={[-20, 0]}
            placement="bottom"
            render={(props) => (
                <div tabIndex="-1" {...props}>
                    <PopperWrapper>
                        <div className={cx('preview')}>
                            <img
                                className={cx('avatar-preview')}
                                src={
                                    'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1680512400&x-signature=LSEa%2Fa1yIMDfWR%2BDZcqbsplyAtk%3D'
                                }
                                alt={''}
                            />
                            <span className={cx('btn-preview')}>
                                <Button primary>Follow</Button>
                            </span>
                            <div className={cx('info-preview')}>
                                <h4 className={cx('name-preview')}>
                                    <strong>theanh28entertainment</strong>
                                    <span className={cx('check-preview')}>
                                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                                    </span>
                                </h4>
                                <span className={cx('username-preview')}>Theanh28 Entertainment</span>
                            </div>
                            <div className={cx('numberFollow-preview')}>
                                <strong>8.9M</strong> <span>Follower </span> <strong>&nbsp;&nbsp; 719.9M </strong>{' '}
                                <span>Thích</span>
                            </div>
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            <Link to={`@`} className={cx('item')}>
                <img
                    className={cx('avatar')}
                    src={
                        'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1680512400&x-signature=LSEa%2Fa1yIMDfWR%2BDZcqbsplyAtk%3D'
                    }
                    alt={''}
                />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <strong>theanh28entertainment</strong>
                        <div className={cx('check')}>
                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                        </div>
                    </h4>
                    <span className={cx('username')}>Theanh28 Entertainment</span>
                </div>
            </Link>
        </Tippy>
    );
}

export default AccountItems;
