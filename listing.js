/*!
==========================================
AGID Football Listing Engine
Version : 1.0.0
Author  : AGID EDU TECH
==========================================
*/

(function () {

"use strict";

window.AGIDListing = {

    matches: [],

    container: null,

    init: function (config) {

        this.matches = config.matches || [];

        this.container = document.getElementById(

            config.container || "agid-match-list"

        );

        if (!this.container) {

            console.error("AGID Listing container not found.");

            return;

        }

        this.render();

    },

    render: function () {

        this.container.innerHTML = "";

        this.matches.forEach(match => {

            this.container.appendChild(

                this.createCard(match)

            );

        });

    },

    createCard: function (match) {

        const card = document.createElement("div");

        card.className = "agid-card";

        card.innerHTML = `

<div class="agid-body">

    <div class="team">

        <img src="${match.home.logo}" alt="${match.home.name}">

        <div class="team-name">

            ${match.home.name}

        </div>

    </div>

    <div class="center">

        <div class="score">

            VS

        </div>

        <div class="time">

            ${match.time}

        </div>

        <div class="status upcoming">

            Upcoming

        </div>

    </div>

    <div class="team">

        <img src="${match.away.logo}" alt="${match.away.name}">

        <div class="team-name">

            ${match.away.name}

        </div>

    </div>

</div>

<div class="agid-footer">

    <div>📺 AGID TV</div>

    <div>🎤 AGID</div>

    <div>🏆 ${match.competition}</div>

</div>

`;

        card.onclick = function () {

            window.location.href = match.url;

        };

        return card;

    }

};

})();
