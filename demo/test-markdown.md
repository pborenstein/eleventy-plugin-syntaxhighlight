<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="../test.css">
    <link rel="stylesheet" href="../prism-theme.css">
  </head>
  <body>

```ts
function myFunction() {
  return true;
}
```

a naked things

```
            master
               |
C1---C2---C5---C6
      \         \
      C3---C4    C3'---C4'
           |           |
       ORIG_HEAD     topic
                       |
                     HEAD
```


js

```js
eleventyConfig.addCollection("articles",
  collection => collection
    .getAllSorted()
    .filter(item => item.url
                 && ! item.inputPath.includes('index.njk')
                 && item.inputPath.startsWith('./src/articles/')))
```

js

``` js
async getTaggedCollectionsData() {
  let collections = {};
  collections.all = this.createTemplateMapCopy(
    this.collection.getAllSorted()
  );
  debug(`Collection: collections.all size: ${collections.all.length}`);

  let tags = this.getAllTags();
  for (let tag of tags) {
    collections[tag] = this.createTemplateMapCopy(
      this.collection.getFilteredByTag(tag)
    );
    debug(`Collection: collections.${tag} size: ${collections[tag].length}`);
  }
  return collections;
}
```


a json thing

``` json/0-3
collections: {
  all: [ items ],
  categories: {
    Culture: [ items ],
    Life: [ items ],
    Thinking: [ items ]
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



a shell session

``` shell-session
$ git log --oneline --graph --decorate --all
* 703d475 (HEAD -> topic) C4'
* 3ffdcab C3'
* 6adbbb9 (master) C6
* 88f76a2 C5
| * ff2d8db (ORIG_HEAD) C4
| * c409bd6 C3
|/
* 1c74366 C2
* f50bc06 C1
```

A thingh



A thing

```typescript
function myFunction() {
  return true;
}
```

```js
function myFunction() {
  return true;
}
```

```js
let multilineString = `
  this is the first line
  this is the middle line
  this is the last line
`;
```

## Dash line

```js/-
let multilineString = `
  this is the first line
  this is the middle line
  this is the last line
`;
```

```js/1,3
let multilineString = `
  this is the first line
  this is the middle line
  this is the last line
`;
```

  </body>
</html>
