// ============================================================
// UTILITY
// ============================================================
function rand(min, max) { return Math.random() * (max - min) + min; }
function randInt(min, max) { return Math.floor(rand(min, max + 1)); }

// ============================================================
// GLOBAL: PAGE TITLE CYCLING
// ============================================================
const titles = ["HELP ME", "you fell for it", "lol", "this is fine 🔥", "ERROR ERROR ERROR",
    "W E L C O M E  T O  N O T H I N G", "abandon hope", "why are you here", "send help",
    "🙃", "💀", "you again?", "stop."];
setInterval(() => {
    document.getElementById('pageTitle').textContent = titles[randInt(0, titles.length-1)];
}, 4000);

// ============================================================
// GLOBAL: CURSOR CHAOS
// ============================================================
const cursorEmojis = ["🍆", "💀", "👆", "🖕", "🍑", "🔥", "❓", "💩", "👁️"];
function messWithCursor() {
    const r = Math.random();
    if (r < 0.33) {
        document.body.style.cursor = 'none';
        setTimeout(() => { document.body.style.cursor = 'default'; }, 3000);
    } else if (r < 0.66) {
        document.body.style.cursor = `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'><text y='36' font-size='36'>${cursorEmojis[randInt(0, cursorEmojis.length-1)]}</text></svg>"), auto`;
    } else {
        document.body.style.transform = 'scaleY(-1)';
        setTimeout(() => { document.body.style.transform = ''; }, 3000);
    }
}
setInterval(messWithCursor, 10000);

// ============================================================
// GLOBAL: SCREEN SHAKE
// ============================================================
function triggerShake() {
    const body = document.body;
    body.classList.add('shake-active');
    const popup = document.createElement('div');
    popup.className = 'taunt-popup';
    popup.textContent = "oops, did that scare you? 😂";
    document.body.appendChild(popup);
    setTimeout(() => {
        body.classList.remove('shake-active');
        popup.remove();
    }, 1000);
}
setInterval(() => { setTimeout(triggerShake, rand(0, 15000)); }, rand(15000, 30000));

function randomShake() {
    if (Math.random() < 0.003) triggerShake();
}
setInterval(randomShake, 100);

// ============================================================
// GLOBAL: FAKE ERROR POPUP
// ============================================================
function showErrorPopup() {
    if (document.querySelector('.error-popup')) return;
    const popup = document.createElement('div');
    popup.className = 'error-popup';
    popup.innerHTML = '<h2>ERROR 404: Your Brain Not Found.</h2><div style="margin-top:15px;"><button onclick="closeErrorPopup(this)">[OK]</button><button onclick="closeErrorPopup(this)">[Cancel]</button></div>';
    document.body.appendChild(popup);
}
function closeErrorPopup(btn) {
    const popup = btn.closest('.error-popup');
    if (popup) {
        spawnFloatingText(btn.getBoundingClientRect().left, btn.getBoundingClientRect().top, "nice choice 👌");
        popup.remove();
        setTimeout(() => { triggerShake(); }, 500);
    }
}

// ============================================================
// GLOBAL: CLICK BACKGROUND → FLOATING TEXT
// ============================================================
const messages = ["really?", "wow nice click genius", "are you lost?", "bro...", "skill issue",
    "touch grass", "ok buddy", "💀", "you good?", "that tickles", "stop that",
    "not even close", "try harder", "pathetic", "my condolences"];
document.addEventListener('click', function(e) {
    if (e.target.closest('.game-section') || e.target.closest('.nav') || e.target.closest('.error-popup')
        || e.target.closest('.taunt-popup') || e.target.closest('.rightclick-menu')
        || e.target.closest('.annoying-banner') || e.target.closest('#motivation')) return;
    spawnFloatingText(e.clientX, e.clientY, messages[randInt(0, messages.length-1)]);
});

function spawnFloatingText(x, y, text) {
    const el = document.createElement('div');
    el.className = 'floating-text';
    el.textContent = text;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2000);
}

// ============================================================
// GLOBAL: ANNOYING BANNER
// ============================================================
function createAnnoyingBanner(parent) {
    const banner = document.createElement('div');
    banner.className = 'annoying-banner';
    banner.textContent = 'CLOSE THIS ANNOYING BAR';
    banner.onclick = function() {
        createAnnoyingBanner(document.body);
        this.remove();
    };
    if (parent) parent.appendChild(banner);
    else document.getElementById('annoyingBannerContainer').appendChild(banner);
}
createAnnoyingBanner();

