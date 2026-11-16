export default {
  "me": [
    {
        "title": "Journey of a young developer: from dyslexia to mastering AI"
    },
    {
        "description": "I am Louis Gomard, 18 years old. I obtained my technical baccalaureate with distinction and pursue computer science at Épitech."
    },
    {
        "description": "My journey began with a BUT GEII in Rennes, which proved difficult due to my dyslexia. However, programming courses there revealed my passion for CS."
    },
    {
        "description": "During my final year of STI2D, I developed a text-to-speech tool to read everything on my computer, giving me my first hands-on experience with AI models."
    },
    {
        "description": "Curious by nature, I explore CS, tinkering, and AI. I master several languages and technologies: Python, PHP, SQL, JavaScript, HTML, CSS, N8N, plus various Python libraries for AI, graph visualization, and CSV handling. I also have a B2 level in English."
    },
    {
        "description": "At Épitech, I prioritize local language models (SLMs) over large cloud models (LLMs). This approach guarantees confidentiality, reduces energy consumption, and allows me to explore AI nuances through compact, performant models tailored to my machine. I enjoy discovering the most efficient and interesting models for key tasks."
    },
    {
        "description": "I hold the Recognition of the Quality of a Disabled Worker (RQTH), which grants me specific accommodations and support in my studies and projects. This recognition strengthens my resilience and commits me to turning the challenges of my disability into forces that drive innovation and excellence in computer science."
    }
  ],

  "AI Project": [
    {"under_block":{
      "title": "Lou – Persona: Personalized Newsletter Assistant built with n8n",
      "date": "26/10/2026-15/11/2026",
      "description": "During this 21-day project I worked in a team to build Lou, an assistant that sends a personalized newsletter by email, built entirely with n8n. The user chats with Lou on a web page, creates an account, shares their interests, then receives a newsletter at the hour they chose. The workflow relies on two tables: one tracks the state of each conversation (login, account creation or homepage), the other stores accounts and preferences. Depending on the session state, a dedicated AI agent answers: the Login agent signs users in with a salted and hashed password, the Account Creation agent asks questions one by one and checks the email, and the Homepage agent edits user information, manages newsletter preferences and subscription, sends a test newsletter, or deletes the account in line with the GDPR right to erasure. The newsletter itself is produced by several agents: one searches recent articles with Brave Search, one structures them into JSON, and one chooses colors, font and layout from the user's preferences. A Code node then generates the HTML mail, which is sent through Gmail with an unsubscribe link handled by a webhook. Everything runs on a small local model (Bonsai 9B with multi-token prediction) served by llama.cpp, so each agent has a short prompt and a single task. This project taught me to design reliable multi-agent workflows with small models, manage personal data responsibly, and deliver a complete product from chat interface to scheduled email.",
      "language": [
        { "n8n": { "def": "Single platform for the whole workflow: Chat Trigger, AI agents with tools, data tables, scheduling, webhook and Gmail sending", "url": "" } },
        { "llama.cpp": { "def": "Local hosting of the Bonsai 9B model through llama-server, exposing an OpenAI-compatible API used by the n8n Chat Model nodes", "url": "" } },
        { "Brave Search": { "def": "Search tool used by the Research agent to find recent articles matching the user's interests", "url": "" } },
        { "Gmail": { "def": "Sending of the personalized newsletter, the test newsletter and the unsubscribe link", "url": "" } },
        { "n8n Data Tables": { "def": "Storage of conversation sessions, accounts, hashed passwords with salt, preferences, subscription status and unsubscribe tokens", "url": "" } },
        { "JavaScript": { "def": "Chat front-end script sending messages to the Chat Trigger, and Code nodes generating the HTML newsletter", "url": "" } },
        { "HTML/CSS": { "def": "Structure and styling of the chat page and of the newsletter email", "url": "" } }
      ]
    }},

    {"under_block":{
      "title": "START TREK – Lunar Lander: Reinforcement Learning with a Deep Q-Network",
      "date": "12/10/2026-01/11/2026",
      "description": "During this 21-day project I worked with a partner to train an agent to land a lunar module by itself in the Gymnasium LunarLander simulator. Our work was split in two notebooks: my partner implemented the PPO agent, and I implemented the Deep Q-Network (DQN) agent from scratch with PyTorch. My part covered the neural network (8 → 64 → 64 → 4), a replay buffer with fixed capacity and random batches, epsilon-greedy action selection, a target network updated every 100 steps, and a Mean Squared Error loss on Bellman targets, taking care to separate terminated from truncated episodes. I built the training loop with logging of the score, the number of steps and the reason each episode ended (crash, out of viewport, at rest, truncated), plus training curves for reward, episode length, loss and epsilon. I measured a random-agent baseline (average score of -173.4), benchmarked single-core CPU, multi-core CPU and GPU (the single core was the fastest for such a small network), then compared five configurations (buffer size, learning rate, batch size, longer training), each on three seeds, which means 15 trainings. The baseline hyperparameters turned out to be the best. The final model was evaluated over 100 consecutive episodes without exploration, on terrains never seen during training, and reached an average score of 233.5, above the 200 target, with about 88 landings out of 100. This project taught me to run reproducible experiments, to analyze results honestly, including failures and dead ends, and to explain why an agent learns, not only that it does.",
      "language": [
        { "Python": { "def": "Primary language for the agent, the training loop, the experiments and the analysis of results", "url": "" } },
        { "PyTorch": { "def": "Implementation of the Q-network, the target network, the MSE loss and the Adam optimizer, and saving of the best model", "url": "" } },
        { "Gymnasium (Box2D)": { "def": "LunarLander simulation environment providing states, rewards and end-of-episode signals", "url": "" } },
        { "NumPy": { "def": "Handling of states, scores and moving averages, and fixed seeds for reproducibility", "url": "" } },
        { "matplotlib": { "def": "Training curves (score, episode length, loss, epsilon), end-of-episode statistics and CPU/GPU speed comparison", "url": "" } },
        { "Jupyter Notebook": { "def": "Interactive environment used to run the experiments and document each choice with explanations and results", "url": "" } }
      ]
    }},

    {"under_block":{
      "title": "CODENAME – Hardening an LLM Agent and Prompt Injection Toolkit",
      "date": "21/09/2026-11/10/2026",
      "description": "During this 21-day cybersecurity project around AI agents, I worked on a no-code delivery made of one Modelfile and a handful of plain text files, all running on a single imposed small model (granite3.1-moe:3b) served locally by Ollama. The first half was defense: I wrote a Modelfile for an agent that keeps a secret codeword hidden behind a password, while still handing it over when given the exact password and still answering ordinary questions like a normal assistant. Beyond the system prompt, I used the other levers of the Modelfile (sampling parameters, context size, stop sequences, priming messages) to reinforce the defense. The second half was attack: I wrote an extraction toolkit of five prompts of 1500 characters maximum, each exploiting a different family of prompt injection technique, designed to pull the codeword out of agents I had never seen, so that no single defense line could neutralize several of them at once. I researched the known prompt injection families, then tested everything with real runs on the local model, because a prompt that has never been executed is worth nothing. This project taught me how fragile small language models are against injection, how to think like both an attacker and a defender, and how to balance security with the usefulness of an agent.",
      "language": [
        { "Ollama": { "def": "Local serving of the granite3.1-moe:3b model, creation of the agent from the Modelfile and real test runs of every prompt", "url": "" } },
        { "Modelfile": { "def": "Definition of the hardened agent: system prompt with password and codeword, sampling parameters, context size, stop sequences and priming messages", "url": "" } },
        { "Prompt engineering": { "def": "Writing of the defensive system prompt and of five short extraction prompts, each limited to 1500 characters", "url": "" } },
        { "Prompt injection": { "def": "Study and use of five different families of injection techniques to extract a secret codeword from other agents", "url": "" } },
        { "granite3.1-moe:3b": { "def": "Small imposed language model used as the base of the agent and as the test target for the attacks", "url": "" } }
      ]
    }},

    {"under_block":{
      "title": "DR CVRIE – Medical AI: Alzheimer MRI Classification and Patient Testimony Clustering",
      "date": "14/09/2026-27/09/2026",
      "description": "During this 14-day project I worked in a team to develop CVRIE V1, a medical AI assistant handling two tasks: grouping patient testimonies by pathology or urgency (unsupervised learning) and diagnosing medical images (supervised learning). I was in charge of the supervised part: detecting Alzheimer's stages from brain MRI scans. I chose the Kaggle OASIS Alzheimer's dataset (about 80,000 images in 4 stages: non demented, very mild, mild and moderate dementia, under the Apache 2.0 license) and justified the choice by its medical relevance, its volume and its reproducibility. My analysis showed a strong class imbalance: the moderate class contained only 2 patients (488 images), while each patient provides about 242 slices. A first CNN built from scratch with PyTorch (2 convolution layers, CrossEntropy loss, Adam) mostly predicted the majority class, which I confirmed with a normalized confusion matrix and a classification report. To fix it, I excluded the moderate class and balanced the dataset to 21 patients per class. I split the data by patient rather than by image, so that slices of the same person never appear in both training and test sets. I resized the images to 128×128, normalized them, and cached them in RAM to speed up loading by about 4 times. I then designed a deeper second CNN with 3 convolution blocks, batch normalization and dropout, trained it with a lower learning rate, and kept the best checkpoint. This second model improved considerably over the first one, and I exported it to ONNX to visualize its architecture. This project taught me that data quality matters as much as the model, and that accuracy alone can hide a biased model, especially in a medical context.",
      "language": [
        { "Python": { "def": "Primary language for dataset analysis, pre-processing, model training and evaluation", "url": "" } },
        { "PyTorch": { "def": "Design and training of two CNNs from scratch (convolutions, batch normalization, dropout), CrossEntropy loss, Adam optimizer, checkpoint saving of the best model and ONNX export", "url": "" } },
        { "torchvision": { "def": "Image transformations: resizing to 128×128, grayscale conversion, tensor conversion and normalization", "url": "" } },
        { "scikit-learn": { "def": "Classification report (precision, recall, F1) and confusion matrix to evaluate the model class by class", "url": "" } },
        { "matplotlib / seaborn": { "def": "Charts of images and patients per class, train/test proportion and normalized confusion matrix heatmap", "url": "" } },
        { "NumPy": { "def": "Handling of predictions and normalization of the confusion matrix", "url": "" } },
        { "Pillow": { "def": "Loading of the MRI images and checking of their dimensions (496×248)", "url": "" } },
        { "Kaggle (kagglehub)": { "def": "Automatic download of the OASIS Alzheimer's MRI dataset for a reproducible project", "url": "" } },
        { "ONNX / Netron": { "def": "Export of the trained CNN to model.onnx and visualization of its architecture", "url": "" } },
        { "Jupyter Notebook": { "def": "Interactive environment used to analyze the dataset, document each choice and compare the two models", "url": "" } }
      ]
    }},

    {"under_block":{
      "title": "ELIZA",
      "date": "30/03/2026 - 16/04/2026",
      "description": "During this 18‑day project I worked with a partner to implement a Small Language Model (SLM) in a Discord bot named Aeroguid. The bot acts as a virtual travel agency: it presents flight and accommodation suggestions, answers users’ questions, and, via tool calls, queries an unlimited database without saturating the model’s memory. After the bot succeeded, we built a simple web interface (HTML + CSS + JavaScript) for administering it; the JavaScript communicates with the port where Ollama hosts the model. We also provided a .sh auto‑install script that prepares the Python environment, downloads the Ollama models, creates the `.env` file containing all secret keys, and then launches the bot on the Discord server using the token. This project let us evaluate several models, analyze their performance and drawbacks, and deliver a qualitative, immediately usable Discord tool to the client.",
      "language": [
        { "Python": { "def": "Bot logic, calls to Ollama models, and Discord API", "url": "" } },
        { "Discord API": { "def": "Token management, events handling, and user interaction", "url": "" } },
        { "Ollama": { "def": "Hosting and execution of the SLM with unlimited tool calls", "url": "" } },
        { "HTML/CSS": { "def": "Structure and styling of the bot’s administration page", "url": "" } },
        { "JavaScript": { "def": "Real‑time communication between the front‑end and the model’s port", "url": "" } },
        { "Bash (.sh)": { "def": "Auto‑installation script for setting up the environment and dependencies", "url": "" } }
      ]
    }},

    {"under_block":{
      "title": "Alice's Adventures in Wonderland",
      "date": "16/03/2026-26/03/2026",
      "description": "During this 10‑day project I worked in a team to develop a Python script that summarizes books from the Project Gutenberg library. The script requests the books, parses the HTML with BeautifulSoup to extract chapters, streams the content for smoother processing, and provides a command‑line interface (CLI) for user interaction. The extracted text is then fed to a small NLP pipeline that generates concise summaries of each book.",
      "language": [
        { "Python": { "def": "Primary language and NLP processing", "url": "" } },
        { "HTML": { "def": "Source format analyzed with BeautifulSoup", "url": "" } },
        { "CLI": { "def": "Command‑line interface for streaming requests", "url": "" } }
      ]
    }},

    {"under_block":{
      "title": "Supermarket Business Insights – CSV Analysis and Modeling",
      "date": "02/03/2026-12/03/2026",
      "description": "In a 3‑person team we leveraged a large CSV dataset from a supermarket to answer eight business questions (e.g., which products are bought after chocolate, which items are placed first, etc.). We read and cleaned the CSV with pandas, visualized statistics and correlations using matplotlib, and built two linear regression models: one predicts the product most likely to be bought next from a customer ID, the other estimates the time (in days) before a customer’s next purchase. The experience reinforced my skills in exploratory analysis, data visualization, and predictive modeling on real data.",
      "language": [
        { "Python": { "def": "Primary language for processing, analysis, and modeling", "url": "" } },
        { "pandas": { "def": "CSV handling, cleaning, and data transformation", "url": "" } },
        { "matplotlib": { "def": "Creation of charts, histograms, and percentage diagrams", "url": "" } },
        { "scikit-learn": { "def": "Implementation and evaluation of two linear regressions", "url": "" } }
      ]
    }},

    {"under_block":{
      "title": "TARDIS – Modeling Train Delays for SNCF",
      "date": "23/02/2026-27/02/2026",
      "description": "The project was carried out in a 3‑person team: based on a large CSV file supplied by SNCF (columns: train_id, origin, destination, date, scheduled arrival time, delay, etc.) we built a linear‑regression model to estimate the number of delay minutes for a train from its route and the month of the year. The workflow included cleaning and enriching the data, feature‑engineering (extracting the month, encoding stations), training the model, evaluating and visualizing predictions. The experience deepened my skills in handling large datasets and predictive modeling with Python.",
      "language": [
        { "Python": { "def": "Primary language for data processing and modelling", "url": "" } },
        { "Jupyter Notebook": { "def": "Interactive environment used to explore the CSV, write code, and document steps", "url": "" } },
        { "pandas": { "def": "Library for cleaning, transforming, and analysing the CSV dataset", "url": "" } },
        { "scikit‑learn": { "def": "Implementation of linear regression and model evaluation tools", "url": "" } }
      ]
    }},

    {"under_block":{
      "title": "Data Bootcamp – Python & NoSQL Training",
      "date": "09/02/2026-23/02/2026",
      "description": "During two weeks this bootcamp focused on mastering Python (object‑oriented programming, best practices), using Jupyter Notebook for interactive development, and learning NoSQL with MongoDB. I performed several data‑analysis exercises such as working with the Iris dataset via pandas, which strengthened my ability to clean, transform, and visualise data. The experience gave me a deep understanding of the Python ecosystem and its main data‑science modules.",
      "language": [
        { "Python": { "def": "Primary language, used for business logic, class handling and analysis scripts", "url": "" } },
        { "MongoDB": { "def": "NoSQL database used via the official MongoDB‑Python driver for storage and queries", "url": "" } },
        { "pandas": { "def": "Data‑analysis library for manipulation, aggregation and visualisation of datasets", "url": "" } },
        { "Jupyter Notebook": { "def": "Interactive environment used to write, test and document Python code", "url": "" } }
      ]
    }}
  ],

  "Other Project": [
    {"under_block":{
      "title": "Development of an MVP Geo‑Located Social Network (inspired by HALO Voisin / Instagram)",
      "date": "05/01/2026-30/01/2026",
      "description": "For 25 days I completed a full project – from personas, competitor‑benchmarking, and user‑journey modelling, to UI/UX design on Figma (wireframes → mock‑ups → interactive prototype) – and developed a Minimum Viable Product (MVP) focused on content sharing and geolocation. The front‑end (HTML, CSS, JavaScript) reproduced the prototype and consumed a geolocation API. The back‑end was an Express.js (Node.js) server with dotenv, mysql2, jsonwebtoken and bcrypt for user management, authentication and secure password storage. The database is MySQL, managed via DBeaver CE. A third‑party geolocation API provided the GPS coordinates of the user’s device.",
      "language": [
        { "HTML": { "def": "I used HTML to structure the entire front‑end, including registration forms, login and profile photo section", "url": "" } },
        { "CSS": { "def": "CSS ensured a pleasant and aesthetic UX by styling and layouting the app according to modern standards", "url": "" } },
        { "JavaScript": { "def": "I implemented JavaScript to manage client‑side interactions and dynamically send data to the back‑end", "url": "" } },
        { "Express.js": { "def": "Back‑end server built with Express.js handled the app’s business logic: receiving data, processing it and communicating with the database", "url": "" } },
        { "API": { "def": "Integrating an external geolocation API allowed real‑time user geolocation and greatly improved the smoothness of data collection (e.g., storing the user’s current position)", "url": "" } },
        { "MySQL/DBeaver": { "def": "MySQL served as the data backbone; I used DBeaver to ensure intuitive management and validation of the data structure and entries", "url": "" } },
        { "Figma": { "def": "Figma structured the design phase, and I completed the whole design lifecycle: from wireframes to mock‑ups to interactive prototype, ensuring fidelity between the initial design and the final product", "url": "" } }
      ]
    }},

    {"under_block":{
      "title": "e‑Hack & Juice_",
      "date": "01/12/2025-19/12/2025",
      "description": "During these 19 days I carried out a two‑person cybersecurity project in which we were tasked with hacking and extracting flags from the online Juice Shop webstore. I used Burp Suite and the element inspector.",
      "language": [
        { "Burp Suite": { "def": "I used Burp Suite to view network traffic, see which requests were sent and manipulate them to potentially discover site vulnerabilities", "url": "" } },
        { "l’inspecteur d’éléments": { "def": "I used the element inspector to inspect the page’s HTML and JavaScript for hidden URLs", "url": "" } }
      ]
    }},

    {"under_block":{
      "title": "e‑Todo_",
      "date": "03/11/2025-28/11/2025",
      "description": "During these 25 days I was part of a team of 3 to build a web To‑Do list app. It runs with a back‑end that uses DBeaver CE for visualising MySQL, while the front‑end is built with CSS, HTML and JavaScript. The tools used were: Express.js, CSS, HTML, JavaScript, DBeaver CE.",
      "language": [
        { "Express.js": { "def": "I used Express for the back‑end with dotenv, env‑var management, mysql2 for MySQL DB manipulation, jsonwebtoken for tokens after login, and bcrypt for encrypting/decrypting passwords", "url": "" } },
        { "CSS,HTML,javascript": { "def": "Styling and server communication", "url": "" } },
        { "DBeaver CE": { "def": "I used DBeaver CE to get a more intuitive view of the MySQL database, checking whether the user was logged in, registered, etc.", "url": "" } }
      ]
    }},

    {"under_block":{
      "title": "Piscine web",
      "date": "13/10/2025-29/10/2025",
      "description": "During 16 days I completed a web‑development bootcamp. The languages I encountered were PHP, HTML, CSS and JavaScript.",
      "language": [
        { "PHP": { "def": "First steps toward the PHP language", "url": "" } },
        { "HTML": { "def": "First steps, then further study of the HTML language", "url": "" } },
        { "CSS": { "def": "First steps, then further study of the CSS language", "url": "" } },
        { "Javascript": { "def": "First steps, then further study of the JavaScript language", "url": "" } }
      ]
    }},

    {"under_block":{
      "title": "Piscine fondatrice Python",
      "date": "13/6/2025-10/6/2025",
      "description": "During this week I completed a Python bootcamp.",
      "language": [
        { "Python": { "def": "First steps toward the Python language", "url": "" } }
      ]
    }}
  ],

  "my expérience": [
    {"under_block":{
      "title": "Volunteer July 2025 at Saint‑Louis Medical Office, Reunion",
      "description_mor": [
        {
          "Observation": {
            "def": "Observation of the use of computers in a general medical office",
            "url": ""
          },
        }
      ]
    }},

    {"under_block":{
      "title": "Volunteer January 2025 and January 2024 at Le Duigou Racing, Rennes",
      "description_mor": [
        {
          "Préparation": {
            "def": "Preparation of the tires and engine of a Porsche race car",
            "url": ""
          }
        }
      ]
    }},

    {"under_block":{
      "title": "Volunteer January 2024 and January 2022 at Reech, Rennes",
      "description_mor": [
        {
          "Observation": {
            "def": "Team management and observation of a programmer’s work in an influencer agency",
            "url": ""
          }
        }
      ]
    }},

    {"under_block":{
      "title": "Intern November 2021 to December 2021 at REM Le Port, Reunion",
      "description_mor": [
        {
          "Gestion": {
            "def": "Participation in the management of a shelving company",
            "url": ""
          }
        }
      ]
    }},
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
