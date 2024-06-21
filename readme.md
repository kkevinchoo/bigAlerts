# bigalerts

A full-page alert library.

## Installation

```sh
npm install bigalerts
```

## Example

```js
import FullPageAlert from "bigalerts";

const alert = new FullPageAlert({
  backgroundColor: "#ff0000",
  textColor: "#ffffff",
  animationDuration: 2000,
  autoHideDuration: 3000,
});

alert.show("This is a full-page alert!");
```
