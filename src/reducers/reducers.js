export const initialState = {
    user : null,
    playing:false,
    playlists : [],
    item : null
};

const reducer = (state,action) => {
    console.log("Trigrred Action 👉",action);

    switch(action.type){
        case 'SET_USER' : return {
            ...state,
            user : action.user
        }

        default : return {
            state
        }
    }
}

export default reducer;