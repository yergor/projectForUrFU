import './GameList.css';
import GameTable from '../GameTable';
import {Link} from 'react-router-dom';
import {useContext, useState, useEffect} from 'react';
import Wrapper from '../Wrapper/Wrapper';
import bkgr from '../../img/background.jpg';
import { Context } from '../../..';
import { observer } from 'mobx-react-lite';
import { getGameList, getYears, getCategories, getDevelopers } from '../../http/gameAPI';


//Страница списка, основная
export const OrgList = observer(() => {
  const {game} = useContext(Context);
  const [shown, setShown] = useState('modal-wrapper none n1')

  useEffect(() => {
    getGameList().then(data => game.setGames(data));
    getYears().then(data => game.setYears(data));
    getCategories().then(data => game.setCategories(data));
    getDevelopers().then(data => game.setDevelopers(data));
  }, [game.games.length]);

  const showForm = () => {
      const newClasses = shown + " show";
      setShown(newClasses);
  }

    const onAdd = async(newOrg) => {
      setShown("modal-wrapper none n1");
      const newArr = [...game.games, newOrg];
      console.log(newArr);
      game.setGames(newArr);
      console.log(game.games);
    };

  return(
    <>
      <div className='hi' style={{background: `url(${bkgr}) center no-repeat`, backgroundSize: 'cover'}}>
          <h1 className='hi1'>"Legal Side" - используй и делись!</h1>
          <h1 className='hi2'>С помощью нашего сайта Вы сможете насладиться хитами игровой индустрии!</h1>
        </div>
    
      <div className="app-body" style={{marginBottom: "30px"}}>
        <div className="app-header">
          <h1>Список доступных игр</h1>
        </div>

        <div className="app-main">
          <div className="main-refs" style={{backgroundColor: 'rgba(0,0,0,0)'}}>
            <button className="add-func" style={{border: 'none', fontWeight: 600, fontSize: '16px', color: 'rgb(115, 180, 255)'}} onClick={showForm}>+ Добавить игру</button>
          </div>
          <div className="main-paragraph">
            <p>Выберите необходимую ссылку и дополнните ее информацией об игре.</p>
          </div>
          <div className="main-search" style={{width: 0, height: 0, padding: 0}}>
            <Wrapper classes={shown} onAdd={onAdd}/>
          </div>
          <div className="main-games">
            <GameTable/>
          </div>
        </div>

        <div className='app-footer'>
          <ul>
            <li><Link to='/about'>Как связаться?</Link></li>
            <li><a href='https://ru.wikipedia.org/wiki/%D0%A1%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F:%D0%A1%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0' >Случайная статья из Википедии</a></li>
          </ul>
        </div>
      </div>

    </>
  );
})

