import { combineReducers } from 'redux';
import game from './game';
import cpu from './cpu';
import player from './player';

export default combineReducers({
  game,
  cpu,
  player
});
