const APIURL = 'https://localhost:5432/fortunetellr';
const token = localStorage.getItem("token");
//POST register user
export const fetchRegister = async (username, email, password, phoneNumber) => {
  const res = await fetch(`${APIURL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: `${username}`,
      email: `${email}`,
      password: `${password}`,
      phoneNumber: `${phoneNumber}`
    }),
  });
  const json = await res.json();
  console.log(json);
  return json;
};

export const fetchLogin = async (username, password) => {
  const res = await fetch(`${APIURL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`,
    }),
  });
  const json = await res.json();
  console.log(json);
  return json;
};

export const fetchUser = async (token) => {
  const res = await fetch(`${APIURL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await res.json();
  return json;
};
