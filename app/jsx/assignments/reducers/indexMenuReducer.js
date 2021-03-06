import _ from 'underscore'
import IndexMenuActions from '../actions/IndexMenuActions'

  const {
    SET_MODAL_OPEN,
    LAUNCH_TOOL,
    SET_TOOLS,
    SET_WEIGHTED
  } = IndexMenuActions;

  const initialState = {
    externalTools: [],
    modalIsOpen: false,
    selectedTool: null,
    weighted: false,
  };

  const handlers = {
    [SET_MODAL_OPEN]: (state, action) => {
      const newState = _.extend({}, state);
      newState.modalIsOpen = action.payload;

      return newState;
    },

    [LAUNCH_TOOL]: (state, action) => {
      const newState = _.extend({}, state);
      newState.selectedTool = action.payload;
      newState.modalIsOpen = true;

      return newState;
    },

    [SET_TOOLS]: (state, action) => {
      const newState = _.extend({}, state);
      newState.externalTools = action.payload;

      return newState;
    },

    [SET_WEIGHTED]: (state, action) => {
      const newState = _.extend({}, state);
      newState.weighted = action.payload;

      return newState;
    },
  };

  function reducer (state, action) {
    const prevState = state || initialState;
    const handler = handlers[action.type];

    if (handler) return handler(prevState, action);

    return prevState;
  };

export default reducer
