import classNames from 'classnames/bind';
import { PropTypes } from 'prop-types';
import styles from './AcccountItem.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function AcccountItem({ data }) {
    return (
        <Link to={`@${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatar} alt={data.avatar} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    <div className={cx('check')}>
                        {data.tick && <i class="fa fa-check-circle check" aria-hidden="true"></i>}
                    </div>
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}
AcccountItem.checkPropTypes = {
    data: PropTypes.object,
};
export default AcccountItem;
