# College Project: Personal Dashboard

![Dashboard Image 1](dashboardImg1.png)
![Dashboard Image 2](dashboardImg2.png)

This project was developed during my time in college as a convenient tool to provide various information for residents and visitors of Berkeley. The Personal Dashboard is a web application that integrates several features including restaurant recommendations, weather information, local news updates, local Reddit posts, and a todo list. The aim of this project was to simplify the process of finding relevant information and enhancing the user's experience.

## Features

### Restaurant Recommendations
The Personal Dashboard offers a restaurant recommendation feature that suggests popular dining options in Berkeley. It utilizes a combination of user reviews, ratings, and cuisine preferences to provide personalized suggestions. Users can explore a variety of restaurants and make informed decisions when choosing a place to dine.

### Weather Information
To help users plan their day, the Personal Dashboard provides up-to-date weather information for Berkeley. It fetches data from reliable sources and displays current weather conditions, temperature, humidity, wind speed, and other relevant details. Users can easily check the weather forecast and make appropriate plans accordingly.

### Local News Updates
Stay informed about the latest happenings in Berkeley with the local news feature. The Personal Dashboard aggregates news articles from trusted local sources and presents them in a user-friendly format. Users can browse through headlines, read full articles, and stay connected with important events and developments in the area.

### Local Reddit Posts
Get a glimpse into the local community and engage in discussions through the local Reddit feature. The Personal Dashboard collects posts from relevant Berkeley-centric subreddits and displays them for users to explore. Users can read posts, comment, and participate in conversations to connect with fellow Berkeley residents.

### Todo List
The Personal Dashboard includes a convenient todo list feature to help users manage their tasks. Users can create, update, and delete items on their todo list, ensuring that important tasks are organized and easily accessible. The todo list feature aims to enhance productivity and assist users in prioritizing their activities.

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js
- APIs: Yelp API, Weather API, News API, Reddit API
- Storage: Local Storage

## Usage

To use the Personal Dashboard, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/personalDashboard.git`
2. Install the required dependencies: `npm install axios express cors newsapi yelp-fusion`
3. Configure API keys: Obtain API keys for the Yelp restaurant recommendation (https://docs.developer.yelp.com/docs/fusion-intro), weather (https://openweathermap.org/api), and news (https://newsapi.org/). Then define YELP_KEY, NEWS_KEY, and WEATHER_KEY in a .env file. 
4. Launch the application: Run `node server.js` to start the application.
6. Open your web browser and navigate to `http://localhost:2023` to access the Personal Dashboard.
