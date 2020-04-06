# Semantics 

## Headings 
Headings allow users using screen readers to navigate within a page to get to what they are interested in viewing. e.g. what stories/ articles.
For the browser console to show all the heading in the dom.
So you have an idea on how assistive tech shows headings.
```js
for (var i = 0, headings = $$('h1,h2,h3,h4,h5,h6');
     i < headings.length; i++) {
   console.log(headings[i].textContent.trim() + " " +  
               headings[i].tagName,
               headings[i]);
}
```

Placing headings off screen for screen readers to help people, but not visible. 
This is helpful in complex designs where there may not be space to show headings, but don't good too overboard as that can make it harder to maintain and use.
```html
    <style>
        h2 {
            position: absolute;
            top: -999999px;
        }
    </style>
    <h2>Main navigation</h2>
```

## link anti-patterns
3 methods that can cause a screen reader to mis links
- anchor tag without href attr
- using a link like a button (something to click on that does something, but not to navigate), and having a href point to something insensible e.g. `href="#"` would be better to use a button tag and then style appropriately. 
- when we have an image used as link content `<a><img src="logo.svg" alt="company name"></a>` this make no sense to someone using a screen reader, to solve this you can use the `alt` attr to help.

Links should be descriptive enough so that a user can determine where they want to click on it. Avoid the `learn more` link instead use `learn more about such and such`. Or make the hearing `such and such` an link.

## Landmarks
HTML 5 introduced some new elements which help us to find the semantics of a region on a page rather than a single interactive element.

- main - the main content of the page, typically there should only be one of these
- header
- nav 
- article - self contained sections of content
- aside - content related to its sourounding, e.g. an aside in a article tag could be facts/ pull out notes, whereas and aside for a page is contextual to the page.
- section - completely generic of the document / application, as this does not describe what it is we typically addd a heading inside it.
- footer

## Summary 
key steps to make a web site more accessable
- sensible DOM order
- which help create a logical focus strategy
- which lays the ground work for a rich key board experience
- using built in semantics 
- labeling controls(form inputs, link) and images 
- using heading and landmarks to structure the page
- the importance of links in creating a rich interactive experience.

## Missing UI patterns
- the drop down menu
- the user need to know about this as soon as possible.
We will learning how to create these elements that HTML can't express itself.

## Roles
Screen readers will share these items when a user focuses
- What type of element it is (Role)
- Elements name
- current value
- current state

## Aria
CHeck out Aria roles
When implementing ARIA not the following will need to be add by us:
- element appearance 
- element behaviour
- focusing 
- keyboard event handling
 
> Always set the role where the tabindex is declared
> see aria design practices


