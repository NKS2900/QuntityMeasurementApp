import React,{ Component} from 'react';
import {AppBar,Card, MenuItem,TextField,Select,FormLabel} from '@material-ui/core'
import length from '../../assets/length.png';
import temperature from '../../assets/temp.png';
import volumn from '../../assets/volume.png';
import './home.css';

class Home extends Component{
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
                <FormLabel>CHOOSE TYPE</FormLabel>
            </div> 
            <div className="cardContainer">
                        <Card id="lengthCard1" onClick={this.handleLength}>
                        <div id="imgLen">
                            <img src={length} alt="length"/>
                        </div>
                           <FormLabel id="lengthLabel"> Length</FormLabel>
                        </Card>
                        <Card id="temperatureCard" onClick={this.handleTemp}>
                        <div id="imgLen" >
                            <img src={temperature} alt="temperature"/>
                        </div>
                            <FormLabel id="temperatureLable"> Temperature</FormLabel>
                        </Card>
                        <Card id="volumnCard" onClick={this.hadleVolume}>
                        <div id="imgLen">
                            <img src={volumn} alt="volumn"/>
                        </div>
                            <FormLabel id="volumeLabel"> Volume</FormLabel>                     
                        </Card>
                    </div>
            <div className="converterContainer">
                <div>
                <div id="labelCol"><FormLabel id="select-label">FROM</FormLabel></div>
                <div id="convertFromContainer">
                <div><TextField className="TextField" type="number" variant="outlined" size="small" ></TextField></div>
                  
                <Select className="selectID"  >
                    <MenuItem value=""><em>None</em></MenuItem>          
                </Select>  
                </div>
                </div>
                
                <div id="labelCol2">
                <FormLabel id="select-label">TO</FormLabel>
                <div id="convertToContainer">
                <div><TextField className="TextField" type="number" variant="outlined" size="small" ></TextField></div>
                <Select className="selectID">
                        <MenuItem value=""><em>None</em></MenuItem>
                </Select>
                </div>
                </div>
            </div>                         
            </div>
        )
    }
}

export default Home;