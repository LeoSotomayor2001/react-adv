import '../styles/styles.css'
import {useFormik} from 'formik';
import * as Yup from "yup";

export const FormikYupPage = () => {


  const {handleSubmit, errors,touched,getFieldProps}=useFormik({
    initialValues:{
      firstName:'',
      lastName:'',
      email:'',
    },
    onSubmit:(values)=>{
      console.log(values)
    },
    validationSchema: Yup.object({
      firstName:Yup.string().max(15,'Debe de tener 15 caracteres o menos').required('Requerido'),
      lastName:Yup.string().max(10,'Debe de tener 10 caracteres o menos').required('Requerido'),
      email:Yup.string().email('Debe de ser un correo electronico valido').required('Este campo es requerido')
    })
  });

  return (
    <div>
        <h1>Formik Yup Tutorial</h1>

        <form noValidate onSubmit={handleSubmit}>
            <label htmlFor="firstname">First Name</label>
            <input type="text" {...getFieldProps('firstName')}/>
             {touched.firstName &&  errors.firstName && <span>{errors.firstName}</span>}

            <label htmlFor="lastName">Last Name</label>
            <input type="text" {...getFieldProps('lastName')}/>
            {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

            <label htmlFor="email">Email Address</label>
            <input type="email" {...getFieldProps('email')}/>
            {touched.email && errors.email && <span>{errors.email}</span>}

            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}
