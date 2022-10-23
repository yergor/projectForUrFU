import '../GameList/GameList.css';
import {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { deleteGame, getGameList } from '../../http/gameAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../../..';

const GameElem = observer((props) => {
  const {game} = useContext(Context);
  const history = useNavigate();
  console.log(props);
  return(
    <tr className="game-table-elem" key={props.game.id}>
      <td className="elem-name">
        <Link 
          to={'/game/'+props.game.id}
          onClick={()=>{
          history('/game/'+props.game.id)
        }}>
          {props.game.name}
          {/* <p>{props.organ.tin}</p> */}
        </Link>
      </td>
      <td className="elem-info">{props.game.info}<p className="elem-space">&nbsp;</p></td>
      <td className="elem-category">{props.category}<p className="elem-space">&nbsp;</p></td>
      <td className="elem-dev">{props.developer}<p className="elem-space">&nbsp;</p></td>
      <td className="elem-year">{props.year}<p className="elem-space">&nbsp;</p></td>
      <td onClick={()=>{deleteGame(props.game.id).then(()=>getGameList().then((data)=>game.setGames(data)))}} style={{width: "10px", cursor: 'pointer'}}>X</td>
    </tr>
  );
})

export default GameElem;