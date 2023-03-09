const addEvent = function (event) {
    return {
        type: "ADD_CLUB",
        event
    }
};
const deleteEvent = function (event) {
    return {
        type: "DELETE_CLUB",
        event
    }
};

const infoEvent = function (event) {
    return {
        type: "INFO_EVENT",
        event
    }
};

const BuyEvent = function (event) {
    return {
        type: "BUY_EVENT",
        event
    }
};

module.exports = { addEvent, deleteEvent,infoEvent ,BuyEvent};