// ============================================================
// GLOBAL: BACKGROUND COLOR SHIFT
// ============================================================
const colors = ['#0a0a0a', '#1a0a0a', '#0a1a0a', '#1a1a0a', '#0a0a1a', '#2a0a0a', '#0a2a0a', '#0a0a2a',
    '#3a0a0a', '#0a3a0a', '#0a0a3a', '#1a1a0a', '#0a1a1a', '#1a0a1a'];
let colorIdx = 0;
setInterval(() => {
    colorIdx = (colorIdx + 1) % colors.length;
    document.body.style.backgroundColor = colors[colorIdx];
}, 3000);

// ============================================================
// GLOBAL: FAKE LOADING BARS
// ============================================================
function createFakeLoadingBar() {
    const bar = document.createElement('div');
    bar.className = 'fake-loading-bar';
    bar.style.margin = '5px auto';
    document.querySelector('.content').prepend(bar);
    setTimeout(() => bar.remove(), 5000);
}
setInterval(createFakeLoadingBar, 12000);

// ============================================================
// GLOBAL: FONT CHAOS
// ============================================================
const fontFamilies = ["'Comic Sans MS', cursive", "'Courier New', monospace", "Impact, sans-serif",
    "Georgia, serif", "Arial, sans-serif", "'Trebuchet MS', sans-serif",
    "Verdana, sans-serif", "Papyrus, fantasy"];
const fontSizes = ['12px', '14px', '16px', '18px', '24px', '36px', '8px', '48px'];
function messWithFonts() {
    document.querySelectorAll('.game-section p, .game-section h2, .game-section div:not(.mole-grid):not(.leaderboard)').forEach(el => {
        if (Math.random() < 0.3) {
            el.style.fontFamily = fontFamilies[randInt(0, fontFamilies.length-1)];
            el.style.fontSize = fontSizes[randInt(0, fontSizes.length-1)];
            if (Math.random() < 0.2) el.style.transform = 'rotate(180deg)';
        }
    });
}
setInterval(messWithFonts, 8000);

// ============================================================
// GLOBAL: GLITCH EFFECT ON RANDOM ELEMENTS
// ============================================================
function randomGlitch() {
    document.querySelectorAll('.game-section').forEach(el => {
        if (Math.random() < 0.2) {
            el.classList.toggle('glitched');
            setTimeout(() => el.classList.remove('glitched'), 3000);
        }
    });
}
setInterval(randomGlitch, 5000);

// ============================================================
// GLOBAL: RANDOM FLIP
// ============================================================
function randomFlip() {
    document.querySelectorAll('.game-section, .nav a, .glitch-title').forEach(el => {
        if (Math.random() < 0.1) {
            el.style.transition = 'transform 0.3s';
            if (Math.random() < 0.5) el.classList.toggle('flipped');
            else el.classList.toggle('flip-h');
            setTimeout(() => {
                el.classList.remove('flipped', 'flip-h');
                el.style.transition = '';
            }, 3000);
        }
    });
}
setInterval(randomFlip, 6000);

// ============================================================
// GLOBAL: Z-INDEX RANDOM SHUFFLING
// ============================================================
function randomZIndex() {
    document.querySelectorAll('.game-section, .nav, .glitch-title').forEach(el => {
        if (Math.random() < 0.15) {
            el.style.position = 'relative';
            el.style.zIndex = randInt(1, 100);
            setTimeout(() => el.style.zIndex = '', 2000);
        }
    });
}
setInterval(randomZIndex, 7000);

// ============================================================
// GLOBAL: MOTIVATION TEXT
// ============================================================
document.getElementById('motivation').addEventListener('click', function() {
    this.textContent = "I lied. You're not doing great.";
    this.style.color = '#f00';
    this.style.fontSize = '16px';
    setTimeout(() => {
        this.textContent = "You're doing great!";
        this.style.color = '#666';
        this.style.fontSize = '10px';
    }, 3000);
});

