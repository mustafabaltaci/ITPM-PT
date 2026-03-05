const stages = {
    1: {
        title: "STAGE 1: FORMAL ORGANIZATIONS",
        content: `
            <h2>1.1 THE FORMAL STRUCTURE</h2>
            <p>The formal organization defines the "published" lines of authority, responsibilities, reporting relationships, and decision-making processes. It tells us how individuals or groups <em>should</em> relate to one another. However, the effectiveness of a project often depends on the Project Manager's ability to navigate these structures. We analyze the three major types below.</p>

            <hr class="neon-line">

            <h3>TYPE A: THE FUNCTIONAL ORGANIZATION</h3>
            <p><strong>Structure:</strong> The hierarchy is based on specialized disciplines (e.g., Marketing, Finance, IT, Engineering). Projects are managed within these functional departments. Resources stay in their "home" departments and are loaned out to projects.</p>
            
            <p><strong>PM Authority (LOW):</strong> The Project Manager has very little authority. The Functional Manager controls the budget, resource assignment, and performance reviews. The PM often acts merely as a coordinator or "expeditor."</p>

            <table class="arcade-table">
                <thead>
                    <tr>
                        <th colspan="2">FUNCTIONAL STRUCTURE ANALYSIS</th>
                    </tr>
                    <tr>
                        <th>ADVANTAGES</th>
                        <th>DISADVANTAGES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Increased Flexibility:</strong> Subject matter experts (SMEs) can easily be switched between projects as needed.</td>
                        <td><strong>Poor Response Time:</strong> Decisions must traverse multiple layers of hierarchy, causing delays.</td>
                    </tr>
                    <tr>
                        <td><strong>Depth of Knowledge:</strong> Team members work with peers in their field, fostering technical excellence and knowledge sharing.</td>
                        <td><strong>Poor Integration:</strong> Departments tend to be "siloed," leading to a lack of holistic project ownership ("Throwing it over the wall").</td>
                    </tr>
                    <tr>
                        <td><strong>Less Duplication:</strong> Resources and equipment are shared across the department, reducing overhead costs.</td>
                        <td><strong>Blurred Authority:</strong> Without a strong PM, accountability is diffused. "Who is actually in charge?" is a common question.</td>
                    </tr>
                </tbody>
            </table>

            <hr class="neon-line">

            <h3>TYPE B: THE PROJECT-BASED (PURE) ORGANIZATION</h3>
            <p><strong>Structure:</strong> The organization is structured strictly around projects. Each project is like a mini-company. The team is often co-located and works full-time on the project until completion.</p>
            
            <p><strong>PM Authority (HIGH):</strong> The Project Manager has complete authority. They control the budget, personnel decisions, and work assignments. They report directly to a Program Manager or CEO.</p>

            <table class="arcade-table">
                <thead>
                    <tr>
                        <th colspan="2">PROJECT-BASED STRUCTURE ANALYSIS</th>
                    </tr>
                    <tr>
                        <th>ADVANTAGES</th>
                        <th>DISADVANTAGES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Clear Authority:</strong> There is no question who is in charge. The PM is the CEO of the project.</td>
                        <td><strong>Project Isolation:</strong> Teams can become disconnected from the wider organization, leading to "Projectitis" (Us vs. Them mentality).</td>
                    </tr>
                    <tr>
                        <td><strong>Improved Communication:</strong> Co-location and dedicated focus result in rapid information flow and decision-making.</td>
                        <td><strong>Duplication of Effort:</strong> Every project might buy its own server or hire its own admin, leading to inefficient resource usage.</td>
                    </tr>
                    <tr>
                        <td><strong>High Integration:</strong> The entire team is focused on a single goal with no competing functional distractions.</td>
                        <td><strong>"Draft Pick" Anxiety:</strong> Team members worry about their job security once the project ends ("Do I have a seat when the music stops?").</td>
                    </tr>
                </tbody>
            </table>

            <hr class="neon-line">

            <h3>TYPE C: THE MATRIX ORGANIZATION</h3>
            <p><strong>Structure:</strong> A hybrid grid where individuals report to <strong>two bosses</strong>: a Functional Manager (Home) and a Project Manager (Work). It aims to combine the technical depth of the functional structure with the project focus of the pure structure.</p>
            
            <p><strong>PM Authority (MODERATE / NEGOTIATED):</strong> Authority is shared. In a "Strong Matrix," the PM has more say over the budget and time. In a "Weak Matrix," the Functional Manager retains control. Success depends on negotiation.</p>

            <table class="arcade-table">
                <thead>
                    <tr>
                        <th colspan="2">MATRIX STRUCTURE ANALYSIS</th>
                    </tr>
                    <tr>
                        <th>ADVANTAGES</th>
                        <th>DISADVANTAGES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>High Level of Integration:</strong> Projects get the focus they need while maintaining access to functional expertise.</td>
                        <td><strong>Unity of Command Violated:</strong> Having two bosses creates confusion and conflict for team members.</td>
                    </tr>
                    <tr>
                        <td><strong>Improved Communication:</strong> Information flows both horizontally (project) and vertically (functional).</td>
                        <td><strong>Resource Conflict:</strong> PMs and Functional Managers often fight over the same critical resources.</td>
                    </tr>
                    <tr>
                        <td><strong>Project Focus:</strong> Unlike functional orgs, there is a designated person (PM) solely responsible for project success.</td>
                        <td><strong>Slow Response Time:</strong> The need for consensus and negotiation between the two managers can bog down decision-making.</td>
                    </tr>
                </tbody>
            </table>

            <hr class="neon-line">

            <h2>1.2 THE INFORMAL ORGANIZATION</h2>
            <p>While the formal chart shows how things <em>should</em> work, the <strong>Informal Organization</strong> shows how things <em>actually</em> work. This structure bypasses formal lines of authority and communication.</p>
            
            <div class="info-card">
                <h4>KEY CONCEPTS:</h4>
                <ul>
                    <li><strong>Power & Influence:</strong> In the informal world, power isn't about your title. It's determined by how well-connected you are. A junior engineer might have more influence than a senior manager if they are a trusted source of information.</li>
                    <li><strong>The Grapevine:</strong> This is the unofficial communication network. It is often faster (though sometimes less accurate) than formal channels. A savvy PM listens to the grapevine to hear about risks before they appear in status reports.</li>
                    <li><strong>Complexity:</strong> Unlike the static org chart, the informal organization is organic. Relationships are established over time through shared experiences, both positive (friendships) and negative (rivalries).</li>
                </ul>
            </div>
            
            <p><strong>PM STRATEGY:</strong> You cannot control the informal organization, but you must influence it. Identify the key "influencers" who can sway team opinion and build relationships with them.</p>

            <hr class="neon-line">

            <div id="structure-matcher" class="team-game-container">
                <h3>THE STRUCTURE MATCHER</h3>
                <p id="scenario-text">SCENARIO A: "We need deep technical expertise, and our staff should stay in their departments."</p>
                <div style="display: flex; align-items: center; justify-content: center; gap: 60px; margin: 20px 0;">
                    <div class="authority-meter-container">
                        <div class="authority-meter-fill" id="auth-fill"></div>
                        <div class="authority-meter-label">PM AUTHORITY</div>
                    </div>
                    <div class="game-controls" style="flex-direction: column;">
                        <button class="btn btn-choice" data-type="functional">FUNCTIONAL</button>
                        <button class="btn btn-choice" data-type="matrix">MATRIX</button>
                        <button class="btn btn-choice" data-type="projectized">PROJECTIZED</button>
                    </div>
                </div>
                <p id="matcher-feedback" style="height: 30px; font-weight: bold;"></p>
            </div>
        `
    },
    2: {
        title: "STAGE 2: STAKEHOLDER ANALYSIS",
        content: `
            <h2>2.1 THE STAKEHOLDER ANALYSIS PROCESS</h2>
            <p>Stakeholder analysis is a systematic way to identify and prioritize the people and organizations that have a "stake" or claim in the project's outcome. Success depends on how well you manage these relationships.</p>

            <div class="info-card">
                <h4>PROCESS STEPS (PDF DEFS):</h4>
                <ul>
                    <li><strong>1. Identify Stakeholders:</strong> Build a list of anyone who has an interest in the outcome or for/against the project's success.</li>
                    <li><strong>2. Stakeholder's Interest:</strong> Rate them on a scale of -1 (Negative), 0 (Neutral), or +1 (Positive).</li>
                    <li><strong>3. Degree of Influence:</strong> Scale from 0 (No Influence) to 10 (Can terminate the project).</li>
                    <li><strong>4. Potential Conflict:</strong> Identify where competing interests might cause friction between stakeholders or with project goals.</li>
                </ul>
            </div>

            <h2>2.2 THE POWER/INTEREST (INFLUENCE) MATRIX</h2>
            <p>To manage stakeholders effectively, we map them onto a 2x2 grid. Each quadrant dictates a specific management strategy:</p>
            
            <div class="matrix-game-container">
                <div class="cards-container" id="draggable-cards">
                    <div class="draggable-card" draggable="true" id="card-client" data-target="manage-closely">The High-Power Client</div>
                    <div class="draggable-card" draggable="true" id="card-expert" data-target="keep-informed">The Technical Expert</div>
                    <div class="draggable-card" draggable="true" id="card-investor" data-target="keep-satisfied">The Silent Investor</div>
                </div>

                <div class="matrix-grid">
                    <div class="matrix-labels">
                        <div class="label-y">POWER (INFLUENCE)</div>
                        <div class="label-x">INTEREST</div>
                    </div>
                    <div class="matrix-quadrant" id="keep-satisfied">
                        <div class="quad-label">HIGH POWER / LOW INTEREST</div>
                        <div class="quad-title">KEEP SATISFIED</div>
                    </div>
                    <div class="matrix-quadrant" id="manage-closely">
                        <div class="quad-label">HIGH POWER / HIGH INTEREST</div>
                        <div class="quad-title">MANAGE CLOSELY</div>
                    </div>
                    <div class="matrix-quadrant" id="monitor">
                        <div class="quad-label">LOW POWER / LOW INTEREST</div>
                        <div class="quad-title">MONITOR</div>
                    </div>
                    <div class="matrix-quadrant" id="keep-informed">
                        <div class="quad-label">LOW POWER / HIGH INTEREST</div>
                        <div class="quad-title">KEEP INFORMED</div>
                    </div>
                </div>
                <p id="game-feedback" style="color: var(--neon-yellow); margin-top: 10px;"></p>
            </div>

            <hr class="neon-line">

            <h2>2.3 THE SOCIO-TECHNICAL APPROACH</h2>
            <p>Referencing Page 25 of the PDF, project management is not just a technical discipline; it is a <strong>Socio-Technical</strong> process. Projects are systems where people (Social) and technology (Technical) interact.</p>
            
            <div class="info-card">
                <strong>NOTE:</strong> Stakeholder management is the core of the "Social" side. It's about building trust, managing expectations, and navigating organizational politics. If you ignore the social system, the technical system—no matter how perfect—will likely fail.
            </div>
        `
    },
    3: {
        title: "STAGE 3: THE PROJECT TEAM",
        content: `
            <h2>3.1 WORK GROUP VS. REAL TEAM</h2>
            <p>The distinction between a Work Group and a Real Team is essential for high performance. Accountability, goals, and results are the key differentiators (Page 22).</p>

            <table class="arcade-table">
                <thead>
                    <tr>
                        <th>ATTRIBUTE</th>
                        <th>WORK GROUP</th>
                        <th>REAL TEAM</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Accountability</strong></td>
                        <td>Individual only.</td>
                        <td>Mutual and Individual.</td>
                    </tr>
                    <tr>
                        <td><strong>Performance Goals</strong></td>
                        <td>Functional / Additive.</td>
                        <td>Shared / Synergistic.</td>
                    </tr>
                    <tr>
                        <td><strong>Results</strong></td>
                        <td>Individual products.</td>
                        <td>Collective work-products.</td>
                    </tr>
                </tbody>
            </table>

            <div class="team-game-container" id="team-game">
                <h3>TEAM POWER-UP CHALLENGE</h3>
                <p>Sort the attributes correctly to fill the TEAM SPIRIT BAR!</p>
                <div class="spirit-bar-container">
                    <div class="spirit-bar-fill" id="spirit-fill"></div>
                </div>
                <div class="attribute-card-display" id="attribute-display">CLICK START TO BEGIN</div>
                <div class="game-controls">
                    <button class="btn" id="btn-workgroup">WORK GROUP</button>
                    <button class="btn" id="btn-realteam">REAL TEAM</button>
                </div>
                <div id="badge-unlock" class="badge-unlock">🏆 TEAM SYNERGY ACHIEVED! +100 EXP</div>
            </div>

            <hr class="neon-line">

            <h2>3.2 THE WISDOM OF TEAMS (KATZENBACH & SMITH)</h2>
            <div class="info-card">
                <div class="rank-item">
                    <div class="rank-stars">★☆☆☆☆</div>
                    <div><strong>Pseudo-team:</strong> Low commitment, dysfunctional, and lacks collective focus.</div>
                </div>
                <div class="rank-item">
                    <div class="rank-stars">★★☆☆☆</div>
                    <div><strong>Potential team:</strong> Needs more clarity but has significant performance potential.</div>
                </div>
                <div class="rank-item">
                    <div class="rank-stars">★★★☆☆</div>
                    <div><strong>Work Group:</strong> Viable but lacks synergy; focus is on individual excellence.</div>
                </div>
                <div class="rank-item">
                    <div class="rank-stars">★★★★☆</div>
                    <div><strong>Real team:</strong> Shared purpose, complementary skills, mutual accountability.</div>
                </div>
                <div class="rank-item">
                    <div class="rank-stars">★★★★★</div>
                    <div><strong>High-performance team:</strong> Deeply committed to each other's growth; exceeds all expectations.</div>
                </div>
            </div>

            <hr class="neon-line">

            <h2>3.3 THE SOCIO-TECHNICAL SYSTEM</h2>
            <div class="pro-tip-box">
                <strong>PROJECT WAR ROOM:</strong> Creating a dedicated physical space for the team (a "War Room") helps foster a "Place to Call Home." It balances technical needs with the social culture of the team.
            </div>
            
            <p>Successful teams balance <strong>Technology, Office Supplies, and Culture</strong>. Culture defines how the team interacts and survives through conflict.</p>

            <h2>3.4 BEYOND FACE VALUE</h2>
            <p>Radical teams innovate by refusing to accept tasks at <strong>"Face Value."</strong> They dig deeper to find the root cause, ensuring the solution is meaningful rather than run-of-the-mill.</p>
        `
    },
    4: {
        title: "STAGE 4: LEARNING & HR",
        content: `
            <h2>4.1 THE LEARNING CYCLE</h2>
            <p>Teams must learn from their own experiences to avoid repeating mistakes. The Learning Cycle (Page 29) ensures continuous improvement through 4 critical steps.</p>
            
            <div class="cycle-diagram">
                <svg class="cycle-svg" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" class="cycle-circle" />
                </svg>
                <div class="cycle-node" id="node-understand" style="top: 0; left: 50%; transform: translate(-50%, -50%);" data-desc="Step 1: Understand & Frame. Define what we know, what we assume, and what we don't know.">UNDERSTAND</div>
                <div class="cycle-node" id="node-reflect" style="top: 50%; left: 100%; transform: translate(-50%, -50%);" data-desc="Step 2: Reflect & Plan. Think about past performance and plan for the next action.">REFLECT</div>
                <div class="cycle-node" id="node-act" style="top: 100%; left: 50%; transform: translate(-50%, -50%);" data-desc="Step 3: Act. Execute the action plan and gather new data.">ACT</div>
                <div class="cycle-node" id="node-impact" style="top: 50%; left: 0%; transform: translate(-50%, -50%);" data-desc="Step 4: Impact. Analyze the results and the impact on project goals.">IMPACT</div>
            </div>
            <div id="cycle-info" class="info-card" style="min-height: 60px; text-align: center;">CLICK A NODE TO EXPLORE</div>

            <hr class="neon-line">

            <h2>4.2 LESSONS LEARNED & POST-MORTEM</h2>
            <p>A "Project Post-Mortem" or Lessons Learned session is vital for organizational growth. It documents "What went right" and "What could be improved." This becomes part of the knowledge management system (Page 38).</p>

            <hr class="neon-line">

            <h2>4.3 THE PROJECT TEAM CHARTER</h2>
            <p>A Team Charter (Page 36) acts as a social contract. Verify the essential components below to prove your HR management readiness!</p>
            
            <ul class="charter-checklist" id="charter-checklist">
                <li class="checklist-item" data-id="1"><div class="checkbox"></div> MISSION: Clear project purpose and goals.</li>
                <li class="checklist-item" data-id="2"><div class="checkbox"></div> COMMUNICATION: How and when we share info.</li>
                <li class="checklist-item" data-id="3"><div class="checkbox"></div> VALUES: Punctuality, respect, and accountability.</li>
                <li class="checklist-item" data-id="4"><div class="checkbox"></div> GRIEVANCE: How we resolve internal conflicts.</li>
            </ul>

            <hr class="neon-line">

            <h2>4.4 HR PLAN: ACQUIRE, DEVELOP, MANAGE</h2>
            <p>Effective HR management involves acquiring the right talent, developing their skills through training, and managing performance through feedback and conflict resolution.</p>

            <div id="popup-refinement" class="popup-overlay">
                <div class="refinement-box">
                    <h2 class="glitch" data-text="BACKLOG REFINEMENT!">BACKLOG REFINEMENT!</h2>
                    <p>Requirements have shifted! Your final stage content was just updated. A true PM must adapt to change mid-sprint.</p>
                    <button class="btn" onclick="closeRefinement()">ADAPT & PROCEED</button>
                </div>
            </div>
        `
    }
};

