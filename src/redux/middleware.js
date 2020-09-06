import {SYNC_CREATE_POST} from "./types";
import {showAlert} from "./actions";


const forbiddenWords = ['fuck', 'fuckoff'];

export const forbiddenMiddleware = ({dispatch}) => (next) => (action) => {
  if(action.type === SYNC_CREATE_POST)
  {
      const found = forbiddenWords.filter(word => action.payload.title.toLowerCase().includes(word));
      if(found.length)
          return dispatch(showAlert('Недопустимое слово'))
  }
  return next(action)
};