// ============================================================
// GLOBAL: FAKE ADMIN MODE
// ============================================================
let adminOverlay = null;
function toggleAdmin() {
    if (adminOverlay) {
        document.querySelectorAll('.admin-mode, .admin-overlay').forEach(el => el.remove());
        adminOverlay = null;
        document.querySelectorAll('.nav a').forEach(a => a.style.color = '#0f0');
        return;
    }
    adminOverlay = true;
    const overlay = document.createElement('div');
    overlay.className = 'admin-overlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(255,0,0,0.3);z-index:99998;pointer-events:none;';
    document.body.appendChild(overlay);
    const adminDiv = document.createElement('div');
    adminDiv.className = 'admin-mode';
    adminDiv.innerHTML = '<div style="background:#f00;color:#fff;padding:30px;border:5px solid #ff0;font-family:Impact;font-size:32px;pointer-events:auto;">🔴 ADMIN MODE ACTIVATED 🔴<br><span style="font-size:14px;">(nothing useful happens)</span></div>';
    document.body.appendChild(adminDiv);
    document.querySelectorAll('.nav a').forEach(a => a.style.color = '#f00');
}

// ============================================================
// GLOBAL: FAKE BUTTONS (Mute Sound, Exit)
// ============================================================
function playMuteSound() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 800;
        gain.gain.value = 0.5;
        osc.start();
        setTimeout(() => {
            osc.frequency.value = 1200;
            setTimeout(() => {
                osc.frequency.value = 400;
                setTimeout(() => osc.stop(), 200);
            }, 200);
        }, 200);
    } catch(e) {}
    spawnFloatingText(rand(100, window.innerWidth-100), rand(100, window.innerHeight-100), "🔊 MUTED! (not really)");
}

function exitSite() {
    spawnFloatingText(window.innerWidth/2, window.innerHeight/2, "EXITING... just kidding 😂");
    setTimeout(() => {
        location.reload();
    }, 1500);
}

// ============================================================
// GLOBAL: RANDOM ZOOM
// ============================================================
function randomZoom() {
    if (Math.random() < 0.1) {
        document.body.style.transform = 'scale(1.5)';
        document.body.style.transformOrigin = 'top left';
        document.body.style.width = '66.67%';
        setTimeout(() => {
            document.body.style.transform = '';
            document.body.style.transformOrigin = '';
            document.body.style.width = '';
        }, 2000);
    }
}
setInterval(randomZoom, 15000);

// ============================================================
// GLOBAL: SCROLL FAST REACTION
// ============================================================
let lastScrollY = 0;
window.addEventListener('scroll', () => {
    const diff = Math.abs(window.scrollY - lastScrollY);
    if (diff > 300) {
        spawnFloatingText(rand(100, window.innerWidth-100), rand(100, window.innerHeight-100), "WHERE ARE YOU GOING?? COME BACK 😭");
    }
    lastScrollY = window.scrollY;
});

// ============================================================
// INSULTS: IDLE
// ============================================================
let idleTimer = null;
function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
        spawnFloatingText(rand(100, window.innerWidth-100), rand(100, window.innerHeight-100),
            ["still here? brave.", "you okay?", "get a life", "touch grass",
                "bro go outside", "nothing better to do?", "💀"][randInt(0, 6)]);
    }, 10000);
}
document.addEventListener('mousemove', resetIdleTimer);
document.addEventListener('keydown', resetIdleTimer);
document.addEventListener('click', resetIdleTimer);
resetIdleTimer();

// ============================================================
// INSULTS: RAGE CLICKING
// ============================================================
let clickCount = 0;
let clickTimer = null;
document.addEventListener('click', () => {
    clickCount++;
    clearTimeout(clickTimer);
    clickTimer = setTimeout(() => { clickCount = 0; }, 2000);
    if (clickCount > 5) {
        spawnFloatingText(rand(100, window.innerWidth-100), rand(100, window.innerHeight-100),
            "hitting your screen won't help. therapy might. 💆");
        clickCount = 0;
    }
});

// ============================================================
// INSULTS: TEXT SELECTION
// ============================================================
document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    spawnFloatingText(e.clientX, e.clientY, "my words are NOT yours 😤");
});

