function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

function get_countries_243() {
  //  const {
  //     name,
  //     iso2,
  //     iso3,
  //     phone_code,
  //     capital,
  //     currency,
  //     currency_name,
  //     currency_symbol,
  //     tld,
  //     region,
  //   } = country;

  const c_243 = {
    AF: ["Afghanistan", "AF", "AFG", "93", "Kabul", "AFN", "Afghan afghani", "؋", ".af", "Asia"],
    AX: ["Aland Islands", "AX", "ALA", "+358-18", "Mariehamn", "EUR", "Euro", "€", ".ax", "Europe"],
    AL: ["Albania", "AL", "ALB", "355", "Tirana", "ALL", "Albanian lek", "Lek", ".al", "Europe"],
    DZ: ["Algeria", "DZ", "DZA", "213", "Algiers", "DZD", "Algerian dinar", "دج", ".dz", "Africa"],
    AS: ["American Samoa", "AS", "ASM", "+1-684", "Pago Pago", "USD", "US Dollar", "$", ".as", "Oceania"],
    AD: ["Andorra", "AD", "AND", "376", "Andorra la Vella", "EUR", "Euro", "€", ".ad", "Europe"],
    AO: ["Angola", "AO", "AGO", "244", "Luanda", "AOA", "Angolan kwanza", "Kz", ".ao", "Africa"],
    AI: ["Anguilla", "AI", "AIA", "+1-264", "The Valley", "XCD", "East Caribbean dollar", "$", ".ai", "Americas"],
    AQ: ["Antarctica", "AQ", "ATA", "672", "", "AAD", "Antarctican dollar", "$", ".aq", "Polar"],
    AG: ["Antigua And Barbuda", "AG", "ATG", "+1-268", "St. John's", "XCD", "Eastern Caribbean dollar", "$", ".ag", "Americas"],
    AR: ["Argentina", "AR", "ARG", "54", "Buenos Aires", "ARS", "Argentine peso", "$", ".ar", "Americas"],
    AM: ["Armenia", "AM", "ARM", "374", "Yerevan", "AMD", "Armenian dram", "֏", ".am", "Asia"],
    AW: ["Aruba", "AW", "ABW", "297", "Oranjestad", "AWG", "Aruban florin", "ƒ", ".aw", "Americas"],
    AU: ["Australia", "AU", "AUS", "61", "Canberra", "AUD", "Australian dollar", "$", ".au", "Oceania"],
    AT: ["Austria", "AT", "AUT", "43", "Vienna", "EUR", "Euro", "€", ".at", "Europe"],
    AZ: ["Azerbaijan", "AZ", "AZE", "994", "Baku", "AZN", "Azerbaijani manat", "m", ".az", "Asia"],
    BH: ["Bahrain", "BH", "BHR", "973", "Manama", "BHD", "Bahraini dinar", ".د.ب", ".bh", "Asia"],
    BD: ["Bangladesh", "BD", "BGD", "880", "Dhaka", "BDT", "Bangladeshi taka", "৳", ".bd", "Asia"],
    BB: ["Barbados", "BB", "BRB", "+1-246", "Bridgetown", "BBD", "Barbadian dollar", "Bds$", ".bb", "Americas"],
    BY: ["Belarus", "BY", "BLR", "375", "Minsk", "BYN", "Belarusian ruble", "Br", ".by", "Europe"],
    BE: ["Belgium", "BE", "BEL", "32", "Brussels", "EUR", "Euro", "€", ".be", "Europe"],
    BZ: ["Belize", "BZ", "BLZ", "501", "Belmopan", "BZD", "Belize dollar", "$", ".bz", "Americas"],
    BJ: ["Benin", "BJ", "BEN", "229", "Porto-Novo", "XOF", "West African CFA franc", "CFA", ".bj", "Africa"],
    BM: ["Bermuda", "BM", "BMU", "+1-441", "Hamilton", "BMD", "Bermudian dollar", "$", ".bm", "Americas"],
    BT: ["Bhutan", "BT", "BTN", "975", "Thimphu", "BTN", "Bhutanese ngultrum", "Nu.", ".bt", "Asia"],
    BO: ["Bolivia", "BO", "BOL", "591", "Sucre", "BOB", "Bolivian boliviano", "Bs.", ".bo", "Americas"],
    BQ: ["Bonaire, Sint Eustatius and Saba", "BQ", "BES", "599", "Kralendijk", "USD", "United States dollar", "$", ".an", "Americas"],
    BA: ["Bosnia and Herzegovina", "BA", "BIH", "387", "Sarajevo", "BAM", "Bosnia and Herzegovina convertible mark", "KM", ".ba", "Europe"],
    BW: ["Botswana", "BW", "BWA", "267", "Gaborone", "BWP", "Botswana pula", "P", ".bw", "Africa"],
    BV: ["Bouvet Island", "BV", "BVT", "0055", "", "NOK", "Norwegian Krone", "kr", ".bv", ""],
    BR: ["Brazil", "BR", "BRA", "55", "Brasilia", "BRL", "Brazilian real", "R$", ".br", "Americas"],
    IO: ["British Indian Ocean Territory", "IO", "IOT", "246", "Diego Garcia", "USD", "United States dollar", "$", ".io", "Africa"],
    BN: ["Brunei", "BN", "BRN", "673", "Bandar Seri Begawan", "BND", "Brunei dollar", "B$", ".bn", "Asia"],
    BG: ["Bulgaria", "BG", "BGR", "359", "Sofia", "BGN", "Bulgarian lev", "Лв.", ".bg", "Europe"],
    BF: ["Burkina Faso", "BF", "BFA", "226", "Ouagadougou", "XOF", "West African CFA franc", "CFA", ".bf", "Africa"],
    BI: ["Burundi", "BI", "BDI", "257", "Bujumbura", "BIF", "Burundian franc", "FBu", ".bi", "Africa"],
    KH: ["Cambodia", "KH", "KHM", "855", "Phnom Penh", "KHR", "Cambodian riel", "KHR", ".kh", "Asia"],
    CM: ["Cameroon", "CM", "CMR", "237", "Yaounde", "XAF", "Central African CFA franc", "FCFA", ".cm", "Africa"],
    CA: ["Canada", "CA", "CAN", "1", "Ottawa", "CAD", "Canadian dollar", "$", ".ca", "Americas"],
    CV: ["Cape Verde", "CV", "CPV", "238", "Praia", "CVE", "Cape Verdean escudo", "$", ".cv", "Africa"],
    KY: ["Cayman Islands", "KY", "CYM", "+1-345", "George Town", "KYD", "Cayman Islands dollar", "$", ".ky", "Americas"],
    CF: ["Central African Republic", "CF", "CAF", "236", "Bangui", "XAF", "Central African CFA franc", "FCFA", ".cf", "Africa"],
    TD: ["Chad", "TD", "TCD", "235", "N'Djamena", "XAF", "Central African CFA franc", "FCFA", ".td", "Africa"],
    CL: ["Chile", "CL", "CHL", "56", "Santiago", "CLP", "Chilean peso", "$", ".cl", "Americas"],
    CN: ["China", "CN", "CHN", "86", "Beijing", "CNY", "Chinese yuan", "¥", ".cn", "Asia"],
    CX: ["Christmas Island", "CX", "CXR", "61", "Flying Fish Cove", "AUD", "Australian dollar", "$", ".cx", "Oceania"],
    CC: ["Cocos (Keeling) Islands", "CC", "CCK", "61", "West Island", "AUD", "Australian dollar", "$", ".cc", "Oceania"],
    CO: ["Colombia", "CO", "COL", "57", "Bogotá", "COP", "Colombian peso", "$", ".co", "Americas"],
    KM: ["Comoros", "KM", "COM", "269", "Moroni", "KMF", "Comorian franc", "CF", ".km", "Africa"],
    CG: ["Congo", "CG", "COG", "242", "Brazzaville", "XAF", "Central African CFA franc", "FC", ".cg", "Africa"],
    CK: ["Cook Islands", "CK", "COK", "682", "Avarua", "NZD", "Cook Islands dollar", "$", ".ck", "Oceania"],
    CR: ["Costa Rica", "CR", "CRI", "506", "San Jose", "CRC", "Costa Rican colón", "₡", ".cr", "Americas"],
    CI: ["Cote D'Ivoire (Ivory Coast)", "CI", "CIV", "225", "Yamoussoukro", "XOF", "West African CFA franc", "CFA", ".ci", "Africa"],
    HR: ["Croatia", "HR", "HRV", "385", "Zagreb", "HRK", "Croatian kuna", "kn", ".hr", "Europe"],
    CU: ["Cuba", "CU", "CUB", "53", "Havana", "CUP", "Cuban peso", "$", ".cu", "Americas"],
    CW: ["Curaçao", "CW", "CUW", "599", "Willemstad", "ANG", "Netherlands Antillean guilder", "ƒ", ".cw", "Americas"],
    CY: ["Cyprus", "CY", "CYP", "357", "Nicosia", "EUR", "Euro", "€", ".cy", "Europe"],
    CZ: ["Czech Republic", "CZ", "CZE", "420", "Prague", "CZK", "Czech koruna", "Kč", ".cz", "Europe"],
    CD: ["Democratic Republic of the Congo", "CD", "COD", "243", "Kinshasa", "CDF", "Congolese Franc", "FC", ".cd", "Africa"],
    DK: ["Denmark", "DK", "DNK", "45", "Copenhagen", "DKK", "Danish krone", "Kr.", ".dk", "Europe"],
    DJ: ["Djibouti", "DJ", "DJI", "253", "Djibouti", "DJF", "Djiboutian franc", "Fdj", ".dj", "Africa"],
    DM: ["Dominica", "DM", "DMA", "+1-767", "Roseau", "XCD", "Eastern Caribbean dollar", "$", ".dm", "Americas"],
    DO: ["Dominican Republic", "DO", "DOM", "+1-809 and 1-829", "Santo Domingo", "DOP", "Dominican peso", "$", ".do", "Americas"],
    TL: ["East Timor", "TL", "TLS", "670", "Dili", "USD", "United States dollar", "$", ".tl", "Asia"],
    EC: ["Ecuador", "EC", "ECU", "593", "Quito", "USD", "United States dollar", "$", ".ec", "Americas"],
    EG: ["Egypt", "EG", "EGY", "20", "Cairo", "EGP", "Egyptian pound", "ج.م", ".eg", "Africa"],
    SV: ["El Salvador", "SV", "SLV", "503", "San Salvador", "USD", "United States dollar", "$", ".sv", "Americas"],
    GQ: ["Equatorial Guinea", "GQ", "GNQ", "240", "Malabo", "XAF", "Central African CFA franc", "FCFA", ".gq", "Africa"],
    ER: ["Eritrea", "ER", "ERI", "291", "Asmara", "ERN", "Eritrean nakfa", "Nfk", ".er", "Africa"],
    EE: ["Estonia", "EE", "EST", "372", "Tallinn", "EUR", "Euro", "€", ".ee", "Europe"],
    ET: ["Ethiopia", "ET", "ETH", "251", "Addis Ababa", "ETB", "Ethiopian birr", "Nkf", ".et", "Africa"],
    FK: ["Falkland Islands", "FK", "FLK", "500", "Stanley", "FKP", "Falkland Islands pound", "£", ".fk", "Americas"],
    FO: ["Faroe Islands", "FO", "FRO", "298", "Torshavn", "DKK", "Danish krone", "Kr.", ".fo", "Europe"],
    FJ: ["Fiji Islands", "FJ", "FJI", "679", "Suva", "FJD", "Fijian dollar", "FJ$", ".fj", "Oceania"],
    FI: ["Finland", "FI", "FIN", "358", "Helsinki", "EUR", "Euro", "€", ".fi", "Europe"],
    FR: ["France", "FR", "FRA", "33", "Paris", "EUR", "Euro", "€", ".fr", "Europe"],
    GF: ["French Guiana", "GF", "GUF", "594", "Cayenne", "EUR", "Euro", "€", ".gf", "Americas"],
    PF: ["French Polynesia", "PF", "PYF", "689", "Papeete", "XPF", "CFP franc", "₣", ".pf", "Oceania"],
    TF: ["French Southern Territories", "TF", "ATF", "262", "Port-aux-Francais", "EUR", "Euro", "€", ".tf", "Africa"],
    GA: ["Gabon", "GA", "GAB", "241", "Libreville", "XAF", "Central African CFA franc", "FCFA", ".ga", "Africa"],
    GM: ["Gambia The", "GM", "GMB", "220", "Banjul", "GMD", "Gambian dalasi", "D", ".gm", "Africa"],
    GE: ["Georgia", "GE", "GEO", "995", "Tbilisi", "GEL", "Georgian lari", "ლ", ".ge", "Asia"],
    DE: ["Germany", "DE", "DEU", "49", "Berlin", "EUR", "Euro", "€", ".de", "Europe"],
    GH: ["Ghana", "GH", "GHA", "233", "Accra", "GHS", "Ghanaian cedi", "GH₵", ".gh", "Africa"],
    GI: ["Gibraltar", "GI", "GIB", "350", "Gibraltar", "GIP", "Gibraltar pound", "£", ".gi", "Europe"],
    GR: ["Greece", "GR", "GRC", "30", "Athens", "EUR", "Euro", "€", ".gr", "Europe"],
    GL: ["Greenland", "GL", "GRL", "299", "Nuuk", "DKK", "Danish krone", "Kr.", ".gl", "Americas"],
    GD: ["Grenada", "GD", "GRD", "+1-473", "St. George's", "XCD", "Eastern Caribbean dollar", "$", ".gd", "Americas"],
    GP: ["Guadeloupe", "GP", "GLP", "590", "Basse-Terre", "EUR", "Euro", "€", ".gp", "Americas"],
    GU: ["Guam", "GU", "GUM", "+1-671", "Hagatna", "USD", "US Dollar", "$", ".gu", "Oceania"],
    GT: ["Guatemala", "GT", "GTM", "502", "Guatemala City", "GTQ", "Guatemalan quetzal", "Q", ".gt", "Americas"],
    GG: ["Guernsey and Alderney", "GG", "GGY", "+44-1481", "St Peter Port", "GBP", "British pound", "£", ".gg", "Europe"],
    GN: ["Guinea", "GN", "GIN", "224", "Conakry", "GNF", "Guinean franc", "FG", ".gn", "Africa"],
    GW: ["Guinea-Bissau", "GW", "GNB", "245", "Bissau", "XOF", "West African CFA franc", "CFA", ".gw", "Africa"],
    GY: ["Guyana", "GY", "GUY", "592", "Georgetown", "GYD", "Guyanese dollar", "$", ".gy", "Americas"],
    HT: ["Haiti", "HT", "HTI", "509", "Port-au-Prince", "HTG", "Haitian gourde", "G", ".ht", "Americas"],
    HM: ["Heard Island and McDonald Islands", "HM", "HMD", "672", "", "AUD", "Australian dollar", "$", ".hm", ""],
    HN: ["Honduras", "HN", "HND", "504", "Tegucigalpa", "HNL", "Honduran lempira", "L", ".hn", "Americas"],
    HK: ["Hong Kong S.A.R.", "HK", "HKG", "852", "Hong Kong", "HKD", "Hong Kong dollar", "$", ".hk", "Asia"],
    HU: ["Hungary", "HU", "HUN", "36", "Budapest", "HUF", "Hungarian forint", "Ft", ".hu", "Europe"],
    IS: ["Iceland", "IS", "ISL", "354", "Reykjavik", "ISK", "Icelandic króna", "kr", ".is", "Europe"],
    IN: ["India", "IN", "IND", "91", "New Delhi", "INR", "Indian rupee", "₹", ".in", "Asia"],
    ID: ["Indonesia", "ID", "IDN", "62", "Jakarta", "IDR", "Indonesian rupiah", "Rp", ".id", "Asia"],
    IR: ["Iran", "IR", "IRN", "98", "Tehran", "IRR", "Iranian rial", "﷼", ".ir", "Asia"],
    IQ: ["Iraq", "IQ", "IRQ", "964", "Baghdad", "IQD", "Iraqi dinar", "د.ع", ".iq", "Asia"],
    IE: ["Ireland", "IE", "IRL", "353", "Dublin", "EUR", "Euro", "€", ".ie", "Europe"],
    IL: ["Israel", "IL", "ISR", "972", "Jerusalem", "ILS", "Israeli new shekel", "₪", ".il", "Asia"],
    IT: ["Italy", "IT", "ITA", "39", "Rome", "EUR", "Euro", "€", ".it", "Europe"],
    JM: ["Jamaica", "JM", "JAM", "+1-876", "Kingston", "JMD", "Jamaican dollar", "J$", ".jm", "Americas"],
    JP: ["Japan", "JP", "JPN", "81", "Tokyo", "JPY", "Japanese yen", "¥", ".jp", "Asia"],
    JE: ["Jersey", "JE", "JEY", "+44-1534", "Saint Helier", "GBP", "British pound", "£", ".je", "Europe"],
    JO: ["Jordan", "JO", "JOR", "962", "Amman", "JOD", "Jordanian dinar", "ا.د", ".jo", "Asia"],
    KZ: ["Kazakhstan", "KZ", "KAZ", "7", "Astana", "KZT", "Kazakhstani tenge", "лв", ".kz", "Asia"],
    KE: ["Kenya", "KE", "KEN", "254", "Nairobi", "KES", "Kenyan shilling", "KSh", ".ke", "Africa"],
    KI: ["Kiribati", "KI", "KIR", "686", "Tarawa", "AUD", "Australian dollar", "$", ".ki", "Oceania"],
    XK: ["Kosovo", "XK", "XKX", "383", "Pristina", "EUR", "Euro", "€", ".xk", "Europe"],
    KW: ["Kuwait", "KW", "KWT", "965", "Kuwait City", "KWD", "Kuwaiti dinar", "ك.د", ".kw", "Asia"],
    KG: ["Kyrgyzstan", "KG", "KGZ", "996", "Bishkek", "KGS", "Kyrgyzstani som", "лв", ".kg", "Asia"],
    LA: ["Laos", "LA", "LAO", "856", "Vientiane", "LAK", "Lao kip", "₭", ".la", "Asia"],
    LV: ["Latvia", "LV", "LVA", "371", "Riga", "EUR", "Euro", "€", ".lv", "Europe"],
    LB: ["Lebanon", "LB", "LBN", "961", "Beirut", "LBP", "Lebanese pound", "£", ".lb", "Asia"],
    LS: ["Lesotho", "LS", "LSO", "266", "Maseru", "LSL", "Lesotho loti", "L", ".ls", "Africa"],
    LR: ["Liberia", "LR", "LBR", "231", "Monrovia", "LRD", "Liberian dollar", "$", ".lr", "Africa"],
    LY: ["Libya", "LY", "LBY", "218", "Tripolis", "LYD", "Libyan dinar", "د.ل", ".ly", "Africa"],
    LI: ["Liechtenstein", "LI", "LIE", "423", "Vaduz", "CHF", "Swiss franc", "CHf", ".li", "Europe"],
    LT: ["Lithuania", "LT", "LTU", "370", "Vilnius", "EUR", "Euro", "€", ".lt", "Europe"],
    LU: ["Luxembourg", "LU", "LUX", "352", "Luxembourg", "EUR", "Euro", "€", ".lu", "Europe"],
    MO: ["Macau S.A.R.", "MO", "MAC", "853", "Macao", "MOP", "Macanese pataca", "$", ".mo", "Asia"],
    MK: ["Macedonia", "MK", "MKD", "389", "Skopje", "MKD", "Denar", "ден", ".mk", "Europe"],
    MG: ["Madagascar", "MG", "MDG", "261", "Antananarivo", "MGA", "Malagasy ariary", "Ar", ".mg", "Africa"],
    MW: ["Malawi", "MW", "MWI", "265", "Lilongwe", "MWK", "Malawian kwacha", "MK", ".mw", "Africa"],
    MY: ["Malaysia", "MY", "MYS", "60", "Kuala Lumpur", "MYR", "Malaysian ringgit", "RM", ".my", "Asia"],
    MV: ["Maldives", "MV", "MDV", "960", "Male", "MVR", "Maldivian rufiyaa", "Rf", ".mv", "Asia"],
    ML: ["Mali", "ML", "MLI", "223", "Bamako", "XOF", "West African CFA franc", "CFA", ".ml", "Africa"],
    MT: ["Malta", "MT", "MLT", "356", "Valletta", "EUR", "Euro", "€", ".mt", "Europe"],
    IM: ["Man (Isle of)", "IM", "IMN", "+44-1624", "Douglas, Isle of Man", "GBP", "British pound", "£", ".im", "Europe"],
    MH: ["Marshall Islands", "MH", "MHL", "692", "Majuro", "USD", "United States dollar", "$", ".mh", "Oceania"],
    MQ: ["Martinique", "MQ", "MTQ", "596", "Fort-de-France", "EUR", "Euro", "€", ".mq", "Americas"],
    MR: ["Mauritania", "MR", "MRT", "222", "Nouakchott", "MRO", "Mauritanian ouguiya", "MRU", ".mr", "Africa"],
    MU: ["Mauritius", "MU", "MUS", "230", "Port Louis", "MUR", "Mauritian rupee", "₨", ".mu", "Africa"],
    YT: ["Mayotte", "YT", "MYT", "262", "Mamoudzou", "EUR", "Euro", "€", ".yt", "Africa"],
    MX: ["Mexico", "MX", "MEX", "52", "Ciudad de México", "MXN", "Mexican peso", "$", ".mx", "Americas"],
    FM: ["Micronesia", "FM", "FSM", "691", "Palikir", "USD", "United States dollar", "$", ".fm", "Oceania"],
    MD: ["Moldova", "MD", "MDA", "373", "Chisinau", "MDL", "Moldovan leu", "L", ".md", "Europe"],
    MC: ["Monaco", "MC", "MCO", "377", "Monaco", "EUR", "Euro", "€", ".mc", "Europe"],
    MN: ["Mongolia", "MN", "MNG", "976", "Ulan Bator", "MNT", "Mongolian tögrög", "₮", ".mn", "Asia"],
    ME: ["Montenegro", "ME", "MNE", "382", "Podgorica", "EUR", "Euro", "€", ".me", "Europe"],
    MS: ["Montserrat", "MS", "MSR", "+1-664", "Plymouth", "XCD", "Eastern Caribbean dollar", "$", ".ms", "Americas"],
    MA: ["Morocco", "MA", "MAR", "212", "Rabat", "MAD", "Moroccan dirham", "DH", ".ma", "Africa"],
    MZ: ["Mozambique", "MZ", "MOZ", "258", "Maputo", "MZN", "Mozambican metical", "MT", ".mz", "Africa"],
    MM: ["Myanmar", "MM", "MMR", "95", "Nay Pyi Taw", "MMK", "Burmese kyat", "K", ".mm", "Asia"],
    NA: ["Namibia", "NA", "NAM", "264", "Windhoek", "NAD", "Namibian dollar", "$", ".na", "Africa"],
    NR: ["Nauru", "NR", "NRU", "674", "Yaren", "AUD", "Australian dollar", "$", ".nr", "Oceania"],
    NP: ["Nepal", "NP", "NPL", "977", "Kathmandu", "NPR", "Nepalese rupee", "₨", ".np", "Asia"],
    NL: ["Netherlands", "NL", "NLD", "31", "Amsterdam", "EUR", "Euro", "€", ".nl", "Europe"],
    NC: ["New Caledonia", "NC", "NCL", "687", "Noumea", "XPF", "CFP franc", "₣", ".nc", "Oceania"],
    NZ: ["New Zealand", "NZ", "NZL", "64", "Wellington", "NZD", "New Zealand dollar", "$", ".nz", "Oceania"],
    NI: ["Nicaragua", "NI", "NIC", "505", "Managua", "NIO", "Nicaraguan córdoba", "C$", ".ni", "Americas"],
    NE: ["Niger", "NE", "NER", "227", "Niamey", "XOF", "West African CFA franc", "CFA", ".ne", "Africa"],
    NG: ["Nigeria", "NG", "NGA", "234", "Abuja", "NGN", "Nigerian naira", "₦", ".ng", "Africa"],
    NU: ["Niue", "NU", "NIU", "683", "Alofi", "NZD", "New Zealand dollar", "$", ".nu", "Oceania"],
    NF: ["Norfolk Island", "NF", "NFK", "672", "Kingston", "AUD", "Australian dollar", "$", ".nf", "Oceania"],
    KP: ["North Korea", "KP", "PRK", "850", "Pyongyang", "KPW", "North Korean Won", "₩", ".kp", "Asia"],
    MP: ["Northern Mariana Islands", "MP", "MNP", "+1-670", "Saipan", "USD", "United States dollar", "$", ".mp", "Oceania"],
    NO: ["Norway", "NO", "NOR", "47", "Oslo", "NOK", "Norwegian krone", "kr", ".no", "Europe"],
    OM: ["Oman", "OM", "OMN", "968", "Muscat", "OMR", "Omani rial", ".ع.ر", ".om", "Asia"],
    PK: ["Pakistan", "PK", "PAK", "92", "Islamabad", "PKR", "Pakistani rupee", "₨", ".pk", "Asia"],
    PW: ["Palau", "PW", "PLW", "680", "Melekeok", "USD", "United States dollar", "$", ".pw", "Oceania"],
    PS: ["Palestinian Territory Occupied", "PS", "PSE", "970", "East Jerusalem", "ILS", "Israeli new shekel", "₪", ".ps", "Asia"],
    PA: ["Panama", "PA", "PAN", "507", "Panama City", "PAB", "Panamanian balboa", "B/.", ".pa", "Americas"],
    PG: ["Papua new Guinea", "PG", "PNG", "675", "Port Moresby", "PGK", "Papua New Guinean kina", "K", ".pg", "Oceania"],
    PY: ["Paraguay", "PY", "PRY", "595", "Asuncion", "PYG", "Paraguayan guarani", "₲", ".py", "Americas"],
    PE: ["Peru", "PE", "PER", "51", "Lima", "PEN", "Peruvian sol", "S/.", ".pe", "Americas"],
    PH: ["Philippines", "PH", "PHL", "63", "Manila", "PHP", "Philippine peso", "₱", ".ph", "Asia"],
    PN: ["Pitcairn Island", "PN", "PCN", "870", "Adamstown", "NZD", "New Zealand dollar", "$", ".pn", "Oceania"],
    PL: ["Poland", "PL", "POL", "48", "Warsaw", "PLN", "Polish złoty", "zł", ".pl", "Europe"],
    PT: ["Portugal", "PT", "PRT", "351", "Lisbon", "EUR", "Euro", "€", ".pt", "Europe"],
    PR: ["Puerto Rico", "PR", "PRI", "+1-787 and 1-939", "San Juan", "USD", "United States dollar", "$", ".pr", "Americas"],
    QA: ["Qatar", "QA", "QAT", "974", "Doha", "QAR", "Qatari riyal", "ق.ر", ".qa", "Asia"],
    RE: ["Reunion", "RE", "REU", "262", "Saint-Denis", "EUR", "Euro", "€", ".re", "Africa"],
    RO: ["Romania", "RO", "ROU", "40", "Bucharest", "RON", "Romanian leu", "lei", ".ro", "Europe"],
    RU: ["Russia", "RU", "RUS", "7", "Moscow", "RUB", "Russian ruble", "₽", ".ru", "Europe"],
    RW: ["Rwanda", "RW", "RWA", "250", "Kigali", "RWF", "Rwandan franc", "FRw", ".rw", "Africa"],
    SH: ["Saint Helena", "SH", "SHN", "290", "Jamestown", "SHP", "Saint Helena pound", "£", ".sh", "Africa"],
    KN: ["Saint Kitts And Nevis", "KN", "KNA", "+1-869", "Basseterre", "XCD", "Eastern Caribbean dollar", "$", ".kn", "Americas"],
    LC: ["Saint Lucia", "LC", "LCA", "+1-758", "Castries", "XCD", "Eastern Caribbean dollar", "$", ".lc", "Americas"],
    PM: ["Saint Pierre and Miquelon", "PM", "SPM", "508", "Saint-Pierre", "EUR", "Euro", "€", ".pm", "Americas"],
    VC: ["Saint Vincent And The Grenadines", "VC", "VCT", "+1-784", "Kingstown", "XCD", "Eastern Caribbean dollar", "$", ".vc", "Americas"],
    BL: ["Saint-Barthelemy", "BL", "BLM", "590", "Gustavia", "EUR", "Euro", "€", ".bl", "Americas"],
    MF: ["Saint-Martin (French part)", "MF", "MAF", "590", "Marigot", "EUR", "Euro", "€", ".mf", "Americas"],
    WS: ["Samoa", "WS", "WSM", "685", "Apia", "WST", "Samoan tālā", "SAT", ".ws", "Oceania"],
    SM: ["San Marino", "SM", "SMR", "378", "San Marino", "EUR", "Euro", "€", ".sm", "Europe"],
    ST: ["Sao Tome and Principe", "ST", "STP", "239", "Sao Tome", "STD", "Dobra", "Db", ".st", "Africa"],
    SA: ["Saudi Arabia", "SA", "SAU", "966", "Riyadh", "SAR", "Saudi riyal", "﷼", ".sa", "Asia"],
    SN: ["Senegal", "SN", "SEN", "221", "Dakar", "XOF", "West African CFA franc", "CFA", ".sn", "Africa"],
    RS: ["Serbia", "RS", "SRB", "381", "Belgrade", "RSD", "Serbian dinar", "din", ".rs", "Europe"],
    SC: ["Seychelles", "SC", "SYC", "248", "Victoria", "SCR", "Seychellois rupee", "SRe", ".sc", "Africa"],
    SL: ["Sierra Leone", "SL", "SLE", "232", "Freetown", "SLL", "Sierra Leonean leone", "Le", ".sl", "Africa"],
    SG: ["Singapore", "SG", "SGP", "65", "Singapur", "SGD", "Singapore dollar", "$", ".sg", "Asia"],
    SX: ["Sint Maarten (Dutch part)", "SX", "SXM", "1721", "Philipsburg", "ANG", "Netherlands Antillean guilder", "ƒ", ".sx", "Americas"],
    SK: ["Slovakia", "SK", "SVK", "421", "Bratislava", "EUR", "Euro", "€", ".sk", "Europe"],
    SI: ["Slovenia", "SI", "SVN", "386", "Ljubljana", "EUR", "Euro", "€", ".si", "Europe"],
    SB: ["Solomon Islands", "SB", "SLB", "677", "Honiara", "SBD", "Solomon Islands dollar", "Si$", ".sb", "Oceania"],
    SO: ["Somalia", "SO", "SOM", "252", "Mogadishu", "SOS", "Somali shilling", "Sh.so.", ".so", "Africa"],
    ZA: ["South Africa", "ZA", "ZAF", "27", "Pretoria", "ZAR", "South African rand", "R", ".za", "Africa"],
    GS: ["South Georgia", "GS", "SGS", "500", "Grytviken", "GBP", "British pound", "£", ".gs", "Americas"],
    KR: ["South Korea", "KR", "KOR", "82", "Seoul", "KRW", "Won", "₩", ".kr", "Asia"],
    SS: ["South Sudan", "SS", "SSD", "211", "Juba", "SSP", "South Sudanese pound", "£", ".ss", "Africa"],
    ES: ["Spain", "ES", "ESP", "34", "Madrid", "EUR", "Euro", "€", ".es", "Europe"],
    LK: ["Sri Lanka", "LK", "LKA", "94", "Colombo", "LKR", "Sri Lankan rupee", "Rs", ".lk", "Asia"],
    SD: ["Sudan", "SD", "SDN", "249", "Khartoum", "SDG", "Sudanese pound", ".س.ج", ".sd", "Africa"],
    SR: ["Suriname", "SR", "SUR", "597", "Paramaribo", "SRD", "Surinamese dollar", "$", ".sr", "Americas"],
    SJ: ["Svalbard And Jan Mayen Islands", "SJ", "SJM", "47", "Longyearbyen", "NOK", "Norwegian Krone", "kr", ".sj", "Europe"],
    SZ: ["Swaziland", "SZ", "SWZ", "268", "Mbabane", "SZL", "Lilangeni", "E", ".sz", "Africa"],
    SE: ["Sweden", "SE", "SWE", "46", "Stockholm", "SEK", "Swedish krona", "kr", ".se", "Europe"],
    CH: ["Switzerland", "CH", "CHE", "41", "Bern", "CHF", "Swiss franc", "CHf", ".ch", "Europe"],
    SY: ["Syria", "SY", "SYR", "963", "Damascus", "SYP", "Syrian pound", "LS", ".sy", "Asia"],
    TW: ["Taiwan", "TW", "TWN", "886", "Taipei", "TWD", "New Taiwan dollar", "$", ".tw", "Asia"],
    TJ: ["Tajikistan", "TJ", "TJK", "992", "Dushanbe", "TJS", "Tajikistani somoni", "SM", ".tj", "Asia"],
    TZ: ["Tanzania", "TZ", "TZA", "255", "Dodoma", "TZS", "Tanzanian shilling", "TSh", ".tz", "Africa"],
    TH: ["Thailand", "TH", "THA", "66", "Bangkok", "THB", "Thai baht", "฿", ".th", "Asia"],
    BS: ["The Bahamas", "BS", "BHS", "+1-242", "Nassau", "BSD", "Bahamian dollar", "B$", ".bs", "Americas"],
    TG: ["Togo", "TG", "TGO", "228", "Lome", "XOF", "West African CFA franc", "CFA", ".tg", "Africa"],
    TK: ["Tokelau", "TK", "TKL", "690", "", "NZD", "New Zealand dollar", "$", ".tk", "Oceania"],
    TO: ["Tonga", "TO", "TON", "676", "Nuku'alofa", "TOP", "Tongan paʻanga", "$", ".to", "Oceania"],
    TT: ["Trinidad And Tobago", "TT", "TTO", "+1-868", "Port of Spain", "TTD", "Trinidad and Tobago dollar", "$", ".tt", "Americas"],
    TN: ["Tunisia", "TN", "TUN", "216", "Tunis", "TND", "Tunisian dinar", "ت.د", ".tn", "Africa"],
    TR: ["Turkey", "TR", "TUR", "90", "Ankara", "TRY", "Turkish lira", "₺", ".tr", "Asia"],
    TM: ["Turkmenistan", "TM", "TKM", "993", "Ashgabat", "TMT", "Turkmenistan manat", "T", ".tm", "Asia"],
    TC: ["Turks And Caicos Islands", "TC", "TCA", "+1-649", "Cockburn Town", "USD", "United States dollar", "$", ".tc", "Americas"],
    TV: ["Tuvalu", "TV", "TUV", "688", "Funafuti", "AUD", "Australian dollar", "$", ".tv", "Oceania"],
    UG: ["Uganda", "UG", "UGA", "256", "Kampala", "UGX", "Ugandan shilling", "USh", ".ug", "Africa"],
    UA: ["Ukraine", "UA", "UKR", "380", "Kiev", "UAH", "Ukrainian hryvnia", "₴", ".ua", "Europe"],
    AE: ["United Arab Emirates", "AE", "ARE", "971", "Abu Dhabi", "AED", "United Arab Emirates dirham", "إ.د", ".ae", "Asia"],
    GB: ["United Kingdom", "GB", "GBR", "44", "London", "GBP", "British pound", "£", ".uk", "Europe"],
    US: ["United States", "US", "USA", "1", "Washington", "USD", "United States dollar", "$", ".us", "Americas"],
    UM: ["United States Minor Outlying Islands", "UM", "UMI", "1", "", "USD", "United States dollar", "$", ".us", "Americas"],
    UY: ["Uruguay", "UY", "URY", "598", "Montevideo", "UYU", "Uruguayan peso", "$", ".uy", "Americas"],
    UZ: ["Uzbekistan", "UZ", "UZB", "998", "Tashkent", "UZS", "Uzbekistani soʻm", "лв", ".uz", "Asia"],
    VU: ["Vanuatu", "VU", "VUT", "678", "Port Vila", "VUV", "Vanuatu vatu", "VT", ".vu", "Oceania"],
    VA: ["Vatican City State (Holy See)", "VA", "VAT", "379", "Vatican City", "EUR", "Euro", "€", ".va", "Europe"],
    VE: ["Venezuela", "VE", "VEN", "58", "Caracas", "VEF", "Bolívar", "Bs", ".ve", "Americas"],
    VN: ["Vietnam", "VN", "VNM", "84", "Hanoi", "VND", "Vietnamese đồng", "₫", ".vn", "Asia"],
    VG: ["Virgin Islands (British)", "VG", "VGB", "+1-284", "Road Town", "USD", "United States dollar", "$", ".vg", "Americas"],
    VI: ["Virgin Islands (US)", "VI", "VIR", "+1-340", "Charlotte Amalie", "USD", "United States dollar", "$", ".vi", "Americas"],
    WF: ["Wallis And Futuna Islands", "WF", "WLF", "681", "Mata Utu", "XPF", "CFP franc", "₣", ".wf", "Oceania"],
    EH: ["Western Sahara", "EH", "ESH", "212", "El-Aaiun", "MAD", "Moroccan Dirham", "MAD", ".eh", "Africa"],
    YE: ["Yemen", "YE", "YEM", "967", "Sanaa", "YER", "Yemeni rial", "﷼", ".ye", "Asia"],
    ZM: ["Zambia", "ZM", "ZMB", "260", "Lusaka", "ZMW", "Zambian kwacha", "ZK", ".zm", "Africa"],
    ZW: ["Zimbabwe", "ZW", "ZWE", "263", "Harare", "ZWL", "Zimbabwe Dollar", "$", ".zw", "Africa"]
  };
  return c_243;
}
function createCountriesDataByTimeZones() {
  const c = get_countries_243();
  const countriesCodeByTimeZones = {
    "africa/harare": c["ZW"],
    "africa/lusaka": c["ZM"],
    "africa/johannesburg": c["ZA"],
    "indian/mayotte": c["YT"],
    "asia/aden": c["YE"],
    "pacific/apia": c["WS"],
    "pacific/wallis": c["WF"],
    "pacific/efate": c["VU"],
    "asia/ho_chi_minh": c["VN"],
    "asia/saigon": c["VN"],
    "america/st_thomas": c["VI"],
    "america/virgin": c["VI"],
    "america/tortola": c["VG"],
    "america/caracas": c["VE"],
    "america/st_vincent": c["VC"],
    "europe/vatican": c["VA"],
    "asia/samarkand": c["UZ"],
    "asia/tashkent": c["UZ"],
    "america/montevideo": c["UY"],
    "america/adak": c["US"],
    "america/anchorage": c["US"],
    "america/atka": c["US"],
    "america/boise": c["US"],
    "america/chicago": c["US"],
    "america/denver": c["US"],
    "america/detroit": c["US"],
    "america/fort_wayne": c["US"],
    "america/indiana/indianapolis": c["US"],
    "america/indiana/knox": c["US"],
    "america/indiana/marengo": c["US"],
    "america/indiana/petersburg": c["US"],
    "america/indiana/tell_city": c["US"],
    "america/indiana/vevay": c["US"],
    "america/indiana/vincennes": c["US"],
    "america/indiana/winamac": c["US"],
    "america/indianapolis": c["US"],
    "america/juneau": c["US"],
    "america/kentucky/louisville": c["US"],
    "america/kentucky/monticello": c["US"],
    "america/knox_in": c["US"],
    "america/los_angeles": c["US"],
    "america/louisville": c["US"],
    "america/menominee": c["US"],
    "america/metlakatla": c["US"],
    "america/new_york": c["US"],
    "america/nome": c["US"],
    "america/north_dakota/beulah": c["US"],
    "america/north_dakota/center": c["US"],
    "america/north_dakota/new_salem": c["US"],
    "america/phoenix": c["US"],
    "america/shiprock": c["US"],
    "america/sitka": c["US"],
    "america/yakutat": c["US"],
    navajo: c["US"],
    "pacific/honolulu": c["US"],
    "us/alaska": c["US"],
    "us/aleutian": c["US"],
    "us/arizona": c["US"],
    "us/central": c["US"],
    "us/east-indiana": c["US"],
    "us/eastern": c["US"],
    "us/hawaii": c["US"],
    "us/indiana-starke": c["US"],
    "us/michigan": c["US"],
    "us/mountain": c["US"],
    "us/pacific": c["US"],
    "pacific/johnston": c["UM"],
    "pacific/midway": c["UM"],
    "pacific/wake": c["UM"],
    "africa/kampala": c["UG"],
    "europe/kiev": c["UA"],
    "europe/kyiv": c["UA"],
    "europe/uzhgorod": c["UA"],
    "europe/zaporozhye": c["UA"],
    "africa/dar_es_salaam": c["TZ"],
    "asia/taipei": c["TW"],
    roc: c["TW"],
    "pacific/funafuti": c["TV"],
    "america/port_of_spain": c["TT"],
    "asia/istanbul": c["TR"],
    "europe/istanbul": c["TR"],
    turkey: c["TR"],
    "pacific/tongatapu": c["TO"],
    "africa/tunis": c["TN"],
    "asia/ashgabat": c["TM"],
    "asia/ashkhabad": c["TM"],
    "asia/dili": c["TL"],
    "pacific/fakaofo": c["TK"],
    "asia/dushanbe": c["TJ"],
    "asia/bangkok": c["TH"],
    "africa/lome": c["TG"],
    "indian/kerguelen": c["TF"],
    "africa/ndjamena": c["TD"],
    "america/grand_turk": c["TC"],
    "africa/mbabane": c["SZ"],
    "asia/damascus": c["SY"],
    "america/lower_princes": c["SX"],
    "america/el_salvador": c["SV"],
    "africa/sao_tome": c["ST"],
    "africa/juba": c["SS"],
    "america/paramaribo": c["SR"],
    "africa/mogadishu": c["SO"],
    "africa/dakar": c["SN"],
    "europe/san_marino": c["SM"],
    "africa/freetown": c["SL"],
    "europe/bratislava": c["SK"],
    "arctic/longyearbyen": c["SJ"],
    "atlantic/jan_mayen": c["SJ"],
    "europe/ljubljana": c["SI"],
    "atlantic/st_helena": c["SH"],
    "asia/singapore": c["SG"],
    singapore: c["SG"],
    "europe/stockholm": c["SE"],
    "africa/khartoum": c["SD"],
    "indian/mahe": c["SC"],
    "pacific/guadalcanal": c["SB"],
    "asia/riyadh": c["SA"],
    "africa/kigali": c["RW"],
    "asia/anadyr": c["RU"],
    "asia/barnaul": c["RU"],
    "asia/chita": c["RU"],
    "asia/irkutsk": c["RU"],
    "asia/kamchatka": c["RU"],
    "asia/khandyga": c["RU"],
    "asia/krasnoyarsk": c["RU"],
    "asia/magadan": c["RU"],
    "asia/novokuznetsk": c["RU"],
    "asia/novosibirsk": c["RU"],
    "asia/omsk": c["RU"],
    "asia/sakhalin": c["RU"],
    "asia/srednekolymsk": c["RU"],
    "asia/tomsk": c["RU"],
    "asia/ust-nera": c["RU"],
    "asia/vladivostok": c["RU"],
    "asia/yakutsk": c["RU"],
    "asia/yekaterinburg": c["RU"],
    "europe/astrakhan": c["RU"],
    "europe/kaliningrad": c["RU"],
    "europe/kirov": c["RU"],
    "europe/moscow": c["RU"],
    "europe/samara": c["RU"],
    "europe/saratov": c["RU"],
    "europe/simferopol": c["RU"],
    "europe/ulyanovsk": c["RU"],
    "europe/volgograd": c["RU"],
    "w-su": c["RU"],
    "europe/belgrade": c["RS"],
    "europe/bucharest": c["RO"],
    "indian/reunion": c["RE"],
    "asia/qatar": c["QA"],
    "america/asuncion": c["PY"],
    "pacific/palau": c["PW"],
    "atlantic/azores": c["PT"],
    "atlantic/madeira": c["PT"],
    "europe/lisbon": c["PT"],
    portugal: c["PT"],
    "asia/gaza": c["PS"],
    "asia/hebron": c["PS"],
    "america/puerto_rico": c["PR"],
    "pacific/pitcairn": c["PN"],
    "america/miquelon": c["PM"],
    "europe/warsaw": c["PL"],
    poland: c["PL"],
    "asia/karachi": c["PK"],
    "asia/manila": c["PH"],
    "pacific/bougainville": c["PG"],
    "pacific/port_moresby": c["PG"],
    "pacific/gambier": c["PF"],
    "pacific/marquesas": c["PF"],
    "pacific/tahiti": c["PF"],
    "america/lima": c["PE"],
    "america/panama": c["PA"],
    "asia/muscat": c["OM"],
    nz: c["NZ"],
    "nz-chat": c["NZ"],
    "pacific/auckland": c["NZ"],
    "pacific/chatham": c["NZ"],
    "pacific/niue": c["NU"],
    "pacific/nauru": c["NR"],
    "asia/kathmandu": c["NP"],
    "asia/katmandu": c["NP"],
    "europe/oslo": c["NO"],
    "europe/amsterdam": c["NL"],
    "america/managua": c["NI"],
    "africa/lagos": c["NG"],
    "pacific/norfolk": c["NF"],
    "africa/niamey": c["NE"],
    "pacific/noumea": c["NC"],
    "africa/windhoek": c["NA"],
    "africa/maputo": c["MZ"],
    "asia/kuala_lumpur": c["MY"],
    "asia/kuching": c["MY"],
    "america/bahia_banderas": c["MX"],
    "america/cancun": c["MX"],
    "america/chihuahua": c["MX"],
    "america/ciudad_juarez": c["MX"],
    "america/ensenada": c["MX"],
    "america/hermosillo": c["MX"],
    "america/matamoros": c["MX"],
    "america/mazatlan": c["MX"],
    "america/merida": c["MX"],
    "america/mexico_city": c["MX"],
    "america/monterrey": c["MX"],
    "america/ojinaga": c["MX"],
    "america/santa_isabel": c["MX"],
    "america/tijuana": c["MX"],
    "mexico/bajanorte": c["MX"],
    "mexico/bajasur": c["MX"],
    "mexico/general": c["MX"],
    "africa/blantyre": c["MW"],
    "indian/maldives": c["MV"],
    "indian/mauritius": c["MU"],
    "europe/malta": c["MT"],
    "america/montserrat": c["MS"],
    "africa/nouakchott": c["MR"],
    "america/martinique": c["MQ"],
    "pacific/saipan": c["MP"],
    "asia/macao": c["MO"],
    "asia/macau": c["MO"],
    "asia/choibalsan": c["MN"],
    "asia/hovd": c["MN"],
    "asia/ulaanbaatar": c["MN"],
    "asia/ulan_bator": c["MN"],
    "asia/rangoon": c["MM"],
    "asia/yangon": c["MM"],
    "africa/bamako": c["ML"],
    "africa/timbuktu": c["ML"],
    "europe/skopje": c["MK"],
    kwajalein: c["MH"],
    "pacific/kwajalein": c["MH"],
    "pacific/majuro": c["MH"],
    "indian/antananarivo": c["MG"],
    "america/marigot": c["MF"],
    "europe/podgorica": c["ME"],
    "europe/chisinau": c["MD"],
    "europe/tiraspol": c["MD"],
    "europe/monaco": c["MC"],
    "africa/casablanca": c["MA"],
    "africa/tripoli": c["LY"],
    libya: c["LY"],
    "europe/riga": c["LV"],
    "europe/luxembourg": c["LU"],
    "europe/vilnius": c["LT"],
    "africa/maseru": c["LS"],
    "africa/monrovia": c["LR"],
    "asia/colombo": c["LK"],
    "europe/vaduz": c["LI"],
    "america/st_lucia": c["LC"],
    "asia/beirut": c["LB"],
    "asia/vientiane": c["LA"],
    "asia/almaty": c["KZ"],
    "asia/aqtau": c["KZ"],
    "asia/aqtobe": c["KZ"],
    "asia/atyrau": c["KZ"],
    "asia/oral": c["KZ"],
    "asia/qostanay": c["KZ"],
    "asia/qyzylorda": c["KZ"],
    "america/cayman": c["KY"],
    "asia/kuwait": c["KW"],
    "asia/seoul": c["KR"],
    rok: c["KR"],
    "asia/pyongyang": c["KP"],
    "america/st_kitts": c["KN"],
    "indian/comoro": c["KM"],
    "pacific/enderbury": c["KI"],
    "pacific/kanton": c["KI"],
    "pacific/kiritimati": c["KI"],
    "pacific/tarawa": c["KI"],
    "asia/phnom_penh": c["KH"],
    "asia/bishkek": c["KG"],
    "africa/nairobi": c["KE"],
    "asia/tokyo": c["JP"],
    japan: c["JP"],
    "asia/amman": c["JO"],
    "america/jamaica": c["JM"],
    jamaica: c["JM"],
    "europe/jersey": c["JE"],
    "europe/rome": c["IT"],
    "atlantic/reykjavik": c["IS"],
    iceland: c["IS"],
    "asia/tehran": c["IR"],
    iran: c["IR"],
    "asia/baghdad": c["IQ"],
    "indian/chagos": c["IO"],
    "asia/calcutta": c["IN"],
    "asia/kolkata": c["IN"],
    "europe/isle_of_man": c["IM"],
    "asia/jerusalem": c["IL"],
    "asia/tel_aviv": c["IL"],
    israel: c["IL"],
    eire: c["IE"],
    "europe/dublin": c["IE"],
    "asia/jakarta": c["ID"],
    "asia/jayapura": c["ID"],
    "asia/makassar": c["ID"],
    "asia/pontianak": c["ID"],
    "asia/ujung_pandang": c["ID"],
    "europe/budapest": c["HU"],
    "america/port-au-prince": c["HT"],
    "europe/zagreb": c["HR"],
    "america/tegucigalpa": c["HN"],
    "asia/hong_kong": c["HK"],
    hongkong: c["HK"],
    "america/guyana": c["GY"],
    "africa/bissau": c["GW"],
    "pacific/guam": c["GU"],
    "america/guatemala": c["GT"],
    "atlantic/south_georgia": c["GS"],
    "europe/athens": c["GR"],
    "africa/malabo": c["GQ"],
    "america/guadeloupe": c["GP"],
    "africa/conakry": c["GN"],
    "africa/banjul": c["GM"],
    "america/danmarkshavn": c["GL"],
    "america/godthab": c["GL"],
    "america/nuuk": c["GL"],
    "america/scoresbysund": c["GL"],
    "america/thule": c["GL"],
    "europe/gibraltar": c["GI"],
    "africa/accra": c["GH"],
    "europe/guernsey": c["GG"],
    "america/cayenne": c["GF"],
    "asia/tbilisi": c["GE"],
    "america/grenada": c["GD"],
    "europe/belfast": c["GB"],
    "europe/london": c["GB"],
    gb: c["GB"],
    "gb-eire": c["GB"],
    "africa/libreville": c["GA"],
    "europe/paris": c["FR"],
    "atlantic/faeroe": c["FO"],
    "atlantic/faroe": c["FO"],
    "pacific/chuuk": c["FM"],
    "pacific/kosrae": c["FM"],
    "pacific/pohnpei": c["FM"],
    "pacific/ponape": c["FM"],
    "pacific/truk": c["FM"],
    "pacific/yap": c["FM"],
    "atlantic/stanley": c["FK"],
    "pacific/fiji": c["FJ"],
    "europe/helsinki": c["FI"],
    "africa/addis_ababa": c["ET"],
    "africa/ceuta": c["ES"],
    "atlantic/canary": c["ES"],
    "europe/madrid": c["ES"],
    "africa/asmara": c["ER"],
    "africa/asmera": c["ER"],
    "africa/el_aaiun": c["EH"],
    "africa/cairo": c["EG"],
    egypt: c["EG"],
    "europe/tallinn": c["EE"],
    "america/guayaquil": c["EC"],
    "pacific/galapagos": c["EC"],
    "africa/algiers": c["DZ"],
    "america/santo_domingo": c["DO"],
    "america/dominica": c["DM"],
    "europe/copenhagen": c["DK"],
    "africa/djibouti": c["DJ"],
    "europe/berlin": c["DE"],
    "europe/busingen": c["DE"],
    "europe/prague": c["CZ"],
    "asia/famagusta": c["CY"],
    "asia/nicosia": c["CY"],
    "europe/nicosia": c["CY"],
    "indian/christmas": c["CX"],
    "america/curacao": c["CW"],
    "atlantic/cape_verde": c["CV"],
    "america/havana": c["CU"],
    cuba: c["CU"],
    "america/costa_rica": c["CR"],
    "america/bogota": c["CO"],
    "asia/chongqing": c["CN"],
    "asia/chungking": c["CN"],
    "asia/harbin": c["CN"],
    "asia/kashgar": c["CN"],
    "asia/shanghai": c["CN"],
    "asia/urumqi": c["CN"],
    prc: c["CN"],
    "africa/douala": c["CM"],
    "america/punta_arenas": c["CL"],
    "america/santiago": c["CL"],
    "chile/continental": c["CL"],
    "chile/easterisland": c["CL"],
    "pacific/easter": c["CL"],
    "pacific/rarotonga": c["CK"],
    "africa/abidjan": c["CI"],
    "europe/zurich": c["CH"],
    "africa/brazzaville": c["CG"],
    "africa/bangui": c["CF"],
    "africa/kinshasa": c["CD"],
    "africa/lubumbashi": c["CD"],
    "indian/cocos": c["CC"],
    "america/atikokan": c["CA"],
    "america/blanc-sablon": c["CA"],
    "america/cambridge_bay": c["CA"],
    "america/coral_harbour": c["CA"],
    "america/creston": c["CA"],
    "america/dawson": c["CA"],
    "america/dawson_creek": c["CA"],
    "america/edmonton": c["CA"],
    "america/fort_nelson": c["CA"],
    "america/glace_bay": c["CA"],
    "america/goose_bay": c["CA"],
    "america/halifax": c["CA"],
    "america/inuvik": c["CA"],
    "america/iqaluit": c["CA"],
    "america/moncton": c["CA"],
    "america/montreal": c["CA"],
    "america/nipigon": c["CA"],
    "america/pangnirtung": c["CA"],
    "america/rainy_river": c["CA"],
    "america/rankin_inlet": c["CA"],
    "america/regina": c["CA"],
    "america/resolute": c["CA"],
    "america/st_johns": c["CA"],
    "america/swift_current": c["CA"],
    "america/thunder_bay": c["CA"],
    "america/toronto": c["CA"],
    "america/vancouver": c["CA"],
    "america/whitehorse": c["CA"],
    "america/winnipeg": c["CA"],
    "america/yellowknife": c["CA"],
    "canada/atlantic": c["CA"],
    "canada/central": c["CA"],
    "canada/eastern": c["CA"],
    "canada/mountain": c["CA"],
    "canada/newfoundland": c["CA"],
    "canada/pacific": c["CA"],
    "canada/saskatchewan": c["CA"],
    "canada/yukon": c["CA"],
    "america/belize": c["BZ"],
    "europe/minsk": c["BY"],
    "africa/gaborone": c["BW"],
    "asia/thimbu": c["BT"],
    "asia/thimphu": c["BT"],
    "america/nassau": c["BS"],
    "america/araguaina": c["BR"],
    "america/bahia": c["BR"],
    "america/belem": c["BR"],
    "america/boa_vista": c["BR"],
    "america/campo_grande": c["BR"],
    "america/cuiaba": c["BR"],
    "america/eirunepe": c["BR"],
    "america/fortaleza": c["BR"],
    "america/maceio": c["BR"],
    "america/manaus": c["BR"],
    "america/noronha": c["BR"],
    "america/porto_acre": c["BR"],
    "america/porto_velho": c["BR"],
    "america/recife": c["BR"],
    "america/rio_branco": c["BR"],
    "america/santarem": c["BR"],
    "america/sao_paulo": c["BR"],
    "brazil/acre": c["BR"],
    "brazil/denoronha": c["BR"],
    "brazil/east": c["BR"],
    "brazil/west": c["BR"],
    "america/kralendijk": c["BQ"],
    "america/la_paz": c["BO"],
    "asia/brunei": c["BN"],
    "atlantic/bermuda": c["BM"],
    "america/st_barthelemy": c["BL"],
    "africa/porto-novo": c["BJ"],
    "africa/bujumbura": c["BI"],
    "asia/bahrain": c["BH"],
    "europe/sofia": c["BG"],
    "africa/ouagadougou": c["BF"],
    "europe/brussels": c["BE"],
    "asia/dacca": c["BD"],
    "asia/dhaka": c["BD"],
    "america/barbados": c["BB"],
    "europe/sarajevo": c["BA"],
    "asia/baku": c["AZ"],
    "europe/mariehamn": c["AX"],
    "america/aruba": c["AW"],
    "antarctica/macquarie": c["AU"],
    "australia/act": c["AU"],
    "australia/adelaide": c["AU"],
    "australia/brisbane": c["AU"],
    "australia/broken_hill": c["AU"],
    "australia/canberra": c["AU"],
    "australia/currie": c["AU"],
    "australia/darwin": c["AU"],
    "australia/eucla": c["AU"],
    "australia/hobart": c["AU"],
    "australia/lhi": c["AU"],
    "australia/lindeman": c["AU"],
    "australia/lord_howe": c["AU"],
    "australia/melbourne": c["AU"],
    "australia/north": c["AU"],
    "australia/nsw": c["AU"],
    "australia/perth": c["AU"],
    "australia/queensland": c["AU"],
    "australia/south": c["AU"],
    "australia/sydney": c["AU"],
    "australia/tasmania": c["AU"],
    "australia/victoria": c["AU"],
    "australia/west": c["AU"],
    "australia/yancowinna": c["AU"],
    "europe/vienna": c["AT"],
    "pacific/pago_pago": c["AS"],
    "pacific/samoa": c["AS"],
    "us/samoa": c["AS"],
    "america/argentina/buenos_aires": c["AR"],
    "america/argentina/catamarca": c["AR"],
    "america/argentina/comodrivadavia": c["AR"],
    "america/argentina/cordoba": c["AR"],
    "america/argentina/jujuy": c["AR"],
    "america/argentina/la_rioja": c["AR"],
    "america/argentina/mendoza": c["AR"],
    "america/argentina/rio_gallegos": c["AR"],
    "america/argentina/salta": c["AR"],
    "america/argentina/san_juan": c["AR"],
    "america/argentina/san_luis": c["AR"],
    "america/argentina/tucuman": c["AR"],
    "america/argentina/ushuaia": c["AR"],
    "america/buenos_aires": c["AR"],
    "america/catamarca": c["AR"],
    "america/cordoba": c["AR"],
    "america/jujuy": c["AR"],
    "america/mendoza": c["AR"],
    "america/rosario": c["AR"],
    "antarctica/casey": c["AQ"],
    "antarctica/davis": c["AQ"],
    "antarctica/dumontdurville": c["AQ"],
    "antarctica/mawson": c["AQ"],
    "antarctica/mcmurdo": c["AQ"],
    "antarctica/palmer": c["AQ"],
    "antarctica/rothera": c["AQ"],
    "antarctica/south_pole": c["AQ"],
    "antarctica/syowa": c["AQ"],
    "antarctica/troll": c["AQ"],
    "antarctica/vostok": c["AQ"],
    "africa/luanda": c["AO"],
    "asia/yerevan": c["AM"],
    "europe/tirane": c["AL"],
    "america/anguilla": c["AI"],
    "america/antigua": c["AG"],
    "asia/kabul": c["AF"],
    "asia/dubai": c["AE"],
    "europe/andorra": c["AD"]
  };
  return () => countriesCodeByTimeZones;
}
const getCountriesFinalList = createCountriesDataByTimeZones();

