const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({message: "This is the server motherfucker"});
});

app.get("/twtr", (req, res) => {
    res.json({ticker: "TWTR",
                current_price: "$54.30"});
});

// async function Recv(symbol) {
//     var myHeaders = new Headers();
//     myHeaders.append("apikey", "el6iptuovtou8n62bhprofqngfsso2dm2vocu3t9nokuvp5kqut3o");
  
//     var requestOptions = {
//       method: 'GET',
//       redirect: 'follow',
//       headers: myHeaders
//     };
  
//     let res = await fetch("https://anyapi.io/api/v1/exchange/convert?base=NZD&to=USD&amount=1&apiKey=el6iptuovtou8n62bhprofqngfsso2dm2vocu3t9nokuvp5kqut3o", requestOptions)
//                           .catch(console.error);
  
//     if(res.status === 200) {
//       let data = await res.json();
//       console.log(data.converted.toString());
//       return data.converted.toString();
//     }
    
//     return "Pending...";
//   }

// app.get("/NZDUSD", (req, res) => {
//     res.json
// });

app.listen(PORT, () => {
    console.log("Server listening on port ${PORT}");
});