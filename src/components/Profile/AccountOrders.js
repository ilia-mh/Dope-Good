import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { post } from "./../../utils/fetch";

import { toast } from "react-toastify";


const apiUrl = `${process.env.REACT_APP_API_URL}/api`;

export default function AccountOrders() {
  
  const [allUserOrders, setAllUserOrders] = useState([]);

  async function fetchUserOrders() {
    const userOrders = await post(`${apiUrl}/user/orders`);

    if (!userOrders || !userOrders.success) {
      toast.error(userOrders.message);
    } else {
      setAllUserOrders(userOrders.userOrders || []);
    }
  }

  useEffect(() => {
    fetchUserOrders();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row account-orders">
        {
          allUserOrders.length ?
            <div className="user-orders"></div>
          :
          <h6 style={{ fontWeight: '600' }}>Your have no orders. Order something new from <Link to="/shop">here</Link>.</h6>
        }
      </div>
    </div>
  );
}