function getUserCountryFlagUrl(country_code) {
  if (!country_code) {
    throw new Error("country_code argument is missing, e.g. getUserCountryFlagUrl('US')");
  }
  return `https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/${country_code.toLowerCase()}.svg`;
}

const transformCountryDetail = countryDetail => {
  let [country_name, country_code_two, country_code_three, phone_code, country_capital, country_currency, currency_name, currency_symbol, tld, region] = countryDetail;
  if (phone_code) {
    phone_code = `+${phone_code}`;
  }
  const finalResultCountryDetails = {
    country_name,
    country_code_two,
    country_code_three,
    phone_code,
    country_capital,
    country_currency,
    currency_name,
    currency_symbol,
    tld,
    region
  };
  return finalResultCountryDetails;
};

const createSystemDetail = localData => {
  const date = new Date();
  const systemDetail = {
    locale: localData.locale,
    timeZone: localData.timeZone,
    browser_date: {
      date_string: date.toDateString(),
      date_numeric: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
      system_time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      GMT: date.toString().split(" ").find(el => el.toLowerCase().includes("gmt")),
      timezoneOffset: date.getTimezoneOffset()
    }
  };
  return systemDetail;
};
function getUserCountryDetails() {
  const localData = Intl.DateTimeFormat().resolvedOptions();
  const browserDetectedRegion = localData.timeZone.toLowerCase();
  const systemDetail = createSystemDetail(localData);
  const countriesFinalList = getCountriesFinalList();
  let countryDetail = countriesFinalList[browserDetectedRegion];
  if (countryDetail) {
    countryDetail = transformCountryDetail(countryDetail);
  } else {
    countryDetail = {
      country_name: "N/A"
    };
  }

  ////////////////
  if (countryDetail.country_code_two) {
    countryDetail["country_flag_url"] = getUserCountryFlagUrl(countryDetail.country_code_two);
  }
  return _extends({}, countryDetail, systemDetail);
}

