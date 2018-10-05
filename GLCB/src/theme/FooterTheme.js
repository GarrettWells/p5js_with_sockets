import {createMuiTheme} from '@material-ui/core/styles';


export const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#00FFFF'
		},
		background: {
			paper: '#242424',
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
	},
	typography: {
		root: {
			color: '#FFFFFF',
			paddingLeft: 15,
			paddingRight: 15,
			margin: 15,
		},
		headline: {
			color: '#FFFFFF',
			paddingLeft: 15,
			paddingRight: 15,
			marginLeft: 15,
			marginRight: 15
		},
		caption: {
			color: '#FFFFFF',
			paddingLeft: 15,
			paddingRight: 30,
		},
		subheading: {
			color: '#FFFFFF',
			marginTop: 15,
			paddingLeft: 30,
		},
	},
	paper: {
		root: {
			minWidth: '100%',
		}
	},
});