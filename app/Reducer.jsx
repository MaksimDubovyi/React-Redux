const Map = require("immutable").Map;

const reducer = function (state = Map(), action) {
    switch (action.type) {
        case "SET_STATE":
            return state.merge(action.state);
        case "ADD_CLUB":
            return state.update("Choose", (Choose) => [...Choose, action.event]);
        case "DELETE_CLUB":
              return state.update("Choose", (Choose) => Choose.filter( (item) => item.title !== action.event ));
        case "INFO_EVENT":
              return state.update("Info", (Info) => Info =action.event );
        case "BUY_EVENT":
             return alert("Вітаємо з купівлею квитка на "+action.event.title+"\n\nдата: "+action.event.date+" \n\nза адресою:  "+ action.event.address+"\n\n ПРИЄМНОГО ВІДПОЧИНКУ !!! ");
    }
    return state;
}
module.exports = reducer;