let userData = { name: '', studentId: '' };
let currentStage = 1;
let unlockedStages = 1;

const loginScreen = document.getElementById('login-screen');
const worldMap = document.getElementById('world-map');
const contentScreen = document.getElementById('content-screen');
const contentArea = document.getElementById('content-area');
const stageTitle = document.getElementById('current-stage-title');
const scoreEl = document.getElementById('score');
const rankEl = document.getElementById('rank');
const clickSound = document.getElementById('click-sound');
const playerAvatar = document.getElementById('player-avatar');

// Initialize login logic
document.getElementById('start-btn').addEventListener('click', () => {
    const name = document.getElementById('user-name').value.trim();
    const id = document.getElementById('user-id').value.trim();

    if (name && id) {
        userData.name = name;
        userData.studentId = id;
        localStorage.setItem('pm_arcade_user', JSON.stringify(userData));
        document.getElementById('display-name').innerText = name.toUpperCase();
        playClick();
        
        loginScreen.classList.add('hidden');
        worldMap.classList.remove('hidden');
        updateMap();
    } else {
        alert("PLEASE ENTER BOTH NAME AND STUDENT ID TO INITIALIZE SPRINT.");
    }
});

// Check for existing session
window.addEventListener('load', () => {
    const savedUser = localStorage.getItem('pm_arcade_user');
    if (savedUser) {
        userData = JSON.parse(savedUser);
        document.getElementById('user-name').value = userData.name;
        document.getElementById('user-id').value = userData.studentId;
    }
});

