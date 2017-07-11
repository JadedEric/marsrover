# Mars Rover
Mars Rover is a well known coding kata, with the aim to show basic coding skills and has been around for many years.

The aim of the kata is to develop an algorith which utilizes small text-based commands to move the rover on Mars, as the distance between control room on Earth and Mars is so vast, sending large packets will result in unexpected behaviour, or no behaviour at all.

# Problem Statement

The problem statement for the Mars Rover kata has been modified over the years to either fit an interview questionnaire or to make the implementation feel more surreal. The following problem statement was presented, from which I built my solution:

> Rovers have been sent to Mars to survey the terrain and you have been charged with crea ng their naviga on system. These are the speci ca ons you have been given:

> - Mars’s surface has been divided into zones and each zone can be modelled as a two- dimensional cartesian grid. The zones have been very carefully surveyed ahead of me and are deemed safe for explora on within the zone’s bounds, as represented by a single cartesian coordinate. E.g: (5, 5)
> - The rover understands the cardinal points and can face either East (E), West (W), North (N) or South (S)
> - The rover understands three commands:
>   - **M** - Move one space forward in the direction it is facing
>   - **R** - rotate 90 degrees to the right
>   - **L** - rotate 90 degrees to the left
> - Due to the transmission delay in communica ng with the rover on Mars, you are only able to send the rover a list of commands.

> These commands will be executed by the rover and its resul ng loca on sent back to HQ. This is an example of the list of commands sent to the rover: 
> 8 8
> 1 2 E
> MMLMRMMRRMML

> This is how the rover will interpret the commands:

> The first line describes how big the current zone is. This zone’s boundary is at the Cartesian coordinate of 8,8 and the zone comprises 64 blocks. The second line describes the rover’s staring location and orientation. This rover would start at position 1 on the horizontal axis, position 2 on the vertical axis and would be facing East (E). The third line is the list of commands (movements and rota ons) to be executed by the rover.

> As a result of following these commands, a rover staring at 1 2 E in this zone would land up at 3 3 S.

# Design Considerations

As a front-end developer, I'm more comfortable in building applications using JavaScript, and with the massive growth in ECMAScript 6 implementations, specifically utilizing TypeScript, I thought I'd try my hand at using this to complete the kata.

The implementation is pretty straight-forward, utilising the bare minimum understanding of TypeScript to get the job done.

I could have easily done this in C#, which I am also comfortable with, but the challenge of a kata is to build strength in areas you're not that very strong.

# Implementation

The implementation is very simple.

Run the HTML file in your browser. You will be presented with a few text boxes and a button, which triggers an event to deploy the statements to the rover.

Once the rover has moved based on the defined commands, an output will be displayed of where the rover ended up.

```HTML
<label for="rover-location">Location</label>
<input type="text" name="rover-location" value="1, 2" />
```
```HTML
<label for="rover-grid">Grid Size</label>
<input type="text" name="rover-grid" value="8, 8" />
```
```HTML
<label for="rover-direction">Direction</label>
<input type="text" name="rover-direction" value="E" />
```
```HTML
<label for="rover-commands">Commands</label>
<input type="text" name="rover-commands" value="MMLMRMMRRMML" />
```
```HTML
<button type="button" class="deploy-rover">Deploy Rover</button>
```

User input is limited to the imagination, as long as it follows the following rules:

- Location has to be a comma-seperated list of two digits (eg: 1, 2)
- Grid size has to be a comma-seperated list of two digits (eg: 8, 8)
- The commands has to be a single string of commands, without spaces, made up of M, L or R

# Additional considerations

Additional considerations for the rover:

- Deploy multiple rovers
- Add obstacle detection
- Animated movement in CSS animations

# Unit testing

The application's functions has been unit tested using Jasmine and Karma runner

License
----

MIT