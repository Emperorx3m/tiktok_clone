# TIKTOK Clone

This is a high-level clone of the popular dating app TIKTOK, built using the MERN stack (MongoDB, Express, React, Node.js). The application implements basic swipe functionality, allowing users to swipe left or right on profiles, as well as an undo swipe feature.

## Features

- Demo like button.
- Add videos through a RESTful API using Postman.

## Technologies Used

- **MongoDB**: NoSQL database to store user profiles.
- **Express**: Web framework for Node.js to build the backend API.
- **React**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime for the backend server.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running, or use a cloud MongoDB service.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Emperorx3m/tiktok_clone.git
   cd TIKTOK-clone

2. **Install dependencies for both frontend and backend**
    1. Frontend (React):
        ```bash
        cd tiktok
        npm install ```
    
    2. Backend (Node/Express):
        ```bash
        cd backend
        npm install```

3. **Start the application**
    - configure db connection 'backend/server.js line 9 
    ```const dbconn = 'mongodb://127.0.0.1:27017/TIKTOK_db';```
    - Backend (server) on port 3003:
        ```bash
        cd server
        npm start```
    - Frontend (client) on port 3001:
        ```bash
        cd client
        npm start```

4. **Adding Profiles via Postman**
    Profiles can be added to the database by sending a POST request to http://localhost:3003/TIKTOK/cards using Postman.

    Sample Payload
    ```json
    [
    {
        "vidurl": "/assets/videos/1.mp4",
        "desc": "HQ LAZINESS is now in session 😂",
        "song": "original",
        "channel": "Channel 1",
        "likes": 345,
        "shares": 120,
        "comments": 45
    },
    {
        "vidurl": "/assets/videos/2.mp4",
        "desc": "Use your money buy wetin go wan tear ur mind",
        "song": "original",
        "channel": "Channel 2",
        "likes": 678,
        "shares": 200,
        "comments": 78
    },
    {
        "vidurl": "/assets/videos/3.mp4",
        "desc": "Funny AF. this killt me 😂",
        "song": "original",
        "channel": "Channel 3",
        "likes": 512,
        "shares": 150,
        "comments": 60
    },
    {
        "vidurl": "/assets/videos/4.mp4",
        "desc": "Tech",
        "song": "original",
        "channel": "Channel 4",
        "likes": 890,
        "shares": 300,
        "comments": 90
    },
    {
        "vidurl": "/assets/videos/5.mp4",
        "desc": "They look cute",
        "song": "original",
        "channel": "Channel 5",
        "likes": 234,
        "shares": 50,
        "comments": 30
    },
    {
        "vidurl": "/assets/videos/6.mp4",
        "desc": "Cheating master. 9 ball warrior cheater",
        "song": "original",
        "channel": "Channel 6",
        "likes": 456,
        "shares": 75,
        "comments": 20
    }
]

 [![DEMO WORKING VIDEO](./TIKTOK_CLONE_DEMO.mp4)](./tiktok_clone_demo.mp4)