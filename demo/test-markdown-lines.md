<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="../test.css">
    <link rel="stylesheet" href="../prism-theme.css">
  </head>
  <body>



Backquotes

``` js/2
let foo = `tick tock`
let bar = `times up`
```

Backquotes for `tick tock` spread over two lines

``` js/2
let foo = `tick
tock`
let bar = `times up`
```



a json thing

``` json/1
collections: {
  "all": [ items ],
  "categories": {
    "Culture": [ items ],
    "Life": [ items ],
    "Thinking": [ items ]
  }
}
```

json add/del

```json/1-3,5/9,11
{
  "all": [...],
  "nav": [...],
  "books": [
    {
      "inputPath": "./src/articles/finding-oz.md",
      "outputPath": "_site/articles/finding-oz/index.html",
      "fileSlug": "finding-oz",
      "data": {...},
      "date": "2009-08-07T13:52:12.000Z",
      "url": "/articles/finding-oz/",
      "templateContent": "<p>As with most books ... much about The Wizard of Oz</li>\n</ul>\n",
      "template": {...}
    },
    ...
  ],
  "programming": [...],
}
```
  </body>
</html>
