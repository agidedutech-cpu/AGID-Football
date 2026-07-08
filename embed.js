/*!
 * ==========================================================
 * AGID Football Framework
 * Version : 1.0.0
 * Author  : AGID EDU TECH
 * Website : https://agidedutech-cpu.github.io/AGID-Football/
 * ==========================================================
 */

(function (window, document) {

    "use strict";

    const AGID = {

        version: "1.0.0",

        config: null,

        container: null,

        /**
         * ==========================================
         * INITIALIZE FRAMEWORK
         * ==========================================
         */
        init(config) {

            if (!config) {
                throw new Error("AGID: Configuration object is required.");
            }

            this.config = config;

            const containerId = config.container || "agid-player";

            this.container = document.getElementById(containerId);

            if (!this.container) {
                throw new Error(
                    `AGID: Container "${containerId}" was not found.`
                );
            }

            this.validateConfig();

            console.log(
                "%cAGID Football Framework v" + this.version,
                "color:#2563eb;font-size:14px;font-weight:bold;"
            );

            this.loadCSS();

        },

        /**
         * ==========================================
         * VALIDATE CONFIGURATION
         * ==========================================
         */
        validateConfig() {

            const config = this.config;

            if (!config.match) {
                throw new Error("AGID: match object is required.");
            }

            if (!config.streams || !Array.isArray(config.streams)) {
                throw new Error("AGID: streams array is required.");
            }

            if (config.streams.length === 0) {
                throw new Error("AGID: At least one stream is required.");
            }

        },

        /**
         * ==========================================
         * LOAD PLAYER CSS
         * ==========================================
         */
        loadCSS() {

            const base = this.config.base || "./";

            const cssURL = base + "player.css";

            // Prevent duplicate loading
            const alreadyLoaded = document.querySelector(
                `link[href="${cssURL}"]`
            );

            if (alreadyLoaded) {
                this.loadHTML();
                return;
            }

            const css = document.createElement("link");

            css.rel = "stylesheet";

            css.href = cssURL;

            css.onload = () => {

                console.log("✓ player.css loaded");

                this.loadHTML();

            };

            css.onerror = () => {

                this.showError(
                    "Unable to load player.css"
                );

            };

            document.head.appendChild(css);

        },

        /**
         * ==========================================
         * LOAD PLAYER HTML
         * ==========================================
         */
        async loadHTML() {

            const base = this.config.base || "./";

            try {

                const response = await fetch(
                    base + "player.html"
                );

                if (!response.ok) {
                    throw new Error(
                        "player.html not found."
                    );
                }

                const html = await response.text();

                this.container.innerHTML = html;

                console.log("✓ player.html loaded");

                this.render();

            }

            catch (error) {

                this.showError(error.message);

                console.error(error);

            }

        },

        /**
         * ==========================================
         * RENDER PLAYER
         * ==========================================
         */
        render() {

    console.log("Rendering Player...");

    this.cacheUI();

    this.loadMatch();

    this.createButtons();

    this.activateTabs();

},
        cacheUI() {

    this.ui = {

        competition:

            document.getElementById(
                "agid-competition-name"
            ),

        title:

            document.getElementById(
                "agid-match-title"
            ),

        header:

            document.getElementById(
                "agid-match-header"
            ),

        video:

            document.getElementById(
                "agid-video"
            ),

        lineup:

            document.getElementById(
                "agid-lineup"
            ),

        events:

            document.getElementById(
                "agid-events"
            ),

        momentum:

            document.getElementById(
                "agid-momentum"
            ),

        streamButtons:

            document.getElementById(
                "agid-stream-buttons"
            )

    };

    console.log("✓ UI Cached");

},

        /**
         * ==========================================
         * LOAD MATCH INFORMATION
         * ==========================================
         */
       loadMatch() {

    const match = this.config.match;

    this.ui.competition.textContent =
        match.competition;

    this.ui.title.textContent =
        match.home.name +
        " vs " +
        match.away.name;

    this.ui.header.src =
        "https://www.scorebat.com/embed/matchview/" +
        match.id +
        "/";

    this.ui.lineup.src =
        "https://www.scorebat.com/embed/line-up/" +
        match.id +
        "/";

    this.ui.events.src =
        "https://www.scorebat.com/embed/matchview/" +
        match.id +
        "/";

    if (
        this.config.widgets &&
        this.config.widgets.momentum
    ) {

        this.ui.momentum.src =
            "https://widgets.sofascore.com/embed/attackMomentum?id=" +
            this.config.widgets.momentum;

    }

    if (
        this.config.streams.length
    ) {

        this.ui.video.src =
            this.config.streams[0].url;

    }

    console.log("✓ Match Loaded");

},

        /**
         * ==========================================
         * CREATE STREAM BUTTONS
         * ==========================================
         */
        createButtons() {

    const container =
        this.ui.streamButtons;

    container.innerHTML = "";

    this.config.streams.forEach((stream, index) => {

        const button =
            document.createElement("button");

        button.className =
            "agid-stream-btn";

        button.textContent =
            stream.name;

        if (index === 0) {

            button.classList.add("active");

        }

        button.addEventListener(

            "click",

            () => {

                container
                    .querySelectorAll(
                        ".agid-stream-btn"
                    )
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });

                button.classList.add(
                    "active"
                );

                this.ui.video.src =
                    stream.url;

            }

        );

        container.appendChild(
            button
        );

    });

    console.log("✓ Stream Buttons Ready");

},

        /**
         * ==========================================
         * ACTIVATE TABS
         * ==========================================
         */
       activateTabs() {

    const tabs =
        document.querySelectorAll(
            ".agid-tab"
        );

    const panels =
        document.querySelectorAll(
            ".agid-panel"
        );

    tabs.forEach(tab => {

        tab.addEventListener(

            "click",

            () => {

                tabs.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });

                panels.forEach(panel => {

                    panel.classList.remove(
                        "active"
                    );

                });

                tab.classList.add(
                    "active"
                );

                document
                    .getElementById(
                        tab.dataset.tab
                    )
                    .classList.add(
                        "active"
                    );

            }

        );

    });

    console.log("✓ Tabs Ready");

},
ui:{},
        /**
         * ==========================================
         * DISPLAY ERROR
         * ==========================================
         */
        showError(message) {

            this.container.innerHTML = `
                <div style="
                    background:#ffe5e5;
                    color:#b00020;
                    border:1px solid #ffb3b3;
                    padding:20px;
                    border-radius:8px;
                    font-family:Arial,sans-serif;
                    margin:20px;
                ">
                    <strong>AGID Football Error</strong>
                    <br><br>
                    ${message}
                </div>
            `;

        }

    };

    window.AGID = AGID;

})(window, document);
