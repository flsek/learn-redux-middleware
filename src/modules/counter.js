import { createAction, handleActions } from "redux-actions";

const INCRASE = "counter/INCRASE";
const DECRASE = "counter/DECRASE";

export const increase = createAction(INCRASE);
export const decrease = createAction(DECRASE);

const initialState = 0;

const counter = handleActions(
  {
    [INCRASE]: (state) => state + 1,
    [DECRASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
