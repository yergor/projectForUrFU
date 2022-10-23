import '../GameList/GameList.css';
import { useContext} from 'react';
import Wrapper from '../Wrapper/Wrapper';
import { Link } from 'react-router-dom';
import { Context } from '../../..';

export const OrgCard = () => {
  const orgId = parseInt(window.location.href.match(/game\/([0-9]{1,})/)[1]);
  console.log(orgId);
  const {game} = useContext(Context);
  //нестрогое сравнение нужно для приведения типов
  const first = game.games.filter((o) => o.id == orgId)[0];

  if (first) {
    first.year = game.years.filter(props => props.id === first.yearId)[0]?.value;
    first.category = game.categories.filter(props => props.id === first.categoryId)[0]?.name;
    first.developer = game.developers.filter(props => props.id === first.developerId)[0]?.name;
  }

  console.log(first);

    return(
      <div className="app-body">
        <div className="app-main">
          {first && (
          <div className="main-search">
            <Wrapper classes={'modal-wrapper none'} onAdd={()=>{}} formTitle={'this.state.title'} formHint={'this.state.hint'}/>
            <h1>Название: {first.name}</h1>
            <h1>Год выпуска: {first.year}</h1>
            <div className="main-paragraph main-paragraph-card">
              <p>Разработчик: <p>{`${first.developer}`}</p></p>
            </div>
            <hr/>
            <div className="main-paragraph main-paragraph-card">
              <p>Ссылка: <a href={first.ref}>{first.ref}</a></p>
            </div>
            <div className="main-paragraph main-paragraph-card">
              <p>Жанр: {`${first.category}`}</p>
            </div>
            <div className="main-paragraph main-paragraph-card">
              <p>Описание: {first.info}</p>
            </div>
          </div>)}
          <div style={{marginTop: '20px'}}>
            <Link to='/' className='about'>Вернуться на главную страницу</Link>
          </div>
        </div>
      </div>
    );
}
