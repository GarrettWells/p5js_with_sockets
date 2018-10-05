import React from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export class ContactPage extends React.Component {

	state = {
		messageopen: false,
		firstName: '',
		lastName: '',
		email: '',
		location: '',
		message: '',
		messageError: false,
		successMessage: '',
	};

	giveSuccessMessage = () => {
		let newmsg = {
			message: 'sent successful',
			key: new Date().getTime()
		};

		this.setState({
			messageopen: true,
			successMessage: newmsg

		});

	};

	clear = () => {
		// return the state to initial
		this.setState({
			firstName: '',
			lastName: '',
			email: '',
			location: '',
			message: ''
		})
	};

	onSubmit = () => {
		this.state.message === '' ? (
			this.setState(() => this.state.messageError=true)
		)
		:
		(
			this.clear(),
			this.giveSuccessMessage()
		);

	};


	handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		this.setState({messageopen: false});
	};

	render() {

		const {message, key} = this.state.successMessage;


		return (
			<div className="contact-page-wrapper">


				<Snackbar
					key={key}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					open={this.state.messageopen}
					autoHideDuration={2000}
					onClose={this.handleClose}

					ContentProps={{
						'aria-describedby': 'message-id',
					}}
					message={<span id="message-id">{message}</span>}
					action={[

						<IconButton
							key="close"
							aria-label="Close"
							color="inherit"

							onClick={this.handleClose}
						>
							<CloseIcon/>
						</IconButton>,
					]}
				/>
				<Grid container spacing={24} justify="center">
					<Grid item xs={12} md={10} style={{marginBottom: 20}}>
						<Paper className="contact-page-paper"><Typography variant="display1" gutterBottom
																		  style={{padding: 15, marginTop: 15}}>
							Contact us
						</Typography>
							<Grid container spacing={24}>
								<Grid item xs={12} lg={6} md={6} style={{marginTop: 10}}>
									<TextField
										value={this.state.firstName}
										onChange={e => this.setState({firstName: e.target.value})}
										id="First Name"
										label="First Name"
										placeholder="First Name"
										className="contact-page-name-list-field"
										margin="normal"
										autoFocus={true}
									/>
								</Grid>

								<Grid item xs={12} lg={6} md={6} style={{marginTop: 10}}>
									<TextField
										value={this.state.lastName}
										onChange={e => this.setState({lastName: e.target.value})}
										id="Last Name"
										label="Last Name"
										placeholder="Last Name"
										className="contact-page-name-list-field"
										margin="normal"
									/>
								</Grid>

								<Grid item xs={12} lg={6} md={6} style={{marginTop: 10}}>
									<TextField
										value={this.state.email}
										onChange={e => this.setState({email: e.target.value})}
										id="headystick@mailinator.com"
										label="Email"
										placeholder="example@example.com"
										className="contact-page-name-list-field"
										margin="normal"
									/>
								</Grid>


								<Grid item xs={12} lg={6} md={6} style={{marginTop: 10}}>
									<TextField
										value={this.state.location}
										onChange={e => this.setState({location: e.target.value})}
										id="Location"
										label="Location"
										placeholder={"123 Example Rd \nArnold, MD 21012"}
										className="contact-page-name-list-field"
										margin="normal"
										multiline
										rows="2"
									/>
								</Grid>


								<Grid item xs={12} lg={12} md={12} style={{marginTop: 10}}>
									<TextField
										value={this.state.message}
										onChange={e =>
											this.setState({messageError: false,
														   message: e.target.value,
														   })}
										id="Message"
										label="Message"
										placeholder="Message"
										multiline
										rows="7"
										className="contact-page-message-list-field"
										margin="normal"
										required={true}
										error={this.state.messageError}
										helperText={this.state.messageError ? 'This field is required!' : ''}
									/>
								</Grid>
								<Grid item xs={12} lg={12} md={12} style={{marginTop: 10}}>
									<Button type="button" color="primary" variant="raised"
											onClick={this.onSubmit}>Send</Button>
								</Grid>


							</Grid>
						</Paper>
					</Grid>
				</Grid>
			</div>
		);
	}


}


export default ContactPage;
