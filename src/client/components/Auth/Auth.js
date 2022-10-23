import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../GameList/GameList.css'
import { registration, login } from '../../http/userAPI'
import { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../..';

export const Auth = observer((props) => {
  const {user} = useContext(Context);
  const location = useLocation();
  const navigation = useNavigate()
  const isLogin = location.pathname === '/login';
  console.log(location);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let userData;
  const signClick = async() => {
    try {
      if (isLogin){
        userData = await login(email, password);
        console.log(userData);
      } else {
        userData = await registration(email, password);
        console.log(userData);
      }
      user.setUser(userData);
      user.setIsAuth(true);
      navigation('/');
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return(
    <div className="auth" style={{height: window.innerHeight - 32}}>
      <form className='auth-form'>
        <div style={{textAlign: 'center'}}>
          <h2 style={{fontSize: '24px', backgroundColor: 'rgba(0,0,0,0)'}}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        </div>
        <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} type={'password'}/>
        <div className='auth-buttons'>
          {isLogin && (<Link style={{textDecoration: 'none', fontWeight: 600, color: 'black', backgroundColor: 'rgba(0,0,0,0)'}} to='/registration'>Зарегистрироваться</Link>)}
          {!isLogin && (<Link style={{textDecoration: 'none', fontWeight: 600, color: 'black', backgroundColor: 'rgba(0,0,0,0)'}} to='/login'>Войти в существующий</Link>)}
          <button onClick={(e) => {e.preventDefault(); signClick();}} className='auth-button'>{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
        </div>
      </form>
    </div>
  )
})