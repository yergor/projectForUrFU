import {Route, Routes} from 'react-router-dom'
import {OrgList} from '../components/GameList/GameList'
import {OrgCard} from '../components/GameCard/GameCard'
import About from '../components/About/About'
import Auth from '../components/Auth'
import { useContext } from 'react'
import { Context } from '../..'
import { observer } from 'mobx-react-lite';


//Компонент, отображающий нужную страницу в зависимости от адреса
const Content = observer(() => {

  const {user} = useContext(Context);

  const logout = () => {
    user.setIsAuth(false);
    user.setUser({});
    localStorage.removeItem('token');
    console.log(user);
  }

  return(
    <>
      <div style={{padding: "10px", marginBottom: "33px"}}>
      {user.isAuth &&
        <button className='about' 
              style={{position: "absolute", right: "10px", cursor:"pointer"}} 
              onClick={() => logout()}>
                Выйти
        </button>}
        {console.log(user)}
      </div>
      <Routes>
        {user.isAuth && (<Route path="/" element={<OrgList/>}/>)}
        {user.isAuth && (<Route path="/game" element={<OrgCard/>}/>)}
        {user.isAuth && (<Route path="/game/:id" element={<OrgCard/>}/>)}
        {user.isAuth && (<Route path="/about" element={<About/>}/>)}
        {!user.isAuth && (<Route path="/login" element={<Auth/>}/>)}
        <Route path="/registration" element={<Auth/>}/>
        <Route path="/" element={<Auth/>}/>
        {user.isAuth && (<Route path='*' element={<h1 style={{fontSize:'32px', margin: '7px'}}>404: Page does not exist</h1>}/>)}
      </Routes>
    </>
  )
})

export default Content