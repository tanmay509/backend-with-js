This is a very simple project that connects our React frontend with our Express backend server.

In this project I learnt about CORS. It's a security mechanism of the browser, so that two different websites with different origins cannot read each other's data.

That's why my initial React frontend could not get the user data from my Express server, since both are running on port 5178 and port 3000.

The solution was fairly easy: I just had to install the cors library and whitelist the ports. Which I shouldn't do — I should only whitelist my React port.

Another option was using a proxy in React's config file. I will try that in my next project.

