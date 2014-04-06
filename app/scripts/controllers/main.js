'use strict';

angular.module('ccApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


angular.module('ccApp').factory('CurrencyService', ['$http', function( $http ){
  var oer = {
    "disclaimer": "Exchange rates are provided for informational purposes only, and do not constitute financial advice of any kind. Although every attempt is made to ensure quality, NO guarantees are given whatsoever of accuracy, validity, availability, or fitness for any purpose - please use at your own risk. All usage is subject to your acceptance of the Terms and Conditions of Service, available at: https://openexchangerates.org/terms/",
    "license": "Data sourced from various providers with public-facing APIs; copyright may apply; resale is prohibited; no warranties given of any kind. Bitcoin data provided by http://coindesk.com. All usage is subject to your acceptance of the License Agreement available at: https://openexchangerates.org/license/",
    "timestamp": 1394989262,
    "base": "USD",
    "rates": {
      "AED": 3.67298,"AFN": 56.945,"ALL": 101.062499,"AMD": 417.346001,"ANG": 1.7889,"AOA": 97.593676,"ARS": 7.895268,"AUD": 1.107224,"AWG": 1.7899,"AZN": 0.784133,"BAM": 1.406624,"BBD": 2,"BDT": 77.62544,"BGN": 1.407406,"BHD": 0.376983,"BIF": 1551.43,"BMD": 1,"BND": 1.263784,"BOB": 6.904745,"BRL": 2.349145,"BSD": 1,"BTC": 0.0015914571,"BTN": 61.177263,"BWP": 8.854746,"BYR": 9827.946667,"BZD": 1.982516,"CAD": 1.110389,"CDF": 921.583333,"CHF": 0.872411,"CLF": 0.0243,"CLP": 571.907995,"CNY": 6.148892,"COP": 2044.125008,"CRC": 554.375594,"CUP": 0.999625,"CVE": 78.68903,"CZK": 19.66492,"DJF": 177.861,"DKK": 5.36425,"DOP": 43.14611,"DZD": 77.2551,"EEK": 11.612,"EGP": 6.960689,"ERN": 15.002825,"ETB": 19.25044,"EUR": 0.718828,"FJD": 1.861611,"FKP": 0.600656,"GBP": 0.600656,"GEL": 1.74182,"GHS": 2.549708,"GIP": 0.600656,"GMD": 38.1,"GNF": 7021.695,"GTQ": 7.717371,"GYD": 203.801666,"HKD": 7.76642,"HNL": 19.29151,"HRK": 5.503296,"HTG": 43.84117,"HUF": 224.283301,"IDR": 11339.033333,"ILS": 3.463552,"INR": 61.251,"IQD": 1164.12335,"IRR": 24925.333333,"ISK": 112.266,"JEP": 0.600656,"JMD": 108.6334,"JOD": 0.706596,"JPY": 101.3559,"KES": 86.53063,"KGS": 53.791675,"KHR": 3996.2852,"KMF": 353.690964,"KPW": 900,"KRW": 1072.030003,"KWD": 0.281538,"KYD": 0.825795,"KZT": 182.586501,"LAK": 8040.266602,"LBP": 1504.57,"LKR": 130.611499,"LRD": 79.91375,"LSL": 10.72072,"LTL": 2.481855,"LVL": 0.508885,"LYD": 1.243436,"MAD": 8.092286,"MDL": 13.43774,"MGA": 2347.366667,"MKD": 44.40302,"MMK": 965.4535,"MNT": 1758,"MOP": 7.991587,"MRO": 291.1322,"MTL": 0.683602,"MUR": 30.08654,"MVR": 15.406,"MWK": 419.682,"MXN": 13.20981,"MYR": 3.27762,"MZN": 31.75,"NAD": 10.7206,"NGN": 164.564499,"NIO": 25.59638,"NOK": 5.972547,"NPR": 98.01961,"NZD": 1.171337,"OMR": 0.385026,"PAB": 1,"PEN": 2.801986,"PGK": 2.639833,"PHP": 44.6747,"PKR": 99.25127,"PLN": 3.037951,"PYG": 4415.021641,"QAR": 3.64205,"RON": 3.24058,"RSD": 83.359471,"RUB": 36.60956,"RWF": 681.1866,"SAR": 3.75031,"SBD": 7.271503,"SCR": 12.18003,"SDG": 5.688963,"SEK": 6.386949,"SGD": 1.265316,"SHP": 0.600656,"SLL": 4334.166667,"SOS": 1014.461883,"SRD": 3.2875,"STD": 17587.8082,"SVC": 8.741797,"SYP": 142.33375,"SZL": 10.69872,"THB": 32.27406,"TJS": 4.800175,"TMT": 2.8516,"TND": 1.57464,"TOP": 1.856957,"TRY": 2.213144,"TTD": 6.374916,"TWD": 30.33936,"TZS": 1632.256667,"UAH": 9.668849,"UGX": 2521.27,"USD": 1,"UYU": 22.18516,"UZS": 2241.106637,"VEF": 6.2926,"VND": 21082.85,"VUV": 95.855,"WST": 2.326174,"XAF": 471.708697,"XAG": 0.04673677,"XAU": 0.00071907,"XCD": 2.70102,"XDR": 0.644429,"XOF": 471.7766,"XPF": 85.8784,"YER": 214.988,"ZAR": 10.6763,"ZMK": 5221.025,"ZMW": 6.043273,"ZWL": 322.355006
    }
  }

  var currencyRates = oer.rates;

  var currencyNames = {
    "AED": "United Arab Emirates Dirham", "AFN": "Afghan Afghani", "ALL": "Albanian Lek", 
    "AMD": "Armenian Dram", "ANG": "Netherlands Antillean Guilder", "AOA": "Angolan Kwanza", 
    "ARS": "Argentine Peso", "AUD": "Australian Dollar", "AWG": "Aruban Florin",  "AZN": "Azerbaijani Manat", 
    "BAM": "Bosnia-Herzegovina Convertible Mark", "BBD": "Barbadian Dollar", "BDT": "Bangladeshi Taka", 
    "BGN": "Bulgarian Lev", "BHD": "Bahraini Dinar", "BIF": "Burundian Franc", "BMD": "Bermudan Dollar", 
    "BND": "Brunei Dollar", "BOB": "Bolivian Boliviano", "BRL": "Brazilian Real", "BSD": "Bahamian Dollar", 
    "BTC": "Bitcoin", "BTN": "Bhutanese Ngultrum", "BWP": "Botswanan Pula", "BYR": "Belarusian Ruble", 
    "BZD": "Belize Dollar", "CAD": "Canadian Dollar", "CDF": "Congolese Franc", "CHF": "Swiss Franc", 
    "CLF": "Chilean Unit of Account (UF)", "CLP": "Chilean Peso", "CNY": "Chinese Yuan", "COP": "Colombian Peso", 
    "CRC": "Costa Rican Colón", "CUP": "Cuban Peso", "CVE": "Cape Verdean Escudo", "CZK": "Czech Republic Koruna", 
    "DJF": "Djiboutian Franc", "DKK": "Danish Krone", "DOP": "Dominican Peso", "DZD": "Algerian Dinar", 
    "EEK": "Estonian Kroon", "EGP": "Egyptian Pound", "ERN": "Eritrean Nakfa", "ETB": "Ethiopian Birr", 
    "EUR": "Euro", "FJD": "Fijian Dollar", "FKP": "Falkland Islands Pound", "GBP": "British Pound Sterling", 
    "GEL": "Georgian Lari", "GHS": "Ghanaian Cedi", "GIP": "Gibraltar Pound", "GMD": "Gambian Dalasi", 
    "GNF": "Guinean Franc", "GTQ": "Guatemalan Quetzal", "GYD": "Guyanaese Dollar", "HKD": "Hong Kong Dollar", 
    "HNL": "Honduran Lempira", "HRK": "Croatian Kuna", "HTG": "Haitian Gourde", "HUF": "Hungarian Forint", 
    "IDR": "Indonesian Rupiah", "ILS": "Israeli New Sheqel", "INR": "Indian Rupee", "IQD": "Iraqi Dinar", 
    "IRR": "Iranian Rial", "ISK": "Icelandic Króna", "JEP": "Jersey Pound", "JMD": "Jamaican Dollar", 
    "JOD": "Jordanian Dinar", "JPY": "Japanese Yen", "KES": "Kenyan Shilling", "KGS": "Kyrgystani Som", 
    "KHR": "Cambodian Riel", "KMF": "Comorian Franc", "KPW": "North Korean Won", "KRW": "South Korean Won", 
    "KWD": "Kuwaiti Dinar", "KYD": "Cayman Islands Dollar", "KZT": "Kazakhstani Tenge", "LAK": "Laotian Kip", 
    "LBP": "Lebanese Pound", "LKR": "Sri Lankan Rupee", "LRD": "Liberian Dollar", "LSL": "Lesotho Loti", 
    "LTL": "Lithuanian Litas", "LVL": "Latvian Lats", "LYD": "Libyan Dinar", "MAD": "Moroccan Dirham", 
    "MDL": "Moldovan Leu", "MGA": "Malagasy Ariary", "MKD": "Macedonian Denar", "MMK": "Myanma Kyat", 
    "MNT": "Mongolian Tugrik", "MOP": "Macanese Pataca", "MRO": "Mauritanian Ouguiya", "MTL": "Maltese Lira", 
    "MUR": "Mauritian Rupee", "MVR": "Maldivian Rufiyaa", "MWK": "Malawian Kwacha", "MXN": "Mexican Peso", 
    "MYR": "Malaysian Ringgit", "MZN": "Mozambican Metical", "NAD": "Namibian Dollar", "NGN": "Nigerian Naira", 
    "NIO": "Nicaraguan Córdoba", "NOK": "Norwegian Krone", "NPR": "Nepalese Rupee", "NZD": "New Zealand Dollar", 
    "OMR": "Omani Rial", "PAB": "Panamanian Balboa", "PEN": "Peruvian Nuevo Sol", "PGK": "Papua New Guinean Kina", 
    "PHP": "Philippine Peso", "PKR": "Pakistani Rupee", "PLN": "Polish Zloty", "PYG": "Paraguayan Guarani", 
    "QAR": "Qatari Rial", "RON": "Romanian Leu", "RSD": "Serbian Dinar", "RUB": "Russian Ruble", 
    "RWF": "Rwandan Franc", "SAR": "Saudi Riyal", "SBD": "Solomon Islands Dollar", "SCR": "Seychellois Rupee", 
    "SDG": "Sudanese Pound", "SEK": "Swedish Krona", "SGD": "Singapore Dollar", "SHP": "Saint Helena Pound", 
    "SLL": "Sierra Leonean Leone", "SOS": "Somali Shilling", "SRD": "Surinamese Dollar", 
    "STD": "São Tomé and Príncipe Dobra", "SVC": "Salvadoran Colón", "SYP": "Syrian Pound", 
    "SZL": "Swazi Lilangeni", "THB": "Thai Baht", "TJS": "Tajikistani Somoni", "TMT": "Turkmenistani Manat", 
    "TND": "Tunisian Dinar", "TOP": "Tongan Paʻanga", "TRY": "Turkish Lira", "TTD": "Trinidad and Tobago Dollar", 
    "TWD": "New Taiwan Dollar", "TZS": "Tanzanian Shilling", "UAH": "Ukrainian Hryvnia", "UGX": "Ugandan Shilling", 
    "USD": "United States Dollar", "UYU": "Uruguayan Peso", "UZS": "Uzbekistan Som", 
    "VEF": "Venezuelan Bolívar Fuerte", "VND": "Vietnamese Dong", "VUV": "Vanuatu Vatu", "WST": "Samoan Tala", 
    "XAF": "CFA Franc BEAC", "XAG": "Silver (troy ounce)", "XAU": "Gold (troy ounce)", 
    "XCD": "East Caribbean Dollar", "XDR": "Special Drawing Rights", "XOF": "CFA Franc BCEAO", "XPF": "CFP Franc", 
    "YER": "Yemeni Rial", "ZAR": "South African Rand", "ZMK": "Zambian Kwacha (pre-2013)", "ZMW": "Zambian Kwacha", 
    "ZWL": "Zimbabwean Dollar"
  };

  var currencies = [],
    i;

  /*var toFixed = function(value, precision) {
    var power = Math.pow(10, precision || 0);
    return String(Math.round(value * power) / power);
  };*/

  /* Creating a new JSON with the combined information of the rates JSON and the names JSON */
  for (i in currencyRates) {
    if (currencyRates.hasOwnProperty(i)) {
      var currencyCode = i,
      currencyFullName = currencyNames[currencyCode],
      currencyRate = currencyRates[currencyCode];

      currencies.push({'code': currencyCode, 'rate': currencyRate, 'name': currencyFullName });
    }
  };

  return currencies;

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
}]);

angular.module('ccApp').controller('CurrencySelectorCtrl', ['$scope', 'CurrencyService', function( $scope, CS ){
  console.log('CurrencySelectorCtrl start');
  $scope.currencies = CS;

  $scope.baseCurrency = {
    currencyCodeC: "USD"
  };
  console.log('CurrencySelectorCtrl end');
}]);

angular.module('ccApp').controller('CurrencyCtrl', ['$scope', 'CurrencyService', function( $scope, CS ){
  console.log('CurrencyCtrl start');
  $scope.currencies = CS;
 
  console.log('CurrencyCtrl end');
}]);
