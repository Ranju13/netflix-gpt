const { createSlice } = require("@reduxjs/toolkit");

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        gptSwitch: false
    },
    reducers:{
        setGptSwitchButton : (state) =>{
            state.gptSwitch = !state.gptSwitch;
        }
    }
});

export const { setGptSwitchButton } = gptSlice.actions;
export default gptSlice.reducer;