# Get User Location/IP address/Country/Details from Browser using javascript

See Your Live Data on [https://pkfan.github.io/user-details-from-browser-examples](https://pkfan.github.io/user-details-from-browser-examples/) 

#### Note: Bundle Size is 30.4Kb (gzipped: 12.3Kb) of this library.

###### 245 countries supported by this library
   
   
## Using with forms to set default values
You can use this library to set default country and phone number code during registration and send request to server to get (states, cities) of users.

You can use this library with [countries-states-cities-database](https://github.com/dr5hn/countries-states-cities-database).

Example of it.   
![alt text](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibm9Z040IVVwuDXeXihCdsM6g7A2FvKoFmkci6a4t7BpPJdBuw4LgggIX9fP3hDjS31ACyhNaI3kxhzdXm6YQ_98Lyi0f7Qd0PPPNxSoE7umD-wPPgnH_31b3NMHCW3dgmw3ciHOOyAMmkasAtcAF4od_4X6FAnDGBt9j-teDIAe9Ea7w7p-ACYIeYeA/s16000/userDetailfromBrowser.gif)

   
## About Library details   
This library does not depend on any third party library and remote service/request to detect user location/country/details. 

This library only uses javascript to detect user details and return javascript User Object.    

## About User Original Details
**If client use vpn or any third party server or change his country location, then this library fetch/detect original details of client from browser, because we fetch details from client system.**   


Following Details are found in result object:   
* user location details
* user all IPs address
* user country names
* country FLAG url in (.svg) format
* user currency
* user country domain (tld)
* user languages
* user phone number details
* user network speed (e.g 2g, 3g, 4g)
* user RAM details in GB (giga bytes)
* user processors detail
* operating system name
* device (e.g mobile/desktop)

scroll down to see all available user details javascript object output example

## Installation
```bash
# If you use npm:
npm install user-detail-from-browser

# Or if you use Yarn:
yarn add user-detail-from-browser
```

# use
Use these following methods to get/detect user details
```js
import {
  getUserDetailsFromBrowser,
  getUserCountryDetails,
  getUserSystemDetails,
  getSystemIPs,
  getAllCountries,
} from "user-detail-from-browser";

getSystemIPs( )
getUserDetailsFromBrowser( )
getUserCountryDetails( )
getUserSystemDetails( )
getAllCountries( )

```

### Output of getSystemIPs( )
```js
//get client original IPs addresses in array format;
  getSystemIPs().then((ips) => {
    console.log("Client System Public Ips", ips);
  });

/*
  // output result

  [ 
    {
    "ip_version": "IPv4",
    "ip_address": "111.119.187.8"
    } 
  ]
*/

```

### Output of getUserDetailsFromBrowser( )
```js

    {
      country: {
        country_name: "Pakistan",
        country_code_two: "PK",
        country_code_three: "PAK",
        phone_code: "+92",
        country_currency: "PKR",
        currency_symbol: "₨",
        tld: ".pk",
        country_flag_url:
          "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/pk.svg",
        locale: "en-US",
        timeZone: "Asia/Karachi",
        browser_date: {
          date_string: "Fri Jan 27 2023",
          date_numeric: "1/27/2023",
          system_time: "20:49:25",
          GMT: "GMT+0500",
          timezoneOffset: -300,
        },
      },
      system: {
        network: "3g",
        RAM: "8 GB",
        logical_processors: 4,
        system_selected_language: "en-US",
        system_languages: ["en-US", "en"],
        system_date: "1/27/2023",
        system_time_zone: "Asia/Karachi",
        system_date_format: {
          calendar: "gregory",
          day: "numeric",
          month: "numeric",
          year: "numeric",
        },
        platform: " Win64",
        device: "Laptop OR Desktop",
        operating_system: "Windows NT 10.0",
        device_model_name: "x64",
      },
    }


```


### Output of getUserCountryDetails( )
```js

    {
      country_name: "Pakistan",
      country_code_two: "PK",
      country_code_three: "PAK",
      phone_code: "+92",
      country_currency: "PKR",
      currency_symbol: "₨",
      tld: ".pk",
      country_flag_url:
        "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/pk.svg",
      locale: "en-US",
      timeZone: "Asia/Karachi",
      browser_date: {
        date_string: "Fri Jan 27 2023",
        date_numeric: "1/27/2023",
        system_time: "20:49:25",
        GMT: "GMT+0500",
        timezoneOffset: -300,
      },
    }

```

### Output of getUserSystemDetails( )
```js

  {
    network: "3g",
    RAM: "8 GB",
    logical_processors: 4,
    system_selected_language: "en-US",
    system_languages: ["en-US", "en"],
    system_date: "1/27/2023",
    system_time_zone: "Asia/Karachi",
    system_date_format: {
      calendar: "gregory",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    },
    platform: " Win64",
    device: "Laptop OR Desktop",
    operating_system: "Windows NT 10.0",
    device_model_name: "x64",
  }

```
### Output of getAllCountries( )
```js

  [
    {country 1},
    {country 2},
    {country 3},

    .....

    {country 250},
  ]

```

#### index.html : use (user-detail-from-browser.min.js) bundle in your html page with script tags

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <h3>user defaults country details from browser</h3>
  

    <script type="module">
      import {
        getUserSystemDetails,
        getUserCountryDetails,
        getUserDetailsFromBrowser,
      } from "https://unpkg.com/user-detail-from-browser/dist/user-detail-from-browser.min.js";

  

    getUserDetailsFromBrowser();
    getUserSystemDetails();
    getUserCountryDetails();

    </script>
  </body>
</html>

```
