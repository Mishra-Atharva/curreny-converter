// key = 5dtZbbQQqOMHmCEZvv6uOacINBFYSmyf
var myHeaders = new Headers();
    myHeaders.append("apikey", "5dtZbbQQqOMHmCEZvv6uOacINBFYSmyf");
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
      };

function getCountries() {

    fetch("https://api.apilayer.com/currency_data/list", requestOptions)
      .then((a) => a.json())
      .then((response) => {
        console.log(response.currencies);
        var option = document.createElement("select", "selection");
      })
}

// fetch("https://api.apilayer.com/currency_data/list", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));