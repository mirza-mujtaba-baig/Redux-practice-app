import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { actions } from "./Store/index";
import { useState } from "react";
import { addToDo, deleteToDo, removeToDo } from "./Actions/index";
function App() {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.toDoReducers.list);

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increament = () => {
    dispatch(actions.increment());
  };

  const decreament = () => {
    dispatch(actions.decrement());
  };

  const adding = () => {
    dispatch(actions.add(10));
  };

  return (
    <div>
      <h1>Counter App redux</h1>
      <h2>{counter}</h2>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
      <button onClick={adding}>Add 10</button>

      <figure>
        <figcaption>Add Your List Here</figcaption>
      </figure>

      <div>
        <input
          type="text"
          placeholder="Add Items..."
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
        ></input>
        <button
          className="fa fa-plus add-btn"
          onClick={() => dispatch(addToDo(inputData), setInputData(""))}
        >
          Add
        </button>
      </div>

      <div>
        {list.map((elem) => {
          return (
            <div key={elem.id}>
              <h3>{elem.data}</h3>
              <button
                className="fa fa-trash add-btn"
                onClick={() => dispatch(deleteToDo(elem.id))}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>

      <div>
        <button
          className="fa fa-trash add-btn"
          onClick={() => dispatch(removeToDo())}
        >
          Delete All
        </button>
      </div>
    </div>
  );
}

export default App;
