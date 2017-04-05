import React, { Component, PropTypes } from 'react';
import './TextField.css';

class TextField extends Component{
	render(){
		const props = this.props,
			id = props.fieldId;

		return (
			<div className="textField">
				<label htmlFor={id}>{props.fieldLabel}</label>
				<input type="text" id={id} value={props.fieldValue} />
			</div>
		);
	}
}

TextField.propTypes = {
	fieldId: PropTypes.string.isRequired,
	fieldLabel: PropTypes.string.isRequired,
	fieldValue: PropTypes.string
};

export default TextField;
