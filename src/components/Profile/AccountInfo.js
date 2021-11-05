import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { deleteReq, post, put, uploadPhoto } from "../../utils/fetch";

import "./accountInfo.scss";
import UserImg from '../../assets/images/guest.jpg'
import Input from './../Input/Input';

const apiUrl = `${process.env.REACT_APP_API_URL}/`;

export default function AccountInfo() {

  const [allUserInfo, setAllUserInfo] = useState({});

  const [userId, setUserId] = useState("");

  const [userImg, setUserImg] = useState("");

  const [userName, setUserName] = useState("");
  const [userNameErr, setUserNameErr] = useState("");

  const [userEmail, setUserEmail] = useState("");
  const [userEmailErr, setUserEmailErr] = useState("");

  const [userPhone, setUserPhone] = useState("");
  const [userPhoneErr, setUserPhoneErr] = useState("");

  const [userLastName, setUserLastName] = useState("");
  const [userLastNameErr, setUserLastNameErr] = useState("");

  const [userCompanyName, setUserCompanyName] = useState("");
  const [userCompanyNameErr, setUserCompanyNameErr] = useState("");

  async function fetchUserInfo () {

    const userInfo = await post(`${apiUrl}api/user/info`);

    if ( !userInfo || !userInfo.success) {
      toast.error(userInfo.message);
    } else {

      setAllUserInfo(userInfo.userInfo)

      console.log('userInfo')
      console.log(userInfo.userInfo)

      const { _id, email, phone, img, name, lastName, companyName } =
        userInfo.userInfo;

      setUserEmail(email || '');
      setUserPhone(phone || '');
      setUserImg(img || '');
      setUserId(_id || '');
      setUserName(name || '');
      setUserLastName(lastName || '');
      setUserCompanyName(companyName || '');
    }
  }
  
  useEffect(() => {
    fetchUserInfo();

    return () => fetchUserInfo()
  }, []);

  const UpdateUserInfo = async () => {

    const newUserInfo = checkForChangeInfo()

    if( newUserInfo === false ) return

    const updatedUser = await put(`${apiUrl}api/user`, newUserInfo )

    if( updatedUser && updatedUser.success ) {
      await fetchUserInfo()
      toast.success('UserInfo has been updated')
    } else {
      toast.error('Updating user info was not successful')
    }

  }

  const checkForChangeInfo = () => {

    let hasChanged = false

    let newUserInfo = {}

    if( !allUserInfo.name ) {

      if( userName ) {
        newUserInfo.name = userName
        if( !hasChanged ) hasChanged = true
      }

    } else if ( allUserInfo.name !== userName ) {
      newUserInfo.name = userName
      if( !hasChanged ) hasChanged = true
    }

    if( !allUserInfo.email ) {

      if( userEmail ) {
        newUserInfo.email = userEmail
        if( !hasChanged ) hasChanged = true
      }

    } else if ( allUserInfo.email !== userEmail ) {
      newUserInfo.email = userEmail
      if( !hasChanged ) hasChanged = true
    }

    if( !allUserInfo.phone ) {

      if( userPhone ) {
        newUserInfo.phone = userPhone
        if( !hasChanged ) hasChanged = true
      }

    } else if ( allUserInfo.phone !== userPhone ) {
      newUserInfo.phone = userPhone
      if( !hasChanged ) hasChanged = true
    }

    // if( !allUserInfo.img ) {
    //   if( userImg ) {
    //     newUserInfo.img = userPhone
    //     if( !hasChanged ) hasChanged = true
    //   }
    // } else if ( allUserInfo.img !== userImg ) {
    //   newUserInfo.img = userPhone
    //   if( !hasChanged ) hasChanged = true
    // }

    if( !allUserInfo.lastName ) {
      if( userLastName ) {
        newUserInfo.lastName = userLastName
        if( !hasChanged ) hasChanged = true
      }
    } else if ( allUserInfo.lastName !== userLastName ) {
      newUserInfo.lastName = userLastName
      if( !hasChanged ) hasChanged = true
    }
    
    if( !allUserInfo.companyName ) {
      if( userCompanyName ) {
        newUserInfo.companyName = userCompanyName
        if( !hasChanged ) hasChanged = true
      }
    } else if ( allUserInfo.companyName !== userCompanyName ) {
      newUserInfo.companyName = userCompanyName
      if( !hasChanged ) hasChanged = true
    }

    if( hasChanged ) {
      return newUserInfo
    }
    return false
  }

  const uploadNewPhoto = async (e) => {
    
    if( !e.target.files || !e.target.files[0] ) {
      toast.error('No file selected for upload.')
      return
    }

    const uploadedPhoto = e.target.files[0]

    const photo = new FormData();
    photo.append("photo", e.target.files[0]);

    const uploadUserPhoto = await uploadPhoto(`${apiUrl}api/user/photo`, photo)

    if( !uploadUserPhoto.success ) {
      toast.error('Your upload was not successful')
      e.target.files[0] = {}
      return
    }

    toast.success('Your profile image uploaded successfuly')
    setUserImg(uploadUserPhoto.imgUrl || '')
  }

  const removeUserPhoto = async () => {

    const removeUserImg = await deleteReq(`${apiUrl}api/user/photo`)

    if( !removeUserImg.success ) {
      toast.error('Your profile image remove was not successful')
      return
    }

    toast.success('Your profile image removed successfuly')
    setUserImg('')
  }

  return (
    <div className="container-fluid">
      <div className="row account-info-wrapper">

          <div className="user-img" style={{ backgroundImage: `url(${ userImg ? `${apiUrl}profile/${userImg}` : UserImg})` }}>

            <span className="remove-photo" onClick={removeUserPhoto}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>

            <label htmlFor="user-img" >
              <svg xmlns="http://www.w3.org/2000/svg" className="upload-photo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </label>

            <input onChange={uploadNewPhoto} type="file" name="user-img" id="user-img" />

          </div>

          <div className="user-field col-12">

            <Input val={userName} setter={setUserName} name='Name' type='text' err={userNameErr} />

          </div>

          <div className="user-field col-12">

            <Input val={userLastName} setter={setUserLastName} name='Last Name' type='text' err={userLastNameErr} />

          </div>

          <div className="user-field col-12">

            <Input val={userEmail} setter={setUserEmail} name='Email' type='text' err={userEmailErr} />

          </div>

          <div className="user-field col-12">

            <Input val={userPhone} setter={setUserPhone} name='Phone' type='tel' err={userPhoneErr} />

          </div>

          <div className="user-field col-12">

            <Input val={userCompanyName} setter={setUserCompanyName} name='Company Name' type='text' err={userCompanyNameErr} />

          </div>

          <button className="update-user-btn" onClick={UpdateUserInfo}>
            Update
          </button>

      </div>
    </div>
  );
}
