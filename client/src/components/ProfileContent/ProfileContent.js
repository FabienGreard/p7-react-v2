import React from 'react';
import {
	ProfileDiv,
	ProfileHeader,
	ProfileInfos,
} from './ProfileContent.elements';
import { useState, useEffect } from 'react';

const ProfileContent = (props) => {
	const [items, setItems] = useState([]);
	console.log(props.currentUser);
	const loadProfile = async () => {
		const response = await fetch(`users/${props.currentUser}/profil`);
		const data = await response.json();
		setItems(data);
		console.log(items.length, props);
	};

	useEffect(() => {
		loadProfile();
	}, []);

	return (
		<>
			{items.length > 0 ? (
				<ProfileDiv>
					<ProfileHeader>Profil de: {items[0].username}</ProfileHeader>
					<ProfileInfos>
						<p>Prénom: {items[0].firstname}</p>
						<p>Nom: {items[0].lastname}</p>
						<p>Emploi: {items[0].job}</p>
						<p>Email: {items[0].email}</p>
					</ProfileInfos>
				</ProfileDiv>
			) : (
				<p>Loading</p>
			)}
		</>
	);
};

export default ProfileContent;
