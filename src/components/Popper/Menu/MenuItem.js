import Button from '~/components/Button';
import className from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = className.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} onCLick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
