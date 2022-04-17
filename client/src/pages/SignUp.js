import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function SignUp(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
	console.log(formState);
	try {
const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  }
  catch(err) {
	  console.log(err)
  }
	}
	


   

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
			<form className="login" onSubmit={handleFormSubmit}>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input 
					type="text" 
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
				<button className="button login__submit">
					<span className="button__text">Sign Up Now</span>
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

export default SignUp;