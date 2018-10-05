import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';



export const PublicRoute = ({
								isAuthenticated,
								component: Component,
								...rest
							}) => (
	<Route {...rest} component={(props) => (

		<React.Fragment>
			{
				rest.path === "/" ? (
				<Header position='fixed'/>

			) : (
				<Header position='static'/>
			)}


			<Component {...props} />


			<Footer/>  {/*add the footer*/}
		</React.Fragment>
	)}/>
);

const mapStateToProps = (state) => ({
	isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
