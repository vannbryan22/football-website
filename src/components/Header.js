import React, {useState} from 'react'
import {Avatar, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory()

    const [searchButton, setSearchButton] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const handleSearch=()=>{
        setSearchButton(!searchButton)
    }

    return (
        <div className='header'>
            <div className='header__logo'>
                <img src='/soccerball.png' alt='logo' />
                <h2>Football</h2>
            </div>

            <div className='header__nav'>
                <ul>
                    <li
                    onClick={()=>{
                        history.push('/')
                    }}>Home</li>
                    <li 
                    onClick={()=>{
                        history.push('/teams')
                    }}>Teams</li>
                    <li
                    onClick={()=>{
                        history.push('/tables')
                    }}>Tables</li>
                </ul>
            </div>

            <div className='header__rightNav'>
                <div className='header__rightNavSearch'>
                    <input 
                    style={{display:`${searchButton ? 'block' : 'none'}`}}
                    type='text'
                    value={searchValue}
                    onChange={(e)=>{
                        setSearchValue(e.target.value)
                    }}
                    placeholder='Search...' />
                    <IconButton 
                    color='inherit'
                    size='small'
                    onClick={()=>{
                        handleSearch()
                    }}>
                        <SearchIcon 
                        style={{transform:`${searchButton ? 'translateX(-100%)' : ''}`,
                        marginRight:`${searchButton ? '-20px' : '0px'}`,
                        color:`${searchButton ? '#424242' : '#ffffff'}`}} />
                    </IconButton>
                </div>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
