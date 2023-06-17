import '../styles/styles.css'
import {Formik,Form} from 'formik';
import * as Yup from "yup";
import {MyCheckbox,MySelect,MyTextInput  } from "../components";


export const FormikAbstract = () => {

  return (
    <div>
        <h1>Formik Abstractation</h1>

        <Formik
          initialValues={{
            firstName:'',
            lastName:'',
            email:'',
            terms:false,
            jobType:'',
          }}
          onSubmit={ (values) =>{
            console.log(values)
          }}
          validationSchema={Yup.object({
            firstName:Yup.string().max(15,'Debe de tener 15 caracteres o menos').required('Requerido'),
            lastName:Yup.string().max(10,'Debe de tener 10 caracteres o menos').required('Requerido'),
            email:Yup.string().email('Debe de ser un correo electronico valido').required('Este campo es requerido'),
            terms:Yup.boolean().oneOf([true],'debe de aceptar las condiciones'),
            jobType:Yup.string().notOneOf(['it-jr'],'esta opcion no es permitida').required('Requerido')
            })
          }
        
        >
          {  (formik) => (
              <Form>
              <MyTextInput label="First Name" name="firstName"/>

              <MyTextInput label="Last Name" name="lastName"/>

              <MyTextInput label="Email Address" name="email" type='email'/>
              
         
              <MySelect label='Job Type' name="jobType">
                <option value=''>Pick something</option>
                <option value='developer'>Developer</option>
                <option value='designer'>Designer</option>
                <option value='it-senior'>it-senior</option>
                <option value='it-jr'>it-jr</option>
              </MySelect>

              <MyCheckbox label="Terminos y condiciones" name="terms"/>
  
              <button type='submit'>Enviar</button>
             </Form>
            )
          }


        </Formik>

    </div>
  )
}
