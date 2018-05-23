//action creator
export const updateNextstopFormData = nextstopFormData => {
    // debugger
    return {
        type: "UPDATED_DATA",
        nextstopFormData
    };
};

export const resetNextstopForm = () => {
    return {
        type: "RESET_NEXTSTOP_FORM"
    };
};