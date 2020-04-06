# Accessability styles

## Styling 
- making focus outline: 0 is a major anti pattern.
- one alternative would be to give focused objects the same style as if they were hovered.
- can use box-shadow over outline
- don't just rely on colour 
```css
    radio:focus::before {
        outline: 1px solid #333;
    }
```

## Buttons 
- mouse shows no focus as they don't need it, however this is not always the case in some browsers. 
- keyboard should show focus 

TODO: make a JS feature that manages this.

## States
In css it is common to use css classes to define states e.g. `.hidden`
but in the case of aria states we can use them as selectors.
```css
    /* this saves us creating a css class */
    .toggle[aria-pressed="true"] {
        ...
    }
```


## Responsive - zooming
- minimum touch target size is around 48dp (px) device pixels
- you can add padding to compensate if the visual part of the target is small.
- try to ensure there is 32dp margin around the touch target to ensure it does not overlap with other touch targets.

## Seque to Color & Contrast
- minimum contrast of 4.5 :1 (body)
- large text 3 : 1

using dev tools 
- run audit 
- inspect element 
- look at accessability properties/ ADT properties


## Don’t convey info with color alone
always add an additional indicator to convey the message: e.g. icon or underline or message
https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl?hl=en-US

### Supporting high contrast
best to give it a once over with this tool
- https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph?hl=en

### Criteria for change
- How frequently is it used?
- how badly does it affect your customer / users?
- how expensive will it be to fix?
