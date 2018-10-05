import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import {theme} from '../theme/FooterTheme'
import {MuiThemeProvider, withStyles} from '@material-ui/core/styles'

const style = {
	div: {
		marginLeft: 150,
		marginRight: 150,
		paddingTop: 35,
		paddingBottom:50
	},
}

class Footer extends React.Component {
	render() {
		const { classes } = this.props
		return (
			<MuiThemeProvider theme={theme}>
				<Paper elevation={1}>
					<div className={classes.div}>
						<Grid container direction={'row'}>
							<Grid container style={{width: '50%'}} direction={'column'} justify={'flex-start'} alignItems={'flex-start'}>


								<Grid item style={{marginBottom: 20}}><Typography variant="headline">
									ABOUT
								</Typography></Grid>
								<Grid item><Typography variant="subheading">
									Greg Lauer Custom Builders...
								</Typography></Grid>
							</Grid>


							<Grid container style={{width: '50%'}} direction={'column'} justify={'flex-start'} alignItems={'flex-end'}>
								<Grid item style={{marginBottom: 20}}><Typography variant='headline'>
									CONTACT US
								</Typography></Grid>


								<Grid container direction={'column'} alignItems={'flex-end'}>
									<Grid item><Typography variant="caption">
										ADDRESS
									</Typography></Grid>
									<Grid item><Typography variant="caption">
										Edgewater, MD 21037
									</Typography></Grid>
									<Grid item><Typography variant="caption">
										PHONE NUMBER
									</Typography></Grid>
									<Grid item><Typography variant="caption">
										EMAIL
									</Typography></Grid>
								</Grid>
							</Grid>
						</Grid>
					</div>
				</Paper>
			</MuiThemeProvider>
		)
	};
}

export default withStyles(style)(Footer);