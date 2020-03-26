const Prism = require("prismjs");
const PrismLoader = require("./PrismLoader");
const HighlightLinesGroup = require("./HighlightLinesGroup");

/**
 *
 *  lang / 1,2,5-8
 *    highlight lines 1,2,5,6,7,8
 *
 *  lang / 1, 9 / 2-4,6
 *    add lines 1, 9
 *    delete lines 2,3,4,6
 */

module.exports = function(options = {}) {
  let plugin = function( str, language) {

    if(!language) {
      // empty string means defer to the upstream escaping code built into markdown lib.
      return "";
    }

    let split = language.split("/");
    if( split.length ) {
      language = split.shift();
    }

    let html;
    if(language === "text") {
      html = str;
    } else {
      html = Prism.highlight(str, PrismLoader(language), language);
    }

    let wickedPattern=/<\/span>\n<\/span>/g
    let goodReplacement='</span></span>\n'

    html.replace(wickedPattern, goodReplacement)

    let hasHighlightNumbers = split.length > 0;
    let highlights = new HighlightLinesGroup(split.join("/"), "/");
    let lines = html.split("\n").slice(0, -1); // The last line is empty.

    lines = lines.map(function(line, j) {
      if(options.alwaysWrapLineHighlights || hasHighlightNumbers) {
        let lineContent = highlights.getLineMarkup(j + options.numberingBase, line);
        return lineContent;
      }
      return line;
    });

    let lineNumbers = ""      // the "<span></span>" string that does the numbering
    if (options.showLineNumbers) {
      lineNumbers = `<span aria-hidden="true" class="line-numbers-rows">${new Array(lines.length + 1).join("<span></span>")}</span>`
    }

    let classNames = `language-${language}` +
                      (options.showLineNumbers
                        ? " line-numbers"
                        : "")
        //  the line-numbers CSS class shifts the lines right
        //  to make room for the line numbers

    let retStr = `<pre class="${classNames}">` +
                    `<code class="language-${language}">${lines.join("<br>")}` +
                    lineNumbers +
                  `</code></pre>`

    return retStr
  };

  return plugin;
};

