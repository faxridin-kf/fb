import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';

function Header() {
    const [{user}, dispatch] = useStateValue()
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"/>
                <div className="header__input">
                    <SearchIcon/>
                    <input type="text" placeholder="Search Facebook"/>
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option active_header_option">
                    <HomeIcon font-size="large"/>  
                </div>
                <div className="header__option">
                    <FlagIcon font-size="large"/>  
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon font-size="large"/>  
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon font-size="large"/>  
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon font-size="large"/>  
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationImportantIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
