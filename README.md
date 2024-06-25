# OutfitAi

## Overview

OutfitAi is an online closet and way for people into fashion to keep track of their clothing and find outfit inspiration.

### Problem

OutfitAi aims to solve a problem that anyone who is into fashion has faced. The problem of the evergrowing closet and our 
inability to keep a working memory of every single clothing item we own. Which in turn stifles out creativity when coming up with new outfits. The way we tackle these two problem spaces is through wardrobe managment and outfit selsection. Users now have a place to store and tatlogue their wardrobes and through the use of Ai they can get outfit inspiration along with randomly generated outfits.

### User Profile

The users for this app will be anyone who is into fashion or closet organization.

### Features

As a new user, I want to create an account, so that I can securely log in and access my online closet.

As a registered user, I want to log in and log out, so that I can securely access my personal wardrobe and outfit suggestions.
As a registered user, I want to reset my password if I forget it, so that I can regain access to my account.

As a user, I want to upload photos of my clothing items, so that I can create a digital version of my wardrobe.
As a user, I want to categorize my clothing items, so that I can easily find and manage my wardrobe.
As a user, I want to tag my clothing items with attributes, so that I can better organize and filter my wardrobe.

As a user, I want to have the app create random outfits for me, so that I can get outfit ideas without having to think about it.

As a user, I want to input prompts for specific outfit types (e.g., “casual summer outfit”), so that I can receive customized outfit suggestions based on my needs.

As a user, I want an intuitive and visually appealing interface, so that I can easily navigate through the app and enjoy using it.

As a user, I want the app to be responsive and work well on both web and mobile devices, so that I can access my wardrobe and outfit suggestions from any device.

As a user, I want to save my favorite outfits, so that I can easily find and wear them again.
As a user, I want to view my outfit history, so that I can see past outfit suggestions.
As a user, I want to share my outfits with friends or on social media, so that I can get feedback and share my style.
As a user, I want my data and images to be stored securely, so that my privacy is protected.
As a user, I want to control the visibility of my wardrobe, so that I can decide who can see my clothing items and outfits.
As a user, I want to receive notifications about new outfit ideas or reminders to upload new clothing items, so that I stay engaged with the app and keep my wardrobe up-to-date.

## Implementation



### Tech Stack

- React
- React Three Fiber
- React Three Drei
- JavaScript
- Scss 
- MySQL
- S3 Buckets
- Express
- Client libraries: 
    - react
    - react-router
    - axios
- Server libraries:
    - knex
    - express
    - bcrypt for password hashing

### APIs

the app will make API calls to Chat GPT for the prompted outfit generation feature 

### Sitemap

- Home Page
- Login/Register
- Dashboard/Closet 
- Outfit Generation Page
- About
- Contact Us
- Settings



### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data

databse will have 2 tables, one for clothing items and one for the users. the relationship between these tables will be a one to many as the users will have multiple clothing items asociated with them.

### Endpoints

my server will have:

a get end point for gettig user data on login. 
a post endpoint for posting user data on register.
a put for editing user profiles 
a delete for deleting user profiles

a get endpoint for getting the clothing asociated with a user
a post for posting new clothing 
a put for editing clothing 
a delete endpoint for deleting outfits 


### Auth

currently i dont have plans for user auth but i will if time permits do user auth.

## Roadmap

the goal of my sprints in this road map is to break down the project into sections where at any given moment i have a working project, to do this i will be focusing on a minimum viable product approach where i then itterate over that and flesh out all of the features i am looking to implement. below i have outlined how this will be done:

SPRINT 1: 

Front End:
    create home page, hamburger button nav, and login. The login will not be functional but when you click it will route to the dashboard where you will see the current default user closet. 

Back End: 
    create the get methods for the clothing items associated with default user

Database: 
    create the user and lcothing databases and link them to S3 buckets


SPRINT 2:

Front End: 
    add the ability to post, edit and delete clothing items in the dashboard, 

Back End: 
    create the post, put, delete methods for editing clothing for default user


SPRINT 3: 

Front End: 
    create the random outfit generation page which will give users the ability to randomly generate outfits based on their closets.


SPRINT 4: 

Front End: 
    create api calls to chat gpt in order for users to be able to give chat GPT propts for outfits and get customized outfit suggestions 



## Nice-to-haves

- multiple users and user authentication 
- saving favourite outfits
- outfit history
- sharing outfits on social media
- notifications to upload new clothes and about outfits 
- About and Contact us pages 
#   O u t f i t A i  
 