import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { Logout, signInWithGoogle } from '~/services/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Header({ user }) {
    async function SignInGoogle() {
        signInWithGoogle().then((result) => {
            sessionStorage.setItem('currentUser', JSON.stringify(result.user));
            window.location.reload();
        });
    }
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Button bar orange>
                    <FontAwesomeIcon icon={faBars} />
                </Button>
                {user && (
                    <div className={cx('user')}>
                        <img src={user.photoURL} alt={'avatar'} />
                        <h3>{user.displayName}</h3>
                        <Button orange login onClick={Logout}>
                            Logout
                        </Button>
                    </div>
                )}
                {!user && (
                    <Button orange login onClick={SignInGoogle}>
                        Login
                    </Button>
                )}
            </div>
        </header>
    );
}
export default Header;
