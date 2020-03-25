const test = require("ava");
const md = require("markdown-it");
const markdownPrismJsOptions = require("../src/markdownSyntaxHighlightOptions");

test("Test Markdown Highlighter", t => {
  let mdLib = md();
  mdLib.set({
    highlight: markdownPrismJsOptions({ alwaysWrapLineHighlights: true })
  });
  t.is(mdLib.render(`\`\`\`js
alert();
\`\`\``).trim(), `<pre class="language-js"><code class="language-js"><span class="highlight-line"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></code></pre>`);
});

test("Test Markdown Highlighter No Line Highlights", t => {
  let mdLib = md();
  mdLib.set({
    highlight: markdownPrismJsOptions()
  });
  t.is(mdLib.render(`\`\`\`js
alert();
\`\`\``).trim(), `<pre class="language-js"><code class="language-js"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>`);
});

test("Test Markdown Highlighter Line Numbers", t => {
  let mdLib = md();
  mdLib.set({
    highlight: markdownPrismJsOptions({ alwaysWrapLineHighlights: true,
      showLineNumbers: true,
      numberingBase: 0 })
  });
  t.is(mdLib.render(`\`\`\`js
alert();
\`\`\``).trim(), `<pre class="language-js line-numbers"><code class="language-js"><span class="highlight-line"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre>`);
});

test("Test Markdown Highlighter Numbering Base 0", t => {
  let mdLib = md();
  mdLib.set({
    highlight: markdownPrismJsOptions({ alwaysWrapLineHighlights: true,
      showLineNumbers: true,
      numberingBase: 0 })
  });
  t.is(mdLib.render(`\`\`\`js/1-2
line a
line b
line c
\`\`\``).trim(), `<pre class="language-js line-numbers"><code class="language-js"><span class="highlight-line">line a</span><br><mark class="highlight-line highlight-line-active">line b</mark><br><mark class="highlight-line highlight-line-active">line c</mark><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span></span></code></pre>`);
});

test("Test Markdown Highlighter Numbering Base 1", t => {
  let mdLib = md();
  mdLib.set({
    highlight: markdownPrismJsOptions({ alwaysWrapLineHighlights: true,
      showLineNumbers: true,
      numberingBase: 1 })
  });
  t.is(mdLib.render(`\`\`\`js/1-2
line a
line b
line c
\`\`\``).trim(), `<pre class="language-js line-numbers"><code class="language-js"><mark class="highlight-line highlight-line-active">line a</mark><br><mark class="highlight-line highlight-line-active">line b</mark><br><span class="highlight-line">line c</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span></span></code></pre>`);
});

// test("Test Markdown Highlighter Block Comment", t => {
//   let mdLib = md();
//   mdLib.set({
//     highlight: markdownPrismJsOptions({ alwaysWrapLineHighlights: true })
//   });
//   t.is(mdLib.render(`\`\`\`js
// /*
//  * this is a string
//  */
// \`\`\``).trim(), `<pre class="language-js"><code class="language-js"><span class="token comment"><span class="highlight-line">/*</span><br><span class="highlight-line"> * this is a string</span><br><span class="highlight-line"> */</span></span></code></pre>`);
// });

// TODO this still ain’t working right with the line highlighter.
// test("Test Markdown Highlighter GraphQL Example", t => {
//   let mdLib = md();
//   mdLib.set({
//     highlight: markdownPrismJsOptions({ alwaysWrapLineHighlights: true })
//   });
//   t.is(mdLib.render(`\`\`\`js
// var schema = buildSchema(\`type Query {
//   hello: String
// }\`);
// \`\`\``).trim(), ``);
// });
