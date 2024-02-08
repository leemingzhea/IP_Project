# IP_Project Legends Vault Website

## Design Process

Legends Vault is a ecommerce project that aims to redefine the shopping experience for fans of the widely acclaimed online multiplayer game, League of Legends. Our project aims to provide a personalized and immersive shopping experience, creating a personalized and immersive journey for every user. The project's primary objective is to create an ecommerce/merch platform that goes beyond the traditional online shopping experience. Legends Vault introduce features such as in-store gamification, allowing users to earn points and unlock exclusive perks. By integrating gamification elements, the platform will provide fans with an engaging and interactive experience, fostering a sense of community and excitement around the merchandise.

+ As a user, I want to be able to login to my account using my email address and password

+ As a user, I want to view my order details so I can track my order.

+ As a user, I want to feel engaged and motivated by participating in a game or trivia quiz where I can earn points if I answer all questions correctly.

+ As a user, I want to participate in a community poll to vote for the nicest art piece, and I want to be rewarded if my chosen art piece gets the highest votes.

+ As a user, I want to be able to view customer reviews and ratings for products to help me gauge their quality and popularity.

+ As a user, I want to have a store page so that I can browse all the items that are available. 

+ As a user, I want to be able to view the website in mobile so that I can access and navigate the website conveniently on my mobile device

+ As a user, I want to be able to view the product in 3D so that I can have a better understanding of its features and appearance before making a purchase

+ As a user, I want to be able to see detailed product descriptions, including specifications, materials, and sizing information.

+ As a user, I want to be able to receive points from my purchases so that I can accumulate them and claim discounts for my future purchases

+ As a user, I want to able to view the claimable discounts that are available so that i can claim and apply them for my future purchase

Wireframe: https://www.figma.com/file/hCc72VxyrnP5RolPRe9eSL/IP-Project?type=design&node-id=106-221&mode=design&t=btzFwI2MSw2ZuTRj-0

## Features

### Existing Features

+ Navigation Bar - Allows users to easily explore different sections of the website. menu will drop down upon clicking the hamburger menu
+ Store Page - By clicking the view more button, the page will redirect users to the product page
+ 3D Product Page - Allows users to view products in 3d view with detailed product descriptions and allow them to add to cart
+ 2D Product Page - Provide users with detailed product descriptions and allow them to add to cart
+ Quiz Page - Redirect users to the product description page after clicking on the product
+ Community Poll - Allows users to enter their email and get latest updates about the band's development
+ Rewards Page - (not done)
+ Cartpage - (not done)
+ Profile Page - Allows users to conveniently access to important information such as their orders, payment methods, and loyalty points

### Features Left to Implement

+ Utilize our API to retrieve Community Poll votes and showcase the corresponding percentages for each option.

## Technologies Used

+ Bootstrap - Simplify the process of developing web pages

+ JQuery - JQuery to simplify DOM manipulation

+ RestDB - Database that stores users data

+ Lottie - Loading animation

+ Popper - Simplify the process of positioning of elements

## Testing

### Getting Started
To begin, navigate to the index.html file and open it in your preferred web browser. Upon loading, you'll be prompted to enter user credentials that have been pre-configured in our RestDB database.

### User Credentials:
- Username: Ah Heng
- Password: 1234

1. Sign In Page:
    - This is where our flow starts. Run index.html. Key in the user credentials that we have created in RestDB. 
      Username - Ah Heng, Password - 1234 
    - Try to submit the empty form and verify that a message in red at the bottom shows: **Invalid email or password, please try again.
    - Key in the correct credentials provided above, and click on Login. The page should transition to a lottie animation, then brings you to our main store page, store.html

2. Navigation Bar:
    - Click on any page that the user wants to visit, verify that the selected page loads correctly
    - in mobile view, click on the hamburger menu and verify that the menu drops down
    - Click on the logo, verify that it redirects the user back to the store page

3.  Footer:
    - Brand name

4. Store Page:
    - Hover over the view more button, verify that the button turns red and reverts back to its original color when the mouse is moved away
    - Click on any view more button in the product border, verify that the page redirects to the corresponding product page for the selected product

5. 2D Product Page: (not done)
    - Click on the drop down menu for the quantity, verify that the quantity drop down menu shows a range from 1 to 5. 
    - Click on the Add to Cart button, verify that the button changes to red, and the text changes to Added to Cart.

6. 3D Product Page: (not done)
    - Try to navigate around 3D model by panning, rotating, and zooming, ensure the model changes angles.
    - Click on the drop down menu for the quantity, verify that the quantity drop down menu shows a range from 1 to 5.
    - Click on the Add to Cart button, verify that the button changes to red, and the text changes to Added to Cart.

7. Quiz Start Page: (not done)
    - Click on the Start Quiz button, verify that the the page redirects you to to quizQuestions.html

8. Quiz Questions Page:
    - Test for Incorrect outcome. Click on True for the first question, Click on False for the second question. A red bolded text should appear below the questions that says 'Incorrect!'
    - Test for Correct outcome. Click on True for the first question, Click on False for the second question. A green bolded text should appear below the questions that says 'Correct!' (not done)

9. Community Poll Page: 
    - Click on the radio for the artwork that the user likes then submit, verify that the vote has been submitted

10. Rewards Page: (not done)
    - Verify that you have 500 points to spend.
    - Click on any of the Claim button, your points should deduct accordingly.

11. Cart Page: (not done)
    -

12. Payment Page:
    - Verify that the card number and expiry date only allows you to key in numerical value.
    - Click on any of the payment option images, ensure that the buttons are hovered in blue colour when selected.
    - 

4. Profile page: 
    - Try to click the sign out button, verify that the page redirects the user back to the login page
    - 


## Credits

### Store & Product Page

+ https://startbootstrap.com/templates/ecommerce

### Payment Page

+ https://bbbootstrap.com/snippets/credit-card-payment-form-4-different-options-47317865

### Media (not done)

+ The images used in this site were obtained from: https://merch.riotgames.com/en-us/
+ The webpm files used in this site were obtained from: https://displays.riotgames.com/en-us/

### Acknowledgements

+ We received inspirations for this project from Riot Games, League of Legends.
+ Our gamification elements is inspired from multiple platforms such as Shopee and Grab.

### Issues we encountered

images/error.jpg

+ Unable to commit and push to github, error prompt: