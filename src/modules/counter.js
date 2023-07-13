import { createAction, handleActions } from "redux-actions";

const INCRASE = "counter/INCRASE";
const DECRASE = "counter/DECRASE";

export const increase = createAction(INCRASE);
export const decrease = createAction(DECRASE);

// 1초 뒤에 increase 혹은 decrease 함수를 디스패치함
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

const initialState = 0;

const counter = handleActions(
  {
    [INCRASE]: (state) => state + 1,
    [DECRASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
