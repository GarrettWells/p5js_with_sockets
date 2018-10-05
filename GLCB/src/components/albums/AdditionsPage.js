import React from 'react';
import Gallery from 'react-grid-gallery';
import tileData from '~/src/assets/img/additions/additionsTileData';

class AdditionsPage extends React.Component {
	render() {
		return(
			<Gallery images={tileData}
					 backdropClosesModal={true}
					 preloadNextImage={true}
					 showCloseButton={false}
					 showImageCount={true}

			/>
		)
	};
}

export default AdditionsPage;
