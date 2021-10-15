import React, { useState } from 'react'
import { getUserToken } from "../utils/authToken"
import { setUserToken, clearUserToken } from "../utils/authToken"
import { Link } from 'react-router-dom'
import { useHistory, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form'

const RegisterForm = (props) => {
  const initialState = { user: "", password: "", password2: ""}
  const [input, setInput] = useState(initialState)
  const [currentUser, setCurrentUser] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)

const registerUser = async (data)=> {
  try {
    const configs = {
      method:"POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${getUserToken()}`,
      }
    }
    const newUser =  await fetch('http://localhost:9000/auth/register',configs)
    const parsedUser = await newUser.json()
    console.log("PARSED", parsedUser)
    setUserToken(parsedUser.token)
    setCurrentUser(parsedUser.user)
    setIsAuthenticated(parsedUser.isLoggedIn)
    return parsedUser

  } catch(err){
    console.log("sorry bro try again", err)
    clearUserToken()
    setIsAuthenticated(false)
  }
}

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (input.password === input.password2) {
      const createdUserToken = await registerUser(input)
      console.log(createdUserToken)
      if (createdUserToken) {
        const user_id = createdUserToken.user._id
        props.history.push(`/${user_id}/home`)
      } else {
        props.history.push("/register")
      }
    } else {
      alert("Try again bro")
      props.history.push("/register")
    }
    setInput(initialState)
  }

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="registerPage">
        <div className="registerContent">
          <div className="registerH1">
            <h1>Register</h1>
          </div>
          <form className= "registerLabels" onSubmit={handleSubmit}>
            <label
                htmlFor="user"
                controlId="floatingInput"
                label="Username"
                className="mb-3"
            >
                <Form.Control
                type="name"
                id="user"
                name="user"
                value={input.user}
                onChange={handleChange}
                placeholder="username"
                required />
            </label>
            <label
              htmlFor="password"
              controlId="floatingPassword"
              label="Password"
              className="mb-3"
            >
                <Form.Control
                  id="password"
                  name="password"
                  type="password"
                  value={input.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required />
              </label>
            <label
              htmlFor="password"
              controlId="floatingPassword"
              label="Confirm Password"
              className="mb-3"
            >
                <Form.Control
                  id="password2"
                  type='password'
                  name="password2"
                  value={input.password2}
                  onChange={handleChange}
                  placeholder="Password"
                  required />
              </label>

            <input type="submit" value="Register" />
            <p >Already have an account?<Link to='/'> Log in</Link></p>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm
// const RegisterForm = (props) => {
//   const { userId } = useParams()
//   const initialState = { user: "", password: ""}
//   const [input, setInput] = useState(initialState);
//
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const createdUserToken = await props.signUp(input);
//     const userId = createdUserToken.user_id
//       console.log(userId);
//     if (createdUserToken) {
//
//       props.history.push(`/${userId}/home`);
//
//     } else {
//       props.history.push("/");
//     }
//
//     setInput(initialState);
//   };
//
//   const handleChange = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };
//
//   return (
//     <>
//     <div className="registerPage">
//       <h1>Register</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="user">Name: </label>
//         <input
//           user="user"
//           name="user"
//           value={input.user}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         <label htmlFor="password">Password: </label>
//         <input
//           user="password"
//           name="password"
//           value={input.password}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         <input type="submit" value="Create Account!" />
//       </form>
//       </div>
//     </>
//   );
// };

//
// const RegisterForm = (props) => {
//     const initialState = { User: "", password: "", password2: ""}
//     const [input, setInput] = useState(initialState)
//     const [currentUser, setCurrentUser] = useState({})
//     const [isAuthenticated, setIsAuthenticated] = useState(false)
//
//   const registerUser = async (data)=> {
//     try {
//       const configs = {
//         method:"POST",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `bearer ${getUserToken()}`,
//         }
//       }
//       const newUser =  await fetch('http://localhost:9000/auth/register',configs)
//       const parsedUser = await newUser.json()
//       setUserToken(parsedUser.token)
//       setCurrentUser(parsedUser.user)
//       setIsAuthenticated(parsedUser.isLoggedIn)
//       return parsedUser
//
//     } catch(err){
//       console.log("parsed a no go", err)
//       clearUserToken()
//       setIsAuthenticated(false)
//     }
//   }
//
//     const handleSubmit = async (e) => {
//       e.preventDefault()
//       if (input.password === input.password2) {
//         const createdUserToken = await registerUser(input)
//         // console.log(createdUserToken)
//
//         if (createdUserToken) {
//           const user_id = createdUserToken.user_id
//           console.log(user_id);
//           props.history.push(`/${user_id}/home`)
//         } else {
//           props.history.push("/register")
//         }
//       } else {
//         alert("WRONG! try again")
//         props.history.push("/register")
//       }
//       setInput(initialState)
//     }
//
//     const handleChange = (e) => {
//       setInput({ ...input, [e.target.name]: e.target.value })
//     }
//
//     return (
//       <div className="registerPage">
//         <h1>Register</h1>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="user">Name: </label>
//           <input
//             id="user"
//             name="user"
//             value={input.user}
//             onChange={handleChange}
//             required
//           />
//           <br />
//           <br />
//           <label htmlFor="password">Password: </label>
//           <input
//             id="password"
//             name="password"
//             type="password"
//             value={input.password}
//             onChange={handleChange}
//             required
//           />
//           <br />
//           <br />
//           <label htmlFor="password">Confirm Password: </label>
//           <br />
//           <input
//             id="password2"
//             type='password'
//             name="password2"
//             value={input.password2}
//             onChange={handleChange}
//             required
//           />
//           <br />
//           <br />
//           <input type="submit" value="Register" />
//           <p >Already have an account?<Link to='/'> Log in</Link></p>
//         </form>
//       </div>
//     );
//   };

// export default RegisterForm
