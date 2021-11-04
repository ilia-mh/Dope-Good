import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { post, put } from "../../utils/fetch";

import Input from "./../Input/Input";
import Select from "../Select/Select.js";

import { countryList } from '../Checkout/CountryList'

import "./accountAddress.scss";

const apiUrl = `${process.env.REACT_APP_API_URL}/api`;

export default function AccountAddress() {
  
  const [allUserAddress, setAllUserAddress] = useState({});

  const [userAdd, setUserAdd] = useState("");
  const [userAddErr, setUserAddErr] = useState("");

  const [userZip, setUserZip] = useState("");
  const [userZipErr, setUserZipErr] = useState("");

  const [userCity, setUserCity] = useState("");
  const [userCityErr, setUserCityErr] = useState("");

  const [userCountry, setUserCountry] = useState("");
  const [userCountryErr, setUserCountryErr] = useState("");

  async function fetchUserAddress() {
    const userAddress = await post(`${apiUrl}/user/address`);

    if (!userAddress || !userAddress.success) {
      toast.error(userAddress.message);
    } else {
      setAllUserAddress(userAddress.userAddress);

      const { address, zipcode, city, country } = userAddress.userAddress;

      setUserAdd(address);
      setUserZip(zipcode);
      setUserCity(city);
      setUserCountry(country);
    }
  }

  useEffect(() => {
    fetchUserAddress();
  }, []);

  const UpdateUserAddress = async () => {
    const newUserAddress = checkForChangeAddress();

    if (newUserAddress === false) return;

    const updatedUser = await put(`${apiUrl}/user`, newUserAddress);

    if (updatedUser && updatedUser.success) {
      await fetchUserAddress();
      toast.success("User Address has been updated");
    } else {
      toast.error("Updating user Address was not successful");
    }
  };

  const checkForChangeAddress = () => {
    let hasChanged = false;

    let newUserAddress = {};

    if (!allUserAddress.address) {
      if (userAdd) {
        newUserAddress.address = userAdd;
        if (!hasChanged) hasChanged = true;
      }
    } else if (allUserAddress.address !== userAdd) {
      newUserAddress.address = userAdd;
      if (!hasChanged) hasChanged = true;
    }

    if (!allUserAddress.zipcode) {
      if (userZip) {
        newUserAddress.zipcode = userZip;
        if (!hasChanged) hasChanged = true;
      }
    } else if (allUserAddress.zipcode !== userZip) {
      newUserAddress.zipcode = userZip;
      if (!hasChanged) hasChanged = true;
    }

    if (!allUserAddress.city) {
      if (userCity) {
        newUserAddress.city = userCity;
        if (!hasChanged) hasChanged = true;
      }
    } else if (allUserAddress.city !== userCity) {
      newUserAddress.city = userCity;
      if (!hasChanged) hasChanged = true;
    }

    if (!allUserAddress.country) {
      if (userCountry) {
        newUserAddress.country = userCountry;
        if (!hasChanged) hasChanged = true;
      }
    } else if (allUserAddress.country !== userCountry) {
      newUserAddress.country = userCountry;
      if (!hasChanged) hasChanged = true;
    }

    if (hasChanged) {
      return newUserAddress;
    }
    return false;
  };

  return (
    <div className="container-fluid">
      <div className="row account-add-wrapper">
        <div className="user-field col-12">
          <Input
            val={userAdd}
            setter={setUserAdd}
            name="Address"
            type="textarea"
            err={userAddErr}
          />
        </div>

        {/* Country */}


        <div className="user-field col-12">

          <div className="input-form">
          
            <label htmlFor="name">Enter Country:</label>

            <Select
              items={countryList}
              selectedItem={userCountry}
              setSelectedItem={setUserCountry}
              isString={true}
              plcHolder="Select Country"
            />
          </div>

        </div>

        <div className="user-field col-12">
          <Input
            val={userCity}
            setter={setUserCity}
            name="City"
            type="text"
            err={userCityErr}
          />
        </div>

        <div className="user-field col-12">
          <Input
            val={userZip}
            setter={setUserZip}
            name="Zip Code"
            type="text"
            err={userZipErr}
          />
        </div>

        <button className="update-user-btn" onClick={UpdateUserAddress}>
          Update
        </button>
      </div>
    </div>
  );
}
