[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Hike log
This repo is the client side to a hiking log that allows a user access to his/her own individual, private database of hikes.  They can create, search for, update, and delete hikes that they have completed.  This can be a valuable resource for anyone trying to complete a hiking challenge, recommend hikes to others, or just keep a journal of their adventures.

## Planning Story
In order to create a vision for my site, I first wanted to incorporate nature into the design.  Using Google and Bing as a reference for how impactful I wanted my picture to be, I decided that I would make it the background image of the web application.  I used a picture that I personally took at Mount Washington of a waterfall that had vibrant greens and a lot of action.

After finishing the back end, I moved on to this repo, with the initial goals of authorization tasks.  I wanted the background image to be the thing that stood out the most, which directed my design to incorporate transparency in all containers that are presented to the user.  I wanted a navigation bar to have the title of the page and to help the user to navigate all functionality of the page once logged in.

After completing the authorization tasks, and ensuring that the front end was able to communicate with the back end, I moved on to Create. I chose to start here to allow me to create hikes easier by using the UI instead of having to do it through curl scripts.  This allowed me to build up an index which would allow me to test other functionailty of the website.  I was able to accomplish this with little difficulty.

The next step was to build the index feature.  This served as a little more of a challenge for me.  Being able to take the object response from the API and print to the page in an index was at first a little complicated, but after reviewing content from previous labs, I was able to use the object to my advantage and append the information returned from the array of objects by using a forEach and .append of a new HTML element of each.

The search functionality was a challenging one.  To get the item by ID was not the difficult part.  What was more complicated was the amount of div's I had to use to have the buttons appear at the right time.  I also had an idea of potentially including search by trail and search by mountain.  For now, I have left the funcitonality at search by ID, which is what the API is built to do at it's current state.  Because my search is closely tied to the functionality of my update and delete, it made it a little bit more complicated.

For my update, I wanted to make it easier for the user to edit the information of the hike without having to type in the ID again.  So following the search by ID, the user is given an option to edit or delete their log item.  This is done through a system of buttons to ensure that the user actually wants to do this.  Once the user searches for an item, that item is stored in the store document.  What also happens at this time, is that the information that is received from the search is populated into an edit form that is hidden on the page, but in the DOM.  When the user clicks the edit button, this form shows up with the auto populated information from the search, so that the user does not have to fill in any information that was already there, and can update only the items that he/she would like to update.  After submitting the edit, if the edit is successful, an API call is also made to ShowById to update the information real-time on the screen for the user.

The delete functionality also uses the search by ID.  Since both functions can only be accessed through the search by ID, they do not rely on user input of the ID directly.  This is accomplished once again through the store file, which sends the ID to the API for delete function once the appropriate sequence of buttons are clicked.

One of the most difficult parts of this project was the hiding and showing of certain buttons, divs, and elements on the page at certain times.  The update function was by far the most challenging, due to the significant amounts of buttons and divs that were involved in making the page function the way that I wanted it to function.  Cleaning this up was quite difficult.  Also, adding in responses to user auth requests were a little challenging due to the size of the cards.

### User Stories
    1. As a user, I want to be able to sign in to my own secure account so that I can track my own hikes.
    2. As a user, I want to be able to track the mountains I have climbed and take notes on them.
    3. As a user, I would like to save all of my data and return to it later so that I can fill out applications for patches.
    4. As a user, I would like to modify any input at a later date, so that I do not have to do it all at once.
    5. As a user, I want to be able to look up previous trail notes I took and data recorded so I can refer to this information when recommending hikes to others.

### Technologies used
    1. html
    2. JavaScript
    3. CSS/sass
    4. jquery
    5. Bootstrap
    6. json
    7. MongoDB
    8. Mongoose
    9. Express JS
    10. Passportjs
    11. Bcrypt

### Links
  [Depoloyed Frontend] (https://robrichardsdpt.github.io/hike-tracker-client/)
  [Deployed Backend] (https://stormy-plains-65398.herokuapp.com/)
  [Frontend Github Repository](https://github.com/robrichardsdpt/hike-tracker-client)
  [Backend Github Repository](https://github.com/robrichardsdpt/hike-tracker-backend)  

### Unsolved Problems/Reach goals
    - Search functionality to include search by trail, mountain
    - Statistics and other data tracking methods (filling in mountains into lists to show user how many more they need to accomplish goals)

## Images
![wireframe](https://i.imgur.com/2GcKeNV.jpg)
