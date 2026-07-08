/*!
 * ======================================================
 * AGID Football Framework
 * Version : 1.0.0
 * Author  : AGID EDU TECH
 * ======================================================
 */

(function (window, document) {

    "use strict";

    const AGID = {

        version: "1.0.0",

        config: null,

        container: null,

        init(config) {

            if (!config) {
                throw new Error("AGID: Configuration object is required.");
            }

            this.config = config;

            this.container = document.getElementById(
                config.container || "agid-player"
            );

            if (!this.container) {
                throw new Error(
                    "AGID: Container element not found."
                );
            }

            console.log("AGID Football v" + this.version);

            this.loadCSS();

        }
loadCSS() {

    const css = document.createElement("link");

    css.rel = "stylesheet";

    css.href = this.config.base +

        "player.css";

    css.onload = () => {

        this.loadHTML();

    };

    document.head.appendChild(css);

},

      async loadHTML() {

    try {

        const response = await fetch(

            this.config.base +

            "player.html"

        );

        const html = await response.text();

        this.container.innerHTML = html;

        this.render();

    }

    catch (error) {

        this.container.innerHTML =

            "<h2>Unable to load player.</h2>";

        console.error(error);

    }

},
      render() {

    console.log("Player Loaded");

}
    };

    window.AGID = AGID;

})(window, document);
