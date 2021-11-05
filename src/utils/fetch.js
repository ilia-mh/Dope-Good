// import router from "../router/index";
// import { emptyUser } from "../store/user";

import { toast } from 'react-toastify';

const apiUrl = process.env.REACT_APP_API_URL;
const refreshTokenUrl = `${apiUrl}/api/user/refreshtoken`

const unAuthRoutes = ['login','register','contact']

async function request(
  method,
  url,
  data = {},
  headers = {},
  type = ""
) {
  let resp;

  try {
    if (type === "upload") {
      resp = await fetch(url, {
        method,
        body: data,
        headers: {
          ...headers,
        },
      });
    } else {
      if (method === "GET") {
        resp = await fetch(url, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
        });
      } else {
        resp = await fetch(url, {
          method,
          body: data ? JSON.stringify(data) : "",
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
        });
      }
    }
    resp = await resp.json();
  } catch (err) {
    console.log(err.message);
  }

  if ( resp && !resp.success && resp.message === 'Access token expired.' ) { // token invalid
    try {
      resp = await fetch(refreshTokenUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        }
      });

      resp = await resp.json();
    } catch (err) {
      console.log(err.message);
    }

    if (resp.success) {

      const newUser = {
        accessToken: resp.access_token,
        refreshToken: resp.refresh_token,
      }

      localStorage.setItem("user", JSON.stringify(newUser));

      headers.access_token = resp.access_token;
      headers.refresh_token = resp.refresh_token;

      try {
        if (type === "upload") {
          resp = await fetch(url, {
            method,
            body: data,
            headers: {
              ...headers,
            },
          });
        } else {
          if (method === "GET") {
            resp = await fetch(url, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                ...headers,
              },
            });
          } else {
            resp = await fetch(url, {
              method,
              body: data ? JSON.stringify(data) : "",
              headers: {
                "Content-Type": "application/json",
                ...headers,
              },
            });
          }
        }
        resp = await resp.json();
      } catch (err) {
        console.log(err.message);
      }
    } else {
      return false;
    }
  }
  return resp;
}

function LogOffUser() {
  localStorage.removeItem("user");
}

export const post = async (url, data = {}) => {
  let resp;

	const urlsplitted = url.split('/');
	const urlLastPart = urlsplitted[urlsplitted.length - 1];

  if ( unAuthRoutes.includes(urlLastPart) ) {
    resp = await request("POST", url, data);
    return resp;
  }

  const user = JSON.parse( localStorage.getItem('user') )

	if( !user || !user.accessToken ) return false

  const headers = {
    access_token: user.accessToken,
    refresh_token: user.refreshToken,
  };

  resp = await request("POST", url, data, headers);

  if( resp === undefined || resp === null ) {
    toast.error('Cant reach the server')
    return null
  }

  if (resp === false) LogOffUser();
  if (
    !resp.success &&
    resp.message === "You must be logged in."
  )
    LogOffUser();

  return resp;
};

export const get = async ( url, auth = false ) => {

  let resp;
	const headers = {}

	if ( auth ) {

		if (
			!localStorage.getItem("access_token") ||
			!localStorage.getItem("access_token").length
		) {
			LogOffUser();
			return;
		}
		
		headers.access_token = localStorage.getItem("access_token")
		headers.refresh_token = localStorage.getItem("refresh_token")

	}

  resp = await request("GET", url, {}, headers);

  if( resp === undefined || resp === null ) {
    toast.error('Cant reach the server')
    return null
  }

  if ( resp === false || ( !resp.success && resp.message === "You must be logged in.") ) LogOffUser();

  return resp;
};

export const put = async (url, data = {}) => {
  let resp;

  const user = JSON.parse( localStorage.getItem('user') )

  if( !user || !user.accessToken ) return false

  const headers = {
    access_token: user.accessToken,
    refresh_token: user.refreshToken,
  };

  resp = await request("PUT", url, data, headers);

  if( resp === undefined || resp === null ) {
    toast.error('Cant reach the server')
    return null
  }

  if (resp === false) LogOffUser();
  if (
    !resp.success &&
    resp.message === "You must be logged in."
  )
    LogOffUser();

  return resp;
};

export const deleteReq = async (url, data = {}) => {
  let resp;

  const user = JSON.parse( localStorage.getItem('user') )

  if( !user || !user.accessToken ) return false

  const headers = {
    access_token: user.accessToken,
    refresh_token: user.refreshToken,
  };
  
  resp = await request("DELETE", url, data, headers);

  if( resp === undefined || resp === null ) {
    toast.error('Cant reach the server')
    return null
  }

  if (resp === false) LogOffUser();
  if (
    !resp.success &&
    resp.message === "You must be logged in."
  )
    LogOffUser();

  return resp;
};

export const uploadPhoto = async (
  url,
  formData,
  header = {}
) => {
  let resp;

  if (
    !localStorage.getItem("access_token") ||
    !localStorage.getItem("access_token").length
  ) {
    LogOffUser();
    return;
  }

  const headers = {
    access_token: localStorage.getItem("access_token"),
		refresh_token: localStorage.getItem("refresh_token"),
    ...header,
  };

  resp = await request("post", url, formData, headers, "upload");

  if( resp === undefined || resp === null ) return null

  if (resp === false) LogOffUser();
  if (
    !resp.success &&
    resp.message === "You must be logged in."
  )
    LogOffUser();

  return resp;
};
