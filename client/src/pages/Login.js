import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
      

    return (
        <>
<div className="container">
	<div className="screen">
		<div className="screen__content">
           {/* <button className="modal-close-btn" onClick={() => onClose(false)}>X</button> */}
			<form className="login" onSubmit={handleFormSubmit}>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input 
                    type="email" 
                    className="login__input" 
                    onChange={handleChange}  
                    name="email" 
                    placeholder="User Email" 
                    />
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input 
                    type="password" 
                    className="login__input" 
                    onChange={handleChange} 
                    name="password" 
                    placeholder="Password" 
                    /> 
				</div>

                {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
				<button className="button login__submit">
					<span className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
		</div>
        
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
        </>
    )
}

export default Login;