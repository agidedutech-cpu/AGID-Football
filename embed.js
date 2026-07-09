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

            console.log("Rendering player...");

            /*
             * Future methods
             */

            this.loadMatch();

            this.createButtons();

            this.activateTabs();

        },

        /**
         * ==========================================
         * LOAD MATCH INFORMATION
         * ==========================================
         */
        loadMatch() {

            console.log("Loading match information...");

            // Next lesson

        },

        /**
         * ==========================================
         * CREATE STREAM BUTTONS
         * ==========================================
         */
        createButtons() {

            console.log("Creating stream buttons...");

            // Next lesson

        },

        /**
         * ==========================================
         * ACTIVATE TABS
         * ==========================================
         */
        activateTabs() {

            console.log("Activating tabs...");

            // Next lesson

        },

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
