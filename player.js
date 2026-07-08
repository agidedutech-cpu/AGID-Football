(function () {

    "use strict";

    window.AGID_PLAYER = {

        config: null,

        init: function (config) {

            this.config = config;

            this.loadMatch();

            this.createButtons();

            this.activateTabs();

        },

        loadMatch: function () {

            const match = this.config.match;

            document.getElementById("agid-competition-name").textContent =
                match.competition;

            document.getElementById("agid-match-title").textContent =
                match.home.name + " vs " + match.away.name;

            document.getElementById("agid-match-header").src =
                "https://www.scorebat.com/embed/matchview/" +
                match.id + "/";

            document.getElementById("agid-lineup").src =
                "https://www.scorebat.com/embed/line-up/" +
                match.id + "/";

            document.getElementById("agid-events").src =
                "https://www.scorebat.com/embed/matchview/" +
                match.id + "/";

            document.getElementById("agid-momentum").src =
                "https://widgets.sofascore.com/embed/attackMomentum?id=" +
                this.config.widgets.momentum;

            document.getElementById("agid-video").src =
                this.config.streams[0].url;

        },

        createButtons: function () {

            const container =
                document.getElementById("agid-stream-buttons");

            container.innerHTML = "";

            this.config.streams.forEach((stream, index) => {

                const btn = document.createElement("button");

                btn.className = "agid-stream-btn";

                btn.textContent = stream.name;

                if (index === 0) {
                    btn.classList.add("active");
                }

                btn.addEventListener("click", () => {

                    document
                        .querySelectorAll(".agid-stream-btn")
                        .forEach(button => {

                            button.classList.remove("active");

                        });

                    btn.classList.add("active");

                    document.getElementById("agid-video").src =
                        stream.url;

                });

                container.appendChild(btn);

            });

        },

        activateTabs: function () {

            document
                .querySelectorAll(".agid-tab")
                .forEach(tab => {

                    tab.addEventListener("click", () => {

                        document
                            .querySelectorAll(".agid-tab")
                            .forEach(item => {

                                item.classList.remove("active");

                            });

                        document
                            .querySelectorAll(".agid-panel")
                            .forEach(panel => {

                                panel.classList.remove("active");

                            });

                        tab.classList.add("active");

                        document
                            .getElementById(tab.dataset.tab)
                            .classList.add("active");

                    });

                });

        }

    };

})();