const getParenthsisDataFromUserAgent = userAgent => {
  const regex = /\(.*?\)/g;
  const parenthsisData = userAgent.match(regex);
  return parenthsisData && parenthsisData[0];
};
const replaceParenthsis = parenthsisData => {
  return parenthsisData.replace("(", "").replace(")", "");
};
const getDevice = userAgent => {
  const isMobel = userAgent.toLowerCase().includes("mobile");
  return isMobel ? "Mobile" : "Laptop OR Desktop";
};
function createSystemDataFromUserAgent(userAgent) {
  var _finalStringDataArr$;
  const finalSystemDataObj = {
    device: "N/A",
    operating_system: "N/A",
    platform: "N/A",
    device_model_name: "N/A"
  };
  const parenthsisData = getParenthsisDataFromUserAgent(userAgent);
  if (!parenthsisData) {
    return finalSystemDataObj;
  }
  const finalStringData = replaceParenthsis(parenthsisData);
  const finalStringDataArr = finalStringData.split(";");
  finalSystemDataObj["device"] = getDevice(userAgent);
  finalSystemDataObj["operating_system"] = finalStringDataArr[0];
  if (((_finalStringDataArr$ = finalStringDataArr[1]) == null ? void 0 : _finalStringDataArr$.length) >= 3) {
    finalSystemDataObj["platform"] = finalStringDataArr[1];
  }
  let device_model_name = "";
  if (finalStringDataArr[2]) {
    device_model_name = finalStringDataArr[2].trim();
  }
  if (finalStringDataArr[3]) {
    device_model_name = device_model_name + "-" + finalStringDataArr[3].trim();
  }
  if (device_model_name) {
    finalSystemDataObj["device_model_name"] = device_model_name;
  }
  return finalSystemDataObj;
}

