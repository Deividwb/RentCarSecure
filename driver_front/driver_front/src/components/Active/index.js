const isActive = true;

export default function reducer(state = isActive, action) {
  return state;
}

// const INITIAL_STATE = {
//   isActive: false,
// };

// export default (state = INITIAL_STATE, action)=> {
//   switch (action.type) {
//     case "ISACTIVE":
//       return { ...state, isActive: true };
//     case "NOTACTIVE":
//       return { ...state, isActive: false };
//     default:
//       return state;
//   }
// };

// export const isActive = () => {
//   return {
//     type: "ISACTIVE",
//   };
// };

// export const notActive = () => {
//     return {
//       type: "NOTACTIVE",
//     };
//   };
