import styled from 'styled-components';

export const Section = styled.section`
	margin: 50px auto;
	width: 60%;
	max-width: 1024px;
	height: 500px;

	display: flex;
	flex-direction: column;
	text-align: center;
`;

export const Header = styled.h2`
	height: 100px;
	font-size: 24px;
	font-weight: bold;
	background-color: #4b59f7;
	color: white;
	line-height: 100px;
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
`;

export const Text = styled.p`
	font-size: 15px;
	background-color: white;
	padding-top: 10px;
`;

export const ImgWrapper = styled.div`
	display: flex;
	background-color: white;
	width: 100%;
	text-align: center;
	align-items: center;
	justify-content: center;
	flex: 1;
	border-bottom-left-radius: 25px;
	border-bottom-right-radius: 25px;
`;

export const Img = styled.img`
	padding-right: 0;
	background-color: white;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	max-height: 250px;
`;
