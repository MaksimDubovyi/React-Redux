const React = require("react");

class Event_Odessa extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick() {return this.props.addEvent(this.props.item); }

    Click(e)
             {
               const doubled = this.props.Events_In_Odessa.filter( (item) => item.title === e.target.name);
               return this.props.infoEvent(doubled[0]);
             }
    render() 
    {
        return (<button  className="button" style={{ width:'250px', height:'350px'}} >
                <h1>{this.props.item.title}</h1>
                <img onClick={this.Click.bind(this)} className="IMGS" name={this.props.item.title} title={this.props.item.title}  style={{ marginTop:'10px'}} src={this.props.img}></img><br/>
                <button style={{margin:'10px'}} type="button" class="btn btn-success" onClick={this.onClick.bind(this)}>До списку вибраних</button>
            </button>)
    }
};

module.exports = Event_Odessa;