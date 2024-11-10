### Web-Scramble Documentation
web scramble is a web app deployed at web
## Code structure

```
public
 ├── images
 └── svg
src
 ├── assets
 │   └── index.ts // for easy importtation of assests
 │        └── ...
 │
 ├── components // The building blocks of the UI
 │   ├──  Button //Basic Button to handle user interaction
 │   │    ├── index.tsx
 │   ├── Tile  // Tile on which the game can interact on
 │   │    ├── index.tsx
 │   │
 │   ├── InfoCard // component to display various informations of the various game sessions
 │   │    ├── index.tsx
 │   └── ...
 │
 ├── pages
 │   ├── Game.ts // page where the game is played
 │   ├── Setup.ts // page where the user is onboarded
 │   ├── won.ts // not implemented
 │
 │
 ├── utils // utility functions which are essential for running the game
 │   ├── convert_to_binary.ts
 │   ├── create_game_instance.ts
 │   └── roll_die.ts
 │
 ├── store // redux store to handle our global state
 │   ├── store.ts // where redux store is initialised
 │   └── slices // where our slices of redux state are stored
 │           └── gameSlice.ts  //the game state is magnaged in this slice
 │
```
