const API = {}

API.getDv = async (rut) => await fetch(`${process.env.REACT_APP_API_URI}/getDv`, {
        method: "post",
        headers: {
          Accept: "application/x-www-form-urlencoded",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          rut,
        })
});

API.splitNames = async (names) => await fetch(`${process.env.REACT_APP_API_URI}/splitNames`, {
    method: "post",
    headers: {
      Accept: "application/x-www-form-urlencoded",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      names,
    })
}); 

export default API