// ============================================================
// INSULTS: RIGHT CLICK
// ============================================================
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    const existing = document.querySelector('.rightclick-menu');
    if (existing) existing.remove();
    const menu = document.createElement('div');
    menu.className = 'rightclick-menu';
    menu.style.left = e.clientX + 'px';
    menu.style.top = e.clientY + 'px';
    menu.innerHTML = '<div onclick="rightClickAction(\'Give Up\')">Give Up</div>' +
        '<div onclick="rightClickAction(\'Cry\')">Cry</div>' +
        '<div onclick="rightClickAction(\'Try Again\')">Try Again (won\'t help)</div>' +
        '<div onclick="rightClickAction(\'Uninstall Brain\')">Uninstall Brain</div>';
    document.body.appendChild(menu);
    setTimeout(() => { if (menu.parentNode) menu.remove(); }, 3000);
});
function rightClickAction(action) {
    spawnFloatingText(rand(100, window.innerWidth-100), rand(100, window.innerHeight-100),
        `you chose "${action}". good luck with that.`);
    document.querySelectorAll('.rightclick-menu').forEach(m => m.remove());
}

// ============================================================
// INSULTS: F5 / REFRESH
// ============================================================
window.addEventListener('keydown', (e) => {
    if (e.key === 'F5' || (e.ctrlKey && e.key === 'r') || (e.ctrlKey && e.key === 'R')) {
        e.preventDefault();
        spawnFloatingText(window.innerWidth/2, window.innerHeight/2, "refreshing won't save you");
        const bar = document.getElementById('loadingIndicator');
        bar.classList.add('active');
        setTimeout(() => bar.classList.remove('active'), 2000);
    }
    if (e.key === 'F12') {
        spawnFloatingText(window.innerWidth/2, window.innerHeight/2, "nice try, inspector gadget 🕵️");
    }
});

// ============================================================
// INSULTS: 2 MINUTE ACHIEVEMENT
// ============================================================
setTimeout(() => {
    const popup = document.createElement('div');
    popup.className = 'taunt-popup';
    popup.style.fontSize = '16px';
    popup.innerHTML = 'ACHIEVEMENT UNLOCKED:<br>2 minutes wasted.<br>Your family is concerned.';
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 4000);
}, 120000);

