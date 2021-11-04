import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { toast } from "react-toastify";
import { post } from "../../utils/fetch";

import ProductCard from './../Product/ProductCard/ProductCard';

const apiUrl = `${process.env.REACT_APP_API_URL}/api`;

export default function Wishlist() {

  const [userWishlist,setUserWishlist] = useState([])

  useEffect(() => {
    fetchUserAddress()
  }, [])

  async function fetchUserAddress() {

    const userWishlist = await post(`${apiUrl}/user/wishlist`);

    console.log(userWishlist)

    if ( !userWishlist || !userWishlist.success ) {
      toast.error(userWishlist.message);
    } else {

      const WishlistProducts = userWishlist.wishlist.map( product => { return {...product, favoritted: true} } )
      setUserWishlist(WishlistProducts);
    }
  }

  const removefavorittedProduct = (id) => {
    const newFavoriteProducts = userWishlist.filter( ({ _id }) => _id !== id )
    setUserWishlist(newFavoriteProducts)
  }

  return (
    <div className="container-fluid">
      <div className="row account-wishlist-wrapper">
        {
          userWishlist.length ? 
            userWishlist.map( product => 
                <ProductCard product={product} key={product._id} removeFavorite={removefavorittedProduct} />
            )
          :
            <h6 style={{ fontWeight: '600' }}>Your Wishlist is empty. Select your favorite products from <Link to="/shop">here</Link>.</h6>
        }
      </div>
    </div>
  )
}
