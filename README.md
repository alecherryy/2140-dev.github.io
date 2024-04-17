# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Evaluations
### How much time did you end up spending on it?
I ended up spending 6-7 hours on it. Mostly because of later refactoring and general clean-up of the code. I also spent some time playing with styling, because I personally enjoy working with SCSS.

### What are some of the design decisions you made?
I took inspiration from some of the other currency exchange sites and decided to have default values  already on first load; in this case, I chose EUR to USD. Additionally, I thought a basic, yet convenient feature would be a "Reverse/Swap" button to quickly and easily reverse the direction of the exchange rate.
Lastly, I did some reading and noticed the standard graph to represent exchange rates over time is a candlestick graph, so I decided to use this and not change the default green/red colors, since they are standard practice.

### What do you like about your implementation?
I like the use of React Hook form, it helps updating and managing input values; plus, I can easily access the form values from the parent component through the `useForm()` hook and pass them down to its children. I am also satisfied with the way I was able to organise the code. The `Result` and `FXChart` component are completely independent from one another and are in charge of calling their own API endpoints; any changes, deletions or improvements to one component will have no impact on the other.

### What would you improve next time?
I would definitely implement a more detailed and comprehensive error handling solution. I would also add a loader or some kind of UI element to let users know the data is being fetched. Lastly, I think it'd be nice to format the exchange rate float according to each user's local settings, i.e. 4.56 for US users and 4,56 for Europeans.
