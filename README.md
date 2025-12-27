---

# mismo

![Build status](https://img.shields.io/badge/build-passing-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue)

A lightweight utility that finds the degree of similarity between two strings using **Dice’s Coefficient**.
This algorithm is often more intuitive than Levenshtein distance for natural-language comparison.

> **Note:**
> `mismo` is a maintained fork of the original `string-similarity` library by Ace Aakash.
> Code is licensed under MIT, with attribution retained as required.

---

## Table of Contents

* [Usage](#usage)

  * [Node.js](#for-nodejs)
  * [Browser](#for-browser)
* [API](#api)

  * [compareTwoStrings(string1, string2)](#comparetwostringsstring1-string2)
  * [findBestMatch(mainString, targetStrings)](#findbestmatchmainstring-targetstrings)
* [Release Notes](#release-notes)
* [License](#license)

---

## Usage

### For Node.js

Install:

```bash
npm install mismo --save
```

Use in your code:

```javascript
const stringCompare = require("mismo");

const similarity = stringCompare.compareTwoStrings("healed", "sealed");
// similarity → 0.8

const matches = stringCompare.findBestMatch("healed", [
  "edward",
  "sealed",
  "theatre",
]);
// matches → { ratings: [...], bestMatch: {...}, bestMatchIndex: ... }
```

---

### For browser apps

Use the UMD build:

```html
<script src="//unpkg.com/mismo/umd/mismo.min.js"></script>
<script>
  stringCompare.compareTwoStrings("what!", "who?");
</script>
```

This exposes a global variable **`stringCompare`**.

> **Tip:** For case-insensitive comparison, you can convert strings to lowercase before comparing:
>
> ```js
> stringCompare.compareTwoStrings(str1.toLowerCase(), str2.toLowerCase());
> ```

---

## API

### compareTwoStrings(string1, string2)

Returns a number between **0 and 1** representing similarity (0 = completely different, 1 = identical).
Comparison is **case-sensitive** by default.

#### Arguments

1. `string1` *(string)*
2. `string2` *(string)*

Order does not matter.

#### Returns

`number` – similarity score between 0 and 1.

#### Examples

```javascript
stringCompare.compareTwoStrings("healed", "sealed");
// → 0.8

stringCompare.compareTwoStrings(
  "Olive-green table for sale, in extremely good condition.",
  "For sale: table in very good condition, olive green in colour."
);
// → 0.6060606060606061
```

---

### findBestMatch(mainString, targetStrings)

Compares `mainString` against each string in `targetStrings`.

#### Arguments

1. `mainString` *(string)*
2. `targetStrings` *(Array<string>)*

#### Returns

An object:

```js
{
  ratings: [
    { target: "abc", rating: 0.5 },
    { target: "def", rating: 0.2 },
    ...
  ],
  bestMatch: { target: "abc", rating: 0.5 },
  bestMatchIndex: 0
}
```

#### Example

```javascript
stringCompare.findBestMatch(
  "Olive-green table for sale, in extremely good condition.",
  [
    "For sale: green Subaru Impreza, 210,000 miles",
    "For sale: table in very good condition, olive green in colour.",
    "Wanted: mountain bike with at least 21 gears."
  ]
);
```

---

## Release Notes

### 1.0.0 — Initial mismo release

* Forked from original `string-similarity`
* Renamed and repackaged under `mismo`
* Updated documentation and cleaned API references
* Preserved MIT license and attribution

---

## License

MIT — includes original copyright notice from
**aceakash/string-similarity**.

---