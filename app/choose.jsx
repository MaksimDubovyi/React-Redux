const React = require("react");

class Choose extends React.Component {
    constructor(props) {
        super(props);
    }

    Click(e)
    {
         const doubled = this.props.Choose.filter( (item) => item.title === e.target.name);
        return this.props.infoEvent(doubled[0]);
    }
    DoubleClick(e)
    {
        return this.props.deleteEvent(e.target.name);
    }
    render() {
        return (<div><div style={{marginTop:'30px'}}></div>
            {
            this.props.Choose.map(item =>
             <button onClick={this.Click.bind(this)} onDoubleClick={this.DoubleClick.bind(this)}  name={item.title} className="button2" >{item.title}</button> 
            )
        }
        </div>)
    }
};

module.exports = Choose;