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
                id: [1423676801113],
                variantId: 12914752225369,
                node: document.getElementById('product-component-a6b7530f36c'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                    "product": {
                        "buttonDestination": "checkout",
                        "variantId": "12914752225369",
                        "width": "240px",
                        "contents": {
                            "img": false,
                            "imgWithCarousel": false,
                            "title": false,
                            "variantTitle": false,
                            "options": false,
                            "price": false,
                            "description": false,
                            "buttonWithQuantity": false,
                            "quantity": false
                        },
                        "text": {
                            "button": "BUY NOW"
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0",
                                    "margin-bottom": "50px"
                                }
                            },
                            "button": {
                                "background-color": "#ee523f",
                                "padding-left": "20px",
                                "padding-right": "20px",
                                ":hover": {
                                    "background-color": "#d64a39"
                                },
                                "border-radius": "150px",
                                ":focus": {
                                    "background-color": "#d64a39"
                                }
                            },
                            "title": {
                                "color": "#ee523f"
                            },
                            "compareAt": {
                                "font-size": "12px"
                            }
                        }
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
                                "border-radius": "150px",
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
                                "padding-left": "20px",
                                "padding-right": "20px",
                                ":hover": {
                                    "background-color": "#d64a39"
                                },
                                "border-radius": "150px",
                                ":focus": {
                                    "background-color": "#d64a39"
                                }
                            }
                        }
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
                                }
                            },
                            "iconPath": {
                                "fill": "#ffffff"
                            }
                        }
                    },
                    "option": {
                        "styles": {
                            "label": {
                                "color": "#bbbdc9"
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
