import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import AboutPage from '../components/AboutPage';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import FAQPage from '../components/FAQPage';
import NotFoundPage from '../components/NotFoundPage';
import AlbumsPage from '../components/AlbumsPage';

import PublicRoute from './PublicRouter';
import PrivateRoute from './PrivateRouter';
import GetStartedPage from '../components/GetStartedPage';



const AppRouter = () => (
	<BrowserRouter>
		<div>

			<Switch>

				<PublicRoute path="/" component={LandingPage} exact={true}/>
				<PrivateRoute path="/home" component={HomePage}/>

				<PublicRoute path="/about" component={AboutPage}/>

				<PublicRoute path="/start" component={GetStartedPage}/>
				<PublicRoute path="/contact" component={ContactPage}/>
				<PublicRoute path="/FAQ" component={FAQPage}/>
				<PublicRoute path="/albums" component={AlbumsPage}/>

				<Route component={NotFoundPage}/>
			</Switch>

		</div>
	</BrowserRouter>
);

export default AppRouter;