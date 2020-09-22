import React from "react";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import SearchIcon from '@material-ui/icons/Search';

function IconBar() {
    return  <div className="icon-bar"><div className="fixed-icon">
    <AccountCircleIcon className="icon" fontSize="large" />
    <ShoppingCartIcon className="icon" fontSize="large" />
    <QuestionAnswerIcon className="icon" fontSize="large" />
    <SearchIcon className="icon" fontSize="large" /></div></div>
}

export default IconBar;