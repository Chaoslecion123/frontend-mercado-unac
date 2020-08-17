import { basePath } from "./config";

export function register(data) {
    const url = `${basePath}users/signup/`;
    const params = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    return fetch(url, params)
      .then(response => {
        console.log(response)
        return response.json();
      })
      .then(result => {
        console.log(result)
        
        if (result.user) {
          return { ok: true, message: "Usuario creado correctamente" };
        }
        return { ok: false, message: "algo va mal con los datos"  };
      })
      .catch(err => {
        return { ok: false, message: "error en el servidor" };
      });
}

export function login(data) {
  const url = `${basePath}token/obtain/`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {

      return result;
    })
    .catch(err => {
      return err.message;
    });
}