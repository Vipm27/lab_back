import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
<div class="registration-box">
		<form>
			<h2>Подключение</h2>
			<div class="plant-name-box">
				<input type="text" name="" required="" placeholder='Имя растения' />
			</div>
			<div class="code-box">
				<input type="text" name="" required="" placeholder='Ключ доступа'/>
			</div>
			<Link to={'/main'}>
			<div class="accessing">
				
					Подтвердить
			</div>
			</Link>

		</form>
	</div>
    );
};

export default Registration;