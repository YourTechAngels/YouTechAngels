import React,{useState, useRef} from 'react';
import TextField from '@material-ui/core/TextField';
import { useParams } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from "@material-ui/core/Button";
import axios from "axios"
import { ButtonGroup } from '@material-ui/core';


const useStyles = {
  textFld: { width: '85%', height: 40, paddingLeft: 8 } , 
  button: {
    border: '4px',
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: '10px',
  },
  };

  export default function RegistrationPage(props) {

    const initialInputState = { firstName : "" , lastName:"" , DateOfBirth:"",postcode:"", address1:"", address2:"", county:""}     
    const [formData, setFormData] = useState({initialInputState})
    const { firstName , lastName, DateOfBirth, postcode, address1, address2} = formData
    const [message, setMessage] = useState("")
    const postcodeRef = useRef()
    const [county, setCounty] = useState("");
    const [city, setCity] = useState("");  
    const param = useParams();
    const user  = param.user;
       
    
    const handleChange= (e) => {
      setFormData({...formData,[e.target.name]: e.target.value});
      console.log(e.target)
    }

    const handleSubmit =(evt) => {
      evt.preventDefault();
      setMessage("Data has been saved successfully")
      console.log(formData)
      axios.post("http://localhost:8000/api/users/", formData,county,city).catch(function (error) {
      console.log(error.request); console.log(error.config)})

    }

    const handleClick= (e) => {
      e.preventDefault();
      const PostcodesJS = require("postcodes.js");
      const Postcodes = new PostcodesJS.Callbacks();
      Postcodes.lookup(postcodeRef.current.value, function(error, result) {
      console.log(result);
      setCounty (result.admin_county)
      setCity(result.parliamentary_constituency)
      console.log(county)
      console.log(city)
      
    });}
                
   return (
     
   <React.Fragment>
     
      <h2 align="center"> Registration form</h2>
      { message && <Alert severity="success">
            <AlertTitle>{message}</AlertTitle>
            </Alert>}
      <Grid container flex-start="left" >
      <p style={{paddingLeft:8}}>Please enter your details here</p> </Grid>
     
      <form onSubmit={handleSubmit} >      
      <Grid container spacing={3} >
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            type ="text"
            name="firstName"
            label="First name"
            variant="outlined"
            onChange = { handleChange }
            value= {firstName || ''}
            style = {useStyles.textFld}
            autoComplete="given-name"
          />
        </Grid>
         <Grid item xs={12} sm={6} >
          <TextField
            required
            id="lastName"
            name="lastName"
            type ="text"
            label="Last name"
            onChange = { handleChange }
            value= {lastName || ''}
            variant="outlined"
            style = {useStyles.textFld}
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="DateOfBirth"
            name="DateOfBirth"
            type= "date"
            InputLabelProps={{
              shrink: true,
            }}
            label="Date Of Birth"
            onChange = { handleChange }
            value= {DateOfBirth || ''}
            variant="outlined"
            style = {useStyles.textFld}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}> 
        
        <ButtonGroup>     
         <TextField
            required
            id="postcode"
            name="postcode"
            label="Post code"
            variant="outlined"
            onChange = { handleChange }
            inputRef = {postcodeRef}
            value= {postcode ||''}
            style = {useStyles.textFld}
            autoComplete=" postal-code"/>       
          <Grid item xs={12} sm={6}>            
            <Button variant="outlined" type='submit' onClick={handleClick}>Find Address</Button>
        </Grid></ButtonGroup>  </Grid> 
   
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            onChange = { handleChange }
            value = {address1 || ''}
            variant="outlined"
            style = {useStyles.textFld}
            autoComplete="address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            onChange = { handleChange }
            variant="outlined"
            value = {address2 || ''}
            style = {useStyles.textFld}
            autoComplete="address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            onChange = { handleChange }
            value= {city || ''}
            variant="outlined"
            style = {useStyles.textFld}
            autoComplete="address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
           id="county" 
           name="county"  
           onChange = { handleChange }
           variant="outlined" 
           value= {county || ''}
           style = {useStyles.textFld}
           label="County" />
        </Grid>
        </Grid> 
               
        <Grid item xs={12}>
         
         { (`${user}` === 'Volunteer') && 
          <FormControlLabel
            control={<Checkbox color="secondary" style = {{ marginLeft: '5px' }} name="dbsCheck" value="yes" />}
            label="I have a valid DBS certificate"
          /> }  

        </Grid>
        <Grid container justify="center" spacing={3} direction="row">
        <Grid item xs={12} align="center">
        <Button variant = "contained" className = "btn btn-primary w-100" type="submit">Submit</Button>
        </Grid>
        </Grid>
        </form>
    </React.Fragment>   
  
)}