document.querySelectorAll('.stage-node').forEach(node => {
    node.addEventListener('click', () => {
        const stageNum = parseInt(node.dataset.stage);
        if (stageNum <= unlockedStages) {
            moveAvatar(stageNum, () => startStage(stageNum));
        } else {
            alert("STAGE LOCKED!");
        }
    });
});

function moveAvatar(stageNum, callback) {
    const targetNode = document.querySelector(`.stage-node[data-stage="${stageNum}"]`);
    if (!targetNode) return;

    playerAvatar.classList.add('walking');
    playerAvatar.style.top = targetNode.style.top;
    playerAvatar.style.left = targetNode.style.left;

    setTimeout(() => {
        playerAvatar.classList.remove('walking');
        if (callback) callback();
    }, 1500);
}

function startStage(num) {
    playClick();
    currentStage = num;
    stageTitle.innerText = stages[num].title;
    contentArea.innerHTML = stages[num].content;
    worldMap.classList.add('hidden');
    contentScreen.classList.remove('hidden');
    contentArea.scrollTop = 0;
    updateButtons();

    if (num === 1) initStage1Game();
    if (num === 2) initStage2Game();
    if (num === 3) initStage3Game();
    if (num === 4) initStage4Interactions();
}

// STAGE 1 GAME: STRUCTURE MATCHER
function initStage1Game() {
    const scenarios = [
        { text: "SCENARIO A: 'We need deep technical expertise, and our staff should stay in their departments.'", answer: "functional" },
        { text: "SCENARIO B: 'We need maximum control over the project and a dedicated team, even if it's expensive.'", answer: "projectized" },
        { text: "SCENARIO C: 'We need high integration across departments but have limited resources.'", answer: "matrix" }
    ];
    let currentScenarioIdx = 0;
    const scenarioText = document.getElementById('scenario-text');
    const authFill = document.getElementById('auth-fill');
    const feedback = document.getElementById('matcher-feedback');
    const buttons = document.querySelectorAll('.btn-choice');

    const authLevels = { functional: "20%", matrix: "55%", projectized: "95%" };

    buttons.forEach(btn => {
        btn.onmouseover = () => {
            authFill.style.height = authLevels[btn.dataset.type];
        };
        btn.onclick = () => {
            const choice = btn.dataset.type;
            if (choice === scenarios[currentScenarioIdx].answer) {
                playClick();
                currentScenarioIdx++;
                feedback.innerText = "CRITICAL SUCCESS! SYSTEM ADAPTING...";
                feedback.className = "critical-success";
                addScore(100);
                
                if (currentScenarioIdx < scenarios.length) {
                    setTimeout(() => {
                        scenarioText.innerText = scenarios[currentScenarioIdx].text;
                        feedback.innerText = "";
                        feedback.className = "";
                    }, 1000);
                } else {
                    scenarioText.innerText = "MATCHING COMPLETE! ORGANIZATION OPTIMIZED.";
                    buttons.forEach(b => b.disabled = true);
                }
            } else {
                feedback.innerText = "SYSTEM ERROR! INCORRECT STRUCTURE.";
                feedback.className = "system-error";
                setTimeout(() => {
                    feedback.innerText = "";
                    feedback.className = "";
                }, 1000);
            }
        };
    });
}

