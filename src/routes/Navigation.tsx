import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import logo from '../assets/react.svg'

import { FormikBasicPage,FormikAbstract,FormikYupPage,FormikComponents,RegisterPage } from "../03-forms/pages"


export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
        
            <nav>
                <img src={logo} alt="reactLogo" />

                <ul>
                    <li>
                        <NavLink to={"/register"} className={({isActive})=> isActive?'nav-active': '' }>Register Page</NavLink>

                    </li>

                    <li>
                        <NavLink to={"/formik-basic"} className={({isActive})=> isActive?'nav-active': '' }>Formik</NavLink>

                    </li>

                    <li>
                        <NavLink to={"/formik-yup"} className={({isActive})=> isActive?'nav-active': '' }>Formik Yup</NavLink>

                    </li>
                    <li>
                        <NavLink to={"/formik-components"} className={({isActive})=> isActive?'nav-active': '' }>Formik Components</NavLink>

                    </li>

                    <li>
                        <NavLink to={"/formik-abstract"} className={({isActive})=> isActive?'nav-active': '' }>Formik Abstract</NavLink>

                    </li>
                    
                    <li>
                        <NavLink to={"/users"} className={({isActive})=> isActive?'nav-active': '' }>Users</NavLink>

                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="register" element={<RegisterPage/>}/>
                <Route path="formik-basic" element={<FormikBasicPage/>}/>
                <Route path="formik-yup" element={<FormikYupPage/>}/>
                <Route path="formik-components" element={<FormikComponents/>}/>
                <Route path="formik-abstract" element={<FormikAbstract/>}/>
                <Route path="home" element={<h1>HomePage</h1>}/>
                <Route path="/*" element={<Navigate to={"/home"} replace/>}/>
            </Routes>

        </div>
    
    
    </BrowserRouter>
  )
}
