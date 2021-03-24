import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #4b59f7;
	width: 100%;
	height: 80px;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const NavLogo = styled(Link)`
	text-decoration: none;
	color: #fff;
	font-size: 36px;

	@media screen and (max-width: 768px) {
		font-size: 24px;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	list-style: none;
	color: #fff;
`;

export const NavItem = styled.li`
	padding: 5px;
	cursor: pointer;
	font-size: 20px;
	transition: all 0.3s ease;
	padding: 0 10px;
	&:hover {
		color: lightgray;
	}

	@media screen and (max-width: 768px) {
		font-size: 15px;
	}
`;

export const NavLinks = styled(Link)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;

	height: 100%;
	&:hover {
		color: lightgray;
		transition: all 0.3s ease;
	}
`;
