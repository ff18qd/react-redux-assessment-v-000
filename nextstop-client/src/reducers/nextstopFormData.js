export default  (state = {
        name: '',
        budget: 0,
        img_url: '',
        like: 0,
        dislike: 0
    }, action) => {
        // debugger
        switch(action.type) {
            case "UPDATED_DATA":
                return action.nextstopFormData;
            default:
                return state;
        }
    }
    
