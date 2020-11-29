import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function Todos(props) {
  return (
    <div className="todo_list">
      <List>
        <ListItem>
          <ListItemText primary={props.text} />
        </ListItem>
      </List>
    </div>
  );
}

export default Todos;
