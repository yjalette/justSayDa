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
            ui.createComponent('product', {
                id: [1976921882713],
                node: document.getElementById('product-component-3d66111752c'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                    "product": {
                        "buttonDestination": "checkout",
                        "layout": "horizontal",
                        "variantId": "all",
                        "width": "100%",
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true,
                            "variantTitle": false,
                            "description": true,
                            "buttonWithQuantity": false,
                            "quantity": false
                        },
                        "text": {
                            "button": "buy now"
                        },
                        "styles": {
                            "product": {
                                "text-align": "left",
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0",
                                    "margin-bottom": "50px"
                                }
                            },
                            "button": {
                                "background-color": "#fe0116",
                                "padding-left": "18px",
                                "padding-right": "18px",
                                ":hover": {
                                    "background-color": "#d64a39"
                                },
                                "border-radius": "10px",
                                ":focus": {
                                    "background-color": "#d64a39"
                                }
                            },
                            "variantTitle": {
                                "font-family": "Geneva, sans-serif",
                                "font-weight": "normal"
                            },
                            "title": {
                                "font-family": "Droid Serif, serif",
                                "font-size": "26px",
                                "color": "#3a2e3c"
                            },
                            "description": {
                                "color": "#434343",
                                "font-family": "Geneva, sans-serif",
                                "font-weight": "normal"
                            },
                            "price": {
                                "font-family": "Geneva, sans-serif",
                                "font-size": "18px",
                                "font-weight": "normal"
                            },
                            "compareAt": {
                                "font-size": "15px",
                                "font-family": "Geneva, sans-serif",
                                "font-weight": "normal"
                            }
                        },
                        "googleFonts": [
                            "Droid Serif"
                        ]
                    },
                    "cart": {
                        "contents": {
                            "button": true
                        },
                        "styles": {
                            "cart": {
                                "background-color": "#3a2e3c"
                            },
                            "button": {
                                "background-color": "#ee523f",
                                ":hover": {
                                    "background-color": "#d64a39"
                                },
                                "border-radius": "10px",
                                ":focus": {
                                    "background-color": "#d64a39"
                                }
                            },
                            "title": {
                                "color": "#bbbdc9"
                            },
                            "footer": {
                                "background-color": "#3a2e3c"
                            },
                            "header": {
                                "color": "#bbbdc9"
                            },
                            "lineItems": {
                                "color": "#bbbdc9"
                            },
                            "subtotalText": {
                                "color": "#bbbdc9"
                            },
                            "subtotal": {
                                "color": "#bbbdc9"
                            },
                            "notice": {
                                "color": "#bbbdc9"
                            },
                            "currency": {
                                "color": "#bbbdc9"
                            },
                            "close": {
                                ":hover": {
                                    "color": "#bbbdc9"
                                },
                                "color": "#bbbdc9"
                            },
                            "emptyCart": {
                                "color": "#bbbdc9"
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
                                "background-color": "#ee523f",
                                "padding-left": "18px",
                                "padding-right": "18px",
                                ":hover": {
                                    "background-color": "#d64a39"
                                },
                                "border-radius": "10px",
                                ":focus": {
                                    "background-color": "#d64a39"
                                }
                            },
                            "variantTitle": {
                                "font-family": "Geneva, sans-serif",
                                "font-weight": "normal"
                            },
                            "title": {
                                "font-family": "Droid Serif, serif"
                            },
                            "description": {
                                "color": "#434343",
                                "font-family": "Geneva, sans-serif",
                                "font-weight": "normal"
                            },
                            "price": {
                                "font-family": "Geneva, sans-serif",
                                "font-weight": "normal"
                            },
                            "compareAt": {
                                "font-family": "Geneva, sans-serif",
                                "font-weight": "normal"
                            }
                        },
                        "googleFonts": [
                            "Droid Serif"
                        ]
                    },
                    "toggle": {
                        "styles": {
                            "toggle": {
                                "background-color": "#ee523f",
                                ":hover": {
                                    "background-color": "#d64a39"
                                },
                                ":focus": {
                                    "background-color": "#d64a39"
                                }
                            },
                            "count": {
                                "color": "#ffffff",
                                ":hover": {
                                    "color": "#ffffff"
                                },
                                "font-size": "16px"
                            },
                            "iconPath": {
                                "fill": "#ffffff"
                            }
                        }
                    },
                    "option": {
                        "styles": {
                            "label": {
                                "font-family": "Geneva, sans-serif",
                                "color": "#3a2e3c"
                            },
                            "select": {
                                "font-family": "Geneva, sans-serif"
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
                    },
                    "lineItem": {
                        "styles": {
                            "variantTitle": {
                                "color": "#bbbdc9"
                            },
                            "title": {
                                "color": "#bbbdc9"
                            },
                            "price": {
                                "color": "#bbbdc9"
                            },
                            "quantity": {
                                "color": "#bbbdc9"
                            },
                            "quantityIncrement": {
                                "color": "#bbbdc9",
                                "border-color": "#bbbdc9"
                            },
                            "quantityDecrement": {
                                "color": "#bbbdc9",
                                "border-color": "#bbbdc9"
                            },
                            "quantityInput": {
                                "color": "#bbbdc9",
                                "border-color": "#bbbdc9"
                            }
                        }
                    }
                }
            });
        });
    }
})();

