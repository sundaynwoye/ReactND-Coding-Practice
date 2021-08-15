### Instructions

**Task**: Modify this app to use Stateless Functional Components. Remember that for
performance reasons, if a compoenent doesn't need to hold state, we'd want to
make it a Stateless Functional Component.

This exercise will help you practice passing data into Stateless Functional Components.

And the `profiles` array has a combination of which users like which movies:

```js
const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  .
  .
  .
];
```

From this information, one of the list items might look like this:

> Jane Cruz's favorite movie is Planet Earth 1.
