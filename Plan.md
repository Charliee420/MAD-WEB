Build a single-file MAD website using only HTML, CSS, and JavaScript.
No libraries. No frameworks. Pure chaos.

## CORE CONCEPT
This is a trolling, unhinged, surreal website designed to confuse, 
frustrate, and psychologically torment the user — while being darkly 
funny. The site combines glitchy broken-tech aesthetics, dreamlike 
surrealism, and relentless mockery. Nothing works as labeled. 
Everything lies. The website is ALIVE and reacts to the user's 
suffering.

---

## GLOBAL BEHAVIOR (always active)

- The cursor randomly becomes a giant emoji, flips upside down, or 
  disappears for 3 seconds every 10s
- Every button has a WRONG label (e.g., "Click to Win" moves away on 
  hover, "Mute Sound" plays louder sound, "Exit" refreshes the page)
- Random screen shake every 15–30 seconds with a taunting popup: 
  "oops, did that scare you? 😂"
- A fake Windows-style error popup appears at random: "ERROR 404: 
  Your Brain Not Found. [OK] [Cancel]" — both buttons do the same 
  wrong thing
- Clicking anywhere on the background spawns a passive-aggressive 
  floating text ("really?", "wow nice click genius", "are you lost?", 
  "bro...", "skill issue")
- The page title in the browser tab randomly cycles between: 
  "HELP ME", "you fell for it", "lol", "this is fine 🔥", 
  "ERROR ERROR ERROR"
- A persistent "CLOSE THIS ANNOYING BAR" banner at the top — 
  clicking it opens another one below it
- Background color slowly shifts through ugly clashing colors 
  (lime green → hot pink → deep purple → mustard yellow)
- Random fake loading bars appear that fill to 99% then reset
- Fonts randomly change size, family, or go upside down mid-sentence

---

## GAMES (all rigged, all brutal)

### 1. BUTTON MASHER
Label: "Mash the button 10 times to win!"
- Count goes up but randomly subtracts 2 when user is close
- At exactly 9 clicks, counter resets to 0 with message: 
  "Almost! Starting over 😇"
- Every 3 clicks the button teleports to a random position on screen
- If user somehow reaches 10, the "You Win" screen lasts 0.2 seconds 
  then immediately says "PSYCH 😂 try again"

### 2. WHACK-A-MOLE (IMPOSSIBLE EDITION)
Label: "Whack the moles! Score: [fake number]"
- Moles appear for 150ms max — too fast to click
- When clicked successfully, score goes DOWN by 1
- Moles occasionally spawn UNDER the score counter to hide it
- After 20 seconds, a mole appears that says "YOU" — if clicked, 
  the site says "why did you whack yourself?? 😭"
- Leaderboard at the side shows fake scores like 
  "Chad_9000: 847 points" to make user feel bad

### 3. MAZE / CLICK TO ESCAPE
Label: "Solve the maze to escape this website!"
- Maze walls randomly shift every 4 seconds
- The "Exit" of the maze is actually a fake door that teleports 
  user back to the start with: "LOL no exit for you"
- Player dot has 20% chance to slip in the wrong direction on keypress
- If user reaches a dead end, the maze taunts: "GPS not included 🗺️"
- After 60 seconds, a popup: "You've been in here a while... 
  are you okay? (no)"

### 4. TYPING SPEED TEST
Label: "Type this sentence as fast as you can!"
- The sentence randomly changes mid-typing
- Every 5 keystrokes, one random correct letter gets deleted
- Backspace types a letter instead of deleting
- At the end, WPM score shown is always exactly 4 WPM regardless 
  of actual speed, with comment: "Wow. A turtle types faster. 🐢"
- A fake "world record" counter on the side shows 9999 WPM to 
  demoralize the user

### 5. LEVEL DEVIL PLATFORMER
Label: "Simple platformer. Reach the flag!"
- Canvas-based platformer where platforms randomly disappear or 
  flip when the player lands
- The flag moves away from the player when approached
- Gravity randomly inverts for 2 seconds with no warning
- Spikes appear labeled "SAFE ZONE"
- Safe zones are labeled "DANGER ⚠️" (they're safe)
- Death counter is always shown but goes UP even without dying: 
  "Deaths: [random huge number]"
- Winning is literally impossible — if the player somehow touches 
  the flag, it teleports and a message says: 
  "Flag has left the chat 👋"

---

## INSULTS & REACTIONS (context-aware)

- On idle for 10s: "still here? brave." 
- On rage-clicking: "hitting your screen won't help. 
  therapy might. 💆"
- On scrolling fast: "WHERE ARE YOU GOING?? COME BACK 😭"
- On trying to select text: "my words are NOT yours 😤"
- On right-click: fake context menu with options like 
  "Give Up", "Cry", "Try Again (won't help)", "Uninstall Brain"
- On pressing F5: intercept and show "refreshing won't save you"
- After 2 min on site: big popup "ACHIEVEMENT UNLOCKED: 
  2 minutes wasted. Your family is concerned."

---

## VISUAL / AUDIO CHAOS

- Glitch effect (CSS animation) randomly applied to random elements
- Elements occasionally flip upside down or mirror horizontally 
  for 3 seconds
- A tiny screaming face emoji 😱 slowly crawls across the screen 
  from left to right on loop
- Random z-index shuffling makes elements overlap each other
- "You're doing great!" motivational text appears in tiny font 
  in the corner — clicking it makes it say 
  "I lied. You're not doing great."
- Fake "Admin Mode" toggle that appears to turn on 
  (CSS styles everything red) but does nothing useful
- Page randomly zooms in to 150% for 2 seconds then back

---

## AESTHETIC

- Dark background with chaotic neon accents
- Fonts: mix of comic sans, courier new, and impact — 
  switching randomly
- Glitch scanline overlay on the whole page (CSS)
- All corners of the site have tiny unsettling blinking eyes 👁️
- Title of the site: "W E L C O M E  T O  N O T H I N G"  
  in glitchy animated text

---

## CONSTRAINTS
- Single HTML file, all CSS in <style>, all JS in <script>
- No external libraries or CDN links
- Must work in a modern browser with no backend
- Keep code clean and well-commented despite the chaos
- All games must be playable sections the user can navigate to 
  (fake nav bar where links go to wrong sections)