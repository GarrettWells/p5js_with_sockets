import React from 'react';
import Gallery from 'react-grid-gallery';
import tileData from '~/src/assets/img/porches/porchesTileData';

class porchesPage extends React.Component {
	render() {
		return(
			<Gallery images={tileData} backdropClosesModal={true}/>
		)
	};
}

export default porchesPage;
