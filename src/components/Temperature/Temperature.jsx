import React,{Component} from 'react';
import {AppBar,Card, MenuItem,TextField,Select,FormLabel} from '@material-ui/core'
import length from '../../assets/scale.png';
import temperature from '../../assets/temp.png';
import volumn from '../../assets/beaker.png';
import './temperature.css';
import TempServ from '../../services/tempserv.js'

let tempServ=new TempServ();
var tempresult=0;

class Temperature extends Component{
    constructor(){
        super();
        this.state={setFromlen:'', setToId:'', setInputText:''}
    }

    textChange=(event)=>{
        this.setState({setInputText:event.target.value});
        this.state.setInputText=event.target.value;
        this.tempresult=tempServ.Calculate(this.state.setInputText,this.state.setFromlen,this.state.setToId);
        console.log(this.state.setInputText,this.state.setFromlen,this.state.setToId);
        console.log("conversion : ",this.tempresult);
    }

    handleChangeFrom=(event)=>{
        this.setState({setFromlen:event.target.value});
        this.state.setFromlen=event.target.value;
        this.tempresult=tempServ.Calculate(this.state.setInputText,this.state.setFromlen,this.state.setToId);
        console.log(this.state.setInputText,this.state.setFromlen,this.state.setToId);
        console.log("conversion : ",this.tempresult);
    }

    handleChangeTo=(event)=>{
        this.setState({setToId:event.target.value});
        this.state.setToId=event.target.value;
        this.tempresult=tempServ.Calculate(this.state.setInputText,this.state.setFromlen,this.state.setToId);
        console.log(this.state.setInputText,this.state.setFromlen,this.state.setToId);
        console.log("conversion : ",this.tempresult);
    }

    handleTemp=()=>{
        this.props.history.push("/temp");
    }

    handleLength=()=>{
        this.props.history.push("/length");
    }

    hadleVolume=()=>{
        this.props.history.push("/volume");
    }

    render(){
        return(
            <div className="homeContainer">
            <AppBar id="welcomeBar">
                <h1>Welcome to Quantity Measurement </h1>
            </AppBar>
            <div id="chooseType">
                        <FormLabel>CHOOSE TYPE</FormLabel>
                    </div> 
            <div className="cardContainer">
            <Card id="length" onClick={this.handleLength}>
                        <div id="imgLen">
                            <img src={length} alt="length"/>
                        </div>
                           <FormLabel id="lengthLabel2"> Length</FormLabel>
                        </Card>
                        <Card id="temperatureCardT" onClick={this.handleTemp}>
                        <div id="imgLen" >
                            <img src={temperature} alt="temperature"/>
                        </div>
                            <FormLabel id="temperatureLable2"> Temperature</FormLabel>
                        </Card>
                        <Card id="volumn" onClick={this.hadleVolume}>
                        <div id="imgLen">
                            <img src={volumn} alt="volumn"/>
                        </div>
                            <FormLabel id="volumeLabel2">Volume</FormLabel>                     
                        </Card>
                    </div>
            <div className="converterContainer">
                <div>
                <div id="labelCol"><FormLabel id="select-label">FROM</FormLabel></div>
                <div id="convertFromContainer">
                <div><TextField className="TextField" value={this.state.setInputText} 
                            onChange={this.textChange} type="number" variant="outlined" size="small" ></TextField></div>
                  
                <Select className="selectID" value={this.state.setFromlen} onChange={this.handleChangeFrom}>
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={1}>Celsius</MenuItem>
                    <MenuItem value={33}>Fahrenheit</MenuItem> 
                    <MenuItem value={274}>Kelvin</MenuItem>            
                </Select>  
                </div>
                </div>
                
                <div id="labelCol2">
                <FormLabel id="select-label">TO</FormLabel>
                <div id="convertToContainer">
                <div><TextField className="TextField" type="number" value={this.tempresult} variant="outlined" size="small" ></TextField></div>
                <Select className="selectID" value={this.state.setToId} onChange={this.handleChangeTo}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={1}>Celsius</MenuItem>
                        <MenuItem value={2}>Fahrenheit</MenuItem> 
                        <MenuItem value={3}>Kelvin</MenuItem> 
                </Select>
                </div>
                </div>
            </div>                         
            </div>
        )
    }
}

export default Temperature;