import styled from 'styled-components';

export const RegisterHeader = styled.h3`
	color: #fff;
	font-size: 24px;
	margin: 0 auto;
	background-color: #4b59f7;
	width: 100%;
	text-align: center;
	height: 40px;
	line-height: 40px;
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
`;

export const Form = styled.form`
	margin: 50px auto;
	width: 50%;

	display: flex;
	flex-direction: column;
`;

export const FormContainer = styled.div`
	width: 100%;
`;

export const Input = styled.input`
	width: 100%;
	font-size: 20px;
	line-height: 30px;
	margin-top: 5px;
	box-sizing: border-box;
`;
export const InputBtn = styled.input`
	background-color: #fff;
	color: black;
	width: 100%;
	font-size: 24px;
	line-height: 30px;
	margin-top: 5px;
	box-sizing: border-box;
	border-bottom-left-radius: 25px;
	border-bottom-right-radius: 25px;
	transition: all 0.5s ease;
	&:hover {
		color: #fff;
		background-color: #4b59f7;
	}
`;