// STAGE 2 GAME
function initStage2Game() {
    const cards = document.querySelectorAll('.draggable-card');
    const quadrants = document.querySelectorAll('.matrix-quadrant');
    const feedback = document.getElementById('game-feedback');
    let placedCount = 0;
    cards.forEach(card => card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', card.id);
        playClick();
    }));
    quadrants.forEach(quad => {
        quad.addEventListener('dragover', (e) => { e.preventDefault(); quad.classList.add('hover'); });
        quad.addEventListener('dragleave', () => quad.classList.remove('hover'));
        quad.addEventListener('drop', (e) => {
            e.preventDefault();
            quad.classList.remove('hover');
            const cardId = e.dataTransfer.getData('text/plain');
            const card = document.getElementById(cardId);
            if (quad.id === card.dataset.target) {
                if (!card.classList.contains('placed')) {
                    quad.appendChild(card);
                    card.classList.add('placed');
                    card.setAttribute('draggable', 'false');
                    placedCount++;
                    playClick();
                    feedback.innerText = "CORRECT PLACEMENT!";
                    if (placedCount === 3) {
                        feedback.innerText = "GAME COMPLETE! +100 EXP.";
                        addScore(100);
                    }
                }
            } else {
                feedback.innerText = "WRONG QUADRANT!";
                feedback.style.color = "var(--neon-magenta)";
            }
        });
    });
}

