import React,{Component} from 'react';
import {AppBar,Card, MenuItem,TextField,Select} from '@material-ui/core'
import length from '../../assets/scale.png';
import temperature from '../../assets/temp.png';
import volumn from '../../assets/beaker.png';
import './temperature.css';

class Temperature extends Component{
    constructor(){
        super();
        this.state={len:''}
    }
    handleChange=(event)=>{
        let len=event.target.value;
        console.log("length: ",len);
        this.setState({len:event.target.value})
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
                        <lable>CHOOSE TYPE</lable>
                    </div> 
            <div className="cardContainer">
            <Card id="length" onClick={this.handleLength}>
                        <div id="imgLen">
                            <img src={length} alt="length"/>
                        </div>
                        
                           <label id="lengthLabel2"> Length</label>
                        
                        </Card>
                        <Card id="temperature" onClick={this.handleTemp}>
                        <div id="imgLen" >
                            <img src={temperature} alt="temperature"/>
                        </div>
                            <label id="temperatureLable2"> Temperature</label>
                        </Card>
                        <Card id="volumn" onClick={this.hadleVolume}>
                        <div id="imgLen">
                            <img src={volumn} alt="volumn"/>
                        </div>
                            <label id="volumeLabel2">Volume</label>                     
                        </Card>
                    </div>
            <div className="converterContainer">
                <div>
                <div id="labelCol"><label id="select-label">FROM</label></div>
                <div id="convertFromContainer">
                <div><TextField className="TextField" type="number" variant="outlined" size="small" ></TextField></div>
                  
                <Select className="selectID" value={this.state.len} onChange={this.handleChange}>
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={20}>Celsius</MenuItem>
                    <MenuItem value={60}>Fahrenheit</MenuItem> 
                    <MenuItem value={20}>Kelvin</MenuItem>            
                </Select>  
                </div>
                </div>
                
                <div id="labelCol2">
                <label id="select-label">TO</label>
                <div id="convertToContainer">
                <div><TextField className="TextField" type="number" variant="outlined" size="small" ></TextField></div>
                <Select className="selectID">
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={20}>Celsius</MenuItem>
                        <MenuItem value={60}>Fahrenheit</MenuItem> 
                        <MenuItem value={20}>Kelvin</MenuItem> 
                </Select>
                </div>
                </div>
            </div>                         
            </div>
        )
    }
}

export default Temperature;