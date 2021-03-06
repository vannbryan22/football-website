import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    loading: false,
    teamFixture:{
      clicked: false,
      id:''
    },
    teamStats:{
      clicked: false,
      id:''
    },
    competitions:[],
    teams:[],

  },
  reducers: {
    setLoading: (state) => {
      state.loading = !state.laoding
    },
    setTeams:(state,action)=>{
      state.teams = action.payload
    },
    setTeamFixture:(state,action)=>{
      state.teamFixture.clicked = action.payload.clicked
      state.teamFixture.id = action.payload.id
    },
    setTeamStats:(state,action)=>{
      state.teamStats.clicked = action.payload.clicked
      state.teamStats.id = action.payload.id
    },
    setCompetitions:(state,action)=>{
      state.competitions = action.payload
    }
  },
});

export const { setLoading, setTeams, setTeamFixture, setTeamStats,
  setCompetitions } = uiSlice.actions;

export const selectUi = state => state.ui;

export default uiSlice.reducer;
