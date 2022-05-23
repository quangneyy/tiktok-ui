import Button from '~/components/Button';
import className from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = className.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onCLick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
