import React from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
				<th>Select Color</th>
                <th>Action</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {

        return (
            <tr key={index}>
                <td>{row.name}</td>
				<td>{row.selected_color}</td>
                <td><button onClick={() => props.handleItemChange(index)}>Edit</button> | <button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { characterData, removeCharacter, handleItemChange } = props;
        return (
			<div className="my-table">
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} handleItemChange={handleItemChange} />
            </table>
			</div>
        );
}

export default Table;