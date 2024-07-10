# OutfitAi

## Overview

OutfitAi is an online closet and a way for people into fashion to keep track of their clothing and find outfit inspiration.

### Problem

OutfitAi aims to solve a problem that anyone who is into fashion has faced—the problem of the ever-growing closet and our inability to keep a working memory of every single clothing item we own. This, in turn, stifles our creativity when coming up with new outfits. We tackle these problem spaces through wardrobe management and outfit selection. Users now have a place to store and catalog their wardrobes, and through the use of AI, they can get outfit inspiration along with randomly generated outfits.

### User Profile

The users for this app will be anyone who is into fashion or closet organization.

### Features

- **New User:** I want to create an account so that I can securely log in and access my online closet.
- **Registered User:** I want to log in and log out so that I can securely access my personal wardrobe and outfit suggestions.
- **Password Reset:** I want to reset my password if I forget it so that I can regain access to my account.
- **Upload Photos:** I want to upload photos of my clothing items so that I can create a digital version of my wardrobe.
- **Categorize Clothing:** I want to categorize my clothing items so that I can easily find and manage my wardrobe.
- **Tag Clothing:** I want to tag my clothing items with attributes so that I can better organize and filter my wardrobe.
- **Random Outfit Generation:** I want the app to create random outfits for me so that I can get outfit ideas without having to think about it.
- **Prompted Outfits:** I want to input prompts for specific outfit types (e.g., “casual summer outfit”) so that I can receive customized outfit suggestions based on my needs.
- **User Interface:** I want an intuitive and visually appealing interface so that I can easily navigate through the app and enjoy using it.
- **Responsive Design:** I want the app to be responsive and work well on both web and mobile devices so that I can access my wardrobe and outfit suggestions from any device.
- **Save Favorite Outfits:** I want to save my favorite outfits so that I can easily find and wear them again.
- **Outfit History:** I want to view my outfit history so that I can see past outfit suggestions.
- **Social Sharing:** I want to share my outfits with friends or on social media so that I can get feedback and share my style.
- **Data Security:** I want my data and images to be stored securely so that my privacy is protected.
- **Control Visibility:** I want to control the visibility of my wardrobe so that I can decide who can see my clothing items and outfits.
- **Notifications:** I want to receive notifications about new outfit ideas or reminders to upload new clothing items so that I stay engaged with the app and keep my wardrobe up-to-date.

## Implementation

### Tech Stack

- React
- React Three Fiber
- React Three Drei
- JavaScript
- SCSS
- MySQL
- S3 Buckets
- Express

#### Client Libraries

- react
- react-router
- axios

#### Server Libraries

- knex
- express
- bcrypt for password hashing

### APIs

The app will make API calls to Chat GPT for the prompted outfit generation feature.

### Sitemap

- Home Page
- Login/Register
- Dashboard/Closet
- Outfit Generation Page
- About/Contact Us
- Settings

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data

The database will have 2 tables: one for clothing items and one for the users. The relationship between these tables will be one-to-many, as users will have multiple clothing items associated with them.

### Endpoints

- **GET** endpoint for getting user data on login.
- **POST** endpoint for posting user data on register.
- **PUT** endpoint for editing user profiles.
- **DELETE** endpoint for deleting user profiles.
- **GET** endpoint for getting the clothing associated with a user.
- **POST** endpoint for posting new clothing.
- **PUT** endpoint for editing clothing.
- **DELETE** endpoint for deleting outfits.

### Authentication

Currently, there are no plans for user authentication, but if time permits, user authentication will be implemented.

## Roadmap

The goal of my sprints in this roadmap is to break down the project into sections where at any given moment I have a working project. To do this, I will focus on a minimum viable product approach and iterate over that to flesh out all the features I am looking to implement. Below is the outline:

### SPRINT 1

- **Front End:** Create home page, hamburger button nav, and login. The login will not be functional but will route to the dashboard where you will see the current default user closet.
- **Back End:** Create the GET methods for the clothing items associated with the default user.
- **Database:** Create the user and clothing databases and link them to S3 buckets.

### SPRINT 2

- **Front End:** Add the ability to post, edit, and delete clothing items in the dashboard.
- **Back End:** Create the POST, PUT, DELETE methods for editing clothing for the default user.

### SPRINT 3

- **Front End:** Create the random outfit generation page, allowing users to randomly generate outfits based on their closets.

### SPRINT 4

- **Front End:** Create API calls to Chat GPT so users can give prompts for outfits and get customized outfit suggestions.

## Nice-to-haves

- Multiple users and user authentication
- Saving favorite outfits
- Outfit history
- Sharing outfits on social media
- Notifications to upload new clothes and about outfits
- About and Contact Us pages
