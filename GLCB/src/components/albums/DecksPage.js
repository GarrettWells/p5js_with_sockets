import React from 'react';
import Gallery from 'react-grid-gallery';
import tileData from '~/src/assets/img/decks/decksTileData';

class DecksPage extends React.Component {
	render() {
		return(
			<Gallery images={tileData} backdropClosesModal={true}/>
		)
	};
}

export default DecksPage;
