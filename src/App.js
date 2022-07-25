import React, { Component, useState, useRef } from 'react';
import Table from './Table';
import Form from './Form';
import ColorBalls from './ColorBalls';

class App extends React.Component {
    state = {
        characters: [],
		name: '',
		selected_color: '',
		isFormUpdate: false,
		formRecordId: 0
    };

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }
	handleItemChange = index => {
		const { characters } = this.state;

		this.setState({
			name: characters[index]['name'],
			selected_color: characters[index]['selected_color'],
			isFormUpdate: true,
			formRecordId: index
		});
	}
	handleState = stateData => {
		this.setState({ [stateData.stateName]: stateData.stateValue });
	}

    handleSubmit = character => {
		const isFormUpdate = this.state.isFormUpdate;
		const formRecordId = this.state.formRecordId;
		const items = this.state.characters;

		let duplicate_found = false;
		if(items.length){
			for(let i=0;i<items.length;i++) {
				if(items[i].name == this.state.name && formRecordId != i){
					alert("Name already in use.");
					duplicate_found = true;
				}
			}
		}
		if(!duplicate_found){
			if(!isFormUpdate){
				this.setState({characters: [...this.state.characters, character]});
			}else{
				this.updateItem(formRecordId, character);
			}
		}
		this.setState({ name: '', selected_color: '', isFormUpdate: false });
    }
	updateItem(index, itemAttributes) {
		this.setState({
			characters: [
			...this.state.characters.slice(0,index),
			Object.assign({}, this.state.characters[index], itemAttributes),
			...this.state.characters.slice(index+1)
			]
		});
	}

    render() {
        const { characters } = this.state;
		const formStateData = this.state;

        return (
            <div className="container">
                <h1>Practice Test React</h1>
				<h3>Add New</h3>
				<div className="my-form">
					<Form handleSubmit={this.handleSubmit} handleState={this.handleState} formStateData={formStateData} />
					<ColorBalls characterData={characters} />
				</div>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
					handleItemChange={this.handleItemChange}
                />
            </div>
        );
    }
}

export default App;