# -HACK_ELITE
# OneHealth - A Health Management Platform By The Hach_Elites For The GHCI Hackathon-2020

## Inspiration

The current medical procedures and data are non-digitized for an individual patient which has made the process of accessing the data cumbersome, complicated and prone to mistakes for the doctor, as the reports of patients are often misplaced.This leads to delay in correct medication and treatment.The idea is to create a **decentralized digital health ecosystem** where every citizen gets a Health ID, which will be key to access the repository of all the health-related information of a person, such as medical tests, previous prescriptions, diagnosis treatments, histotical health record along with the institutional bodies and medical organizations involved in the treatment and procedures. Every person/individual will have access to his/her medical history with one click along with the details of various transaction involved in the process. Also, having a decentralized medical history of a person will help the medical professionals and doctors especially while treating a new patient.

The system seeks to provide an efficient and affordable health coverage through a wide-range of data and infrastructure services. The key feature of this system is the technology part - it will leverage open digital systems to provide high-quality healthcare for all. It will integrate various digital health services to create an ecosystem which can assimilate existing health information systems.

The hospitals and medical organization will have access to the records of all the patients treated under them. Only a few authorized professionals will be given the access to add the entry, that too with an authorised ID given by govt. The data/medical history will be completely immutable. In this manner, no one  will be able to alter the information or data of medical history of a patient.This information can be accessed by health professionals by just a click.

This project is an effort to contribute to **Digital India** scheme of govt. whereby, we propose a solution to go completely paper-less as all the information of patient is stored over blockchain as well as local offchains of hospitals/govt officials for medical consideration.


## Practicability of the Idea

On August 15 2020, **Hon'ble Prime Minister of India, Shri Narendra Modi** declared draft policy for a cetralized health management system. The draft policy is part of **NDHM(National Digital Health Mission)**, aiming to digitalize the health sector to make it more secure and efficient. Under NDHM, govt announced that a **Unique Health ID** will be provided to every citizen which will contain details of their diseases, diagnoses, report, medication etc., in a common database through a single ID. This will essentially be a digitised version of all their health records. This digital database will be linked to the registry of doctors and health facilities across the country. 

### How will the Heath ID work?

The information about whatever medicine a doctor prescribed, when it was prescribed as well as what the reports were will be linked to a person’s health ID. It will be be like a digitised “swasth khata” (health book) for a patient and will contain details of their medical history, physicians consulted, tests done etc. 


## Implementation

* Design a blockchain where each node of chain represents the medical history of an individual mined against his/her HealthID.
* Blockchains will enable the storage of all data at a single place. This medical data can be added by legally licensed medical practitioners onto the chain.
* Interoperability of the blockchain system would mean that doctors can easily access a patient’s accurate medical history to better identify their health conditions and formulate a better and more specific operation process.
* A copy of individual health status shall be provided to patient, which is immutable.
* For the consideration of doctors/ medical health officers, a copy of this blockchain data will be availbale off-chain as well.
* This off-chain data shall be availble on local machines , that can be used for further analysis and prediction by doctors/medical officers.
* An interface will help doctors/medical officers to access off-chain data in a user-friendly manner.This will ensure an end-to-end application of blockchain based medical-data storage and usage right from pathology to the doctor/medical officer that too completely paper-less.


## How we built it

* The web application has been built using **HTML**, **CSS**, **JS**, **Express.js**.
* We used the Bootstrap Studio to design the frontend and styling our web application.
* We have used **MongoDB** to manage our off-chain back-end for this project.
* The blockchain is made using **Node.js** and **javascript**. This is later intergrated to **MongoDb** for off-chain access.
* Authentication in this app has been done using **Github OAuth** tokens. These are stateful and persist in the browser.

## Challenges we ran into

* Initially, we faced a lot of issues figuring out how to design the blockchain and backend of the application.
* But despite being quite advanced, blockchains are not easily intergratable to full-stack.
* Usage of blockchain in Medical science is very new to the world, so we found it really difficult to obtain resources for the same.

## Accomplishments that we're proud of

* This was our first time working with integration of MongoDB to Blockchain, which we are pretty pleased to have figured out successfully.
* While looking for the right resources to embed and implement the various functionalities was a challenging task, we were able to orchestrate a seamless experience with the functionalities we deemed essential for the MVP of the project.
* We implemented principles of secured databse connection to create a more meaningful user experience for our audience.

## What we learned

We learned how to:

* use MongoDb to provide off-chain access to blockchain and manage the back-end of the web app
* understanding the importance of Blockchain as a fututre technology,and its current limitation over full-stack.

## What's next for **OneHealth**

We have various ideas that we do intend to implement in OneHealth:

* Having a separate portal for hospitals and medical professionals
* Project boards in the mobile app
* Support for blockchain with large database
* Integration **Insurance application process**
* **Personalized recommendation system** for each individual based on machine learning algorithm
