import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Todos from "./Todos";
import "./App.css";
import { FormControl, InputLabel, Input } from "@material-ui/core";

function App() {
  const [input, setinput] = useState();
  const [todos, setTodos] = useState([]);

  const addInput = (event) => {
    setinput(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault(); //this will prevent default behaviour
    setTodos([...todos, input]);
    setinput("");
  };

  return (
    <div className="App">
      <h1>TODO List (-_-)</h1>
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Write Todos</InputLabel>
          <Input
            aria-describedby="my-helper-text"
            value={input}
            onChange={addInput}
            name="todoList"
          />
        </FormControl>

        <Button
          disabled={!input}
          onClick={addTodo}
          variant="contained"
          color="primary"
          type="submit"
        >
          ADD TODOS
        </Button>
      </form>

      {todos.map((todo) => (
        <Todos text={todo} />
      ))}
    </div>
  );
}

export default App;
