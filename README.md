
# MOVIE GENRE BASED RECOMMENDATION GENERATOR WITH VIDEO PLAYER USING AI

• Built a responsive web app using javascript and used machine learning for movie recommendation and deployed 
on heroku.
• used IMDB API to recommend all movies of different languages
• Did sentiment analysis on reviews of movies, created model with 99% accuracy
• Used face detection also to control video player
• uploaded it on heroku cloud platform
• technologies used: Javascript, Python, SQL, HTML/CSS, Machine learning


## Demo

you can access to the website by clicking link below:

https://movie-webapp-ai.herokuapp.com/



## Feedback

If you have any feedback, please reach out to us at ritiktyagi110@gmail.com

# IMPORTANT: Bug Fixes

## `navigator.getUserMedia`

`navigator.getUserMedia` is now deprecated and is replaced by `navigator.mediaDevices.getUserMedia`. To fix this bug replace all versions of `navigator.getUserMedia` with `navigator.mediaDevices.getUserMedia`

## Low-end Devices Bug

The video eventListener for `play` fires up too early on low-end machines, before the video is fully loaded, which causes errors to pop up from the Face API and terminates the script (tested on Debian [Firefox] and Windows [Chrome, Firefox]). Replaced by `playing` event, which fires up when the media has enough data to start playing.

  