function getUserSystemDetails() {
  const system = window.clientInformation;
  const localData = Intl.DateTimeFormat().resolvedOptions();
  const userSystemDetails = {
    network: system.connection.effectiveType,
    RAM: `${system.deviceMemory} GB`,
    logical_processors: system.hardwareConcurrency,
    system_selected_language: system.language,
    system_languages: system.languages,
    system_date: Intl.DateTimeFormat().format(),
    system_time_zone: localData.timeZone,
    system_date_format: {
      calendar: localData.calendar,
      day: localData.day,
      month: localData.month,
      year: localData.year
    },
    platform: system.platform
  };
  const deviceDetailsFromUserAgent = createSystemDataFromUserAgent(system.userAgent);
  return _extends({}, userSystemDetails, deviceDetailsFromUserAgent);
}

function getUserDetailsFromBrowser() {
  const errorObject = {
    error: "cannot find any country data"
  };
  const country = getUserCountryDetails();
  const system = getUserSystemDetails();
  return {
    country,
    system
  } || errorObject;
}

/*
 *   This file is the entire script combined in working order.
 *   Copyright 2021 © Joey Malvinni
 *   License: MIT
 */
// [---------------------------------------------------------------------------]
// File: ip_validator.js
/*
 *   This module validates the two types of IP addresses.
 *   Copyright 2021 © Joey Malvinni
 *   License: MIT
 */
