import React from 'react';
import { Section, Header, Text, ImgWrapper, Img } from './Welcome.elements';
const Welcome = () => {
	return (
		<Section>
			<Header>Bienvenue sur le réseau social de Groupomania</Header>
			<Text>
				En vous connectant vous retrouverez l'ensemble des posts publiés par vos
				collègues.
			</Text>
			<Text>
				Vous pourrez également publier vos propres posts ou personnaliser votre
				profil
			</Text>
			<ImgWrapper>
				<Img src={require('../../images/team.svg').default}></Img>
			</ImgWrapper>
		</Section>
	);
};

export default Welcome;
