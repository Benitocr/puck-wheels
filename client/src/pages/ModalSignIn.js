import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { LOGIN } from "../utils/mutations";

const ModalSignIn = ({onClose}) => {


    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });
    // const [login] = useMutation(LOGIN);

        const handleInputEmail = (e) => {
        const value = e.target.value;
        setInputs({email: value});
    };
        const handleInputPassword = (e) => {
            const value = e.target.value;
            setInputs({password: value});
        };

        const handleSubmit = async e => {
            e.preventDefault();
            onClose(false);
            // try {
              // const mutationResponse = await login({
                // variables: { username: inputs.username, password: inputs.password },
              // });
              // const token = mutationResponse.data.login.token;
              // Auth.login(token);
            // } catch (e) {
            //   console.log(e);
            }
        // }
      

    return (
        <>
<div className="container">
	<div className="screen">
		<div className="screen__content">
           <button className="modal-close-btn" onClick={() => onClose(false)}>X</button>
			<form className="login" onSubmit={handleSubmit}>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" onChange={handleInputEmail} value={inputs.email} name="email" placeholder="User Email" />
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" onChange={handleInputPassword} value={inputs.password} name="password" placeholder="Password" /> 
				</div>
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

export default ModalSignIn;