// STAGE 3 GAME
function initStage3Game() {
    const attributes = [
        { text: "Mutual Accountability", type: "realteam" },
        { text: "Individual Work Products", type: "workgroup" },
        { text: "Common Purpose", type: "realteam" },
        { text: "No Positive Synergy", type: "workgroup" },
        { text: "Shared Goals", type: "realteam" },
        { text: "Functional Goals", type: "workgroup" }
    ];
    let currentIdx = 0, correctCount = 0;
    const display = document.getElementById('attribute-display');
    const fill = document.getElementById('spirit-fill');
    const gameBox = document.getElementById('team-game');
    const badge = document.getElementById('badge-unlock');
    const updateDisplay = () => {
        if (currentIdx < attributes.length) display.innerText = attributes[currentIdx].text;
        else if (correctCount >= 6) {
            display.innerText = "MAX SPIRIT ACHIEVED!";
            badge.style.display = "block";
            addScore(100);
        }
    };
    const handleChoice = (choice) => {
        if (currentIdx >= attributes.length) return;
        const isCorrect = choice === attributes[currentIdx].type;
        gameBox.classList.remove('flash-green', 'flash-red');
        void gameBox.offsetWidth;
        if (isCorrect) {
            gameBox.classList.add('flash-green');
            correctCount++; currentIdx++;
            addScore(50);
            fill.style.width = (correctCount / 6 * 100) + "%";
            playClick();
        } else {
            gameBox.classList.add('flash-red');
            addScore(-20);
        }
        updateDisplay();
    };
    document.getElementById('btn-workgroup').onclick = () => handleChoice('workgroup');
    document.getElementById('btn-realteam').onclick = () => handleChoice('realteam');
    updateDisplay();
}

// STAGE 4 INTERACTIONS
function initStage4Interactions() {
    const nodes = document.querySelectorAll('.cycle-node');
    const info = document.getElementById('cycle-info');
    nodes.forEach(node => {
        node.onclick = () => {
            playClick();
            nodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');
            info.innerText = node.dataset.desc;
        };
    });
    const items = document.querySelectorAll('.checklist-item');
    let checkedCount = 0;
    items.forEach(item => {
        item.onclick = () => {
            if (!item.classList.contains('checked')) {
                playClick();
                item.classList.add('checked');
                checkedCount++;
                if (checkedCount === 4) {
                    addScore(100);
                    setTimeout(() => {
                        document.getElementById('popup-refinement').classList.add('show');
                        playClick();
                    }, 500);
                }
            }
        };
    });
}

function closeRefinement() {
    playClick();
    document.getElementById('popup-refinement').classList.remove('show');
}

function updateButtons() {
    const nextBtn = document.getElementById('next-btn');
    if (currentStage === 4) nextBtn.innerText = "FINISH TRAINING";
    else nextBtn.innerText = "NEXT STAGE";
}

document.getElementById('back-to-map').addEventListener('click', () => {
    playClick();
    contentScreen.classList.add('hidden');
    worldMap.classList.remove('hidden');
    document.getElementById('breakout-screen').classList.add('hidden');
});

document.getElementById('next-btn').addEventListener('click', () => {
    playClick();
    if (currentStage < 4) {
        const nextStage = currentStage + 1;
        if (nextStage > unlockedStages) {
            unlockedStages = nextStage;
            addScore(1000);
        }
        
        // Show World Map first for the walk animation
        contentScreen.classList.add('hidden');
        worldMap.classList.remove('hidden');
        updateMap();

        // Delay slightly to ensure map is visible before animation
        setTimeout(() => {
            moveAvatar(nextStage, () => {
                startStage(nextStage);
            });
        }, 100);
    } else {
        // Trigger Final Boss
        contentScreen.classList.add('hidden');
        document.getElementById('breakout-screen').classList.remove('hidden');
        startBreakoutGame();
    }
});

document.getElementById('prev-btn').addEventListener('click', () => {
    playClick();
    if (currentStage > 1) {
        const prevStage = currentStage - 1;
        contentScreen.classList.add('hidden');
        worldMap.classList.remove('hidden');
        moveAvatar(prevStage, () => {
            startStage(prevStage);
        });
    }
});

