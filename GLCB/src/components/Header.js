import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid'

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Logo from '../assets/img/Logo.png'
import '~/src/styles/styles.css';
import { cyan } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'

const style = {
	Logo: {
		color: 'inherit',
		opacity: 1,
	},
	Button: {
		color: 'inherit',
		opacity: 1,
		backgroundColor: 'rgb(0, 0, 0, .3)'
	},
	AppBar: {
		height: 120,
	},
};

class Header extends React.Component {
	render() {
		const { classes, position } = this.props;
		const style = (position=='fixed') ? ({backgroundColor: 'rgba(0, 0, 0, .3'}) : ({backgroundColor: cyan[100]});

		return (
			<div>
				<AppBar className={classes.AppBar} style={style} position={position || 'fixed'}>
					<Toolbar>  {/*create the blue bar across the top*/}
						<Grid container justify={"flex-start"} spacing={24}>
							<Grid item xs>
								<Button className={classes.Logo} href="/" size="small">
									<img alt="Greg Lauer Custom Builders" src={Logo}/>
								</Button>
							</Grid>
						</Grid>
						<Grid container direction={"row"} justify={"center"} alignItems={"center"}>
							<Grid item>
								<Button className={classes.Button} href="/albums" align="right" variant={"flat"}>
									Previous Work
								</Button></Grid>
							<Grid item>
								<Button className={classes.Button} href="/about" align="right" variant={"flat"}>
									About us
								</Button></Grid>
							<Grid item>
								<Button className={classes.Button} href="/contact" align="right" variant={"flat"}>
									Contact us
								</Button></Grid>
						</Grid>
					</Toolbar>
				</AppBar>
			</div>

		);
	};
}

export default withStyles(style)(Header);