import React from 'react';
import Icon from '@material-ui/core/Icon';
import styled from 'styled-components';

const IconButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	&:focus {
    	outline: none;  
    }
`;

export default function Buttons({ icon, fontSize, className }) {
	return (
		<IconButton className={className}>
			<Icon className="icon" fontSize={fontSize}>
				{icon}
			</Icon>
		</IconButton>
	);
}