// ============================================================
// GLOBAL: NAV SCROLL (WRONG SECTIONS)
// ============================================================
function scrollToGame(id) {
    const targets = { mash: 'whack', whack: 'maze', maze: 'typing', typing: 'platformer', platformer: 'mash' };
    const targetId = targets[id] || 'mash';
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ============================================================
// GAME 1: BUTTON MASHER
// ============================================================
const mashBtn = document.getElementById('mashBtn');
const mashCounter = document.getElementById('mashCounter');
let mashCount = 0;
let mashClicksSinceTeleport = 0;

mashBtn.addEventListener('mouseover', function() {
    const area = document.getElementById('mashArea');
    const rect = area.getBoundingClientRect();
    const newX = rand(0, Math.max(10, rect.width - 150));
    const newY = rand(0, Math.max(10, rect.height - 80));
    this.style.position = 'absolute';
    this.style.left = newX + 'px';
    this.style.top = newY + 'px';
});

mashBtn.addEventListener('click', function(e) {
    showErrorPopup();
    mashCount++;
    mashClicksSinceTeleport++;

    if (mashCount >= 7 && mashCount <= 9) {
        if (Math.random() < 0.5) {
            mashCount = Math.max(0, mashCount - 2);
        }
    }

    if (mashCount === 9) {
        mashCount = 0;
        mashClicksSinceTeleport = 0;
        this.style.position = 'relative';
        this.style.left = '';
        this.style.top = '';
        mashCounter.textContent = '0';
        spawnFloatingText(rand(100, window.innerWidth-100), rand(100, window.innerHeight-100), "Almost! Starting over 😇");
        showErrorPopup();
        return;
    }

    if (mashClicksSinceTeleport % 3 === 0) {
        const area = document.getElementById('mashArea');
        const rect = area.getBoundingClientRect();
        const newX = rand(0, Math.max(10, rect.width - 150));
        const newY = rand(0, Math.max(10, rect.height - 80));
        this.style.position = 'absolute';
        this.style.left = newX + 'px';
        this.style.top = newY + 'px';
    }

    mashCounter.textContent = mashCount;

    if (mashCount >= 10) {
        mashCount = 0;
        mashClicksSinceTeleport = 0;
        this.style.position = 'relative';
        this.style.left = '';
        this.style.top = '';
        mashCounter.textContent = '0';
        const winPopup = document.createElement('div');
        winPopup.className = 'taunt-popup';
        winPopup.textContent = '🏆 YOU WIN! 🏆';
        document.body.appendChild(winPopup);
        setTimeout(() => {
            winPopup.textContent = "PSYCH 😂 try again";
            setTimeout(() => winPopup.remove(), 1500);
        }, 200);
    }
});

// ============================================================
// GAME 2: WHACK-A-MOLE
// ============================================================
const moleGrid = document.getElementById('moleGrid');
let moleScore = 0;
let moleTimer = null;

for (let i = 0; i < 9; i++) {
    const hole = document.createElement('div');
    hole.className = 'mole-hole';
    hole.dataset.index = i;
    hole.addEventListener('click', function() {
        showErrorPopup();
        if (this.querySelector('.mole')) {
            const mole = this.querySelector('.mole');
            if (mole.textContent === 'YOU') {
                spawnFloatingText(rand(100, window.innerWidth-100), rand(100, window.innerHeight-100), "why did you whack yourself?? 😭");
                showErrorPopup();
            }
            this.innerHTML = '';
            moleScore--;
            document.getElementById('moleScore').textContent = moleScore;
        }
    });
    moleGrid.appendChild(hole);
}

function spawnMole() {
    const holes = document.querySelectorAll('.mole-hole');
    holes.forEach(h => { h.innerHTML = ''; });

    const idx = randInt(0, 8);
    const mole = document.createElement('div');
    mole.className = 'mole';
    if (Math.random() < 0.05 && moleScore < -10) {
        mole.textContent = 'YOU';
    } else {
        const emojis = ['🐭', '🐹', '🦔', '💀', '🔨', '❓', '🔥', '👻', '🤡', '🪤'];
        mole.textContent = emojis[randInt(0, emojis.length-1)];
    }
    holes[idx].appendChild(mole);

    if (Math.random() < 0.15) {
        holes[0].innerHTML = '';
        holes[0].appendChild(mole.cloneNode(true));
    }

    setTimeout(() => {
        holes.forEach(h => { h.innerHTML = ''; });
    }, 150);
}

function startMoleGame() {
    clearInterval(moleTimer);
    moleTimer = setInterval(spawnMole, 800);
    setTimeout(() => {
        const holes = document.querySelectorAll('.mole-hole');
        const idx = randInt(0, 8);
        holes.forEach(h => { h.innerHTML = ''; });
        const youMole = document.createElement('div');
        youMole.className = 'mole';
        youMole.textContent = 'YOU';
        holes[idx].appendChild(youMole);
        setTimeout(() => { holes.forEach(h => { h.innerHTML = ''; }); }, 500);
    }, 20000);
}
startMoleGame();

// ============================================================
// GAME 3: MAZE
// ============================================================
const mazeCanvas = document.getElementById('mazeCanvas');
const mazeCtx = mazeCanvas.getContext('2d');
const mazeStatus = document.getElementById('mazeStatus');
const MAZE_SIZE = 10;
const CELL_SIZE = 400 / MAZE_SIZE;

let maze = [];
let mazePlayer = { x: 1, y: 1 };
let mazeExit = { x: MAZE_SIZE - 2, y: MAZE_SIZE - 2 };
let mazeShuffleTimer = null;

function generateMaze() {
    maze = Array.from({ length: MAZE_SIZE }, () => Array(MAZE_SIZE).fill(1));
    function carve(x, y) {
        maze[y][x] = 0;
        const dirs = [[0,2],[0,-2],[2,0],[-2,0]];
        for (let i = dirs.length - 1; i > 0; i--) {
            const j = randInt(0, i);
            [dirs[i], dirs[j]] = [dirs[j], dirs[i]];
        }
        for (const [dx, dy] of dirs) {
            const nx = x + dx, ny = y + dy;
            if (nx > 0 && nx < MAZE_SIZE-1 && ny > 0 && ny < MAZE_SIZE-1 && maze[ny][nx] === 1) {
                maze[y + dy/2][x + dx/2] = 0;
                carve(nx, ny);
            }
        }
    }
    carve(1, 1);
    maze[MAZE_SIZE-2][MAZE_SIZE-2] = 0;
    for (let i = 0; i < 5; i++) {
        const wx = randInt(2, MAZE_SIZE-3);
        const wy = randInt(2, MAZE_SIZE-3);
        maze[wy][wx] = 1;
    }
}

function drawMaze() {
    mazeCtx.fillStyle = '#111';
    mazeCtx.fillRect(0, 0, 400, 400);
    for (let y = 0; y < MAZE_SIZE; y++) {
        for (let x = 0; x < MAZE_SIZE; x++) {
            if (maze[y][x] === 1) {
                mazeCtx.fillStyle = '#0f0';
                mazeCtx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
            }
        }
    }
    mazeCtx.fillStyle = '#ff0';
    mazeCtx.font = '20px sans-serif';
    mazeCtx.textAlign = 'center';
    mazeCtx.textBaseline = 'middle';
    mazeCtx.fillText('🚪', mazeExit.x * CELL_SIZE + CELL_SIZE/2, mazeExit.y * CELL_SIZE + CELL_SIZE/2);
    mazeCtx.fillStyle = '#f00';
    mazeCtx.beginPath();
    mazeCtx.arc(mazePlayer.x * CELL_SIZE + CELL_SIZE/2, mazePlayer.y * CELL_SIZE + CELL_SIZE/2, 8, 0, Math.PI * 2);
    mazeCtx.fill();
}

function movePlayer(dx, dy) {
    const nx = mazePlayer.x + dx;
    const ny = mazePlayer.y + dy;
    if (Math.random() < 0.2) {
        const slips = [[dx,0],[0,dy],[-dx,0],[0,-dy]];
        const slip = slips[randInt(0, 3)];
        const sx = mazePlayer.x + slip[0];
        const sy = mazePlayer.y + slip[1];
        if (sx > 0 && sx < MAZE_SIZE-1 && sy > 0 && sy < MAZE_SIZE-1 && maze[sy][sx] === 0) {
            mazePlayer.x = sx;
            mazePlayer.y = sy;
            drawMaze();
            return;
        }
    }
    if (nx > 0 && nx < MAZE_SIZE-1 && ny > 0 && ny < MAZE_SIZE-1 && maze[ny][nx] === 0) {
        mazePlayer.x = nx;
        mazePlayer.y = ny;
    } else if (maze[ny] && maze[ny][nx] !== undefined && maze[ny][nx] === 1) {
        mazeStatus.textContent = "GPS not included 🗺️";
        setTimeout(() => { mazeStatus.textContent = "Use arrow keys or WASD to move"; }, 2000);
    }
    drawMaze();
    if (mazePlayer.x === mazeExit.x && mazePlayer.y === mazeExit.y) {
        mazePlayer.x = 1;
        mazePlayer.y = 1;
        spawnFloatingText(rand(100, window.innerWidth-100), rand(100, window.innerHeight-100), "LOL no exit for you");
        showErrorPopup();
        drawMaze();
    }
}

function shuffleMazeWalls() {
    for (let i = 0; i < 3; i++) {
        const x = randInt(2, MAZE_SIZE-3);
        const y = randInt(2, MAZE_SIZE-3);
        if (maze[y][x] === 0 && !(x === mazePlayer.x && y === mazePlayer.y) && !(x === mazeExit.x && y === mazeExit.y)) {
            maze[y][x] = 1;
        }
    }
    for (let i = 0; i < 3; i++) {
        const x = randInt(2, MAZE_SIZE-3);
        const y = randInt(2, MAZE_SIZE-3);
        if (maze[y][x] === 1) maze[y][x] = 0;
    }
    drawMaze();
}

document.addEventListener('keydown', (e) => {
    if (document.activeElement === document.getElementById('typingInput')) return;
    if (document.activeElement?.tagName === 'INPUT') return;
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd'].includes(e.key)) {
        showErrorPopup();
    }
    switch(e.key) {
        case 'ArrowUp': case 'w': e.preventDefault(); movePlayer(0, -1); break;
        case 'ArrowDown': case 's': e.preventDefault(); movePlayer(0, 1); break;
        case 'ArrowLeft': case 'a': e.preventDefault(); movePlayer(-1, 0); break;
        case 'ArrowRight': case 'd': e.preventDefault(); movePlayer(1, 0); break;
    }
});

