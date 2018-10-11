(function () {
var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
if (window.ShopifyBuy) {
if (window.ShopifyBuy.UI) {
ShopifyBuyInit();
} else {
loadScript();
}
} else {
loadScript();
}

function loadScript() {
var script = document.createElement('script');
script.async = true;
script.src = scriptURL;
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
script.onload = ShopifyBuyInit;
}

function ShopifyBuyInit() {
var client = ShopifyBuy.buildClient({
domain: 'da-design-and-art.myshopify.com',
storefrontAccessToken: 'c927a53b5ce5356d1aed36164f44835d',
});

ShopifyBuy.UI.onReady(client).then(function (ui) {
ui.createComponent('collection', {
id: 60571648089,
node: document.getElementById('collection-component-e17f8e09b08'),
moneyFormat: '%24%7B%7Bamount%7D%7D',
options: {
"product": {
"variantId": "all",
"contents": {
"imgWithCarousel": false,
"variantTitle": false,
"description": false,
"buttonWithQuantity": false,
"quantity": false
},
"styles": {
"product": {
"@media (min-width: 601px)": {
"max-width": "calc(25% - 20px)",
"margin-left": "20px",
"margin-bottom": "50px"
}
},
"button": {
"background-color": "#3A2E3C",
":hover": {
"background-color": "#EE523F"
},
":focus": {
"background-color": "#EE523F"
}
}
}
},
"cart": {
"contents": {
"button": true
},
"styles": {
"button": {
"background-color": "#3A2E3C",
":hover": {
"background-color": "#EE523F"
},
":focus": {
"background-color": "#EE523F"
}
},
"footer": {
"background-color": "#f0faf7"
}
}
},
"modalProduct": {
"contents": {
"img": false,
"imgWithCarousel": true,
"variantTitle": false,
"buttonWithQuantity": true,
"button": false,
"quantity": false
},
"styles": {
"product": {
"@media (min-width: 601px)": {
"max-width": "100%",
"margin-left": "0px",
"margin-bottom": "0px"
}
},
"button": {
"background-color": "#3A2E3C",
":hover": {
"background-color": "#3A2E3C"
},
":focus": {
"background-color": "#3A2E3C"
}
}
}
},
"toggle": {
"styles": {
"toggle": {
"background-color": "#EE523F",
":hover": {
"background-color": "#EE523F"
},
":focus": {
"background-color": "#EE523F"
}
}
}
},
"productSet": {
"styles": {
"products": {
"@media (min-width: 601px)": {
"margin-left": "-20px"
}
}
}
}
}
});
});
}
})();
