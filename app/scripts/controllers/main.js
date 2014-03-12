'use strict';

angular.module('ccApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('ccApp').controller('CurrencyCtrl', ['$scope', '$http', function( $scope, $http ){
  var currencyRates = {
    "AED": 3.67319,"AFN": 57.110526,"ALL": 101.145559,"AMD": 417.140001,"ANG": 1.77942,"AOA": 97.596551,"ARS": 7.862922,"AUD": 1.108229,"AWG": 1.79,"AZN": 0.784033,"BAM": 1.410299,"BBD": 2,"BDT": 77.8005,"BGN": 1.410477,"BHD": 0.377082,"BIF": 1554.244967,"BMD": 1,"BND": 1.26778,"BOB": 6.910616,"BRL": 2.345129,"BSD": 1,"BTC": 0.0015968128,"BTN": 60.91875,"BWP": 8.852764,"BYR": 9797.435,"BZD": 1.996729,"CAD": 1.111402,"CDF": 919.091337,"CHF": 0.87804,"CLF": 0.02419,"CLP": 569.567706,"CNY": 6.138616,"COP": 2042.57,"CRC": 557.6525,"CUP": 0.999818,"CVE": 79.154339,"CZK": 19.71558,"DJF": 177.7043,"DKK": 5.378596,"DOP": 43.16055,"DZD": 77.43944,"EEK": 11.619125,"EGP": 6.961431,"ERN": 15.002825,"ETB": 19.30538,"EUR": 0.720806,"FJD": 1.866335,"FKP": 0.600908,"GBP": 0.600908,"GEL": 1.74856,"GHS": 2.551071,"GIP": 0.600908,"GMD": 38.10142,"GNF": 7030.56,"GTQ": 7.745991,"GYD": 206.836249,"HKD": 7.760837,"HNL": 19.42177,"HRK": 5.517907,"HTG": 45.58194,"HUF": 225.1674,"IDR": 11398.516667,"ILS": 3.473432,"INR": 60.9232,"IQD": 1166.089967,"IRR": 24907.666667,"ISK": 112.012,"JEP": 0.600908,"JMD": 108.4517,"JOD": 0.707414,"JPY": 103.2775,"KES": 86.539391,"KGS": 53.79175,"KHR": 3991.925,"KMF": 354.609747,"KPW": 900,"KRW": 1065.66667,"KWD": 0.281398,"KYD": 0.826827,"KZT": 182.121201,"LAK": 8035.323333,"LBP": 1506.061667,"LKR": 130.5627,"LRD": 80.0088,"LSL": 10.75298,"LTL": 2.488382,"LVL": 0.509585,"LYD": 1.23926,"MAD": 8.110717,"MDL": 13.35513,"MGA": 2343.676667,"MKD": 44.44657,"MMK": 974.88258,"MNT": 1763,"MOP": 7.994704,"MRO": 291.3008,"MTL": 0.683602,"MUR": 30.06667,"MVR": 15.35886,"MWK": 422.5645,"MXN": 13.21606,"MYR": 3.281677,"MZN": 31.826667,"NAD": 10.75522,"NGN": 164.5974,"NIO": 25.59061,"NOK": 5.959634,"NPR": 97.89876,"NZD": 1.180369,"OMR": 0.38502,"PAB": 1,"PEN": 2.803122,"PGK": 2.6331,"PHP": 44.50324,"PKR": 101.206199,"PLN": 3.035341,"PYG": 4425.784928,"QAR": 3.641728,"RON": 3.240869,"RSD": 83.588479,"RUB": 36.3947,"RWF": 680.2437,"SAR": 3.750291,"SBD": 7.270208,"SCR": 12.14663,"SDG": 5.691828,"SEK": 6.375361,"SGD": 1.268096,"SHP": 0.600908,"SLL": 4337,"SOS": 1034.109067,"SRD": 3.283333,"STD": 17663.1,"SVC": 8.7499,"SYP": 142.275,"SZL": 10.75628,"THB": 32.38387,"TJS": 4.809525,"TMT": 2.851667,"TND": 1.571222,"TOP": 1.863912,"TRY": 2.217984,"TTD": 6.393952,"TWD": 30.31519,"TZS": 1627.125,"UAH": 9.221217,"UGX": 2517.093333,"USD": 1,"UYU": 22.20849,"UZS": 2237.106637,"VEF": 6.292861,"VND": 21096.85,"VUV": 96.42,"WST": 2.327621,"XAF": 473.108499,"XAG": 0.04795987,"XAU": 0.00074676,"XCD": 2.70154,"XDR": 0.645714,"XOF": 472.825338,"XPF": 86.125999,"YER": 214.974601,"ZAR": 10.76436,"ZMK": 5252.024745,"ZMW": 5.937525,"ZWL": 322.355006
  };

  var currencyNames = {
    "AED": "United Arab Emirates Dirham", "AFN": "Afghan Afghani", "ALL": "Albanian Lek", "AMD": "Armenian Dram", "ANG": "Netherlands Antillean Guilder", "AOA": "Angolan Kwanza", "ARS": "Argentine Peso", "AUD": "Australian Dollar", "AWG": "Aruban Florin",  "AZN": "Azerbaijani Manat", "BAM": "Bosnia-Herzegovina Convertible Mark", "BBD": "Barbadian Dollar", "BDT": "Bangladeshi Taka", "BGN": "Bulgarian Lev", "BHD": "Bahraini Dinar", "BIF": "Burundian Franc", "BMD": "Bermudan Dollar", "BND": "Brunei Dollar", "BOB": "Bolivian Boliviano", "BRL": "Brazilian Real", "BSD": "Bahamian Dollar", "BTC": "Bitcoin", "BTN": "Bhutanese Ngultrum", "BWP": "Botswanan Pula", "BYR": "Belarusian Ruble", "BZD": "Belize Dollar", "CAD": "Canadian Dollar", "CDF": "Congolese Franc", "CHF": "Swiss Franc", "CLF": "Chilean Unit of Account (UF)", "CLP": "Chilean Peso", "CNY": "Chinese Yuan", "COP": "Colombian Peso", "CRC": "Costa Rican Colón", "CUP": "Cuban Peso", "CVE": "Cape Verdean Escudo", "CZK": "Czech Republic Koruna", "DJF": "Djiboutian Franc", "DKK": "Danish Krone", "DOP": "Dominican Peso", "DZD": "Algerian Dinar", "EEK": "Estonian Kroon", "EGP": "Egyptian Pound", "ERN": "Eritrean Nakfa", "ETB": "Ethiopian Birr", "EUR": "Euro", "FJD": "Fijian Dollar", "FKP": "Falkland Islands Pound", "GBP": "British Pound Sterling", "GEL": "Georgian Lari", "GHS": "Ghanaian Cedi", "GIP": "Gibraltar Pound", "GMD": "Gambian Dalasi", "GNF": "Guinean Franc", "GTQ": "Guatemalan Quetzal", "GYD": "Guyanaese Dollar", "HKD": "Hong Kong Dollar", "HNL": "Honduran Lempira", "HRK": "Croatian Kuna", "HTG": "Haitian Gourde", "HUF": "Hungarian Forint", "IDR": "Indonesian Rupiah", "ILS": "Israeli New Sheqel", "INR": "Indian Rupee", "IQD": "Iraqi Dinar", "IRR": "Iranian Rial", "ISK": "Icelandic Króna", "JEP": "Jersey Pound", "JMD": "Jamaican Dollar", "JOD": "Jordanian Dinar", "JPY": "Japanese Yen", "KES": "Kenyan Shilling", "KGS": "Kyrgystani Som", "KHR": "Cambodian Riel", "KMF": "Comorian Franc", "KPW": "North Korean Won", "KRW": "South Korean Won", "KWD": "Kuwaiti Dinar", "KYD": "Cayman Islands Dollar", "KZT": "Kazakhstani Tenge", "LAK": "Laotian Kip", "LBP": "Lebanese Pound", "LKR": "Sri Lankan Rupee", "LRD": "Liberian Dollar", "LSL": "Lesotho Loti", "LTL": "Lithuanian Litas", "LVL": "Latvian Lats", "LYD": "Libyan Dinar", "MAD": "Moroccan Dirham", "MDL": "Moldovan Leu", "MGA": "Malagasy Ariary", "MKD": "Macedonian Denar", "MMK": "Myanma Kyat", "MNT": "Mongolian Tugrik", "MOP": "Macanese Pataca", "MRO": "Mauritanian Ouguiya", "MTL": "Maltese Lira", "MUR": "Mauritian Rupee", "MVR": "Maldivian Rufiyaa", "MWK": "Malawian Kwacha", "MXN": "Mexican Peso", "MYR": "Malaysian Ringgit", "MZN": "Mozambican Metical", "NAD": "Namibian Dollar", "NGN": "Nigerian Naira", "NIO": "Nicaraguan Córdoba", "NOK": "Norwegian Krone", "NPR": "Nepalese Rupee", "NZD": "New Zealand Dollar", "OMR": "Omani Rial", "PAB": "Panamanian Balboa", "PEN": "Peruvian Nuevo Sol", "PGK": "Papua New Guinean Kina", "PHP": "Philippine Peso", "PKR": "Pakistani Rupee", "PLN": "Polish Zloty", "PYG": "Paraguayan Guarani", "QAR": "Qatari Rial", "RON": "Romanian Leu", "RSD": "Serbian Dinar", "RUB": "Russian Ruble", "RWF": "Rwandan Franc", "SAR": "Saudi Riyal", "SBD": "Solomon Islands Dollar", "SCR": "Seychellois Rupee", "SDG": "Sudanese Pound", "SEK": "Swedish Krona", "SGD": "Singapore Dollar", "SHP": "Saint Helena Pound", "SLL": "Sierra Leonean Leone", "SOS": "Somali Shilling", "SRD": "Surinamese Dollar", "STD": "São Tomé and Príncipe Dobra", "SVC": "Salvadoran Colón", "SYP": "Syrian Pound", "SZL": "Swazi Lilangeni", "THB": "Thai Baht", "TJS": "Tajikistani Somoni", "TMT": "Turkmenistani Manat", "TND": "Tunisian Dinar", "TOP": "Tongan Paʻanga", "TRY": "Turkish Lira", "TTD": "Trinidad and Tobago Dollar", "TWD": "New Taiwan Dollar", "TZS": "Tanzanian Shilling", "UAH": "Ukrainian Hryvnia", "UGX": "Ugandan Shilling", "USD": "United States Dollar", "UYU": "Uruguayan Peso", "UZS": "Uzbekistan Som", "VEF": "Venezuelan Bolívar Fuerte", "VND": "Vietnamese Dong", "VUV": "Vanuatu Vatu", "WST": "Samoan Tala", "XAF": "CFA Franc BEAC", "XAG": "Silver (troy ounce)", "XAU": "Gold (troy ounce)", "XCD": "East Caribbean Dollar", "XDR": "Special Drawing Rights", "XOF": "CFA Franc BCEAO", "XPF": "CFP Franc", "YER": "Yemeni Rial", "ZAR": "South African Rand", "ZMK": "Zambian Kwacha (pre-2013)", "ZMW": "Zambian Kwacha", "ZWL": "Zimbabwean Dollar"
  };

  var currencies = [],
    i;

  for (i in currencyRates) {
    if (currencyRates.hasOwnProperty(i)) {
      var currencyCode = i,
      currencyFullName = currencyNames[currencyCode],
      currencyRate = currencyRates[currencyCode];

      console.log({'code': currencyCode, 'rate': currencyRate, 'name': currencyFullName });
      currencies.push({'code': currencyCode, 'rate': currencyRate, 'name': currencyFullName });
    }
  };

  $scope.currencies = currencies;



  /*
  $http({
    method: 'GET',
    url: 'http://openexchangerates.org/api/latest.json?app_id=a96637b1b78b4279a3cda09ba4baa7b8',
  })
  .success( function( data, status, headers, config ){
    $scope.currencies = data.rates;
  })
  .error( function( data, status, headers, config ){

  })
  */

}])