// The function that checks if the given IPv4 address is valid.
function is_ipv4(ip) {
  return regex_v4.test(ip);
}
// Checks if the IPv6 address is valid.
function is_ipv6(ip) {
  return regex_v6.test(ip);
}
// IPv4 regex used to determine whether an IP is IPv4 or not.
let regex_v4 = /((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])/;
// The IPv6 regex used when determining an IPv6 address.
let regex_v6 = /((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))/;
// Exporting the two regexes in an array to be used in the main detector.
let ip_regex_array = [regex_v6, regex_v4];
// [---------------------------------------------------------------------------]
// File: peer_conn.js
/*
 *   This module provides the main WebRTC functions that return IP addresses from the STUN request.
 *   Copyright 2021 © Joey Malvinni
 *   License: MIT
 */
function peer(callback) {
  // Creating the peer connection.
  let WebRTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
  // Initializing the connection.
  let createdConnection;
  // Main start function.
  function start() {
    // Creating the actual connection.
    createConnection();
    // Log the STUN request.
    createStunRequest();
  }
  // Stop function to reset the connection.
  function stop() {
    // Checking if the connection has been created or not.
    if (createdConnection) {
      // Attempt to close it, if RTCPeerConnection.close() is not supported, remove the event listeners.
      try {
        createdConnection.close();
      } finally {
        createdConnection.onicecandidate = () => {};
        createdConnection = null;
      }
    }
  }
  // Function that makes the connection request to Google's STUN server
  function createConnection() {
    let iceServers = [{
      urls: "stun:stun.l.google.com:19302"
    }];
    // Creating the connection with the STUN server.
    createdConnection = new WebRTCPeerConnection({
      iceServers
    });
    // Handling the ICE candidate event.
    createdConnection.onicecandidate = data => handleCandidates(data);
    // Creation of the fake data channel.
    createdConnection.createDataChannel("fake_data_channel");
  }
  // Function that creates the STUN request offer needed to get the IPs.
  function createStunRequest() {
    // Create the offer that exposes the IP addresses.
    return createdConnection.createOffer().then(sdp => createdConnection.setLocalDescription(sdp));
  }
  // Handling the onIceCandidate event.
  function handleCandidates(ice) {
    // Checking if the ICE candidate lines given are valid.
    if (ice && ice.candidate && ice.candidate.candidate) {
      // Returning the IPs to the main function.
      callback(ice && ice.candidate && ice.candidate.candidate);
    }
  }
  // Returning the main functions needed.
  return {
    start,
    stop,
    createConnection,
    createStunRequest,
    handleCandidates
  };
}
// [---------------------------------------------------------------------------]
// File: public_ip.js
/*
 *   This module provides the worker functions that return the public IP addresses.
 *   Copyright 2021 © Joey Malvinni
 *   License: MIT
 */
