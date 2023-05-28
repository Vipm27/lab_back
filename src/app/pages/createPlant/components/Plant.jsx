import React from 'react';
import circle from '../images/check-circle.svg';
import dracena from '../images/dracena.png';
const Plant = () => {
    return (
        <div>
            	<div class="right-background">
		<img alt='' src={dracena}/>
		<a href="/" class="plant-button-for-choice">
			<div class="plant-button-for-choice-content">
				<h2>Драцена</h2>
				<p>Спаржевые</p>
			</div>
			<img alt='' src={circle} class="check-circle" />
            <svg class="zoom-in" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.58398 19.708C3.58398 10.8024 10.8034 3.58301 19.709 3.58301C28.6146 3.58301 35.834 10.8024 35.834 19.708C35.834 23.801 34.309 27.5378 31.7963 30.3813L38.3326 36.9176C38.7231 37.3081 38.7231 37.9413 38.3326 38.3318C37.9421 38.7224 37.3089 38.7224 36.9184 38.3318L30.382 31.7955C27.5386 34.3081 23.8019 35.833 19.709 35.833C10.8034 35.833 3.58398 28.6136 3.58398 19.708ZM19.709 13.458C20.1922 13.458 20.584 13.8498 20.584 14.333V18.833H25.084C25.5672 18.833 25.959 19.2248 25.959 19.708C25.959 20.1913 25.5672 20.583 25.084 20.583H20.584V25.083C20.584 25.5663 20.1922 25.958 19.709 25.958C19.2257 25.958 18.834 25.5663 18.834 25.083V20.583H14.334C13.8507 20.583 13.459 20.1913 13.459 19.708C13.459 19.2248 13.8507 18.833 14.334 18.833H18.834V14.333C18.834 13.8498 19.2257 13.458 19.709 13.458Z" fill="#498553"/>
            </svg>

		</a>
	</div>
        </div>
    );
};

export default Plant;