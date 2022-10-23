import '../GameList/GameList.css';
import '../GameElem/GameElem'
import GameElem from '../GameElem/GameElem';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../..';

const GameTable = observer(() => {
  const {game} = useContext(Context);

  const elements = game.games.map((elem)=>{
    const elemYearId = elem.yearId;
    const year = game.years.filter(props => props.id === elemYearId)[0]?.value;
    
    const elemCategoryId = elem.categoryId;
    const category = game.categories.filter(props => props.id === elemCategoryId)[0]?.name;

    const elemDeveloperId = elem.developerId;
    const developer = game.developers.filter(props => props.id === elemDeveloperId)[0]?.name;

    return(
      <GameElem key={elem.id} game={elem} year={year} category={category} developer={developer}/>
    );
  })

      return(
        <table className="game-table">
          <thead>
            <tr className="game-table-header">
              <td>Название</td>
              <td>Описание</td>
              <td>Жанр</td>
              <td>Разработчик</td>
              <td>Год выпуска</td>
            </tr>
          </thead>
          <tbody>
            {elements}
          </tbody>
        </table>
      );
  
  
})

export default GameTable