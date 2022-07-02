const initialData = {
  list: [],
};

const toDoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETE":
      const newList = state.list.filter((e) => e.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    case "REMOVE":
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};

export default toDoReducers;
