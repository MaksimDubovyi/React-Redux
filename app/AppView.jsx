const React = require("react");
const connect = require("react-redux").connect;
const actions = require("./actions.jsx");
const EventList = require("./EventList.jsx");
const Choose = require("./choose.jsx");
const Inf = require("./Info.jsx");
class AppView extends React.Component {

    render() {
        return (<div>
           
            <div class="row">
            <div class="col-md-8  offset-md-1"> <EventList {...this.props} /></div>
            <div class="col-md-1" style={{marginLeft:'-70px'}}> <Choose {...this.props} /></div>
            <div class="col-md-8 offset-md-1"> <Inf {...this.props} /></div>
            </div>
        </div>)
    }
};

function mapStateToProps(state) {
    return {
        Events_In_Odessa: state.get("Events_In_Odessa"),
        Choose: state.get("Choose"),
        Info: state.get("Info")
    };
}

/*
    Функция connect из пакета "react-redux" позволяет связать хранилище и компонент (в данном случае AppView). 
    Благодаря этому все данные из хранилища будут передаваться в компонент через объект props. 
    Функция mapStateToProps(), которая передается в connect, позволяет установить сопоставление между 
    объектами из состояния хранилища с объектами в props у компонента AppView. 
*/
module.exports = connect(mapStateToProps, actions)(AppView);