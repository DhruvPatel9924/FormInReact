
import "./App.css";
import { useState,useEffect } from "react";

function App() {
  const [list,setlList] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [error,setError] = useState(false);
  const [lastName, setLastName] = useState("");
  const [myself, setMyself] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');
  const [streetAddress, setStreetAddress] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [stateProvince, setStateProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState([]);
  const [email, setEmail] = useState("");
  const [fnameError,fsetNameError] = useState(false);
  const [lnameError,lsetNameError] = useState(false);
  const [myselfError,setMyselfError] = useState(false);
  const [adressError, setAdressError] = useState(false);
  const [twoadressError, twosetAdressError] = useState(false);
  const[phoneDErrror, setPhoneError] = useState(false);
  const [pincodeError, setPincodeError] = useState(false);

  useEffect(() => {
    const data = require('./country.json') 
    console.log(data)
    setCountry(data)

   
  
  },[])
  
  // const [country, setCountry] = useState([]);
  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    const regex = /^[0-9\b]+$/; // Regular expression to match only numbers

    if (input === '' || regex.test(input)) {
      setPhoneNumber(input);
    }
  };


  let handelSubmit = (ReadInput) => {
    ReadInput.preventDefault();
    if(firstName.length<3 ){
      fsetNameError(true);
  
      }
      else{
        fsetNameError(false);
      }
      if(lastName.length<3 ){
        lsetNameError(true);
    
        }
        else{
          lsetNameError(false);
        }
        if(myself.length>8){
          setMyselfError(true);
        }
        else{
          setMyselfError(false);
        }

        if(streetAddress.length>10){
          setAdressError(true);
        }
        else{
          setAdressError(false);
        }
        if(addressLine2.length>8){
          twosetAdressError(true);
        }
        else{
          twosetAdressError(false);
        }
        if(phoneNumber.length!==10 ){
          setPhoneError(true);
      
          }
          else{
            setPhoneError(false);
          }
          if(postalCode.length!==6 ){
            setPincodeError(true);
        
          }
            else{
              setPincodeError(false);
            }
            if(firstName.length===0 || lastName.length===0 || myself.length===0 || phoneNumber.length===10 
               || streetAddress.length===0 || addressLine2.length===0 || city.length===0
                || stateProvince.length===0 || postalCode.length===0 || email.length===0) 
            {
              setError(true)
             }


                    if(firstName&&
                       lastName&&
                                 myself&&
                                    phoneNumber.length===10&&
                      streetAddress&&
                        addressLine2&&
                       city&&
                         country&&
                           stateProvince&&
                        postalCode.length===6&&
                               email
                              ){
                        console.log(
                          "firstName: ",
                          firstName,
                          "\nlastName: ",
                          lastName,
                          "\nphoneNumber: ",
                          phoneNumber,
                          "\nstreetAddress: ",
                          streetAddress,
                          "\naddressLine2: ",
                          addressLine2,
                          "\ncity: ",
                          city,
                          "\nstateProvince: ",
                          stateProvince,
                          "\npostalCode: ",
                          postalCode,
                          "\ncountry: ",
                          country,
                          "\nemail: ",
                          email
    );}
    const date={firstName,lastName,myself,
      phoneNumber,
      streetAddress,
      addressLine2,
      city,
      stateProvince,
      postalCode,
     
      email}
    if(firstName&&lastName&&myself&&
      phoneNumber&&
      streetAddress&&
      addressLine2&&
      city&&
      stateProvince&&
      postalCode&&
     
      email
      
      ){
      setlList((ls)=> [...ls,date])
      setFirstName("");
       setLastName("");
       setMyself("");
       setPhoneNumber("");
       setStreetAddress("");
       setAddressLine2("");
       setCity("");
       setStateProvince("");
       setPostalCode("");
       setCountry([]);
       setEmail("");
       

      }

  };

  return (
    <div>
    <div className="parent" id="hani">
      <form onSubmit={handelSubmit} >
      <h2>Personal Information</h2>
        <label className="ln" id="ttp">
          First Name :

         <br/><input className="tt1" 
          placeholder="Enter your first name  :"
            type="text"
            value={firstName}
            onChange={(ReadInput) => setFirstName(ReadInput.target.value)}
            
          />
           {error && firstName.length<=0?
    <label className="three">FirstName Cannotbe empty</label>:""}
          <br/>{fnameError ?  <label className="three">Name atleast 3 words</label>:""}
        </label>
 


        <label className="ln">
            Last Name :
          <br/><input className="tt2"
          placeholder="Enter your last name  :"
            type="text"
            value={lastName}
            onChange={(ReadInput) => setLastName(ReadInput.target.value)}
          
          />
          <br/> {error && lastName.length<=0?
    <label className="kaan">lastName Cannotbe empty</label>:""}
          <br/> {  lnameError ?  <label className="three">Name atleast 3 words</label>:""} 
        </label><br/><br/><br/>
        <label ><br/><br/>
         About yourself :

         <br/><input className="yoyo" 
          placeholder="Enter abot your self  :"
            type="text"
            value={myself}
            onChange={(ReadInput) => setMyself(ReadInput.target.value)}
            
          /> <br/>
{error && myself.length<=0?
    <label className="three">my self Cannotbe empty</label>:""}

          <br/>{myselfError ?  <label className="three"> more than wods not allowed</label>:""} 
        </label>
        <br />
        <br />

        {/* <label >
phone  number :
         <br/> */}
         <label>
          Phone Number:
          <br/>
          <input placeholder="Enter your number" className="yoyo"
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
          />
        </label>
        <br /><br />
         
{/*          
         <input className="yoyo" 
          placeholder="Enter your num  :"
            type="phonenumber"
            value={phone}
            onChange={(ReadInput) => setPhone(ReadInput.target.value)}
            
          />  */}
         <br/> {error && phoneNumber.length<=0?
    <label className="three">phone Cannotbe empty</label>:""}


       
       {phoneDErrror ?  <label className="three">Num 10 only</label>:""}
        {/* </label> */}




        <h2 className="add">Address</h2>
        <label>
          Street Address:
          <br/><input className="yoyo"
          placeholder="Enter your address in maximum 10 words"
            type="text"
            value={streetAddress}
            onChange={(ReadInput) => setStreetAddress(ReadInput.target.value)}
           
          />
 <br/> {error && streetAddress.length<=0?
    <label className="three">address Cannotbe empty</label>:""}

          <br/>{adressError ?  <label className="three"> more than 10 words not allowed</label>:""} 
        </label>
        <br />
        <br />

        <label>
          Street Address Line 2:
         <br/> <input className="yoyo"
            placeholder="Enter your address in maximum 10 words"
            type="text"
            value={addressLine2}
            onChange={(ReadInput) => setAddressLine2(ReadInput.target.value)}
          />
            <br/> {error && addressLine2.length<=0?
    <label className="three">address Cannotbe empty</label>:""}
           <br/>{twoadressError ?  <label className="three"> more than 10 words not allowed</label>:""} 
        </label>
        <br />
        <br />

        <label>
          City:
         <br/> <input className="yoyo"
           placeholder="Enter your City"
            type="text"
            value={city}
            onChange={(ReadInput) => setCity(ReadInput.target.value)}
           
          />
           <br/> {error && city.length<=0?
    <label className="three">City cnnotbe empty</label>:""}
          
        </label>
        <br />
        <br />
<br/>
        <label>
          State / Province:
          {/* <select className="desh">
            <option className="cnt" >select your state</option>
            {
              stateProvince.map((stat) => (
                      <option key={stat.stateProvince} value={stat.stateProvince}>
                        {stat.stateProvince}
                      </option>
                    ))
        }
      </select> */}
         
         <br/> <input className="yoyo"
           placeholder="Enter your state"
            type="text"
            value={stateProvince}
            onChange={(ReadInput) => setStateProvince(ReadInput.target.value)}
           
          />
           <br/> {error && stateProvince.length<=0?
    <label className="three">State cannotbe empty</label>:""}
        </label>
        <br />
        <br />
        <br/>

        <label>
          Postal / Zip Code:
          <br/><input className="yoyo"
           placeholder="Enter your Code"
            type="text"
            value={postalCode}
            onChange={(ReadInput) => setPostalCode(ReadInput.target.value)}

          />
          <br/> {error && postalCode.length<=0?
    <label className="three">code Cannotbe empty</label>:""}
            
          <br/> {pincodeError ?  <label className="three">Code must be of 6 number</label>:""}
        </label>
        <br />
        <br />

        <label>
        Country
        <br/>

        <select  className="yoyo"> 
       
        <option className="cnt" >select your country</option>
        {
          country.map((countr) => (
                      <option key={countr.country} value={countr.country}>
                        {countr.country}
                      </option>
                    ))
        }
        
      </select>
        {/* <br/>  <input className="yoyo"
           placeholder="Enter your Country"
            type="text"
            value={country}
            onChange={(ReadInput) => setCountry(ReadInput.target.value)}

          /> */}
        </label>
        <br />
        <br />

        <h2>Contact Information</h2>
        <label>
          Email:
         <br/> <input className="yoyo"
           placeholder="Enter your Email Address"
            type="email"
            value={email}
            onChange={(ReadInput) => setEmail(ReadInput.target.value)}
    
          />
          <br/> {error && email.length<=0?
    <label className="three">mail Cannotbe empty</label>:""}
        </label>
        <br />
        <br />
        <div>
          <button className="ty">Submit</button>
        </div>
      </form>
      </div>


      <div id="hani">
      {
       
        list.map((a)=><div className="container"  id="muko">
            <div className="box" >{a.firstName}  </div>
            <div className="box"> {a.lastName} </div>
            <div className="box"> {a.myself} </div>
            <div className="box"> {a.phoneNumber} </div>
            <div className="box"> {a.streetAddress} </div>
            <div className="box"> {a.addressLine2} </div>
            <div className="box"> {a.city} </div>
            <div className="box"> {a.stateProvince} </div>
            <div className="box"> {a.postalCode} </div>
         
            <div className="box"> {a.email} </div>

              </div>
              
        )
       
      }
      </div>    </div> 
  );
}

export default App;
