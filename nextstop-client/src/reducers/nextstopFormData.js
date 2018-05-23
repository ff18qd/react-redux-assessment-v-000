const initialState={
        name: '',
        budget: 0,
        img_url: '',
        like: 0,
        dislike: 0
    }

export default  (state = initialState, action) => {
        // debugger
        switch(action.type) {
            case "UPDATED_DATA":
                return action.nextstopFormData;
                
            case "RESET_NEXTSTOP_FORM":
                return initialState;
                
            default:
                return state;
        }
    }
    
