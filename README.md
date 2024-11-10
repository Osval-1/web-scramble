### Web-Scramble Documentation

web scramble is a web app which users can encode and decode words while having *Fun*
deployed at [Web-scramble](https://web-scramble.netlify.app/)

## Code structure

```
public
 ├── images
 └── svg
src
 ├── assets
 │   └── index.ts // for easy importtation of assests.
 │        └── ...
 │
 ├── components // The building blocks of the UI.
 │   ├──  Button //Basic Button to handle user interaction.
 │   │    ├── index.tsx
 │   ├── Tile  // Tile on which the game can interact on.
 │   │    ├── index.tsx
 │   │
 │   ├── InfoCard // component to display various informations of the various game sessions.
 │   │    ├── index.tsx
 │   └── ...
 │
 ├── pages
 │   ├── Game.ts // page where the game is played.
 │   ├── Setup.ts // page where the user is onboarded.
 │   ├── won.ts // page to be shown when the game is won.
 │
 │
 ├── utils // utility functions which are essential for running the game.
 │   ├── convert_to_binary.ts
 │   ├── create_game_instance.ts
 │   ├── create_game_progress.ts
 │   ├── flip_random_bit.ts
 │   └── roll_die.ts.
 │
 ├── store // redux store to handle our global state.
 │   ├── store.ts // where redux store is initialised.
 │   └── slices // where our slices of redux state are stored.
 │           └── gameSlice.ts  //the game state is magnaged in this slice.
 │
```

## Logic Implementation

- We collect the word to be encoded from the player.

- Create the board and tiles with the create game util from create_game_instance.tsfile which returns an array we can map our movements and tiles to and track using it's index.

- Encode the word generating its binary format, use the word to generate an array of objects which we use to track progress, initialise our redux store with starter values like currentPosition, create and start a timer.

- Use the roll die util to simulate a 6 side die which is used in navigating the board.

- Whenever we move,our index is persisted in the store and used to access the game array to get which type of tile we are on.

- Depending on the tile type,when the outline button is pressed, we trigger 3 methods

  1.  for the "e" type, we increase the energy value in the store,
  2.  for the "q" type, we increase the token type in the store,
  3.  for the flipbit type, we randomly flip a bit from the encoded binary and record that in the progress tracker and costs 1 token.
  4.  the empty string type , we hide the button.

- The win condition is achieved when the user has completely encoded and completed the progress tracker with the user then navigated to the Won screen with the option to replay.

## Technologies used and why

### Technologies

- React/Vite/Typescript
- ReduxToolkit
- React Router Dom
- Tailwind css

### why

- React is best because for an online interactive game,since Single Page Applications (SPA) are best because of their high interactivity and only need to be loaded once unlike normal websites or frameworks like Nextsjs which have to request from the server on mosts pages.

- Redux is used because it makes handling global state in multi page apps easy.

- React Router Dom is a navigation library to structure and route users for React.

- Tailwind css iis a utility first css framework that makes it easy to build responsive websites.

I judged there was no need for a backend server due to:

- The project has little amount of data and is mostly interactivety.
- There is no intergration with any third party APi's and Services.
- There is no critical user information collected so security is not a concern.
