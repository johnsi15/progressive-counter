# Progressive counter
Design and customize progressive counters in your web applications using the ProgressiveCounter component in React.js. This flexible component allows you to create numerical counters that increment gradually, adding a dynamic touch to your interfaces.

With ProgressiveCounter, you can control the visual style of your counter by passing style classes to perfectly adapt it to your application's design. Simplify the creation of interactive and engaging experiences for your users with this versatile and easy-to-use counter component.

## General information

* **Customizable values:** The component allows users to pass both the initial and final values of the counter, providing them with flexibility to tailor it to their specific needs.
* **HTML element flexibility:** Users can specify the type of HTML element they want to use as the container for the counter. By default, a div is used, but users can choose other elements based on their design requirements.
* **Smooth animation:** The counter utilizes an easeOutCubic animation, which provides a smooth and natural transition between counter values, enhancing the user experience.
* **Optimized performance:** The component is designed to have good performance, ensuring a seamless experience for users without sacrificing page loading speed.
* **Lightweight:** The component size is only 1.2kb, making it lightweight and resource-efficient, contributing to fast page loading and agile user experience.

> The package solves the problem of implementing customizable progressive counters in web applications using React.js. It offers an easy-to-use and flexible solution that saves developers time by simplifying the creation of dynamic numerical counters in their projects.


> The objective of this package is to provide developers with an easy and flexible way to add customizable progressive counters to their web applications using React.js. It allows for the creation of dynamic numerical counters that increment gradually, enhancing the user experience and adding interactivity to the application interfaces. With this package, the goal is to simplify the process of implementing progressive counters, saving developers time and effort.


## Technologies used
* JavaScript
* React.js
* TypeScript
* Jest

## Features

* Full customization
* Support for different number formats
* Ease of integration
* Multiple counters on one page
* Browser compatibility
* Performance optimization
* Comprehensive documentation

## Setup

**Package installation:**
Install the package using `npm or yarn`.

**Component import:** 
Import the ProgressiveCounter component in their code file where they want to use it.

**Initial values definition:** 
Set the initial and final values of the counter, as well as other configuration options as needed.

**Component rendering:** 
Render the **ProgressiveCounter** component in their UI using JSX.

**Optional customization:** 
Customize the style and behavior of the counter by passing style classes and other configuration options to the component.

## Install

Install the package using **npm**: 
```js
npm install progressive-counter
```
Or install it using **yarn**:
```js
yarn add progressive-counter
```
Import the **ProgressiveCounter** component into your `React.js` project: 

```js
import { ProgressiveCounter } from 'progressive-counter';
```

## Usage

Now that you have imported the **ProgressiveCounter** component, you can use it within your React components. Simply include the `<ProgressiveCounter />` JSX tag in your render function or functional component, passing the necessary props:

```jsx
<ProgressiveCounter initialValue={0} finalValue={100} />
```

**Initial Values:**

When using the **ProgressiveCounter component**, you need to define the initial and final values for the counter as props. These values determine the starting and ending points of the counter animation. 

**Optional Customization:**

The ProgressiveCounter component supports customization through various props. You can customize the appearance and behavior of the counter by passing additional props such as **CSS classes**, animation styles, or other configuration options. 

**Interacting with the Counter:**

Once the ProgressiveCounter component is rendered, it will start animating from the initial value to the final value. You can interact with the counter by updating its props dynamically in response to user interactions or application logic.


## API

`ProgressiveCounter(initialValue: number, finalValue: number)`

Creates an instance of **ProgressiveCounter** with an initial value and a final value.

`initialValue`: The initial value of the counter.

`finalValue`: The final value of the counter.

Optional values for the component:

`duration`: Specifies the duration (in milliseconds) of the counter animation.

`decimals`:  Determines the number of decimal places to display in the counter.

`delay`: Sets the delay (in milliseconds) before the counter animation starts after it becomes visible on the screen.

## Project Status

In progress

## Features that can be added

* **Screen visibility detection:** Add the ability to detect when the counter becomes visible on the user's screen. This could be useful for starting the counter animation only when it's visible to the user, which could improve page performance.
* **Interactive counter:** Allow the counter to be interactive, so users can click on it or drag it to manually adjust the value.
* **Custom animations:** Provide options for custom animations such as bounce, fade, shake, etc., that users can select according to their preferences.

## Acknowledgement

I would like to extend my heartfelt thanks to midudev, whose insightful video on a related topic about counters served as the inspiration behind the creation of this package.

## Contribution
If you find a bug or have an idea to improve this package, feel free to contribute! You can open an issue to report problems or open a pull request with your enhancements.

## License
This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.


## Contact

[Linkedin](https://www.linkedin.com/in/jandreys15)
[GitHub](https://github.com/johnsi15)
[Facebook](https://www.facebook.com/johnserranodev)