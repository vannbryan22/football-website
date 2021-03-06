import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { selectUi, setTeamStats } from '../redux/uiSlice'
import requestOptions from '../requestOptions'

function Stats() {
    const ui = useSelector(selectUi)
    const dispatch = useDispatch()

    const id = ui.teamStats.id
    const clicked = ui.teamStats.clicked

    const [squad, setSquad] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.request(requestOptions.getTeamStats(id))
        .then((response)=> {
            setSquad(response.data.squad)
            setLoading(false)
        }).catch((error)=> {
            console.error(error);
        });
        // eslint-disable-next-line
    }, [])
    return (
        <CSSTransition
        classNames='stats__animation'
        in={clicked}
        timeout={500}
        unmountOnExit>
            <div className='stats'>
                <div 
                onClick={()=>{
                    dispatch(setTeamStats({clicked: false, id: ''}))
                    setLoading(true)
                }}
                className='stats__close'>
                        X
                </div>
                <div className='stats__group'>

                    <div className='stats__titles'>
                        <p className='stats__titlesName'>Name</p>
                        <p className='stats__titlesBorn'>Country of Birth</p>
                        <p className='stats__titlesPosition'>Position</p>
                    </div>
                    {loading ? 
                        <div className='stats__loading'>
                            <h1>Fetching Data...</h1>
                        </div> 
                            :
                        squad.map((player)=>{
                            return (
                            <div className='stats__squad'>
                                <div className='stats__squadName'>
                                    {player.name}
                                </div>
                                <div className='stats__squadNationality'>
                                    {player.nationality}    
                                </div>
                                <div className='stats__squadPosition'>
                                    {player.position}    
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

export default Stats
