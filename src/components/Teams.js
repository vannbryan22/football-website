import axios from 'axios';
import React, { useEffect, useState } from 'react'
import requestOptions from '../requestOptions';
import {useDispatch, useSelector} from 'react-redux';
import { selectUi, setTeamFixture, setTeamStats, setTeams } from '../redux/uiSlice';
import Fixtures from '../helpers/Fixtures';
import Stats from '../helpers/Stats';

function Teams() {
    const dispatch = useDispatch()
    const ui = useSelector(selectUi)
    const teams = ui.teams

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.request(requestOptions.getTeams)
        .then(function (response) {
            dispatch(setTeams(response.data.teams))
            setLoading(false)
        }).catch(function (error) {
            console.error(error);
        });
        // eslint-disable-next-line
      }, [])
    return (
        <div className='teams'>
            {ui.teamFixture.clicked && <Fixtures />}
            {ui.teamStats.clicked && <Stats />}

            {!loading && 
            (<div className='teams__title'>
                <h1>Soccer Teams</h1>
            </div>)
            }

            <div className='teams__container'>
                {loading ? 
                    <div className='teams__loading'>
                    <h1>Fetching Data...</h1>
                    </div> 
                    :
                    teams.map((team)=>{
                        return(
                            <div key={team.id} className='teams__team'>
                                <div className='teams__teamLogo'>
                                    <img src={team.crestUrl} alt={team.name} />
                                </div>

                                <div className='teams__teamNav'>
                                    <div className='teams__teamNavName'>
                                        {team.shortName}
                                    </div>
                                    <div className='teams__teamNavSelect'>
                                        <p
                                        onClick={()=>{
                                            dispatch(setTeamFixture({clicked: true, id: team.id}))
                                        }}>
                                            Fixtures
                                        </p>

                                        <p
                                        onClick={()=>{
                                            dispatch(setTeamStats({clicked: true, id: team.id}))
                                        }}>Squad</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>

        </div>
    )
}

export default Teams
