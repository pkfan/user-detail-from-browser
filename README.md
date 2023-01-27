# Get User Location/Country/Details from Browser using javascript

See Your Live Data on [https://pkfan.github.io/user-details-from-browser-examples](https://pkfan.github.io/user-details-from-browser-examples/) 

#### Note: Bundle Size is 71.8Kb (gzipped: 18.5k) of this library.

###### 243 countries supported by this library
   
   
   
This library does not depend on any third party library and remote service/request to detect user location/country/details. 

This library only uses javascript to detect user details and return javascript User Object.    

## About User Original Details
**If client use vpn or any third party server or change his country location, then this library fetch/detect original details of client from browser, because we fetch details from client system.**   


Following Details are found in result object:   
* user location details
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
} from "user-detail-from-browser";


getUserDetailsFromBrowser( )
getUserCountryDetails( )
getUserSystemDetails( )

```

### Output of getUserDetailsFromBrowser( )
```js
{
  country: {
    country_common_name: "Pakistan",
    country_official_name: "Islamic Republic of Pakistan",
    country_code_two: "PK",
    country_code_three: "PAK",
    country_capital: "Islamabad",
    country_currency: { code: "PKR", name: "Pakistan Rupee" },
    tld: [".pk"],
    country_languages: { eng: "English", urd: "Urdu" },
    geo: { region: "Asia", subregion: "Southern Asia" },
    phone: {
      calling_code: "+92",
      national_prefix: "0",
      national_number_lengths: [9, 10],
    },
    country_flag_url:
      "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/pk.svg",
    locale: "en-US",
    timeZone: "Asia/Karachi",
    browser_date: {
      date_string: "Thu Jan 26 2023",
      date_numeric: "1/26/2023",
      system_time: "16:25:44",
      GMT: "GMT+0500",
      timezoneOffset: -300,
    },
  },
  system: {
    network: "4g",
    RAM: "8 GB",
    logical_processors: 4,
    system_selected_language: "en-US",
    system_languages: ["en-US", "en"],
    system_date: "1/26/2023",
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

  country: {
    country_common_name: "Pakistan",
    country_official_name: "Islamic Republic of Pakistan",
    country_code_two: "PK",
    country_code_three: "PAK",
    country_capital: "Islamabad",
    country_currency: { code: "PKR", name: "Pakistan Rupee" },
    tld: [".pk"],
    country_languages: { eng: "English", urd: "Urdu" },
    geo: { region: "Asia", subregion: "Southern Asia" },
    phone: {
      calling_code: "+92",
      national_prefix: "0",
      national_number_lengths: [9, 10],
    },
    country_flag_url: "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/pk.svg",
    locale: "en-US",
    timeZone: "Asia/Karachi",
    browser_date: {
      date_string: "Thu Jan 26 2023",
      date_numeric: "1/26/2023",
      system_time: "16:25:44",
      GMT: "GMT+0500",
      timezoneOffset: -300,
    }
  }
```

### Output of getUserSystemDetails( )
```js

  system: {
    network: "4g",
    RAM: "8 GB",
    logical_processors: 4,
    system_selected_language: "en-US",
    system_languages: ["en-US", "en"],
    system_date: "1/26/2023",
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
      } from "https://unpkg.com/user-detail-from-browser@1.0.0/dist/user-detail-from-browser.min.js";;
  

    getUserDetailsFromBrowser();
    getUserSystemDetails();
    getUserCountryDetails();

    </script>
  </body>
</html>

```