function updateMap() {
    const nodes = document.querySelectorAll('.stage-node');
    const paths = document.querySelectorAll('.path');

    nodes.forEach(node => {
        const stageNum = parseInt(node.dataset.stage);
        node.classList.remove('active', 'locked');
        
        if (stageNum <= unlockedStages) {
            if (stageNum === currentStage) node.classList.add('active');
        } else {
            node.classList.add('locked');
        }
    });

    paths.forEach((path, index) => {
        if (index < unlockedStages - 1) {
            path.classList.add('unlocked');
        } else {
            path.classList.remove('unlocked');
        }
    });

    // Initial avatar position
    const currentNode = document.querySelector(`.stage-node[data-stage="${currentStage}"]`);
    if (currentNode && !playerAvatar.classList.contains('walking')) {
        playerAvatar.style.top = currentNode.style.top;
        playerAvatar.style.left = currentNode.style.left;
    }
}

function addScore(points) {
    let currentScore = parseInt(scoreEl.innerText);
    let targetScore = Math.max(0, currentScore + points);
    const interval = setInterval(() => {
        if (currentScore < targetScore) {
            currentScore += 10;
        } else if (currentScore > targetScore) {
            currentScore -= 10;
        } else {
            clearInterval(interval);
        }
        scoreEl.innerText = currentScore.toString().padStart(5, '0');
        if (currentScore >= 1200) rankEl.innerText = "SENIOR PM";
    }, 20);
}

function playClick() {
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});
}

updateMap();

/* =========================================
   BREAKOUT BOSS BATTLE ENGINE (V2.2)
   ========================================= */
const BLOCK_TYPES = {
    LEGACY: { color: '#BBBBBB', weight: 20000, power: null, name: 'LEGACY CODE', desc: '' },
    BUG: { color: '#FF0000', weight: 4000, power: 'shrink', duration: 12, name: 'CRITICAL BUG', desc: 'Sprints are tight! Paddle width reduced.' },
    JR_DEV: { color: '#BF40BF', weight: 3000, power: 'speed', duration: 15, name: 'JR DEV', desc: 'Fast but messy! Ball velocity increased.' },
    QA: { color: '#FFFF00', weight: 2500, power: 'safetyNet', duration: 10, name: 'QA TESTER', desc: 'Safety first! Floor bounce enabled.' },
    MID_DEV: { color: '#00FF00', weight: 2000, power: 'split', duration: 0, name: 'MID DEV', desc: 'Collaboration! Ball splits in two.' },
    DEVOPS: { color: '#40E0D0', weight: 1500, power: 'widePaddle', duration: 20, name: 'DEVOPS', desc: 'Scalability! Paddle width increased.' },
    SR_DEV: { color: '#FF69B4', weight: 1000, power: 'bigBall', duration: 20, name: 'SR DEV', desc: 'Deep Impact! Ball size increased.' },
    PM: { color: '#0000FF', weight: 800, power: 'catch', duration: 15, name: 'PROJECT MGR', desc: 'Micro-management! Catch ball on paddle.' },
    HR: { color: '#FFA500', weight: 600, power: 'extraBall', duration: 0, name: 'HR RECRUITER', desc: 'New Hire! Extra ball added to pool.' },
    CTO: { color: '#FFD700', weight: 400, power: 'fireball', duration: 8, name: 'CTO', desc: 'Burn the backlog! Ball pierces through blocks.' },
    TEN_X_DEV: { color: 'platinum', weight: 100, power: 'legendary', duration: 0, name: '10x ARCHITECT', desc: 'Prophecy fulfilled! Automatic deployment.' }
};

let discoveredPowerUps = new Set();
let gameLoop;
let canvas, ctx;
let paddle = { x: 0, y: 0, width: 150, height: 15, color: '#00f3ff', speed: 12 };
let balls = [];
let blocks = [];
let particles = [];
let activeEffects = {};
let lives = 3;
let isPaused = false;
let announcementActive = false;
const pressedKeys = {}; // Frame-perfect input state

let fallingPowerUps = [];

function startBreakoutGame() {
    canvas = document.getElementById('breakout-canvas');
    ctx = canvas.getContext('2d');
    const wrapper = document.querySelector('.game-wrapper');
    canvas.width = wrapper.clientWidth - 250;
    canvas.height = wrapper.clientHeight;

    document.getElementById('victory-overlay').classList.add('hidden');
    document.getElementById('game-over-overlay').classList.add('hidden');

    lives = 3;
    balls = [{ x: canvas.width/2, y: canvas.height-30, dx: 2, dy: -2, radius: 6, stuck: true }];
    paddle.x = (canvas.width - paddle.width) / 2;
    paddle.y = canvas.height - 30;
    paddle.speed = 12;
    blocks = [];
    particles = [];
    fallingPowerUps = [];
    activeEffects = {};
    isPaused = false;
    announcementActive = false;
    
    createBlocks();
    updateUI();
    if (gameLoop) cancelAnimationFrame(gameLoop);
    gameLoop = requestAnimationFrame(gameTick);

    // Global Key State Listeners
    window.addEventListener('keydown', e => {
        pressedKeys[e.code] = true;
        if (e.code === 'Space') launchBall();
        if (e.code === 'KeyP') isPaused = !isPaused;
    });
    window.addEventListener('keyup', e => pressedKeys[e.code] = false);

    // Pixel-Perfect Mouse Control
    canvas.addEventListener('mousemove', (e) => {
        if (announcementActive || isPaused) return;
        const rect = canvas.getBoundingClientRect();
        paddle.x = (e.clientX - rect.left) - paddle.width / 2;
    });
    canvas.addEventListener('click', launchBall);
}

