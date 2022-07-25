import React, {Component} from 'react';
import Select from 'react-select';

const color_options = [{ label: "Select Color", value: "" },{ label: "Red", value: "Red" },{ label: "Green", value: "Green" },{ label: "Blue", value: "Blue" }];

class Form extends React.Component {
    constructor(props) {
        super(props);

		//console.log('formStateData: '+ this.props.formStateData.name);
    }

    handleChange = event => {
        /*const { name, value } = event.target;

        this.setState({
            [name] : value
        });*/
		const shareObj = {stateName: 'name', stateValue: event.target.value}
		this.props.handleState(shareObj);
    }
	handleSelectChange = event => {
        //this.setState({ selected_color: event.value });
		const shareObj = {stateName: 'selected_color', stateValue: event.value}
		this.props.handleState(shareObj);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
		const { name, selected_color } = this.props.formStateData;
		if(name == ''){
			alert("Name can not be blank.");
			return false;
		}else if(selected_color == ''){
			alert("Please select color.");
			return false;
		}

        this.props.handleSubmit(this.props.formStateData);
        //this.setState(this.initialState);

    }

    render() {
        //const { name, selected_color } = this.state;
		const { name, selected_color } = this.props.formStateData;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name} 
                    onChange={this.handleChange} />

				<label htmlFor="select-colors">Select Colors</label>	
				<Select options={color_options} value={color_options.find(item => item.value === selected_color)}  onChange={this.handleSelectChange} />
				<br/>
                <button className="form-save-btn" type="submit">
                    Submit
                </button> 

            </form>
        );
    }
}

export default Form;
