import { FormEvent } from "react"
import "../styles/styles.css"
import { Formik,Form } from "formik"
import * as Yup from "yup";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {

 
  return (
    <div>
         <h1>Register Formik Page</h1>   
        <Formik
            initialValues={{
                name:'',
                email:'',
                password1:'',
                password2:''
            }}
            onSubmit={(values)=> {
                console.log(values)
            }}
            validationSchema={
                Yup.object({
                    name:Yup.string().min(2,'El nombre debe de ser de 3 caracteres o mas')
                            .required('requerido'),
                    email:Yup.string().email('Revise el formato del correo')
                                      .required('requerido'),
                    password1:Yup.string()
                                 .min(6,'Debe contener al menos 6 caracteres')
                                 .required('Este campo es requerido'),
                    password2:Yup.string()
                                 .oneOf([Yup.ref('password1')], 'Las contraseñas deben coincidir')
                                 .required('La confirmación de la contraseña es requerida'),
                })
            }
         >  
            {({handleReset})=>(
                <Form>
                    <MyTextInput label="Nombre" name="name"/>
                    <MyTextInput label="Email" name="email" type="email"/>
                    <MyTextInput label="Password" name="password1" type="password"/>
                    <MyTextInput label="Repita contraseña" name="password2" type="password"/>
                    <button type="submit">Create</button>
                    <button type="button" onClick={handleReset}>Reset</button>
                </Form>
            )}
           

            

        </Formik>
        

       
    </div>
  )
}
