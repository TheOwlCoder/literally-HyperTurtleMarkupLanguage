# Hyper Turtle Markup Language
Create custom HTML (Hyper Turtle Markup Language) elements with ease!
___
This Javascript library allows you to create custom HTML elements way easier than the official API.
This is unrelated to the concept [HyperTurtleMarkupLanguage](https://www.html6.network/), but while creating this project. I remembered this is literally the "purpose" of that project.

# How to use
Basically, you create a file in your directory called ``index.htmlp`` (stood for HTML Plus, you can use any name as long as you update it accordingly in the library) and an html file with the only contents being ``<body><script src="(directory)/plus.js"></body>``.

You add the tag names of the custom elements in the array ``customElements`` located on line 42 (tag names have to be uppercase because Javascript hates you), and to define these custom elements you must create a function called ``CE(the custom tag name, again uppercase)`` with only one parameter. It does not matter the name of the parameter, but I personally use ``e``. The parameter is the element, with it's attributes and innerHTML, and you would accordingly use the parameter as such (eg. e.getAttribute or e.innerHTML)

**Links:**
https://theowlcoder.github.io/literally-HyperTurtleMarkupLanguage/
https://plus-html.netlify.app/
___

## Why?
I was bored

## When?
Right now

## How?
Javascript DOMParser fuckery

## Where?
Stop asking questions