function publicIPs(timer) {
  // Timing validation.
  if (timer) if (timer < 100) throw new Error("Custom timeout cannot be under 100 milliseconds.");
  // IPs is the final array of all valid IPs found.
  let IPs = [];
  // Creating the peer connection request while handling the callback event.
  let peerConn = peer(handleIceCandidates);
  function getIps() {
    // Returning a promise.
    return new Promise(function (resolve, reject) {
      // Starting the peer connection.
      peerConn.start();
      // Setting the timer.
      setTimeout(() => {
        // Checking if the IP array exists.
        if (!IPs || IPs === []) {
          // Rejecting the error
          reject("No IP addresses were found.");
        } else {
          // Return the unique IP addresses in an array.
          resolve(unique(IPs.flat(Infinity)));
        }
        // reset the peer connection.
        reset();
        // Set the Timeout to the custom timer, default to 500 milliseconds.
      }, timer || 500);
    });
  }
  function handleIceCandidates(ip) {
    let array = [];
    // Looping over the two regexs for IPv6 and IPv4
    for (let regex of ip_regex_array) {
      let arr = [];
      // Lutting all of the strings that match either IP format in an array
      let possible_ips_array = regex.exec(ip);
      if (possible_ips_array) {
        // Looping over that array
        for (let i = 0; i < possible_ips_array.length; i++) {
          // Checking if the "IP" is valid
          if (is_ipv4(possible_ips_array[i]) || is_ipv6(possible_ips_array[i])) {
            arr.push(possible_ips_array[i]);
          }
        }
        array.push(arr);
      }
    }
    // Final function that does more checks to determine the array's validity,
    // Also flattens the array to remove extraneous sub-arrays.
    push(array.flat(Infinity));
  }
  function push(ip) {
    // Checks if the IP addresses givin are already in the array.
    if (!IPs.includes(ip)) {
      IPs.push(unique(ip.flat(Infinity)));
    }
  }
  function reset() {
    // Stops the peer connection to the STUN server.
    peerConn.stop();
  }
  // Use this to only return unique IP addresses.
  function unique(a) {
    return Array.from(new Set(a));
  }
  return getIps();
}
// [---------------------------------------------------------------------------]
// File: index.js
/*
 *   This module combines all of the worker modules into the main functions that get exported.
 *   Copyright 2021 © Joey Malvinni
 *   License: MIT
 */
