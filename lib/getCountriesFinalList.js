"use strict";

exports.__esModule = true;
exports.getCountriesFinalList = exports.default = exports.c_243 = void 0;
//  const {
//     name,
//     iso2,
//     iso3,
//     phone_code,
//     currency,
//     currency_symbol,
//     tld,
//   } = country;

const c_243 = {
  AF: ["Afghanistan", "AF", "AFG", "93", "AFN", "؋", ".af"],
  AX: ["Aland Islands", "AX", "ALA", "+358-18", "EUR", "€", ".ax"],
  AL: ["Albania", "AL", "ALB", "355", "ALL", "Lek", ".al"],
  DZ: ["Algeria", "DZ", "DZA", "213", "DZD", "دج", ".dz"],
  AS: ["American Samoa", "AS", "ASM", "+1-684", "USD", "$", ".as"],
  AD: ["Andorra", "AD", "AND", "376", "EUR", "€", ".ad"],
  AO: ["Angola", "AO", "AGO", "244", "AOA", "Kz", ".ao"],
  AI: ["Anguilla", "AI", "AIA", "+1-264", "XCD", "$", ".ai"],
  AQ: ["Antarctica", "AQ", "ATA", "672", "AAD", "$", ".aq"],
  AG: ["Antigua And Barbuda", "AG", "ATG", "+1-268", "XCD", "$", ".ag"],
  AR: ["Argentina", "AR", "ARG", "54", "ARS", "$", ".ar"],
  AM: ["Armenia", "AM", "ARM", "374", "AMD", "֏", ".am"],
  AW: ["Aruba", "AW", "ABW", "297", "AWG", "ƒ", ".aw"],
  AU: ["Australia", "AU", "AUS", "61", "AUD", "$", ".au"],
  AT: ["Austria", "AT", "AUT", "43", "EUR", "€", ".at"],
  AZ: ["Azerbaijan", "AZ", "AZE", "994", "AZN", "m", ".az"],
  BH: ["Bahrain", "BH", "BHR", "973", "BHD", ".د.ب", ".bh"],
  BD: ["Bangladesh", "BD", "BGD", "880", "BDT", "৳", ".bd"],
  BB: ["Barbados", "BB", "BRB", "+1-246", "BBD", "Bds$", ".bb"],
  BY: ["Belarus", "BY", "BLR", "375", "BYN", "Br", ".by"],
  BE: ["Belgium", "BE", "BEL", "32", "EUR", "€", ".be"],
  BZ: ["Belize", "BZ", "BLZ", "501", "BZD", "$", ".bz"],
  BJ: ["Benin", "BJ", "BEN", "229", "XOF", "CFA", ".bj"],
  BM: ["Bermuda", "BM", "BMU", "+1-441", "BMD", "$", ".bm"],
  BT: ["Bhutan", "BT", "BTN", "975", "BTN", "Nu.", ".bt"],
  BO: ["Bolivia", "BO", "BOL", "591", "BOB", "Bs.", ".bo"],
  BQ: ["Bonaire, Sint Eustatius and Saba", "BQ", "BES", "599", "USD", "$", ".an"],
  BA: ["Bosnia and Herzegovina", "BA", "BIH", "387", "BAM", "KM", ".ba"],
  BW: ["Botswana", "BW", "BWA", "267", "BWP", "P", ".bw"],
  BV: ["Bouvet Island", "BV", "BVT", "0055", "NOK", "kr", ".bv"],
  BR: ["Brazil", "BR", "BRA", "55", "BRL", "R$", ".br"],
  IO: ["British Indian Ocean Territory", "IO", "IOT", "246", "USD", "$", ".io"],
  BN: ["Brunei", "BN", "BRN", "673", "BND", "B$", ".bn"],
  BG: ["Bulgaria", "BG", "BGR", "359", "BGN", "Лв.", ".bg"],
  BF: ["Burkina Faso", "BF", "BFA", "226", "XOF", "CFA", ".bf"],
  BI: ["Burundi", "BI", "BDI", "257", "BIF", "FBu", ".bi"],
  KH: ["Cambodia", "KH", "KHM", "855", "KHR", "KHR", ".kh"],
  CM: ["Cameroon", "CM", "CMR", "237", "XAF", "FCFA", ".cm"],
  CA: ["Canada", "CA", "CAN", "1", "CAD", "$", ".ca"],
  CV: ["Cape Verde", "CV", "CPV", "238", "CVE", "$", ".cv"],
  KY: ["Cayman Islands", "KY", "CYM", "+1-345", "KYD", "$", ".ky"],
  CF: ["Central African Republic", "CF", "CAF", "236", "XAF", "FCFA", ".cf"],
  TD: ["Chad", "TD", "TCD", "235", "XAF", "FCFA", ".td"],
  CL: ["Chile", "CL", "CHL", "56", "CLP", "$", ".cl"],
  CN: ["China", "CN", "CHN", "86", "CNY", "¥", ".cn"],
  CX: ["Christmas Island", "CX", "CXR", "61", "AUD", "$", ".cx"],
  CC: ["Cocos (Keeling) Islands", "CC", "CCK", "61", "AUD", "$", ".cc"],
  CO: ["Colombia", "CO", "COL", "57", "COP", "$", ".co"],
  KM: ["Comoros", "KM", "COM", "269", "KMF", "CF", ".km"],
  CG: ["Congo", "CG", "COG", "242", "XAF", "FC", ".cg"],
  CK: ["Cook Islands", "CK", "COK", "682", "NZD", "$", ".ck"],
  CR: ["Costa Rica", "CR", "CRI", "506", "CRC", "₡", ".cr"],
  CI: ["Cote D'Ivoire (Ivory Coast)", "CI", "CIV", "225", "XOF", "CFA", ".ci"],
  HR: ["Croatia", "HR", "HRV", "385", "HRK", "kn", ".hr"],
  CU: ["Cuba", "CU", "CUB", "53", "CUP", "$", ".cu"],
  CW: ["Curaçao", "CW", "CUW", "599", "ANG", "ƒ", ".cw"],
  CY: ["Cyprus", "CY", "CYP", "357", "EUR", "€", ".cy"],
  CZ: ["Czech Republic", "CZ", "CZE", "420", "CZK", "Kč", ".cz"],
  CD: ["Democratic Republic of the Congo", "CD", "COD", "243", "CDF", "FC", ".cd"],
  DK: ["Denmark", "DK", "DNK", "45", "DKK", "Kr.", ".dk"],
  DJ: ["Djibouti", "DJ", "DJI", "253", "DJF", "Fdj", ".dj"],
  DM: ["Dominica", "DM", "DMA", "+1-767", "XCD", "$", ".dm"],
  DO: ["Dominican Republic", "DO", "DOM", "+1-809 and 1-829", "DOP", "$", ".do"],
  TL: ["East Timor", "TL", "TLS", "670", "USD", "$", ".tl"],
  EC: ["Ecuador", "EC", "ECU", "593", "USD", "$", ".ec"],
  EG: ["Egypt", "EG", "EGY", "20", "EGP", "ج.م", ".eg"],
  SV: ["El Salvador", "SV", "SLV", "503", "USD", "$", ".sv"],
  GQ: ["Equatorial Guinea", "GQ", "GNQ", "240", "XAF", "FCFA", ".gq"],
  ER: ["Eritrea", "ER", "ERI", "291", "ERN", "Nfk", ".er"],
  EE: ["Estonia", "EE", "EST", "372", "EUR", "€", ".ee"],
  ET: ["Ethiopia", "ET", "ETH", "251", "ETB", "Nkf", ".et"],
  FK: ["Falkland Islands", "FK", "FLK", "500", "FKP", "£", ".fk"],
  FO: ["Faroe Islands", "FO", "FRO", "298", "DKK", "Kr.", ".fo"],
  FJ: ["Fiji Islands", "FJ", "FJI", "679", "FJD", "FJ$", ".fj"],
  FI: ["Finland", "FI", "FIN", "358", "EUR", "€", ".fi"],
  FR: ["France", "FR", "FRA", "33", "EUR", "€", ".fr"],
  GF: ["French Guiana", "GF", "GUF", "594", "EUR", "€", ".gf"],
  PF: ["French Polynesia", "PF", "PYF", "689", "XPF", "₣", ".pf"],
  TF: ["French Southern Territories", "TF", "ATF", "262", "EUR", "€", ".tf"],
  GA: ["Gabon", "GA", "GAB", "241", "XAF", "FCFA", ".ga"],
  GM: ["Gambia The", "GM", "GMB", "220", "GMD", "D", ".gm"],
  GE: ["Georgia", "GE", "GEO", "995", "GEL", "ლ", ".ge"],
  DE: ["Germany", "DE", "DEU", "49", "EUR", "€", ".de"],
  GH: ["Ghana", "GH", "GHA", "233", "GHS", "GH₵", ".gh"],
  GI: ["Gibraltar", "GI", "GIB", "350", "GIP", "£", ".gi"],
  GR: ["Greece", "GR", "GRC", "30", "EUR", "€", ".gr"],
  GL: ["Greenland", "GL", "GRL", "299", "DKK", "Kr.", ".gl"],
  GD: ["Grenada", "GD", "GRD", "+1-473", "XCD", "$", ".gd"],
  GP: ["Guadeloupe", "GP", "GLP", "590", "EUR", "€", ".gp"],
  GU: ["Guam", "GU", "GUM", "+1-671", "USD", "$", ".gu"],
  GT: ["Guatemala", "GT", "GTM", "502", "GTQ", "Q", ".gt"],
  GG: ["Guernsey and Alderney", "GG", "GGY", "+44-1481", "GBP", "£", ".gg"],
  GN: ["Guinea", "GN", "GIN", "224", "GNF", "FG", ".gn"],
  GW: ["Guinea-Bissau", "GW", "GNB", "245", "XOF", "CFA", ".gw"],
  GY: ["Guyana", "GY", "GUY", "592", "GYD", "$", ".gy"],
  HT: ["Haiti", "HT", "HTI", "509", "HTG", "G", ".ht"],
  HM: ["Heard Island and McDonald Islands", "HM", "HMD", "672", "AUD", "$", ".hm"],
  HN: ["Honduras", "HN", "HND", "504", "HNL", "L", ".hn"],
  HK: ["Hong Kong S.A.R.", "HK", "HKG", "852", "HKD", "$", ".hk"],
  HU: ["Hungary", "HU", "HUN", "36", "HUF", "Ft", ".hu"],
  IS: ["Iceland", "IS", "ISL", "354", "ISK", "kr", ".is"],
  IN: ["India", "IN", "IND", "91", "INR", "₹", ".in"],
  ID: ["Indonesia", "ID", "IDN", "62", "IDR", "Rp", ".id"],
  IR: ["Iran", "IR", "IRN", "98", "IRR", "﷼", ".ir"],
  IQ: ["Iraq", "IQ", "IRQ", "964", "IQD", "د.ع", ".iq"],
  IE: ["Ireland", "IE", "IRL", "353", "EUR", "€", ".ie"],
  IL: ["Israel", "IL", "ISR", "972", "ILS", "₪", ".il"],
  IT: ["Italy", "IT", "ITA", "39", "EUR", "€", ".it"],
  JM: ["Jamaica", "JM", "JAM", "+1-876", "JMD", "J$", ".jm"],
  JP: ["Japan", "JP", "JPN", "81", "JPY", "¥", ".jp"],
  JE: ["Jersey", "JE", "JEY", "+44-1534", "GBP", "£", ".je"],
  JO: ["Jordan", "JO", "JOR", "962", "JOD", "ا.د", ".jo"],
  KZ: ["Kazakhstan", "KZ", "KAZ", "7", "KZT", "лв", ".kz"],
  KE: ["Kenya", "KE", "KEN", "254", "KES", "KSh", ".ke"],
  KI: ["Kiribati", "KI", "KIR", "686", "AUD", "$", ".ki"],
  XK: ["Kosovo", "XK", "XKX", "383", "EUR", "€", ".xk"],
  KW: ["Kuwait", "KW", "KWT", "965", "KWD", "ك.د", ".kw"],
  KG: ["Kyrgyzstan", "KG", "KGZ", "996", "KGS", "лв", ".kg"],
  LA: ["Laos", "LA", "LAO", "856", "LAK", "₭", ".la"],
  LV: ["Latvia", "LV", "LVA", "371", "EUR", "€", ".lv"],
  LB: ["Lebanon", "LB", "LBN", "961", "LBP", "£", ".lb"],
  LS: ["Lesotho", "LS", "LSO", "266", "LSL", "L", ".ls"],
  LR: ["Liberia", "LR", "LBR", "231", "LRD", "$", ".lr"],
  LY: ["Libya", "LY", "LBY", "218", "LYD", "د.ل", ".ly"],
  LI: ["Liechtenstein", "LI", "LIE", "423", "CHF", "CHf", ".li"],
  LT: ["Lithuania", "LT", "LTU", "370", "EUR", "€", ".lt"],
  LU: ["Luxembourg", "LU", "LUX", "352", "EUR", "€", ".lu"],
  MO: ["Macau S.A.R.", "MO", "MAC", "853", "MOP", "$", ".mo"],
  MK: ["Macedonia", "MK", "MKD", "389", "MKD", "ден", ".mk"],
  MG: ["Madagascar", "MG", "MDG", "261", "MGA", "Ar", ".mg"],
  MW: ["Malawi", "MW", "MWI", "265", "MWK", "MK", ".mw"],
  MY: ["Malaysia", "MY", "MYS", "60", "MYR", "RM", ".my"],
  MV: ["Maldives", "MV", "MDV", "960", "MVR", "Rf", ".mv"],
  ML: ["Mali", "ML", "MLI", "223", "XOF", "CFA", ".ml"],
  MT: ["Malta", "MT", "MLT", "356", "EUR", "€", ".mt"],
  IM: ["Man (Isle of)", "IM", "IMN", "+44-1624", "GBP", "£", ".im"],
  MH: ["Marshall Islands", "MH", "MHL", "692", "USD", "$", ".mh"],
  MQ: ["Martinique", "MQ", "MTQ", "596", "EUR", "€", ".mq"],
  MR: ["Mauritania", "MR", "MRT", "222", "MRO", "MRU", ".mr"],
  MU: ["Mauritius", "MU", "MUS", "230", "MUR", "₨", ".mu"],
  YT: ["Mayotte", "YT", "MYT", "262", "EUR", "€", ".yt"],
  MX: ["Mexico", "MX", "MEX", "52", "MXN", "$", ".mx"],
  FM: ["Micronesia", "FM", "FSM", "691", "USD", "$", ".fm"],
  MD: ["Moldova", "MD", "MDA", "373", "MDL", "L", ".md"],
  MC: ["Monaco", "MC", "MCO", "377", "EUR", "€", ".mc"],
  MN: ["Mongolia", "MN", "MNG", "976", "MNT", "₮", ".mn"],
  ME: ["Montenegro", "ME", "MNE", "382", "EUR", "€", ".me"],
  MS: ["Montserrat", "MS", "MSR", "+1-664", "XCD", "$", ".ms"],
  MA: ["Morocco", "MA", "MAR", "212", "MAD", "DH", ".ma"],
  MZ: ["Mozambique", "MZ", "MOZ", "258", "MZN", "MT", ".mz"],
  MM: ["Myanmar", "MM", "MMR", "95", "MMK", "K", ".mm"],
  NA: ["Namibia", "NA", "NAM", "264", "NAD", "$", ".na"],
  NR: ["Nauru", "NR", "NRU", "674", "AUD", "$", ".nr"],
  NP: ["Nepal", "NP", "NPL", "977", "NPR", "₨", ".np"],
  NL: ["Netherlands", "NL", "NLD", "31", "EUR", "€", ".nl"],
  NC: ["New Caledonia", "NC", "NCL", "687", "XPF", "₣", ".nc"],
  NZ: ["New Zealand", "NZ", "NZL", "64", "NZD", "$", ".nz"],
  NI: ["Nicaragua", "NI", "NIC", "505", "NIO", "C$", ".ni"],
  NE: ["Niger", "NE", "NER", "227", "XOF", "CFA", ".ne"],
  NG: ["Nigeria", "NG", "NGA", "234", "NGN", "₦", ".ng"],
  NU: ["Niue", "NU", "NIU", "683", "NZD", "$", ".nu"],
  NF: ["Norfolk Island", "NF", "NFK", "672", "AUD", "$", ".nf"],
  KP: ["North Korea", "KP", "PRK", "850", "KPW", "₩", ".kp"],
  MP: ["Northern Mariana Islands", "MP", "MNP", "+1-670", "USD", "$", ".mp"],
  NO: ["Norway", "NO", "NOR", "47", "NOK", "kr", ".no"],
  OM: ["Oman", "OM", "OMN", "968", "OMR", ".ع.ر", ".om"],
  PK: ["Pakistan", "PK", "PAK", "92", "PKR", "₨", ".pk"],
  PW: ["Palau", "PW", "PLW", "680", "USD", "$", ".pw"],
  PS: ["Palestinian Territory Occupied", "PS", "PSE", "970", "ILS", "₪", ".ps"],
  PA: ["Panama", "PA", "PAN", "507", "PAB", "B/.", ".pa"],
  PG: ["Papua new Guinea", "PG", "PNG", "675", "PGK", "K", ".pg"],
  PY: ["Paraguay", "PY", "PRY", "595", "PYG", "₲", ".py"],
  PE: ["Peru", "PE", "PER", "51", "PEN", "S/.", ".pe"],
  PH: ["Philippines", "PH", "PHL", "63", "PHP", "₱", ".ph"],
  PN: ["Pitcairn Island", "PN", "PCN", "870", "NZD", "$", ".pn"],
  PL: ["Poland", "PL", "POL", "48", "PLN", "zł", ".pl"],
  PT: ["Portugal", "PT", "PRT", "351", "EUR", "€", ".pt"],
  PR: ["Puerto Rico", "PR", "PRI", "+1-787 and 1-939", "USD", "$", ".pr"],
  QA: ["Qatar", "QA", "QAT", "974", "QAR", "ق.ر", ".qa"],
  RE: ["Reunion", "RE", "REU", "262", "EUR", "€", ".re"],
  RO: ["Romania", "RO", "ROU", "40", "RON", "lei", ".ro"],
  RU: ["Russia", "RU", "RUS", "7", "RUB", "₽", ".ru"],
  RW: ["Rwanda", "RW", "RWA", "250", "RWF", "FRw", ".rw"],
  SH: ["Saint Helena", "SH", "SHN", "290", "SHP", "£", ".sh"],
  KN: ["Saint Kitts And Nevis", "KN", "KNA", "+1-869", "XCD", "$", ".kn"],
  LC: ["Saint Lucia", "LC", "LCA", "+1-758", "XCD", "$", ".lc"],
  PM: ["Saint Pierre and Miquelon", "PM", "SPM", "508", "EUR", "€", ".pm"],
  VC: ["Saint Vincent And The Grenadines", "VC", "VCT", "+1-784", "XCD", "$", ".vc"],
  BL: ["Saint-Barthelemy", "BL", "BLM", "590", "EUR", "€", ".bl"],
  MF: ["Saint-Martin (French part)", "MF", "MAF", "590", "EUR", "€", ".mf"],
  WS: ["Samoa", "WS", "WSM", "685", "WST", "SAT", ".ws"],
  SM: ["San Marino", "SM", "SMR", "378", "EUR", "€", ".sm"],
  ST: ["Sao Tome and Principe", "ST", "STP", "239", "STD", "Db", ".st"],
  SA: ["Saudi Arabia", "SA", "SAU", "966", "SAR", "﷼", ".sa"],
  SN: ["Senegal", "SN", "SEN", "221", "XOF", "CFA", ".sn"],
  RS: ["Serbia", "RS", "SRB", "381", "RSD", "din", ".rs"],
  SC: ["Seychelles", "SC", "SYC", "248", "SCR", "SRe", ".sc"],
  SL: ["Sierra Leone", "SL", "SLE", "232", "SLL", "Le", ".sl"],
  SG: ["Singapore", "SG", "SGP", "65", "SGD", "$", ".sg"],
  SX: ["Sint Maarten (Dutch part)", "SX", "SXM", "1721", "ANG", "ƒ", ".sx"],
  SK: ["Slovakia", "SK", "SVK", "421", "EUR", "€", ".sk"],
  SI: ["Slovenia", "SI", "SVN", "386", "EUR", "€", ".si"],
  SB: ["Solomon Islands", "SB", "SLB", "677", "SBD", "Si$", ".sb"],
  SO: ["Somalia", "SO", "SOM", "252", "SOS", "Sh.so.", ".so"],
  ZA: ["South Africa", "ZA", "ZAF", "27", "ZAR", "R", ".za"],
  GS: ["South Georgia", "GS", "SGS", "500", "GBP", "£", ".gs"],
  KR: ["South Korea", "KR", "KOR", "82", "KRW", "₩", ".kr"],
  SS: ["South Sudan", "SS", "SSD", "211", "SSP", "£", ".ss"],
  ES: ["Spain", "ES", "ESP", "34", "EUR", "€", ".es"],
  LK: ["Sri Lanka", "LK", "LKA", "94", "LKR", "Rs", ".lk"],
  SD: ["Sudan", "SD", "SDN", "249", "SDG", ".س.ج", ".sd"],
  SR: ["Suriname", "SR", "SUR", "597", "SRD", "$", ".sr"],
  SJ: ["Svalbard And Jan Mayen Islands", "SJ", "SJM", "47", "NOK", "kr", ".sj"],
  SZ: ["Swaziland", "SZ", "SWZ", "268", "SZL", "E", ".sz"],
  SE: ["Sweden", "SE", "SWE", "46", "SEK", "kr", ".se"],
  CH: ["Switzerland", "CH", "CHE", "41", "CHF", "CHf", ".ch"],
  SY: ["Syria", "SY", "SYR", "963", "SYP", "LS", ".sy"],
  TW: ["Taiwan", "TW", "TWN", "886", "TWD", "$", ".tw"],
  TJ: ["Tajikistan", "TJ", "TJK", "992", "TJS", "SM", ".tj"],
  TZ: ["Tanzania", "TZ", "TZA", "255", "TZS", "TSh", ".tz"],
  TH: ["Thailand", "TH", "THA", "66", "THB", "฿", ".th"],
  BS: ["The Bahamas", "BS", "BHS", "+1-242", "BSD", "B$", ".bs"],
  TG: ["Togo", "TG", "TGO", "228", "XOF", "CFA", ".tg"],
  TK: ["Tokelau", "TK", "TKL", "690", "NZD", "$", ".tk"],
  TO: ["Tonga", "TO", "TON", "676", "TOP", "$", ".to"],
  TT: ["Trinidad And Tobago", "TT", "TTO", "+1-868", "TTD", "$", ".tt"],
  TN: ["Tunisia", "TN", "TUN", "216", "TND", "ت.د", ".tn"],
  TR: ["Turkey", "TR", "TUR", "90", "TRY", "₺", ".tr"],
  TM: ["Turkmenistan", "TM", "TKM", "993", "TMT", "T", ".tm"],
  TC: ["Turks And Caicos Islands", "TC", "TCA", "+1-649", "USD", "$", ".tc"],
  TV: ["Tuvalu", "TV", "TUV", "688", "AUD", "$", ".tv"],
  UG: ["Uganda", "UG", "UGA", "256", "UGX", "USh", ".ug"],
  UA: ["Ukraine", "UA", "UKR", "380", "UAH", "₴", ".ua"],
  AE: ["United Arab Emirates", "AE", "ARE", "971", "AED", "إ.د", ".ae"],
  GB: ["United Kingdom", "GB", "GBR", "44", "GBP", "£", ".uk"],
  US: ["United States", "US", "USA", "1", "USD", "$", ".us"],
  UM: ["United States Minor Outlying Islands", "UM", "UMI", "1", "USD", "$", ".us"],
  UY: ["Uruguay", "UY", "URY", "598", "UYU", "$", ".uy"],
  UZ: ["Uzbekistan", "UZ", "UZB", "998", "UZS", "лв", ".uz"],
  VU: ["Vanuatu", "VU", "VUT", "678", "VUV", "VT", ".vu"],
  VA: ["Vatican City State (Holy See)", "VA", "VAT", "379", "EUR", "€", ".va"],
  VE: ["Venezuela", "VE", "VEN", "58", "VEF", "Bs", ".ve"],
  VN: ["Vietnam", "VN", "VNM", "84", "VND", "₫", ".vn"],
  VG: ["Virgin Islands (British)", "VG", "VGB", "+1-284", "USD", "$", ".vg"],
  VI: ["Virgin Islands (US)", "VI", "VIR", "+1-340", "USD", "$", ".vi"],
  WF: ["Wallis And Futuna Islands", "WF", "WLF", "681", "XPF", "₣", ".wf"],
  EH: ["Western Sahara", "EH", "ESH", "212", "MAD", "MAD", ".eh"],
  YE: ["Yemen", "YE", "YEM", "967", "YER", "﷼", ".ye"],
  ZM: ["Zambia", "ZM", "ZMB", "260", "ZMW", "ZK", ".zm"],
  ZW: ["Zimbabwe", "ZW", "ZWE", "263", "ZWL", "$", ".zw"]
};
exports.c_243 = c_243;
function createCountriesDataByTimeZones() {
  const c = c_243;
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
exports.getCountriesFinalList = getCountriesFinalList;
var _default = getCountriesFinalList;
exports.default = _default;