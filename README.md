# React Things

## Challenge
Create a ReactJS web application that displays a list of things, and allows creating new things.


## Architecture
* JavaScript
* ReactJS
* Creact React App
* npm



## Components
* App - root component
* Header - displays the current count of things
* Footer - some placeholder text
* ThingList - receive list of things as a prop, receives a function to call when a new thing is created. Displays an unordered list composed of ThingItem components. Display a form that allows creation of a thing
  - ThingItem - receive a name for the item as a prop, has a button to Delete item
  - ThingForm - adds a new ThingItem to end of list
