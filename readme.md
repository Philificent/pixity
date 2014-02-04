Pixity Core
======
![Pixity Logo](https://github.com/dutsonpa/pixity/blob/master/images/logo.png?raw=true "Pixity - responsive image replacement utility")

Pixity is a tool developed to ease the pain of creating a mobile site with responsive/art-directed imagery. Pixity is currently available as a jQuery plugin. Using pixity is a fairly simple and straight-forward process that is similar to some emerging HTML5 specs for handling multiple images within the same element.

TL;DR:

+   Add a class of "pixity" to your images
+   Add a data-attribute of data-img with the path to your image
+   Add a data-attribute of data-sm with your image for small screens
+   Add a data-attribute of data-md with your image for medium screens
+   Add a data-attribute of data-lg with your image for large screens
+   Add a data-attribute of data-xl with your image for extra large screens
+   Add a data-attribute of data-path with the path/URL to where your images are stored
+   Set the src property to a placeholder (I use a 1x1 pixel for bandwidth)

###Usage
Include jQuery (tested with 1.7+) as well as the pixity jQuery plugin:
```html
<!-- be responsible when including these, before the closing body element is great -->
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="javascript/pixity.min.js"></script>
```
Now set up your img element with some data-attributes:
```html
<img class="pixity" 
    src="images/placeholder.gif"
    alt="Pixity test"
    data-path="images/"
    data-sm="small.jpg"
    data-md="medium.jpg"
    data-lg="large.jpg"
    data-xl="xlarge.jpg" />
```

Call pixity in your .ready(), or from a deferred function:
```javascript
$(document).ready(function() {
    $.pixity();
});
```
###Options
The following options (with listed defaults) can be changed to fit your needs.
```javascript
imgClass: 'pixity' // the class that pixity will look for and execute on
limitSm: 480 // the upper pixel limit for small images (0-480)
limitMd: 768 // the upper pixel limit for medium images (480-768)
limitLg: 960 // the upper pixel limit for large images (768-960) anything higher will load extra large images
```
To change options, you pass them in the call to pixity in JSON format:
```javascript
$.pixity({limitSm:600,limitMd:959,limitLg,1280});
```
###Todo
+ It would be cool to add a ratio calculation to use the padding trick to placehold where the image will load

####Version
Current Version:
v 1.140204 - Added extra large screen support

Previous Relases:
v1.131105 - initial public release

####License
The MIT License (MIT)

Copyright (c) 2013 dutsonpa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.