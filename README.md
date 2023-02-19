<div align="center">
  <h1>JavaScript Sliding Puzzle :closed_book:</h1>
  <strong>By Jamie Barlow</strong>
</div>

## Purpose / Background :bulb:

- This project was inspired by some recent collaboration with a graphic designer, whose brief was to present a landing page for a healthcare organisation in an interactive, eye-catching and educational way. We thought that the sliding puzzle would be a great feature to include, as the format is immediately recognisable and intuitive to many users, while offering a creative and interesting way of displaying information that would easily grab their attention.
- The board would shuffle visually as the user opens the page, after initially displaying the 'solved' version to indicate how the completed puzzle should look. Under each tile, a relevant fact would then be presented (see example below), as the user clicks to move the tiles around. The aim is to hold the user's interest while they attempt the puzzle, but also to not lock the user out of any key element of the experience, by making this dependent on them finishing the puzzle (which can be surprisingly difficult!) - completion is very much an optional 'bonus' (with a small reward).
- The puzzle was initially built using JavaScript's canvas API (no libraries), which allows an image to be split into smaller 'tiles' and then redrawn as required, without needing to manually slice the image beforehand. This has proven a great way to increase my familiarity with the creative potential and practical application of the API, which should be extremely useful in further creative projects - while also offering good overall practice with implementing problem-solving logic in a design context.
- To help implement some extra functionality (such as the visual auto-shuffle on page load), simplify the code somewhat, and overcome some of the project's design challenges (e.g. potentially unsolvable puzzles), I redesigned/refactored this using the p5.js library, which uses many canvas API features under the hood. The original puzzle can be found at the repository [here](https://github.com/JamieBarlow/sliding-puzzle).

![Product brief](https://github.com/JamieBarlow/sliding-puzzle-p5/blob/main/tile-puzzle-pitch.png)

## Features :heavy_check_mark:

- The puzzle design is flexible - you can use any image, which is automatically cut and shuffled, without the need to manually create individual 'tile' assets.
- The board length and width can also be defined as needed, using a single variable - so a size of e.g. 2 x 2, 3 x 3 or greater (depending on how challenging it needs to be!).
- The puzzle can be reshuffled using the included 'reshuffle' button. (This is an optional extra for testing purposes, and would not be part of a final page design).
- The randomization factor is attached to a variable which can increase/decrease how much 'shuffling' occurs at the start.

## Technologies :floppy_disk:

- HTML
- JavaScript
- p5.js (JavaScript library)
- Git Version Control

## Development Challenges :wrench:

- In the course of designing and testing the puzzle, I learned that in some cases, randomized tile placement meant the puzzle was actually unsolvable. The solution involves starting with a completed puzzle, and creating a shuffle function which randomly 'moves' the pieces around from their starting position, only within the blank/empty space (as opposed to simply placing them in random positions on the board). This requires a greater amount of randomization, because there are fewer possibilities for movement on each iteration, but crucially does ensure that the puzzle is not broken - which was the key aim. This is the key difference between the current iteration of the puzzle, using p5.js, and the previous version.

## Upcoming features :hourglass:

- Smooth tile slide / shuffle animations
- Information displayed on 'blank' tiles

## License :scroll:

- [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)
