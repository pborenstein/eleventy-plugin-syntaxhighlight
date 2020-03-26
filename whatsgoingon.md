# What's going on with tables?

## What happens

### Initial MD string

```
| State         | Capital |
| :------------ | :------ |
| New York      | Albany  |
| Nebraska      | Lincoln |
| New Hampshire | Concord |
```

### After `Prism.highlight(str, PrismLoader(language), language)`

```
<span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> State         </span><span class="token punctuation">|</span><span class="token table-header important"> Capital </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">:------------</span> <span class="token punctuation">|</span> <span class="token punctuation">:------</span> <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> New York      </span><span class="token punctuation">|</span><span class="token table-data"> Albany  </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> Nebraska      </span><span class="token punctuation">|</span><span class="token table-data"> Lincoln </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> New Hampshire </span><span class="token punctuation">|</span><span class="token table-data"> Concord </span><span class="token punctuation">|</span>
</span></span>
```


### After `html.split("\n").slice(0, -1)`

```
[
  "<span class=\"token table\"><span class=\"token table-header-row\"><span class=\"token punctuation\">|</span><span class=\"token table-header important\"> State         </span><span class=\"token punctuation\">|</span><span class=\"token table-header important\"> Capital </span><span class=\"token punctuation\">|</span>",
  "</span><span class=\"token table-line\"><span class=\"token punctuation\">|</span> <span class=\"token punctuation\">:------------</span> <span class=\"token punctuation\">|</span> <span class=\"token punctuation\">:------</span> <span class=\"token punctuation\">|</span>",
  "</span><span class=\"token table-data-rows\"><span class=\"token punctuation\">|</span><span class=\"token table-data\"> New York      </span><span class=\"token punctuation\">|</span><span class=\"token table-data\"> Albany  </span><span class=\"token punctuation\">|</span>",
  "<span class=\"token punctuation\">|</span><span class=\"token table-data\"> Nebraska      </span><span class=\"token punctuation\">|</span><span class=\"token table-data\"> Lincoln </span><span class=\"token punctuation\">|</span>",
  "<span class=\"token punctuation\">|</span><span class=\"token table-data\"> New Hampshire </span><span class=\"token punctuation\">|</span><span class=\"token table-data\"> Concord </span><span class=\"token punctuation\">|</span>"
]
```

### Why `</span>` at the beginning of L2-3?

<span class="token table">
  <span class="token table-header-row">
    <span class="token punctuation">|</span>
    <span class="token table-header important"> State         </span>
    <span class="token punctuation">|</span>
    <span class="token table-header important"> Capital </span>
    <span class="token punctuation">|</span>%%%%
  </span>
  <span class="token table-line">
    <span class="token punctuation">|</span>x
    <span class="token punctuation">:------------</span>x
    <span class="token punctuation">|</span>b
    <span class="token punctuation">:------</span>b
    <span class="token punctuation">|</span>%%%%
  </span>
  <span class="token table-data-rows">
    <span class="token punctuation">|</span>
    <span class="token table-data"> New York      </span>
    <span class="token punctuation">|</span>
    <span class="token table-data"> Albany  </span>
    <span class="token punctuation">|</span>%%%%
    <span class="token punctuation">|</span>
    <span class="token table-data"> Nebraska      </span>
    <span class="token punctuation">|</span>
    <span class="token table-data"> Lincoln </span>
    <span class="token punctuation">|</span>
    <span class="token punctuation">|</span>
    <span class="token table-data"> New Hampshire </span>
    <span class="token punctuation">|</span>
    <span class="token table-data"> Concord </span>
    <span class="token punctuation">|</span>
  </span>
</span>
