Date Carousel
=====================================
### Author // Claire Quest // 02/11/2016

Summary
-------
The original carousel plugin can be forked here: https://github.com/specious/cloud9carousel
This is a jquery plugin with js configuration & constructor to make it a unique date carousel.

### Key features
Date object
Multi-language query parameter for dynamic links
Rearranged by date
Strip links greater than given date

### What it is for
This uses the cloud9 carousel plugin which I have created a collection of new configuration to rearranged the elements within the dom and reorder the carousel based on a given date.

#### Date object, sorting & Dom manipulation 
I have a date object that I loop through checking the id on the html elements and reordering them based on today's date and dates associated with the date object ids
I then remove from the DOM any urls that are greater than the current date if valid so that they are not clickable

#### URL Token & Multi-language query
I pass the following parameter through eg: index.html?domain=se changing based on the domains - I run through the URL object and find [urlToken] and replace it with the correct domain as listed in the object key - making the urls dynamic for multi-language
