import React from 'react';

const ColorBalls = props => {
	//console.log(props.characterData);

	const SelectedBalls = props.characterData.reduce((acc, cur) => {
		const {selected_color} = cur;
		const colorObj = acc.find(({color}) => color === selected_color );

		if(colorObj) {
			colorObj.count++;
		} else {
			acc.push({color: selected_color, count: 1});
		}

		return acc;

	}, []);
	//console.log(SelectedBalls);
	
    const ballsJsx = SelectedBalls.length ? (
        SelectedBalls.map(my_color => <li key={my_color.color} style={{backgroundColor: my_color.color}}>{my_color.count}</li>)
    ): <li className='empty-balls'>No Balls Found</li>;

    return <div className="color-balls"><ul className='list list--balls'>{ballsJsx}</ul></div>;
}

export default ColorBalls;