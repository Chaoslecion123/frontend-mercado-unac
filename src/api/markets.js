import { basePath } from "./config";

export function getMarkets(token) {
    const url = `${basePath}markets/`;
  
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}` 
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

  export function searchInfoMarkets(token,data) {
    const url = `${basePath}markets/?search=${data}`;
  
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}` 
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

  export function getHorarios(token,id_mercado) {
    const url = `${basePath}markets/${id_mercado}/horarios/`;
  
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}` 
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


  export function getDepartamentos(token) {
    const url = `${basePath}departamentos/`;
  
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
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

  export function getCiudades() {
    const url = `${basePath}ciudades/`;
  
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //Authorization: token
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

  export function getDistritos() {
    const url = `${basePath}distritos/`;
  
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //Authorization: token
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



  export function FiltradoMercados(form) {
    const url = `
    ${basePath}markets/?address__country_area__name=${form.departamento}&address__city__name=${form.ciudad}&address__city_area__name=${form.distrito}`;
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //Authorization: token
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

  export function getCounterMarket(token,id_mercado) {
    const url = `${basePath}markets/${id_mercado}/counter_market/`;
  
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}` 
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



  export function GenerarPase(id_counter_market) {
    const url = `${basePath}countermarket/${id_counter_market}/generate_pass/`;
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //Authorization: token
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


  export function passRequestMarket(token,data) {
    const url = `${basePath}pass_mercado/`;
    const params = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}` 
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
        return { ok: false, message: err.message };
      });
}


export function pdf(token,id_market_pass_request) {
  const url = `${basePath}pass_mercado/${id_market_pass_request}/pdf/`;
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}` 
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