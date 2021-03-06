import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUi, setTeamFixture } from '../redux/uiSlice'
import requestOptions from '../requestOptions'
import {CSSTransition} from 'react-transition-group';
import moment from 'moment';

function Fixtures() {
    const ui = useSelector(selectUi)
    const fixtureId = ui.teamFixture.id
    const fixtureClicked = ui.teamFixture.clicked
    const dispatch = useDispatch()

    const [fixture, setFixture] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.request(requestOptions.getTeamMatches(fixtureId))
        .then((response)=>{
            setFixture(response.data.matches)
            setLoading(false)
        }).catch((error)=>{
            console.error(error);
        });
        // eslint-disable-next-line
    }, [])

    
    return (
        <CSSTransition
        classNames='fixtures__animation'
        in={fixtureClicked}
        timeout={500}
        unmountOnExit>
            <div className='fixtures'>
                <div 
                onClick={()=>{
                    dispatch(setTeamFixture({clicked: false, id: ''}))
                    setLoading(false)
                }}
                className='fixtures__close'>
                    X
                </div>

                <div className='fixtures__container'>

                    <div className='fixtures__titles'>
                        <p>Date and Time</p>
                        <p className='fixtures__titlesMatch'>Match</p>
                        <p>Competition</p>
                    </div>
                    {loading ? 
                        <div className='fixtures__loading'>
                        <h1>Fetching Data...</h1>
                        </div> 
                        :
                        
                        [...fixture].reverse().map((game)=>{
                            return(
                            <div className='fixtures__teamFixture' key={game.id}>
                                <div className='fixtures__date'>
                                    {moment.utc(game.utcDate).utcOffset('+8:00').format("MMM-DD-YYYY hh:mm a")}
                                </div>
                                <div className='fixtures__match'>
                                    <div className='fixture__matchHome'>
                                        {game.homeTeam.name}
                                    </div>
                                    <p>VS</p>
                                    <div className='fixtures__matchAway'>
                                        {game.awayTeam.name}
                                    </div>
                                </div>
                                <div className='fixtures__competition'>
                                    {game.competition.name}
                                </div>
                            </div> 
                            )
                        })
                    }
                </div>
            </div>
        </CSSTransition>
    )
}

export default Fixtures
