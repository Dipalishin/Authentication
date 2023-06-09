import { Link } from 'react-router-dom';
import AuthContext from '../store/auth-context';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
const MainNavigation = () => {
const authctx=useContext(AuthContext);
//const history=useHistory();

const logoutHandler=()=>{
  authctx.logout();
 // history.replace('/');
}
const isLoggedIn=authctx.isLoggedIn;
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>{!isLoggedIn &&(
          <li>
            <Link to='/auth'>Login</Link>
          </li>)}
         {isLoggedIn &&( <li>
            <Link to='/profile'>Profile</Link>
          </li>)}
          {isLoggedIn &&
          (<li>
            <button onClick={logoutHandler}>Logout</button>
          </li>)}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