// Categorizes the IPs by IP, type, and IPv4.
function getIPTypes(timer) {
  // Returning the result as a promise.
  return new Promise(function (resolve, reject) {
    // Final array
    let finalIpArray = [];
    // Getting the raw IPs in an array.
    publicIPs(timer).then(ips => {
      // Looping over each IP.
      ips.forEach(ip => {
        if (ip.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/)) {
          // The IP is private.
          finalIpArray.push({
            ip: ip,
            type: "private",
            IPv4: true
          });
        } else if (ip.match(/((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))/)) {
          // The IP is an IPv6 address.
          finalIpArray.push({
            ip: ip,
            type: "IPv6",
            IPv4: false
          });
        } else {
          // Assume the IP is public.
          finalIpArray.push({
            ip: ip,
            type: "public",
            IPv4: true
          });
        }
      });
      // Resolving the promise.
      resolve(finalIpArray);
    }).catch(reject);
  });
}
// Filters out IPv4 addresses.
function getIPv4(timer) {
  return getIPTypes(timer).then(ips => {
    // Filters the IP by IPv4.
    const ip = ips.filter(ip => ip.IPv4);
    // Loops over each object and extracts the IP.
    for (let i = 0; i < ip.length; i++) {
      ip[i] = ip[i].ip;
    }
    // Returns undefined if the array is empty.
    return ip ? ip : "";
  });
}
// Filters out IPv6 addresses.
function getIPv6(timer) {
  // Getting the IPs by type.
  return getIPTypes(timer).then(ips => {
    // Filtering the IPs by IPv6.
    const ip = ips.filter(ip => ip.type === "IPv6");
    // Extracting the IPs
    for (let i = 0; i < ip.length; i++) {
      // Removing all other data from the object.
      ip[i] = ip[i].ip;
    }
    // Returning the IP or undefined.
    return ip ? ip.ip : "";
  });
}

async function getSystemIPs() {
  const IPs = [];
  const IPv4 = await getIPv4();
  const IPv6 = await getIPv6();
  // console.log("IPv4", IPv4)
  // console.log("IPv6", IPv6)

  if (IPv4) {
    IPv4.forEach(ip => {
      const IPitem = {
        ip_version: "IPv4",
        ip_address: ip
      };
      IPs.push(IPitem);
    });
  }
  if (IPv6) {
    IPv6.forEach(ip => {
      const IPitem = {
        ip_version: "IPv6",
        ip_address: ip
      };
      IPs.push(IPitem);
    });
  }
  return IPs;
}

export { getSystemIPs, getUserCountryDetails, getUserDetailsFromBrowser, getUserSystemDetails };
