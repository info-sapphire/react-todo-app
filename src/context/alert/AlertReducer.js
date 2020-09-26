import { SHOW_ALERT, HIDE_ALERT } from "../Types";

const handlers = {
  [SHOW_ALERT]: (_, { payload }) => ({ ...payload, visible: true }),
  [HIDE_ALERT]: (state) => ({ ...state, visible: false }),
  DEFAULT: (state) => state,
};

export const AlertReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;

  return handle(state, action);
};