function createBlocks() {
    const rows = 8, cols = 10, padding = 10;
    const width = (canvas.width - (padding * (cols + 1))) / cols;
    const height = 25;
    const pool = [];
    for (let key in BLOCK_TYPES) {
        for (let i = 0; i < BLOCK_TYPES[key].weight / 100; i++) pool.push(BLOCK_TYPES[key]);
    }

    for(let r=0; r<rows; r++) {
        for(let c=0; c<cols; c++) {
            const type = pool[Math.floor(Math.random() * pool.length)];
            blocks.push({ 
                x: c * (width + padding) + padding, 
                y: r * (height + padding) + padding + 50, 
                width, 
                height, 
                type, 
                active: true 
            });
        }
    }
}

function launchBall() {
    balls.forEach(b => { if (b.stuck) { b.stuck = false; b.dy = -Math.abs(b.dy); } });
}

function gameTick() {
    if (!isPaused && !announcementActive) {
        handlePaddleMovement();
        updatePhysics();
    }
    drawGame();
    gameLoop = requestAnimationFrame(gameTick);
}

function handlePaddleMovement() {
    if (pressedKeys['ArrowLeft']) paddle.x -= paddle.speed;
    if (pressedKeys['ArrowRight']) paddle.x += paddle.speed;
    
    // Boundary check
    if (paddle.x < 0) paddle.x = 0;
    if (paddle.x + paddle.width > canvas.width) paddle.x = canvas.width - paddle.width;
}

function updatePhysics() {
    const now = Date.now();
    for (let key in activeEffects) {
        if (activeEffects[key].expires < now) {
            if (key === 'speed') balls.forEach(b => { b.dx /= 1.5; b.dy /= 1.5; });
            if (key === 'bigBall') balls.forEach(b => b.radius = 6);
            if (key === 'widePaddle' || key === 'shrink') paddle.width = 150;
            delete activeEffects[key];
        }
    }
    updateTimersUI();

    // Update Falling Power-ups
    fallingPowerUps.forEach((p, idx) => {
        p.y += p.speed;
        
        // Collection by Paddle
        if (p.y + p.size >= paddle.y && p.y <= paddle.y + paddle.height &&
            p.x + p.size >= paddle.x && p.x <= paddle.x + paddle.width) {
            
            activatePowerUp(p.type);
            fallingPowerUps.splice(idx, 1);
            playClick();
        } 
        // Off-screen
        else if (p.y > canvas.height) {
            fallingPowerUps.splice(idx, 1);
        }
    });

    balls.forEach((b, idx) => {
        if (b.stuck) { b.x = paddle.x + paddle.width/2; b.y = paddle.y - b.radius; return; }
        b.x += b.dx; b.y += b.dy;

        // Wall Bounces (Precise Boundaries)
        if (b.x + b.radius > canvas.width || b.x - b.radius < 0) { b.dx *= -1; b.x = Math.max(b.radius, Math.min(canvas.width - b.radius, b.x)); playClick(); }
        if (b.y - b.radius < 0) { b.dy *= -1; b.y = b.radius; playClick(); }
        
        // Floor / Loss
        if (b.y + b.radius > canvas.height) {
            if (activeEffects['safetyNet']) {
                b.dy *= -1; b.y = canvas.height - b.radius;
            } else {
                balls.splice(idx, 1);
                if (balls.length === 0) {
                    lives--;
                    updateUI();
                    if (lives > 0) balls.push({ x: paddle.x + paddle.width/2, y: paddle.y - 10, dx: 2, dy: -2, radius: 6, stuck: true });
                    else endGame(false);
                }
            }
        }

        // ADVANCED PADDLE PHYSICS (ANGLED BOUNCE)
        if (b.y + b.radius >= paddle.y && b.y - b.radius <= paddle.y + paddle.height &&
            b.x >= paddle.x && b.x <= paddle.x + paddle.width) {
            
            b.dy = -Math.abs(b.dy);
            const hitPoint = (b.x - (paddle.x + paddle.width / 2)) / (paddle.width / 2);
            const maxAngle = Math.PI / 3; // 60 degrees max deflection
            const bounceAngle = hitPoint * maxAngle;
            
            const currentSpeed = Math.sqrt(b.dx * b.dx + b.dy * b.dy);
            b.dx = currentSpeed * Math.sin(bounceAngle);
            b.dy = -currentSpeed * Math.cos(bounceAngle);

            if (activeEffects['catch']) b.stuck = true;
            playClick();
        }

        blocks.forEach(block => {
            if (block.active && b.x > block.x && b.x < block.x + block.width && b.y > block.y && b.y < block.y + block.height) {
                if (!activeEffects['fireball']) b.dy *= -1;
                block.active = false; addScore(50); playClick();
                if (block.type.power) handlePowerUpHit(block, block.type);
                if (blocks.filter(bl => bl.active).length === 0) endGame(true);
            }
        });
    });
    particles.forEach((p, i) => { p.x += p.vx; p.y += p.vy; p.life--; if (p.life <= 0) particles.splice(i, 1); });
}

function handlePowerUpHit(block, type) {
    if (type.power === 'legendary') {
        createConfetti();
        blocks.forEach(b => b.active = false);
        triggerAnnouncement("LEGENDARY ARCHITECT: INSTANT DEPLOYMENT!", true);
        setTimeout(() => endGame(true), 2000);
        return;
    }
    
    // Spawn falling object instead of instant activation
    fallingPowerUps.push({
        x: block.x + block.width / 2 - 7,
        y: block.y,
        type: type,
        color: type.color,
        speed: 2.5,
        size: 15
    });
}

