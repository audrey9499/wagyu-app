import React from 'react';
import Button from './Buttons';

function IconBar() {
	
	const iconList = [
		'account_circle',
		'shopping_cart',
		'question_answer',
		'search'
	];
	return (
		<div className="icon-bar">
			<div className="fixed-icon">
				{iconList.map((item, idx)=> <Button className="icon_bar_button" key={idx} icon={item} fontSize="large"></Button>)}
			</div>
		</div>
	);
}

export default IconBar;
