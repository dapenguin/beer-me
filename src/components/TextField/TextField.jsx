import React, { Component, PropTypes } from 'react';
import './TextField.css';

class TextField extends Component{
	focus(){
		this.textInput.focus();
	}

	render(){
		const props = this.props,
			id = props.fieldId;

		return (
			<div className="textField">
				<label htmlFor={id}>{props.fieldLabel}</label>
				<input type="text" ref={(input) => {this.textInput = input;}} id={id} name={props.name} value={props.fieldValue} onChange={props.onChange} onBlur={props.onBlur} />
				<p className="fieldError">{props.errorMessage}</p>
			</div>
		);
	}
}

TextField.propTypes = {
	fieldId: PropTypes.string.isRequired,
	fieldLabel: PropTypes.string.isRequired,
	fieldValue: PropTypes.string,
	errorMessage: PropTypes.string,
	onChange: PropTypes.func,
	onBlur: PropTypes.func
};

export default TextField;
