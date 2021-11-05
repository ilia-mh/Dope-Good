import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { countryList } from './CountryList.js'

import Input from './checkoutInputs';
import Select from "../Select/Select.js";

import './checkoutForm.scss'
import { post } from "../../utils/fetch.js";
import { toast } from "react-toastify";

const apiUrl = `${process.env.REACT_APP_API_URL}/api`;

export default function CheckoutForm() {

  const user = useSelector((state) => state.shop.user);

  const [allUserInfo, setAllUserInfo] = useState({})
  const [allUserAddress, setAllUserAddress] = useState({})

  const [useUserInfo, setUseUserInfo] = useState(true)

  const [userInfoFetched, setUserInfoFetched] = useState(false)

  const [selectedCountry, setSelectedCountry] = useState('')

  const [firstName, setFirstName] = useState('')
  const [firstNameErr, setFirstNameErr] = useState('')

  const [lastName, setLastName] = useState('')
  const [lastNameErr, setLastNameErr] = useState('')

  const [email, setEmail] = useState('')
  const [emailErr, setEmailErr] = useState('')

  const [phone, setPhone] = useState('')
  const [phoneErr, setPhoneErr] = useState('')

  const [companyName, setCompanyName] = useState('')
  const [companyNameErr, setCompanyNameErr] = useState('')

  const [address, setAddress] = useState('')
  const [addressErr, setAddressErr] = useState('')

  const [city, setCity] = useState('')
  const [cityErr, setCityErr] = useState('')
  
  const [zip, setZip] = useState('')
  const [zipErr, setZipErr] = useState('')

  const [orderNote, setOrderNote] = useState('')

  useEffect( () => {

    if( user && user._id ) {

      if( useUserInfo ) {
        if( !userInfoFetched ) fetchUserInfoandAddress()
        else fillUserInfo()
      } else clearBillingInfo()


    }

  },[user,useUserInfo])

  const fetchUserInfoandAddress = async () => {

    const userInfo = await post(`${apiUrl}/user/info`);

    if ( !userInfo || !userInfo.success) {
      toast.error(userInfo.message);
    } else {

      setAllUserInfo(userInfo.userInfo)

      const { email, phone, name, lastName, companyName } = userInfo.userInfo;

      setEmail(email || '');
      setPhone(phone || '');
      setFirstName(name || '');
      setLastName(lastName || '');
      setCompanyName(companyName || '');

    }

    const userAddress = await post(`${apiUrl}/user/address`);

    if (!userAddress || !userAddress.success) {

      toast.error(userAddress.message);

    } else {

      setAllUserAddress(userAddress.userAddress);

      const { address, zipcode, city, country } = userAddress.userAddress;

      setAddress(address || '');
      setZip(zipcode || '');
      setCity(city || '');
      setSelectedCountry(country || '');

    }
    
    if( userAddress.success && userInfo.success ) setUserInfoFetched(true)
    
  }

  const fillUserInfo = () => {

    const { email, phone, name, lastName, companyName } = allUserInfo;

    setEmail(email || '');
    setPhone(phone || '');
    setFirstName(name || '');
    setLastName(lastName || '');
    setCompanyName(companyName || '');

    const { address, zipcode, city, country } = allUserAddress;

    setAddress(address || '');
    setZip(zipcode || '');
    setCity(city || '');
    setSelectedCountry(country || '');

  }

  const clearBillingInfo = () => {
    setEmail('');
    setPhone('');
    setFirstName('');
    setLastName('');
    setCompanyName('');
    setAddress('');
    setZip('');
    setCity('');
    setSelectedCountry('');
  }

  return (
    <div className="col-sm-12 col-md-6 col-lg-6 chekcout-form">
      <div className="cart-shiping">

        <div className="cart--shiping-text">

          <p>
            Have a Coupon ? <Link to="/cart">Click here to enter your code</Link>
          </p>

          {
            !user ?
              <p>
                Returning customer ? <Link to="/login">Click here to login</Link>
              </p>
            :
              <div className="logged-in-user">
                
                <label htmlFor="use-user-info">
                  
                  <div className={`check-box ${ useUserInfo ? 'active' : ''}`} >
                    <div></div>
                  </div>

                  <span>Use your info for Billing Details</span>

                </label>

                <input 
                  value={useUserInfo} 
                  onChange={ e => setUseUserInfo(!useUserInfo)} 
                  type="checkbox" 
                  name="use-user-info" 
                  id="use-user-info" 
                />
              </div>
          }

          <h3>Billing detail</h3>
        </div>

        <form onSubmit={ (e) => e.preventDefault() }>
          <div className="row">

            <div className={`col-sm-12 col-md-12 col-lg-12 `}>
              <div className="form-group">
                <label htmlFor="country">COUNTRY</label>
                <div className="select--box form-field">

                  <Select 
                    items={countryList} 
                    selectedItem={selectedCountry} 
                    setSelectedItem={setSelectedCountry} 
                    isString={true}
                    plcHolder="Select Country"
                  />

                </div>
              </div>
            </div>
            {/* .col-lg-12 end  */}

            <Input val={firstName} err={firstNameErr} setter={setFirstName} name="first-name" label="FIRST NAME" type="text" col="6" />

            <Input val={lastName} err={lastNameErr} setter={setLastName} name="last-name" label="LAST NAME" type="text" col="6" />

            <Input val={companyName} err={companyNameErr} setter={setCompanyName} name="company-name" label="COMPANY NAME" type="text"/>

            <Input val={address} err={addressErr} setter={setAddress} name="address" label="ADDRESS" type="text" />
            
            <Input val={city} err={cityErr} setter={setCity} name="city" label="CITY / TOWN" type="text" />

            <Input val={zip} err={zipErr} setter={setZip} name="postcode" label="POTSCODE / ZIP" type="number" />

            <Input val={email} err={emailErr} setter={setEmail} name="email" label="EMAIL" type="email" />

            <Input val={phone} err={phoneErr} setter={setPhone} name="phone" label="PHONE" type="tel" />

            {/* <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="input-checkbox">
                <label className="label-checkbox">
                  Create an account?
                  <input type="checkbox" checked />
                  <span className="check-indicator"></span>
                </label>
              </div>
            </div> */}
            {/* .col-lg-12 end  */}

            {/* <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="form-group">
                <label for="account-password">ACCOUNT PASSWORD</label>
                <input
                  type=""
                  className="form-control"
                  id="account-password"
                />
              </div>
            </div>  */}
            {/* .col-lg-12 end  */}

            <div className="col-sm-12 col-md-12 col-lg-12 form-field">
              <div className="form-group">
                <label htmlFor="order-note">ORDER NOTE</label>
                <textarea 
                  id="order-note" 
                  className="form-control" 
                  value={orderNote}
                  onChange={ e => setOrderNote(e.target.value)}
                >
                </textarea>
              </div>
            </div>
            {/* .col-lg-12 end 

            {/* <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="input-checkbox">
                <label className="label-checkbox">
                  Ship to another address
                  <input type="checkbox" />
                  <span className="check-indicator"></span>
                </label>
              </div>
            </div> */}
            {/* .col-lg-12 end  */}

          </div>
          {/* .row end  */}
        </form>

      </div>
      {/* .cart-shiping end  */}
    </div>
  );
}
