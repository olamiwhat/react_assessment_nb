# React Evaluation

## Set Up

- Clone this repository
- run `npm init` to install dependencies
- run `npm run start` to start the dev server

## Instructions

Recreate the functionality specified below. Refer to the images in `/docs` for recreating the styles

- Include the Google Font [Noto Sans](https://fonts.google.com/specimen/Noto+Sans?selection.family=Noto+Sans) in your project. Make this the default body font.
- Asynchronously fetch the data league player data from `http://my-json-server.typicode.com/nortenzio/leagueplayerstats/players`
- Create a main page with a `Favorites` section and an `Players` Section (see instructions below)
- Match the style in the provided images as closely as possible
- After 1 hour, zip of the content of your project *without* the `node_modules` directory and email to nortenzio@nba.com


### Players Section

- Sort the fetched json data by `pts` **descending**
- Within a `PlayerList` component
  - Render the sorted data as a table
  - Each row should be it's own component named `PlayerRow`

#### PlayerRow Component

- Render each of the stat fields (`pts`, `reb`, `ast`) to .X precision (ex `24.0`, instead of `24`)
- Each row should include an `Add to Favorites` Button
- Clicking `Add to Favorites` should add the specified player to a Favorites collection, which is rendered above the Player Table


## Favorites Section Component

- The favorites section should display the message "No Favorites Yet" if no favorites have been added
- Once favorites have been added, each should be rendered as a `Favorite` Component
- Beneath `750px`, each of the favorites should stack vertically. Above or equal to 750px, they should fit 2 per row.

#### Favorite Component

- Display the headshot of the player. The headshot url is the the `img` prop in the Player json data
- `Remove from Favorites` should remove the player from the favorites collection when clicked.