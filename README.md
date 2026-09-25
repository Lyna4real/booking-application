# Booking App

A booking demo where visitors can reserve a session and see it appear live in an admin dashboard — no sign-in required to try it out.

## Demo

🔗 https://booking-application-theta.vercel.app/


## Features

- Visitors can book a session without creating an account
- Bookings appear in real time on the admin page
- Firebase backend with locked-down security rules (read/write restricted to prevent abuse)
- Basic protection against bot/traffic abuse

## Tech Stack
- Vite
- React (TypeScript)
- Firebase (Firestore + rules)
- Tailwind Css
- Vercel 


Note: the live bookings are disabled for now. Explanation in the "How it works section"

## How It Works

The booking form is supposed to write directly to Firestore. 
I restricted users from writing data in the security rules to protect my app from traffic abuse and bots and I've chosen to allow reading because there is no real data in my project (all data is generated with faker.js)
To take a look at the admin page, click on the user button.
To go back to the user interface page click on the virtual doctor's profile picture.
In the admin page, you can see how I retrieved data from firestore and I have also added a simple search bar to search names.
I kept it simple and minimalistic because I didn't want to waste too much time on it and I wanted to start freelance working as soon as possible.



## What's Next

As I sharpen my skills throughout the work I'll do, I will provide many modifications to this project, including a better layout, more admin features, and maybe even an authentication form.

