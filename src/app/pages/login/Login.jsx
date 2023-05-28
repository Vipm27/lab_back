import React from 'react';
import './login.css'
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div class="login-box">
		<h2>Логин</h2>
		<form>
			<div class="user-box">
				<input type="text" name="" required="" placeholder='Имя' />
			</div>
			<div class="user-box-password">
				<input type="password" name="" required="" placeholder='Email' />
			</div>

			<div class="log-in">
				<Link to={'/choice'}>
					Войти
				</Link>


			</div>
			<div class="sign-up">
				<Link to={'/registr'}>
					Создать аккаунт
				</Link>
				
			</div>

		</form>
	</div>
    );
};

export default Login;