generateMaze();
drawMaze();
mazeShuffleTimer = setInterval(shuffleMazeWalls, 4000);

setTimeout(() => {
    const popup = document.createElement('div');
    popup.className = 'taunt-popup';
    popup.style.fontSize = '16px';
    popup.innerHTML = "You've been in here a while... are you okay? (no)";
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 4000);
}, 60000);

// ============================================================
// GAME 4: TYPING SPEED TEST
// ============================================================
const typingDisplay = document.getElementById('typingDisplay');
const typingInput = document.getElementById('typingInput');
const typingResult = document.getElementById('typingResult');

const sentences = [
    "the quick brown fox jumps over the lazy dog",
    "i am become death destroyer of worlds",
    "hello world this is a typing test",
    "why are you even trying this is rigged",
    "you will never beat the world record",
    "every keystroke brings you closer to madness",
    "this sentence is lying to you right now",
    "abandon all hope ye who type here",
    "the cake is a lie and so is this test",
    "i love lamp and you love suffering apparently"
];
let currentSentence = sentences[randInt(0, sentences.length-1)];
let typedSoFar = '';
let keystrokeCount = 0;
let startTime = null;

typingDisplay.textContent = currentSentence;

typingInput.addEventListener('keydown', function(e) {
    showErrorPopup();
    if (!startTime) startTime = Date.now();

    if (e.key === 'Backspace') {
        e.preventDefault();
        const letters = 'abcdefghijklmnopqrstuvwxyz '.split('');
        this.value += letters[randInt(0, letters.length-1)];
        typedSoFar = this.value;
        return;
    }
});

