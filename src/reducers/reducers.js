export const initialState = {
    user: null,
    playing: false,
    playlists: [],
    item: null,
    // token:        'BQCVII6u9pdDcku0Z3G2Ryey2nWERaLK6AdaUVjwG-T2g7gUDvzro-KLr18-6tILn44tMEJ5Nxo7OHt1slExPUTgtYadieqgi-ges9OsPYBOd5YUZ6--qdTEF6vZGvAjV353JVHxpYF6AlZbym14AdojVdr40lGhzgRQo-F3kVbj1B28MZU1',
};

const reducer = (state, action) => {
    console.log('Trigrred Action 👉', action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        case 'SET_MAIN_PLAYLIST':
            return {
                ...state,
                mainplaylist: action.mainplaylist,
            };

        default:
            return {
                state,
            };
    }
};

export default reducer;
