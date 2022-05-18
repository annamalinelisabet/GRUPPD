import { useState, useEffect } from 'react'
import './LoginView.css'
import { Link } from 'react-router-dom'
import FormInput from '../../components/FormInput/FormInput'
import { checkUser, loginUser } from '../../store/actions/authActions'
import { useDispatch, useSelector  } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'


const LoginView = () => {

  const [values, setValues] = useState({
    email:"",
    password:""
  });

  const inputs = [
    {
      id: 1, 
      name: "email",
      type: "email",
      placeholder: "E-post",
      errorMessage: "Du måste ange i en gilitg e-postadress",
      required: true,
    },
    {
      id: 2, 
      name: "password",
      type: "password",
      placeholder: "Lösenord",
      errorMessage: "Du måste ange ditt lösenord",
      required: true
    }
  ]

  const dispatch = useDispatch()

  const loading = useSelector(state => state.auth.loading)

  const navigate = useNavigate()

  const user = useSelector(state => state.auth.token)  
  const { state } = useLocation()

  const onChange = e => {
    setValues(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser(values))
  }

  useEffect(() => {
    if(user) {
      try {navigate(state.from)}
      catch {navigate("/products")}
    }
  }, [user, navigate])

  useEffect (() => {
    dispatch(checkUser())
  }, [dispatch])


  console.log(values);
  return (

    <div className='LoginView'>
      <div className='login-container'>
        <form className='form-control' onSubmit={handleSubmit}>
          <Link to="/"><i className="fa-solid fa-arrow-left"></i></Link>
          <h1>Logga in</h1>
          <p>Logga in genom att fylla i din e-postadress och lösenord</p>
          <div className='input-group'>
            {inputs.map((input) => (
              <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/> 
            ))}
          </div>
          <button className='btn btn-dark'>{loading ? 'Loggar in' : 'Logga in'}</button>
          <Link to="/RegisterView"><button className='btn btn-light'>Registrera</button></Link>
        </form>
      </div>
    </div>
  )
}

export default LoginView