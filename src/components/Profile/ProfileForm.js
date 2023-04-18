import classes from './ProfileForm.module.css';
import { useRef,useContext } from 'react';
import AuthContext from '../store/auth-context';
const ProfileForm = () => {
  const newPasswordRef=useRef();
  const authctx=useContext(AuthContext);


  const submitHandler=event=>{
    event.preventDefault();
    const enteredNewPassword=newPasswordRef.current.value;
fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCWqpwBvevI5q31p76vDebc0INqHtOj-jY',
{
  method:'POST',
  body:JSON.stringify({
    idToken:authctx.token,
    password: enteredNewPassword,
    returnSecureToken:false
  }),
  headers:{
    'Content-Type':'application/json'
  }
}).then(res=>{

})

  }
  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
