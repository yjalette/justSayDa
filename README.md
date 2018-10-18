
# DA Clothing


## Screenshots


## Initial UX
User Stories
* AS A VISITOR, NOT LOGGED IN

* As an initial visitor to the page, I want to land on the web page and see what the page is about so I can understand what the app is and does and decide whether or not to create an account to be able to use the app.
* As a visitor, I want to create a new account so that I can place an order.
(LANDING PAGE--wireframe will have title, logo, a few details about logging in and what the app is about)
![UI Flow handwritten draft](https://github.com/yjalette/justSayDa/blob/master/public/images/wf-product.jpg)

* AS A LOGGED-IN USER
* As a user, I want to view products.
![UI Flow handwritten draft](https://github.com/yjalette/justSayDa/blob/master/public/images/wf-shop.jpg)
* As a user, I want to view detailts about chosen product.
![UI Flow handwritten draft](https://github.com/yjalette/justSayDa/blob/master/public/images/wf-product.jpg)


## Working Prototype
Find a working prototype with at https://boiling-fjord-67437.herokuapp.com/ .

## Technical
Link It was built as two separate parts.

### Front End

* HTML5
* CSS3(SASS)
* JavaScript
* jQuery
* Handlebars

### Back End

* Node.js
* Express.js
* MySql
* Shopify button

### Responsive
* The app is responsive and optimized for both desktop and mobile viewing and use.

### Security
* User passwords are encrypted using bcrypt.js


## API Documentation
API endpoints for the back end include:
* POST to '/users/create' for creating a new user
* POST to '/signin' to sign in an existing user
* POST to '/new/create' to add an order to a user's list of accomplishments
* PUT to '/achievement/:id' to update an existing order
* GET to '/achievements/:user' to access all of a user's existing order
* GET to '/achievement/:id' to access a single order by ID
* DELETE to '/achievement/:id' to delete a single order by ID
