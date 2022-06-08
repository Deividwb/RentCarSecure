// const isActive = true;

// export default function reducer(state = isActive, action) {
//   return state;
// }

const INITIAL_STATE = {
  isActive: false,
};

export default function ActiveMenu(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "IS_ACTIVE":
      return { ...state, isActive: true };
    case "NOT_ACTIVE":
      return { ...state, isActive: false };
    default:
      return state;
  }
}

export const isActive = () => {
  return {
    type: "IS_ACTIVE",
  };
};

export const notActive = () => {
  return {
    type: "NOT_ACTIVE",
  };
};
