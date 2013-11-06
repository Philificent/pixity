Pixity Core
======
![Pixity Logo](https://github.com/dutsonpa/pixity/blob/master/images/logo.png?raw=true "Pixity - responsive image replacement utility")

Pixity is a tool developed to ease the pain of creating a mobile site with responsive/art-directed imagery. Pixity is currently available as a jQuery plugin. There are several iterations of Pixity in development (Pixity Slider, Pixity 2x, etc), but this is the original core project. Using pixity is a fairly simple and straight-forward process that is built on some emerging HTML5 spec for handling multiple images within the same element.
+   Add a class of "pixity" to your images
+   Add a data-attribute of data-img with the path to your image
+   Add a data-attribute of data-sm with your image for small screens
+   Add a data-attribute of data-md with your image for medium screens
+   Add a data-attribute of data-lg with your image for large screens
+   Add a data-path with the path to where your images are stored
+   Set the src property to a placeholder (I use a 1x1 pixel for bandwidth)

###Usage
Include jQuery (tested with 1.7+) as well as the pixity jQuery plugin:
```html
<!-- be responsible when including these, before the closing body element is great -->
<script src="javascript/jquery-1.7.min.js"></script>
<script src="javascript/pixity.min.js"></script>
```
Now set up your img element with some data-attributes:
```html
<img class="pixity" src="images/placeholder.gif" alt="Pixity test" data-path="images/" data-sm="small.png" data-md="medium.png" data-lg="large.png" />
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
limitSm: 479 // the upper pixel limit for small images
limitMd: 767 // the upper pixel limit for medium images - anything higher loads the large image
```
To change options, you pass them in the call to pixity in JSON format:
```javascript
$.pixity({limitSm:700,limitMd:959});
```
###Todo
+ It would be cool to add a ratio calculation to use the padding trick to placehold where the image will load
+ lazy-loading of images on the page would be a nice addition

####Version
Current Version:
Pixity Core v1.131105 - initial public release

Previous Relases:
*None that were public*

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