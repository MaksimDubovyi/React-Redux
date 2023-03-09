const React = require("react");
const Event_Odessa = require("./Event_Odessa.jsx");

class EventList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
            {
                this.props.Events_In_Odessa.map(item =>
                <Event_Odessa img={item.img} item={item} Events_In_Odessa={this.props.Events_In_Odessa} addEvent={this.props.addEvent} infoEvent={this.props.infoEvent} />
            )
        }
        </div>)
    }
};

module.exports = EventList;