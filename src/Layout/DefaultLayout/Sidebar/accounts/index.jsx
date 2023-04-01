import classNames from 'classnames/bind';
import styles from './Accounts.module.scss';
import AccountItems from './AccountItems';

const cx = classNames.bind(styles);

function SuggestedAccounts({ lable }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('lable')}>{lable}</p>
            <AccountItems />
            <AccountItems />
            <AccountItems />
            <AccountItems />
            <AccountItems />
        </div>
    );
}

export default SuggestedAccounts;
