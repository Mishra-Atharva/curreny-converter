// key = 5dtZbbQQqOMHmCEZvv6uOacINBFYSmyf
console.log("testing...");
var myHeaders = new Headers();
    myHeaders.append("apikey", "5dtZbbQQqOMHmCEZvv6uOacINBFYSmyf");
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
      };
    console.log("https://api.apilayer.com/currency_data/list"+Object.keys(requestOptions));

function getCountries() {

    fetch("https://api.apilayer.com/currency_data/list", requestOptions)
      .then((a) => a.json())
      .then((response) => {
        // console.log(Object.keys(response.currencies).length);
        //console.log(Object.keys(response.currencies)[0]);
        for (i = 0; i < Object.keys(response.currencies).length; i++) {
          var list = document.getElementById("list");
          var option = document.createElement("option");
          option.text = Object.keys(response.currencies)[i];
          option.value = Object.keys(response.currencies)[i];
          list.append(option);
        }
        
      })
  }

// fetch("https://api.currencylayer.com/convert&from=GBP&to=USD&amount=10")
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));