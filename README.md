## Authentication with Google OAuth 2.0

### The OAuth Flow

We'll see three different columns which are Client, Server, and Google. The client column is an action which is referring to the browser or users. This is place users click around and do something. Next is the server column where contains all of the logic layers we will put together to represent how our server is running. Finally, the Google column is responsible for authentication.

![The OAuth Flow](https://p142.p3.n0.cdn.getcloudapp.com/items/lluJBP0w/Image%202020-07-26%20at%2010.55.23%20PM.png)

When the client clicks on the button, namely Login with Button, the browser will redirect the login request to the address localhost:5000/auth/google and take that request forwarding to Google at google.com/auth?appId=123.

After the user has been sent to Google, they will receive messages that are normal questions for granting permission to let the services have access to your profile or an email. Then, Google will automatically redirect the user back to the localhost:5000/auth/google/callback?code=456 address.

The app will put the user on hold and take the code from the received URL, then send a new request with 'code' included to ensure the data origin authentication of our application. Thanks to this code, we can prompt Google to send some specific user details and make a new record in the database. After that, we will do some stuff relating to cookies to uniquely identify this user in a follow-up request.

In this section, we will use a helper library called [PassportJS](http://www.passportjs.org/) to create the authentication function. There are libraries we need to install:

- Passport: The general module contains logic layers that handle authentication in the Express server.
- Passport Strategy: Helpers for authenticating with a specific provider (Google, Facebook, etc.).
