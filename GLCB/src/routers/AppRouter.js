import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import FAQPage from '../components/FAQPage';
import NotFoundPage from '../components/NotFoundPage';
import AlbumsPage from '../components/AlbumsPage';
import DecksPage from '../components/albums/DecksPage'
import AdditionsPage from '../components/albums/AdditionsPage'
import PorchesPage from '../components/albums/PorchesPage'


import PublicRoute from './PublicRouter';
import GetStartedPage from '../components/GetStartedPage';



const AppRouter = () => (
	<BrowserRouter>
		<div>

			<Switch>

				<PublicRoute exact path="/" component={LandingPage}/>
				<PublicRoute exact path="/about" component={AboutPage}/>

				<PublicRoute exact path="/start" component={GetStartedPage}/>
				<PublicRoute exact path="/contact" component={ContactPage}/>
				<PublicRoute exact path="/FAQ" component={FAQPage}/>
				<PublicRoute exact path="/albums" component={AlbumsPage}/>

				<PublicRoute exact path="/albums/decks" component={DecksPage}/>
				<PublicRoute exact path="/albums/additions" component={AdditionsPage}/>
				<PublicRoute exact path="/albums/porches" component={PorchesPage}/>


				<Route component={NotFoundPage}/>
			</Switch>

		</div>
	</BrowserRouter>
);

export default AppRouter;