import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid'

import {connect} from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../assets/img/Logo_fixed.png'
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import '../styles/styles.css';
import {theme} from '../theme/theme.js'
import {MuiThemeProvider} from '@material-ui/core/styles'
import {withStyles} from '@material-ui/core/styles'


import {Link} from 'react-router-dom';
import {logout} from '../store/actions/auth';
import {NavLink} from 'react-router-dom';


class Header extends React.Component {
	render() {
		return (
			<div>
				<MuiThemeProvider theme={theme}>
					<AppBar position="fixed">
						<Toolbar>  {/*create the blue bar across the top*/}
							<Grid container justify={"flex-start"} spacing={24}>
								<Grid item xs>
									<Button align="right">
										<Link to={"/Home"}>
											Greg Lauer Custom Builders
										</Link>
									</Button>
								</Grid>
							</Grid>
							<Grid container direction={"row"} justify={"space-between"} alignItems={"center"}>
								<Grid item><Button className="appbarbutton" align="right" variant={"outlined"}>
									<Link to="/albums">Previous Work</Link></Button></Grid>
								<Grid item><Button className="appbarbutton" align="right" variant={"outlined"}>
									<Link to="/about">About us</Link></Button></Grid>
								<Grid item><Button className="appbarbutton" align="right" variant={"outlined"}>
									<Link to="/contact">Contact us</Link></Button></Grid>
							</Grid>
						</Toolbar>
					</AppBar>
				</MuiThemeProvider>
			</div>

		);
	};
}

export default withStyles(theme.appBar)(Header);