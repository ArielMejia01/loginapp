import React, { useState } from 'react';
import Form from "../Forms/Form";
import FormField from "../Forms/FormField";
import FormAction from "../Forms/FormAction";
import Option from "../Forms/Option";
import ChekinForm from "../Forms/ChekinForm";

function Login() {
  const [formData , setFormData] = useState({
      username:"",
      password:""
  });;
  
  const myOnChange = function (e) {
      const {name, value} = e.currentTarget;
      setFormData({...formData, [name]:value, [name+"Error"]:console.error});
      console.log(formData);
  }
  return(
      <Form titulo="Registrate con nosotros" >
          <FormField 
          caption="Usuario"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={myOnChange}>
              
          </FormField>
          <FormField 
          caption="Contraseña"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={myOnChange}>
          </FormField>

          <ChekinForm
              type="checkbox" 
              id="cbox1" 
              value="first_checkbox"
              description="Guardar tus datos"
          >
          </ChekinForm> 
          <FormAction
          caption="Registrarse"
          onClick={
              (modal)=>{
                  modal.preventDefault();
                  modal.stopPropagation();
                  const { username, password } = formData;
                  
                  if (password){
                      (/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/).test(password) ? alert(`!Bievenido ${username}!`) :alert("Contraseña Inválida");
                  }
                  
              }
          }
          >
          </FormAction>
          <Option
              opcion ="Crea tu cuenta ya mismo."
          >

          </Option>
          
          
      </Form>
  )
  
}

export default Login;