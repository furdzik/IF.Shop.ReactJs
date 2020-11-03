const actionTypes = {
};

const initialState = {
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    // case actionTypes.GET_VOCAB: {
    //   return {
    //     ...state
    //   };
    // }

    default:
      return state;
  }
}

// export const getVocabulary = () => ({
//   type: actionTypes.GET_VOCAB,
//   payload: vocab
// });
