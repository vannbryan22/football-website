import React from 'react'
import News from '../helpers/News'

function Home() {
    return (
        <div className='home'>
            <News 
            imgSrc='https://a.espncdn.com/photo/2020/0805/r727749_1296x518_5-2.jpg'
            title='Arsenal report losses of £47m amid pandemic'
            link='https://tv5.espn.com/football/arsenal/story/4330087/arsenal-cite-covid-19-impact-as-club-announce-47-million-loss'
            text='Arsenal have cited the "material impact" of COVID-19 after announcing a post-tax loss of £47.8 million for the year ending 31 May 2020.'
            />

            <News
            imgSrc='https://a.espncdn.com/photo/2021/0303/r821830_1296x518_5-2.jpg'
            title='Arteta on Barca link: Fully focused at Arsenal'
            link='https://tv5.espn.com/football/arsenal/story/4328255/arteta-on-barcelona-link-fully-focused-with-managing-arsenal'
            text='Mikel Arteta has said he is "fully focused" on managing Arsenal amid speculation linking him with Barcelona.'
            />

            <News
            imgSrc='https://a.espncdn.com/photo/2021/0207/r811890_1296x518_5-2.jpg'
            title='How to catch Man City? A way-too-early look at how Premier League rivals can be ready next season'
            link='https://tv5.espn.com/football/english-premier-league/story/4326828/how-to-catch-man-city-a-way-too-early-look-at-how-premier-league-rivals-can-be-ready-next-season'
            text="With this season's title all but won by Man City, plans must be made now by the Premier Leagues top clubs to catch Pep Guardiola's side next term."
            />

            <News
            imgSrc='https://a.espncdn.com/photo/2021/0228/r820602_1296x518_5-2.jpg'
            title='Pepe, Willian, Odegaard 8/10 as Arsenal show fight at Leicester'
            link='https://tv5.espn.com/football/arsenal/story/4324755/pepewillianodegaard-8-10-as-arsenal-show-fight-at-leicester'
            text='Nicolas Pepe, Willian and Martin Odegaard were all influential as Arsenal came from behind to beat Leicester City.'
            />
        </div>
    )
}

export default Home
