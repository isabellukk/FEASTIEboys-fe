import React, { useState } from 'react'
// import { getUserToken } from "../utils/authToken"
import { setUserToken, clearUserToken } from "../utils/authToken"
import { Link } from 'react-router-dom'
import { useHistory, useParams } from 'react-router-dom';

import Form from 'react-bootstrap/Form'



const LoginForm = (props) => {
    const initialState = { user: "", password: "" }
    const [input, setInput] = useState(initialState)
    // const [currentUser, setCurrentUser] = useState({})
    // const [isAuthenticated, setIsAuthenticated] = useState(false)


    const loginUser = async (data) => {
        try {
          console.log(data);
            const configs = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": `bearer ${getUserToken()}`,
                }
            }
            const newUser = await fetch('http://localhost:9000/auth/login', configs)
            const parsed = await newUser.json()
            console.log(parsed)
            setUserToken(parsed.token)

            return parsed
        } catch (err) {
            clearUserToken()
          
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const createdUserToken = await loginUser(input)
        console.log(createdUserToken);

        if (createdUserToken.user) {
          props.setCurrentUser(createdUserToken.user)
          props.setIsAuthenticated(createdUserToken.isLoggedIn)
          const user_id = createdUserToken.user._id
            props.history.push(`/${user_id}/home`)
        } else {
          props.setCurrentUser({})
          props.setIsAuthenticated(false)
          //log out function and nav should do the above
            props.history.push("/")
        }
        setInput(initialState)
    }

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }


    return(
        <>
            <div className="loginPage">
                <div className="loginContent">
                    <div className="loginH1">
                        <h1>Login</h1>
                    </div>
                    <div>
                        <div>
                        <form className='text-center loginLabels' onSubmit={handleSubmit}>
                            <label
                                htmlFor="user"
                                controld="Input"
                                label="Username"
                                className="mb-3"
                            >
                                <Form.Control
                                type="name"
                                id="user"
                                name="user"
                                value={input.user}
                                onChange={handleChange}
                                placeholder="username" />
                            </label>
                            <label
                                htmlFor="password"
                                controlId="LabelPassword"
                                label="Password"
                                className="mb-3"
                            >
                                <Form.Control
                                type="password"
                                id="password"
                                name="password"
                                value={input.password}
                                onChange={handleChange}
                                placeholder="Password" />
                            </label>
                            <input type="submit" value="Login" />
                            <p>Don't have an account?<Link to='/register'> Register</Link></p>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm

// const LoginForm = (props) => {
//     const initialState = { user: "", password: "" }
//     const [input, setInput] = useState(initialState)
//     const [currentUser, setCurrentUser] = useState({})
//     const [isAuthenticated, setIsAuthenticated] = useState(false)
//
//     const loginUser = async (data) => {
//       console.log(data);
//         try {
//             const config = {
//                 method: "POST",
//                 body: JSON.stringify(data),
//                 headers: {
//                     "Content-Type": "application/json"
//                 }
//             }
//             const newUser = await fetch('http://localhost:9000/auth/login', config)
//             const parsed = await newUser.json()
//             clearUserToken()
//             console.log(parsed)
//             setUserToken(parsed.token)
//             setCurrentUser(parsed.user)
//             setIsAuthenticated(parsed.isLoggedIn)
//             return parsed
//         } catch (err) {
//             clearUserToken()
//             setIsAuthenticated(false)
//         }
//     }
//
//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const createdUserToken = await loginUser(input)
//         const user_id = createdUserToken.user._id
//         console.log(user_id);
//
//         if (createdUserToken) {
//             props.history.push(`/${user_id}/home`)
//         } else {
//             props.history.push("/")
//         }
//         setInput(initialState)
//     }
//
//     const handleChange = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value })
//     }
//
//     return(
//         <>
//             <div className="loginPage">
//                 <div className="loginContent">
//                     <div className="loginH1">
//                         <h1>Login</h1>
//                     </div>
//                     <div>
//                         <div>
//                         <form className='text-center loginLabels' onSubmit={handleSubmit}>
//                             <label htmlFor="user">user: </label>
//                             <br />
//                             <input
//                             id="user"
//                             name="user"
//                             value={input.user}
//                             onChange={handleChange}
//                             />
//                             <br />
//                             <br />
//                             <label htmlFor="password">Password: </label>
//                             <br />
//                             <input
//                             type='password'
//                             id="password"
//                             name="password"
//                             value={input.password}
//                             onChange={handleChange}
//                             />
//                             <br />
//                             <br />
//                             <input type="submit" value="Login" />
//                             <p>Don't have an account?<Link to='/register'> Register</Link></p>
//                         </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
//
// export default LoginForm
