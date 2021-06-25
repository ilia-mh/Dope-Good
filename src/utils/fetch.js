// import router from "../router/index";
// import { emptyUser } from "../store/user";

async function request(
  method,
  url,
  data = {},
  headers = {},
  type = ""
) {
  let resp;
  console.log(url);

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

  if ( !resp.success && resp.code === 4 ) { // token invalid
    try {
      resp = await fetch("/api/user/refreshtoken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
          refresh_token: localStorage.getItem("refresh_token"),
        },
      });

      resp = await resp.json();
    } catch (err) {
      console.log(err.message);
    }

    if (resp.success) {
      localStorage.setItem("access_token", resp.access_token);
      localStorage.setItem("refresh_token", resp.refresh_token);

      headers.access_token = resp.access_token;

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

  console.log(resp);
  return resp;
}

function LogOffUser() {
  // localStorage.removeItem("access_token");
  // localStorage.removeItem("refresh_token");
  // emptyUser();
  // router.push("/login");
	console.log('logging out')
}

export const post = async (url, data = {}) => {
  let resp;

  if (url === "/user/login" || url === "/user/register") {
    resp = await request("POST", url, data);
    return resp;
  }

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
  };

  resp = await request("POST", url, data, headers);

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

  if ( resp === false || ( !resp.success && resp.message === "You must be logged in.") ) LogOffUser();

  return resp;
};

export const put = async (url, data = {}) => {
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
  };

  resp = await request("PUT", url, data, headers);

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
  };
  resp = await request("DELETE", url, data, headers);

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

  if (resp === false) LogOffUser();
  if (
    !resp.success &&
    resp.message === "You must be logged in."
  )
    LogOffUser();

  return resp;
};
