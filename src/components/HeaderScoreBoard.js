import React from 'react'

function HeaderScoreBoard() {

    return (
        <div className='hsb'>
            <div className='hsb__game'>
                <div className='hsb__gameTime'>
                    <span>Mon - 8:30 PM</span>
                </div>

                <div className='hsb__gameTeam'>
                    <span>
                        <img 
                        src='https://w7.pngwing.com/pngs/13/464/png-transparent-arsenal-f-c-premier-league-football-emirates-stadium-logo-arsenal-f-c-emblem-label-logo.png' 
                        alt='Arsenal' />
                    </span>
                    <p>ARS</p>
                </div>

                <div className='hsb__gameTeam'>
                    <span>
                        <img 
                        src='https://logodownload.org/wp-content/uploads/2017/02/chelsea-fc-logo-escudo.png' 
                        alt='CHL' />
                    </span>
                    <p>CHL</p>
                </div>
            </div>

            <div className='hsb__game'>
                <div className='hsb__gameTime'>
                    <span>Tue - 8:30 PM</span>
                </div>

                <div className='hsb__gameTeam'>
                    <span>
                        <img 
                        src='https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Fulham_FC_%28shield%29.svg/1200px-Fulham_FC_%28shield%29.svg.png' 
                        alt='FLH' />
                    </span>
                    <p>FLH</p>
                </div>

                <div className='hsb__gameTeam'>
                    <span>
                        <img 
                        src='https://logodownload.org/wp-content/uploads/2017/02/manchester-city-fc-logo-escudo-badge.png' 
                        alt='MNC' />
                    </span>
                    <p>MNC</p>
                </div>
            </div>  
        </div>
    )
}

export default HeaderScoreBoard
