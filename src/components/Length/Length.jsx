import React,{Component} from 'react';
import {AppBar,Card, MenuItem,TextField,Select,FormLabel} from '@material-ui/core'
import length from '../../assets/length.png';
import temperature from '../../assets/hot.png';
import volumn from '../../assets/beaker.png';
import './length.css';
import LengthServ from '../../services/length.js'

let lenObj=new LengthServ();
var result=0;

class Length extends Component{
    constructor(props){
        super(props);
        this.state={setFromlen:'', setToId:'', setInputText:''}
    }
    
    textChange=(event)=>{
        this.setState({setInputText:event.target.value});
        this.state.setInputText=event.target.value;
        this.result=lenObj.Calculate(this.state.setInputText,this.state.setFromlen,this.state.setToId);
        console.log(this.state.setInputText,this.state.setFromlen,this.state.setToId);
        console.log("conversion : ",this.result);

    }

    handleChangeFrom=(event)=>{
        this.setState({setFromlen:event.target.value});
        this.state.setFromlen=event.target.value;
        this.result=lenObj.Calculate(this.state.setInputText,this.state.setFromlen,this.state.setToId);
        console.log(this.state.setInputText,this.state.setFromlen,this.state.setToId);
        console.log("conversion : ",this.result);

    }

    handleChangeTo=(event)=>{
        this.setState({setToId:event.target.value});
        this.state.setToId=event.target.value;
        this.result=lenObj.Calculate(this.state.setInputText,this.state.setFromlen,this.state.setToId);
        console.log(this.state.setInputText,this.state.setFromlen,this.state.setToId);
        console.log("conversion : ",this.result);
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
                        <Card id="lengthCard" onClick={this.handleLength}>
                        <div id="imgLen">
                            <img src={length} alt="length"/>
                        </div>
                           <FormLabel id="lengthLabel3"> Length</FormLabel>
                        </Card>
                        <Card id="temperature" onClick={this.handleTemp}>
                        <div id="imgLen" >
                            <img src={temperature} alt="temperature"/>
                        </div>
                            <FormLabel id="temperatureLable3"> Temperature</FormLabel>
                        </Card>
                        <Card id="volumn" onClick={this.hadleVolume}>
                        <div id="imgLen">
                            <img src={volumn} alt="volumn"/>
                        </div>
                            <FormLabel id="volumeLabel3"> Volume</FormLabel>                     
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
                    <MenuItem value={39370}>Kilometre</MenuItem>
                    <MenuItem value={39}>Metres</MenuItem>
                    <MenuItem value={0.393701}>Centimetres</MenuItem>
                    <MenuItem value={0.0393701}>Milimetre</MenuItem>
                    <MenuItem value={0.00003937}>Micrometre</MenuItem>
                    <MenuItem value={63360}>Mile</MenuItem>
                    <MenuItem value={12}>Foot</MenuItem>
                    <MenuItem value={1}>Inch</MenuItem>                  
                </Select>  
                </div>
                </div>
                
                <div id="labelCol2">
                <FormLabel id="select-label">TO</FormLabel>
                <div id="convertToContainer">
                <div><TextField className="TextField" type="number" value={this.result} variant="outlined" size="small" ></TextField></div>
                <Select className="selectID" value={this.state.setToId} onChange={this.handleChangeTo}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={1}>Kilometre</MenuItem>
                        <MenuItem value={2}>Metres</MenuItem>
                        <MenuItem value={3}>Centimetres</MenuItem>
                        <MenuItem value={4}>Milimetre</MenuItem>
                        <MenuItem value={5}>Micrometre</MenuItem>
                        <MenuItem value={6}>Mile</MenuItem>
                        <MenuItem value={7}>Foot</MenuItem>
                        <MenuItem value={8}>Inch</MenuItem>
                </Select>
                </div>
                </div>
            </div>                         
            </div>
        )
    }
}

export default Length;
