export default {
  "me": [
    {
      "title": "Journey of a young developer: from dyslexia to mastering AI"
    },
    {
      "description": "My name is Louis Gomard and I am 18 years old. I obtained my technical baccalaureate with distinction and I am currently pursuing a computer‑science program at Epitech. I chose this school because it perfectly matches my profile and aspirations."
    },
    {
      "description": "My journey began with an attempt at a BUT GEII program in Rennes, which proved very difficult because of my dyslexia. However, the programming courses in the BUT revealed my passion for the field and confirmed my decision to pursue Epitech."
    },
    {
      "description": "In my final year of STI2D, I leveraged my creativity to develop a text‑to‑speech synthesis tool that let me read everything on my computer. This project, carried out during the rise of artificial intelligence, was for me a first concrete immersion into coding and handling AI models."
    },
    {
      "description": "Curious by nature, I keep exploring new horizons – whether it’s computer science, tinkering, or AI. I master several languages and technologies: Python, PHP, SQL, JavaScript, HTML, CSS, as well as various Python libraries dedicated to AI, graph visualization, and CSV handling. I also have a B2 level in English."
    },
    {
      "description": "During my projects at Epitech, I prioritize local language models (SLMs) over large cloud models (LLMs). This approach guarantees confidentiality, reduces energy consumption, and lets me explore AI nuances by selecting models that are compact and performant, tailored to my machine. It gives me a refreshing and pragmatic view of AI’s potential."
    },
    {
      "description": "I also hold the Recognition of the Quality of a Disabled Worker (RQTH), which allows me to access specific accommodations and support in my studies and professional projects. This recognition strengthens my resilience and my commitment to turning the challenges of my disability into forces that drive innovation and excellence in computer science."
    }
  ],

  "projet": [
    {
      "title": "ELIZA",
      "date": "30/03/2026 - 16/04/2026",
      "description": "During this 18‑day project I worked with a partner to implement a Small Language Model (SLM) in a Discord bot named Aeroguid. The bot acts as a virtual travel agency: it presents flight and accommodation suggestions, answers users’ questions, and, via tool calls, queries an unlimited database without saturating the model’s memory. After the bot succeeded, we built a simple web interface (HTML + CSS + JavaScript) for administering it; the JavaScript communicates with the port where Ollama hosts the model. We also provided a .sh auto‑install script that prepares the Python environment, downloads the Ollama models, creates the `.env` file containing all secret keys, and then launches the bot on the Discord server using the token. This project let us evaluate several models, analyze their performance and drawbacks, and deliver a qualitative, immediately usable Discord tool to the client."
      ,
      "language": [
        {
          "Python": {
            "def": "Bot logic, calls to Ollama models, and Discord API",
            "url": ""
          }
        },
        {
          "Discord API": {
            "def": "Token management, events handling, and user interaction",
            "url": ""
          }
        },
        {
          "Ollama": {
            "def": "Hosting and execution of the SLM with unlimited tool calls",
            "url": ""
          }
        },
        {
          "HTML/CSS": {
            "def": "Structure and styling of the bot’s administration page",
            "url": ""
          }
        },
        {
          "JavaScript": {
            "def": "Real‑time communication between the front‑end and the model’s port",
            "url": ""
          }
        },
        {
          "Bash (.sh)": {
            "def": "Auto‑installation script for setting up the environment and dependencies",
            "url": ""
          }
        }
      ]
    },

    {
      "title": "Alice's Adventures in Wonderland",
      "date": "16/03/2026-26/03/2026",
      "description": "During this 10‑day project I worked in a team to develop a Python script that summarizes books from the Project Gutenberg library. The script requests the books, parses the HTML with BeautifulSoup to extract chapters, streams the content for smoother processing, and provides a command‑line interface (CLI) for user interaction. The extracted text is then fed to a small NLP pipeline that generates concise summaries of each book.",
      "language": [
        {
          "Python": {
            "def": "Primary language and NLP processing",
            "url": ""
          }
        },
        {
          "HTML": {
            "def": "Source format analyzed with BeautifulSoup",
            "url": ""
          }
        },
        {
          "CLI": {
            "def": "Command‑line interface for streaming requests",
            "url": ""
          }
        }
      ]
    },

    {
      "title": "Supermarket Business Insights – CSV Analysis and Modeling",
      "date": "02/03/2026-12/03/2026",
      "description": "In a 3‑person team we leveraged a large CSV dataset from a supermarket to answer eight business questions (e.g., which products are bought after chocolate, which items are placed first, etc.). We read and cleaned the CSV with pandas, visualized statistics and correlations using matplotlib, and built two linear regression models: one predicts the product most likely to be bought next from a customer ID, the other estimates the time (in days) before a customer’s next purchase. The experience reinforced my skills in exploratory analysis, data visualization, and predictive modeling on real data.",
      "language": [
        {
          "Python": {
            "def": "Primary language for processing, analysis, and modeling",
            "url": ""
          }
        },
        {
          "pandas": {
            "def": "CSV handling, cleaning, and data transformation",
            "url": ""
          }
        },
        {
          "matplotlib": {
            "def": "Creation of charts, histograms, and percentage diagrams",
            "url": ""
          }
        },
        {
          "scikit-learn": {
            "def": "Implementation and evaluation of two linear regressions",
            "url": ""
          }
        }
      ]
    },

    {
      "title": "TARDIS – Modeling Train Delays for SNCF",
      "date": "23/02/2026-27/02/2026",
      "description": "The project was carried out in a 3‑person team: based on a large CSV file supplied by SNCF (columns: train_id, origin, destination, date, scheduled arrival time, delay, etc.) we built a linear‑regression model to estimate the number of delay minutes for a train from its route and the month of the year. The workflow included cleaning and enriching the data, feature‑engineering (extracting the month, encoding stations), training the model, evaluating and visualizing predictions. The experience deepened my skills in handling large datasets and predictive modeling with Python.",
      "language": [
        {
          "Python": {
            "def": "Primary language for data processing and modelling",
            "url": ""
          }
        },
        {
          "Jupyter Notebook": {
            "def": "Interactive environment used to explore the CSV, write code, and document steps",
            "url": ""
          }
        },
        {
          "pandas": {
            "def": "Library for cleaning, transforming, and analysing the CSV dataset",
            "url": ""
          }
        },
        {
          "scikit‑learn": {
            "def": "Implementation of linear regression and model evaluation tools",
            "url": ""
          }
        }
      ]
    },

    {
      "title": "Data Bootcamp – Python & NoSQL Training",
      "date": "09/02/2026-23/02/2026",
      "description": "During two weeks this bootcamp focused on mastering Python (object‑oriented programming, best practices), using Jupyter Notebook for interactive development, and learning NoSQL with MongoDB. I performed several data‑analysis exercises such as working with the Iris dataset via pandas, which strengthened my ability to clean, transform, and visualise data. The experience gave me a deep understanding of the Python ecosystem and its main data‑science modules.",
      "language": [
        {
          "Python": {
            "def": "Primary language, used for business logic, class handling and analysis scripts",
            "url": ""
          }
        },
        {
          "MongoDB": {
            "def": "NoSQL database used via the official MongoDB‑Python driver for storage and queries",
            "url": ""
          }
        },
        {
          "pandas": {
            "def": "Data‑analysis library for manipulation, aggregation and visualisation of datasets",
            "url": ""
          }
        },
        {
          "Jupyter Notebook": {
            "def": "Interactive environment used to write, test and document Python code",
            "url": ""
          }
        }
      ]
    },

    {
      "title": "Development of an MVP Geo‑Located Social Network (inspired by HALO Voisin / Instagram)",
      "date": "05/01/2026-30/01/2026",
      "description": "For 25 days I completed a full project – from personas, competitor‑benchmarking, and user‑journey modelling, to UI/UX design on Figma (wireframes → mock‑ups → interactive prototype) – and developed a Minimum Viable Product (MVP) focused on content sharing and geolocation. The front‑end (HTML, CSS, JavaScript) reproduced the prototype and consumed a geolocation API. The back‑end was an Express.js (Node.js) server with dotenv, mysql2, jsonwebtoken and bcrypt for user management, authentication and secure password storage. The database is MySQL, managed via DBeaver CE. A third‑party geolocation API provided the GPS coordinates of the user’s device.",
      "language": [
        {
          "HTML": {
            "def": "I used HTML to structure the entire front‑end, including registration forms, login and profile photo section",
            "url": ""
          }
        },
        {
          "CSS": {
            "def": "CSS ensured a pleasant and aesthetic UX by styling and layouting the app according to modern standards",
            "url": ""
          }
        },
        {
          "JavaScript": {
            "def": "I implemented JavaScript to manage client‑side interactions and dynamically send data to the back‑end",
            "url": ""
          }
        },
        {
          "Express.js": {
            "def": "Back‑end server built with Express.js handled the app’s business logic: receiving data, processing it and communicating with the database",
            "url": ""
          }
        },
        {
          "API": {
            "def": "Integrating an external geolocation API allowed real‑time user geolocation and greatly improved the smoothness of data collection (e.g., storing the user’s current position)",
            "url": ""
          }
        },
        {
          "MySQL/DBeaver": {
            "def": "MySQL served as the data backbone; I used DBeaver to ensure intuitive management and validation of the data structure and entries",
            "url": ""
          }
        },
        {
          "Figma": {
            "def": "Figma structured the design phase, and I completed the whole design lifecycle: from wireframes to mock‑ups to interactive prototype, ensuring fidelity between the initial design and the final product",
            "url": ""
          }
        }
      ]
    },

    {
      "title": "e‑Hack & Juice_",
      "date": "01/12/2025-19/12/2025",
      "description": "During these 19 days I carried out a two‑person cybersecurity project in which we were tasked with hacking and extracting flags from the online Juice Shop webstore. I used Burp Suite and the element inspector.",
      "language": [
        {
          "Burp Suite": {
            "def": "I used Burp Suite to view network traffic, see which requests were sent and manipulate them to potentially discover site vulnerabilities",
            "url": ""
          }
        },
        {
          "l’inspecteur d’éléments": {
            "def": "I used the element inspector to inspect the page’s HTML and JavaScript for hidden URLs",
            "url": ""
          }
        }
      ]
    },

    {
      "title": "e‑Todo_",
      "date": "03/11/2025-28/11/2025",
      "description": "During these 25 days I was part of a team of 3 to build a web To‑Do list app. It runs with a back‑end that uses DBeaver CE for visualising MySQL, while the front‑end is built with CSS, HTML and JavaScript. The tools used were: Express.js, CSS, HTML, JavaScript, DBeaver CE.",
      "language": [
        {
          "Express.js": {
            "def": "I used Express for the back‑end with dotenv, env‑var management, mysql2 for MySQL DB manipulation, jsonwebtoken for tokens after login, and bcrypt for encrypting/decrypting passwords",
            "url": ""
          }
        },
        {
          "CSS,HTML,javascript": {
            "def": "Styling and server communication",
            "url": ""
          }
        },
        {
          "DBeaver CE": {
            "def": "I used DBeaver CE to get a more intuitive view of the MySQL database, checking whether the user was logged in, registered, etc.",
            "url": ""
          }
        }
      ]
    },

    {
      "title": "Piscine web",
      "date": "13/10/2025-29/10/2025",
      "description": "During 16 days I completed a web‑development bootcamp. The languages I encountered were PHP, HTML, CSS and JavaScript.",
      "language": [
        {
          "PHP": {
            "def": "First steps toward the PHP language",
            "url": ""
          }
        },
        {
          "HTML": {
            "def": "First steps, then further study of the HTML language",
            "url": ""
          }
        },
        {
          "CSS": {
            "def": "First steps, then further study of the CSS language",
            "url": ""
          }
        },
        {
          "Javascript": {
            "def": "First steps, then further study of the JavaScript language",
            "url": ""
          }
        }
      ]
    },

    {
      "title": "Piscine fondatrice Python",
      "date": "13/6/2025-10/6/2025",
      "description": "During this week I completed a Python bootcamp.",
      "language": [
        {
          "Python": {
            "def": "First steps toward the Python language",
            "url": ""
          }
        }
      ]
    }
  ],

  "my expérience": [
    {
      "title": "Volunteer July 2025 at Saint‑Louis Medical Office, Reunion",
      "description_mor": [
        {
          "Observation": {
            "def": "Observation of the use of computers in a general medical office",
            "url": ""
          },
        }
      ]
    },

    {
      "title": "Volunteer January 2025 and January 2024 at Le Duigou Racing, Rennes",
      "description_mor": [
        {
          "Préparation": {
            "def": "Preparation of the tires and engine of a Porsche race car",
            "url": ""
          }
        }
      ]
    },

    {
      "title": "Volunteer January 2024 and January 2022 at Reech, Rennes",
      "description_mor": [
        {
          "Observation": {
            "def": "Team management and observation of a programmer’s work in an influencer agency",
            "url": ""
          }
        }
      ]
    },

    {
      "title": "Intern November 2021 to December 2021 at REM Le Port, Reunion",
      "description_mor": [
        {
          "Gestion": {
            "def": "Participation in the management of a shelving company",
            "url": ""
          }
        }
      ]
    }
  ],

  "contact": [
    { "gmail": "louisgomard@gmail.com" },
    {
      "href_clic_but": {
        "titre": "My LinkedIn",
        "direction": "https://www.linkedin.com/in/louis-gomard-2b0396388/",
        "image": "https://images.icon-icons.com/555/PNG/512/linkedin_icon-icons.com_53609.png"
      }
    },
  ],

  "my cv": [
    { "my_cv": "/CV_LouisGOMARD_PC.pdf" }
  ]
};
