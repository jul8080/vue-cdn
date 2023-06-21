#Using Vue from CDN
You can use Vue directly from a CDN via a script tag:

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

Here we are using unpkg, but you can also use any CDN that serves npm packages, for example jsdelivr or cdnjs. Of course, you can also download this file and serve it yourself.

When using Vue from a CDN, there is no "build step" involved. This makes the setup a lot simpler, and is suitable for enhancing static HTML or integrating with a backend framework. However, you won't be able to use the Single-File Component (SFC) syntax.