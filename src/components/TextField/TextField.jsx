import React, { Component, PropTypes } from 'react';
import './TextField.css';

class TextField extends Component{
	focus(){
		this.textInput.focus();
	}

	renderErrorMessage(){
		const errorMessage = this.props.errorMessage;

		if (errorMessage.length > 0){
			return (<p className="textField-errorMessage">{errorMessage}</p>);
		};
	}

	render(){
		const props = this.props,
			id = props.fieldId,
			fieldClass = 'textField' + (props.hasError ? ' textField-hasError' : '');

		return (
			<div className={fieldClass}>
				<label htmlFor={id}>{props.fieldLabel}</label>
				<input type="text" ref={(input) => {this.textInput = input;}} id={id} name={props.name} value={props.fieldValue} onChange={props.onChange} onBlur={props.onBlur} />
				{this.renderErrorMessage()}
			</div>
		);
	}
}

TextField.defaultProps = {
	hasError: false,
	errorMessage: ''
}

TextField.propTypes = {
	fieldId: PropTypes.string.isRequired,
	fieldLabel: PropTypes.string.isRequired,
	fieldValue: PropTypes.string,
	hasError: PropTypes.bool,
	errorMessage: PropTypes.string,
	onChange: PropTypes.func,
	onBlur: PropTypes.func
};

export default TextField;
