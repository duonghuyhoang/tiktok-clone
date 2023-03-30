import classNames from 'classnames/bind';
import styles from './AcccountItem.module.scss';
const cx = classNames.bind(styles);

function AcccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3c607a732c72300b839d459117d717bd~c5_100x100.jpeg?x-expires=1680346800&x-signature=ox0g2yMDiHcyXey298H5ptW0%2Fco%3D"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <div className={cx('check')}>
                        <i class="fa fa-check-circle check" aria-hidden="true"></i>
                    </div>
                </h4>
                <span className={cx('username')}>nguyanvana</span>
            </div>
        </div>
    );
}

export default AcccountItem;