function triggerAnnouncement(name, desc, legendary = false) {
    const isNew = !discoveredPowerUps.has(name);
    if (!isNew && !legendary) return; 

    if (isNew) {
        discoveredPowerUps.add(name);
        announcementActive = true; 
    }

    const el = document.getElementById('powerup-announcement');
    el.innerHTML = `<div style="font-size: 1.2rem; color: var(--neon-cyan)">${legendary ? 'ULTIMATE DEPLOYMENT' : 'NEW POWER-UP UNLOCKED!'}</div>
                    <div style="margin: 10px 0;">${name}</div>
                    <div style="font-size: 1.5rem; color: white; font-style: italic;">"${desc}"</div>`;
    
    el.className = legendary ? 'legendary-text show' : 'show';

    const pauseDuration = isNew ? 3000 : 1500;

    setTimeout(() => {
        el.classList.add('fly-to-panel');
        setTimeout(() => {
            el.className = '';
            announcementActive = false;
        }, 500);
    }, pauseDuration);
}

function activatePowerUp(type) {
    const { power, duration, name, desc } = type;
    
    const isNew = !discoveredPowerUps.has(name);
    if (isNew || power === 'legendary') {
        triggerAnnouncement(name, desc, power === 'legendary');
    }

    if (power === 'extraBall') { 
        balls.push({ x: paddle.x + paddle.width/2, y: paddle.y - 10, dx: 4, dy: -4, radius: 6, stuck: false }); 
        return; 
    }

    if (power === 'split') { 
        const len = balls.length; 
        for(let i=0; i<len; i++) balls.push({ ...balls[i], dx: -balls[i].dx, stuck: false }); 
    }
    else if (power === 'speed') {
        if (!activeEffects['speed']) balls.forEach(b => { b.dx *= 1.5; b.dy *= 1.5; });
    }
    else if (power === 'bigBall') {
        if (!activeEffects['bigBall']) balls.forEach(b => b.radius = 12);
    }
    else if (power === 'widePaddle') {
        paddle.width = 250; 
    }
    else if (power === 'shrink') {
        paddle.width = 60;
    }
    
    if (duration > 0) {
        activeEffects[power] = { expires: Date.now() + duration * 1000, name, total: duration * 1000 };
    }
}

function createConfetti() {
    for (let i = 0; i < 100; i++) particles.push({ x: canvas.width/2, y: canvas.height/2, vx: (Math.random()-0.5)*10, vy: (Math.random()-0.5)*10, life: 100, color: `hsl(${Math.random()*360}, 100%, 50%)` });
}

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw Paddle
    ctx.fillStyle = activeEffects['fireball'] ? '#FFD700' : paddle.color;
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    
    // Draw Balls
    balls.forEach(b => { 
        ctx.beginPath(); 
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI*2); 
        ctx.fillStyle = activeEffects['fireball'] ? '#FF4500' : '#fff'; 
        ctx.fill(); 
    });
    
    // Draw Blocks
    blocks.forEach(b => { 
        if (b.active) { 
            if (b.type.color.includes('gradient')) {
                let grad = ctx.createLinearGradient(b.x, b.y, b.x + b.width, b.y);
                grad.addColorStop(0,'red'); grad.addColorStop(0.2,'orange'); grad.addColorStop(0.4,'yellow'); grad.addColorStop(0.6,'green'); grad.addColorStop(0.8,'blue'); grad.addColorStop(1,'violet');
                ctx.fillStyle = grad;
            } else ctx.fillStyle = b.type.color;
            ctx.fillRect(b.x, b.y, b.width-2, b.height-2); 
        }
    });

    // Draw Falling Power-ups (Pixelated Teardrop)
    fallingPowerUps.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = p.color;
        
        const px = p.x;
        const py = p.y;
        const s = p.size / 5; // Pixel size

        // 5x5 Teardrop Pattern
        const pattern = [
            [2,0],
            [1,1],[2,1],[3,1],
            [0,2],[1,2],[2,2],[3,2],[4,2],
            [0,3],[1,3],[2,3],[3,3],[4,3],
            [1,4],[2,4],[3,4]
        ];

        pattern.forEach(([dx, dy]) => {
            ctx.fillRect(px + dx*s, py + dy*s, s, s);
        });
        
        ctx.shadowBlur = 0;
    });

    // Draw Particles
    particles.forEach(p => { ctx.fillStyle = p.color; ctx.fillRect(p.x, p.y, 4, 4); });
}

function updateTimersUI() {
    const list = document.getElementById('active-timers-list');
    list.innerHTML = '';
    const now = Date.now();
    for (let key in activeEffects) {
        const effect = activeEffects[key];
        const timeLeft = effect.expires - now;
        const pct = Math.max(0, (timeLeft / effect.total) * 100);
        const div = document.createElement('div');
        div.className = 'timer-bar-container';
        if (timeLeft < 3000) div.style.animation = 'glitch 0.2s infinite';
        div.innerHTML = `<div class="timer-label">${effect.name} : ${(timeLeft/1000).toFixed(1)}s</div><div class="timer-bar-fill" style="width: ${pct}%"></div>`;
        list.appendChild(div);
    }
}

function updateUI() { document.getElementById('boss-lives').innerText = "★".repeat(lives); }
function endGame(win) {
    isPaused = true;
    if (win) { document.getElementById('victory-overlay').classList.remove('hidden'); document.getElementById('final-score').innerText = scoreEl.innerText; }
    else document.getElementById('game-over-overlay').classList.remove('hidden');
}

document.getElementById('retry-sprint-btn').onclick = () => {
    document.getElementById('game-over-overlay').classList.add('hidden');
    startBreakoutGame();
};
document.getElementById('restart-game-btn').onclick = () => location.reload();
