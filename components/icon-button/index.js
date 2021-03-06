/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './style.scss';
import Tooltip from '../tooltip';
import Button from '../button';
import Dashicon from '../dashicon';

// This is intentionally a Component class, not a function component because it
// is common to apply a ref to the button element (only supported in class)
class IconButton extends Component {
	render() {
		const { icon, children, label, className, tooltip, focus, ...additionalProps } = this.props;
		const classes = classnames( 'components-icon-button', className );

		let element = (
			<Button { ...additionalProps } aria-label={ label } className={ classes } focus={ focus }>
				<Dashicon icon={ icon } />
				{ children }
			</Button>
		);

		if ( label && ! children && false !== tooltip ) {
			element = <Tooltip text={ tooltip || label }>{ element }</Tooltip>;
		}

		return element;
	}
}

export default IconButton;
