import { MdDone, MdDelete} from 'react-icons/md';

function TodoListItem({descripcion, id, completed, doneHandler, deleteHandler}){
  const onClick = (e)=>{
    doneHandler(id);
  }
  const onDeleteClick = (e)=>{
    deleteHandler(id);
  }

  const myClass = (completed)?"striked": "";
  return (
    <li>
      <div class="flex p-6 justify-between bg-green-100 shadow">
          <span className={myClass}>{descripcion}</span>
          <div class="flex">
              <MdDone onClick={onClick} size={"2rem"} class="text-green-700"></MdDone>
              <MdDelete onClick={onDeleteClick}  size={"2rem"} class="text-green-700"></MdDelete>
          </div>
        </div>
    </li>
  );
}

function TodoList({todos, doneHandler, deleteHandler}){
  const todoItems = todos.map((o)=>{
    return (
      <TodoListItem
            key={o.doneHandlerid}
            descripcion={o.description}
            id={o.id}
            completed={o.completed}
            doneHandler={doneHandler}
            deleteHandler={deleteHandler}
      />
    )
  });
  return (
    <section className="TodoList">
        <ul>
            {todoItems}
        </ul>
    </section>
  );
}

export default TodoList;
