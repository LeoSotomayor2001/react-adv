import { FormEvent } from "react"
import { useForm } from "../hooks/useForm"
import "../styles/styles.css"

export const RegisterPage = () => {

    const {formData,isValidEmail,onChange,email,name,password1,password2,resetForm}=useForm({
        name:'',
        email:'',
        password1:'',
        password2:''
    });

    const onSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        console.log(formData);
    }
  return (
    <div>
        <h1>RegisterPage</h1>
        <form onSubmit={(ev)=>onSubmit(ev)}>
            <input 
                type="text" 
                placeholder="Name"
                value={name}
                onChange={(ev)=> onChange(ev)}
                name="name"
                className={`${name.trim().length<=0 && 'has-error'} `}
            />
            {name.trim().length<=0 &&  <span>Este campo es necesario</span>}

            <input 
                type="email" 
                placeholder="Email"
                value={email}
                onChange={onChange}
                name="email"
                className={`${!isValidEmail(email) && 'has-error'}  `}
            />
            {!isValidEmail(email) &&  <span>Este email no es válido</span>}

             <input 
                type="password" 
                placeholder="Password"
                value={password1}
                onChange={onChange}
                name="password1"
            />
            {password1.trim().length<=0 &&  <span>Este campo es necesario</span>}
            {password1.trim().length<6 && password1.trim().length>0 &&  <span>La contraseña debe tener 6 caracteres</span>}


             <input 
                type="password" 
                placeholder="Repeat password"
                value={password2}
                onChange={onChange}
                name="password2"
            />
            {password2.trim().length<=0 && <span>Este campo es necesario</span>}
            {password1!=password2 &&  <span>Las contraseñas deben ser iguales</span>}

            <button type="submit">Create</button>
            <button onClick={resetForm}>Reset</button>
        </form>
    </div>
  )
}
