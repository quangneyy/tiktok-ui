import classnames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classnames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                {/* Search  */}
            </div>
        </header>
    );
}

export default Header;
