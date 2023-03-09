const React = require("react");

class Inf extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick() {
        return this.props.BuyEvent(this.props.Info);
             }
    render() {
        return (<div style={{marginTop:'50px'}}><h3 style={{marginTop:'30px', width:'700px'}}> {this.props.Info.title}</h3>
          <p>
            <img className="IMGS2"  title={this.props.Info.title}   src={this.props.Info.img}></img>
            <button onClick={this.onClick.bind(this)} style={{margin:'10px', width:'300px', fontSize:'25px', fontWeight:'bolder'}} type="button" class="btn btn-success" >Купити квиток</button>
            <h2>{this.props.Info.date}</h2>
            <h2>{this.props.Info.address}</h2>
            <h2 style={{color:'darkgreen'}} >{this.props.Info.price}</h2>
            {this.props.Info.info}</p><br/>
        </div>)
    }
};

module.exports = Inf;