const LanguageReducer = (state, action) => {
    switch (action.type) {
        case "EN": {
            return {
                lang: 'en',
            }
        }
        case "JA": {
            return {
                lang: 'ja',
            }
        }
        case "TOGGLE": {
            return {
                lang: !state.lang,
            }
        }

        default:
            return state;
    }
};
