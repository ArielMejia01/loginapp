import FormField from '../../Forms/FormField';
import { MdAdd } from 'react-icons/md';

function NewTodo({ onChange, value, onAddNew}){
  return (
    <section className="TodoAddNew">
      <section className="flex justify-between items-center px-4 border">
        <FormField
          type="text"
          id="txtNTodo"
          fname="txtNTodo"
          onChange={onChange}
          value={value}
          caption="Nuevo To Do"

          /*className="flex p-2 m-2 w-5/6 bg-white shadow"
          labelClassName="flex w-4/5"
          containerClassName="flex"*/
          onKeyUp={(e)=>{if(e.keyCode==13){onAddNew(e);}}}
          ></FormField>
        <MdAdd size={"3rem"} class="ml-60 text-green-700" onClick={onAddNew}></MdAdd>
      </section>
    </section>
  );
}

export default NewTodo;
