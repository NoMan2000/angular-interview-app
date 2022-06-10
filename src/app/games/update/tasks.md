# Update component tasks

- Create a form.
- The form should accept two values.  Player one's score and player two's score.
- The score should be numeric only.
- One person must have a score of 10.
- The second person can have a maximum score of 7.
- When submitted, this updates the storageService.
- On successful submission, this redirects the user to the home page.
- Should work on either of two routes:  `/games/{gameId}` or `/games/new`
- If an id is passed in, then the component should display the information for that game.
- Updates should use the `StorageService` to make the updates and get the current information.
