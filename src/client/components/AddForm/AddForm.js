import { useContext, useState } from 'react';
import '../GameList/GameList.css';
import { observer } from 'mobx-react-lite';
import { addGame, getGameList } from '../../http/gameAPI';
import { Context } from '../../..';

//Компонент-форма для добавления организаций
export const AddForm = observer((props)=>{
  const {game} = useContext(Context);
  const [name, setName] = useState('');
  const [yearId, setYear] = useState();
  const [developerId, setDeveloper] = useState('');
  const [categoryId, setCategory] = useState('');
  const [info, setInfo] = useState('');
  const [ref, setTorrentRef] = useState('');
  console.log(props);

  const formYears = game.years.map(elem => {
    return <option key={elem.id} value={elem.id}>{elem.value}</option>
  });

  const formDevs = game.developers.map(elem => {
    return <option key={elem.id} value={elem.id}>{elem.name}</option>
  });

  const formCategories = game.categories.map(elem => {
    return <option key={elem.id} value={elem.id}>{elem.name}</option>
  });

  const onSubmit = (e) =>{
    e.preventDefault();
    props.onAdd({name, info, developerId, yearId, categoryId, ref});
  };

  return(
    <div className="add-form" >
      <h2>Название</h2>
      <input name="n" type='text' required onChange={(e) => setName(e.target.value)} value={name} placeholder="Введите название"></input>
      <h2>Год выпуска</h2>
      <select name="y" required onChange={(e) => setYear(e.target.value)} value={yearId}>
        <option>...</option>
        {formYears}
      </select>
      <h2>Разработчик</h2>
      <select name="d" required onChange={(e) => setDeveloper(e.target.value)} value={developerId}>
        <option>...</option>
        {formDevs}
      </select>
      <h2>Жанр</h2>
      <select name="c" required onChange={(e) => setCategory(e.target.value)} value={categoryId}>
        <option>...</option>
        {formCategories}
      </select>
      <h2>Информация</h2>
      <input name="i" type='text' required onChange={(e) => setInfo(e.target.value)} value={info} placeholder="Краткая информация"></input>
      <input name="t" type='text' required onChange={(e) => setTorrentRef(e.target.value)} value={ref} placeholder="Ссылка на скачивание"></input>
      <button className="add-button" onClick={(e) => {
        onSubmit(e); 
        addGame({
          name, 
          info, 
          developerId, 
          yearId, 
          categoryId, 
          ref
          }).then(() => {
            getGameList().then((data) => {
              console.log(data);
              game.setGames(data);
            })
          });
        }}>Добавить</button>
    </div>
  );
})