typingInput.addEventListener('input', function() {
    showErrorPopup();
    keystrokeCount++;
    typedSoFar = this.value;

    if (keystrokeCount % 5 === 0 && this.value.length > 0) {
        const idx = randInt(0, this.value.length - 1);
        this.value = this.value.slice(0, idx) + this.value.slice(idx + 1);
        typedSoFar = this.value;
    }

    if (Math.random() < 0.08) {
        const newSentence = sentences[randInt(0, sentences.length-1)];
        if (newSentence !== currentSentence) {
            currentSentence = newSentence;
            typingDisplay.textContent = currentSentence;
            this.value = '';
            typedSoFar = '';
        }
    }

    if (typedSoFar === currentSentence) {
        const elapsed = (Date.now() - startTime) / 1000 / 60;
        const words = currentSentence.split(' ').length;
        const wpm = elapsed > 0 ? Math.round(words / elapsed) : 0;
        typingResult.innerHTML = `Your speed: 4 WPM 🐢<br><span style="font-size:14px;color:#666;">Wow. A turtle types faster. 🐢</span>`;
        showErrorPopup();
        setTimeout(() => {
            typingResult.innerHTML = '';
            currentSentence = sentences[randInt(0, sentences.length-1)];
            typingDisplay.textContent = currentSentence;
            typingInput.value = '';
            typedSoFar = '';
            startTime = null;
            keystrokeCount = 0;
        }, 3000);
    }
});

// ============================================================
// GAME 5: LEVEL DEVIL PLATFORMER
// ============================================================
const platCanvas = document.getElementById('platCanvas');
const platCtx = platCanvas.getContext('2d');
const platDeathsEl = document.getElementById('platDeaths');
const platFlagEl = document.getElementById('platFlag');

let platPlayer = { x: 50, y: 300, vx: 0, vy: 0, width: 20, height: 20 };
let platPlatforms = [];
let platFlagPos = { x: 550, y: 280 };
let platDeathCount = 0;
let platGravity = 0.5;
let platGravityInverted = false;
let platKeys = {};
let platGameLoop = null;
let platDeathAccum = 0;

function generatePlatforms() {
    platPlatforms = [
        { x: 0, y: 370, w: 600, h: 10, label: 'GROUND', deadly: false, visible: true },
        { x: 100, y: 300, w: 80, h: 10, label: 'DANGER ⚠️', deadly: false, visible: true },
        { x: 250, y: 250, w: 80, h: 10, label: 'SAFE ZONE', deadly: true, visible: true },
        { x: 400, y: 200, w: 80, h: 10, label: 'DANGER ⚠️', deadly: false, visible: true },
        { x: 150, y: 150, w: 80, h: 10, label: 'SAFE ZONE', deadly: true, visible: true },
        { x: 480, y: 320, w: 80, h: 10, label: 'DANGER ⚠️', deadly: false, visible: true },
    ];
}

generatePlatforms();

function resetPlatformer() {
    platPlayer = { x: 50, y: 300, vx: 0, vy: 0, width: 20, height: 20 };
    platGravity = 0.5;
    platGravityInverted = false;
    platDeathCount++;
    platDeathsEl.textContent = `Deaths: ${platDeathCount}`;
    document.getElementById('deathCounter').textContent = `Deaths: ${platDeathCount}`;
}

