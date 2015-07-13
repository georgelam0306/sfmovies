# sfmovies


## Summary ##
  SF Movies is an app that allows people to see where movies have filmed their locations in the bay area.

## Problem ##
  Looking at data doesn't give visual context to the film locations

## Technical Solutions ##
	This project focuses on backend engineering

	By utilizing google's geocoder, and sf data api, all the film locations can be displayed on a map.  The frontend uses Backbone.js.  The backend uses node/express.  I chose to use a dependency injection pattern to set up the different modules of the project, such as the map geocoder conversion, the film location, and the routes.  This allows unit tests to mock the geocoder functionality and separate it from the application functionality.  

	All dependencies in each module can be swapped out for a different implementation at runtime, in case requirements change, or a/b testing is needed for a feature.

	##TODO##
	There are a lot of optimizations that can be made.
	- Get only film locations within viewing boundaries
	- Batch fetch requests and send to client in multiple passes so that the client doesn't have to keep the entire film locations in memory
	- Add a cache database on the server side so that geocoding doesn't happen every single time the server starts.
	- Make client front end look nice

## Links ##
LinkedIn: https://www.linkedin.com/in/georgelam0306
