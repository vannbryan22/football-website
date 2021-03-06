const requestOptions={
    getTeams:{
        method: 'GET',
        url: 'http://api.football-data.org/v2/competitions/2021/teams',
        headers: {
          'X-Auth-Token': '2d07f226585b47d693678d4198b0c927',
        }
    },
    getTeamMatches:(team)=>{
        return{
            method: 'GET',
            url: `http://api.football-data.org/v2/teams/${team}/matches`,
            headers: {
            'X-Auth-Token': '2d07f226585b47d693678d4198b0c927',
            }
        }
    },
    getTeamStats:(team)=>{
        return{
            method: 'GET',
            url: `http://api.football-data.org/v2/teams/${team}`,
            headers: {
            'X-Auth-Token': '2d07f226585b47d693678d4198b0c927',
            }
        }
    },
    getCompetitions:{
        method: 'GET',
        url: 'http://api.football-data.org/v2/competitions/2021',
        headers: {
          'X-Auth-Token': '2d07f226585b47d693678d4198b0c927',
        }
    },
}

export default requestOptions;