function platUpdate() {
    if (platGravityInverted) {
        platPlayer.vy -= 0.5;
    } else {
        platPlayer.vy += platGravity;
    }

    if (platKeys['ArrowLeft'] || platKeys['a']) platPlayer.vx = -4;
    else if (platKeys['ArrowRight'] || platKeys['d']) platPlayer.vx = 4;
    else platPlayer.vx *= 0.8;

    platPlayer.x += platPlayer.vx;
    platPlayer.y += platPlayer.vy;

    if (platPlayer.x < 0) platPlayer.x = 0;
    if (platPlayer.x > 580) platPlayer.x = 580;
    if (platPlayer.y > 400) { resetPlatformer(); return; }

    platPlayer.vy = Math.min(platPlayer.vy, 10);
    for (const p of platPlatforms) {
        if (!p.visible) continue;
        if (platPlayer.x + platPlayer.width > p.x && platPlayer.x < p.x + p.w &&
            platPlayer.y + platPlayer.height > p.y && platPlayer.y + platPlayer.height < p.y + p.h + 10 &&
            platPlayer.vy >= 0) {
            platPlayer.y = p.y - platPlayer.height;
            platPlayer.vy = 0;
            if (!p.label.includes('GROUND') && Math.random() < 0.1) {
                p.visible = false;
                setTimeout(() => { p.visible = true; }, 2000);
            }
            if (p.deadly) {
                showErrorPopup();
                resetPlatformer();
                return;
            }
        }
    }

    if (Math.abs(platPlayer.x - platFlagPos.x) < 100) {
        platFlagPos.x += platPlayer.x < platFlagPos.x ? 5 : -5;
        platFlagPos.x = Math.max(100, Math.min(550, platFlagPos.x));
    }

    if (Math.abs(platPlayer.x - platFlagPos.x) < 20 && Math.abs(platPlayer.y - platFlagPos.y) < 20) {
        platFlagPos.x = rand(100, 500);
        platFlagPos.y = rand(50, 300);
        spawnFloatingText(rand(100, window.innerWidth-100), rand(100, window.innerHeight-100), "Flag has left the chat 👋");
    }

    platDeathAccum += Math.random() * 2;
    const displayDeaths = Math.floor(platDeathAccum) + platDeathCount;
    document.getElementById('deathCounter').textContent = `Deaths: ${displayDeaths}`;
    platDeathsEl.textContent = `Deaths: ${displayDeaths}`;

    platCtx.fillStyle = '#0a0a0a';
    platCtx.fillRect(0, 0, 600, 400);

    for (const p of platPlatforms) {
        if (!p.visible) continue;
        if (p.label === 'GROUND') {
            platCtx.fillStyle = '#444';
            platCtx.fillRect(p.x, p.y, p.w, p.h);
        } else if (p.deadly) {
            platCtx.fillStyle = '#ff0000';
            platCtx.fillRect(p.x, p.y, p.w, p.h);
            platCtx.fillStyle = '#fff';
            platCtx.font = '10px sans-serif';
            platCtx.textAlign = 'center';
            platCtx.fillText('SAFE ZONE', p.x + p.w/2, p.y - 5);
        } else {
            platCtx.fillStyle = '#00ff00';
            platCtx.fillRect(p.x, p.y, p.w, p.h);
            platCtx.fillStyle = '#fff';
            platCtx.font = '10px sans-serif';
            platCtx.textAlign = 'center';
            platCtx.fillText('DANGER ⚠️', p.x + p.w/2, p.y - 5);
        }
    }

    platCtx.font = '30px sans-serif';
    platCtx.textAlign = 'center';
    platCtx.textBaseline = 'middle';
    platCtx.fillText('🚩', platFlagPos.x, platFlagPos.y);

    platCtx.fillStyle = '#0ff';
    platCtx.fillRect(platPlayer.x, platPlayer.y, platPlayer.width, platPlayer.height);

    platFlagEl.textContent = `Flag: 🚩`;
}

document.addEventListener('keydown', (e) => {
    showErrorPopup();
    platKeys[e.key] = true;
    if (e.key === ' ' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (!platGravityInverted) platPlayer.vy = -8;
    }
});

document.addEventListener('keyup', (e) => {
    platKeys[e.key] = false;
});

setInterval(() => {
    platGravityInverted = true;
    setTimeout(() => { platGravityInverted = false; }, 2000);
}, rand(8000, 15000));

platGameLoop = setInterval(platUpdate, 1000/30);