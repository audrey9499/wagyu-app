import React from 'react';
import Icon from '@material-ui/core/Icon';

export default function Buttons({icon, fontSize, className}) {
	return <button className={className}>
		<Icon className="icon" fontSize={fontSize}>{icon}</Icon>
	</button>;
}
