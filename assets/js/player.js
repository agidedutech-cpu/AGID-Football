const {

    matchId,

    momentumId,

    competition,

    teams,

    streams

} = matchConfig;

const matchTitle =
`${competition}: ${teams[0].name} vs ${teams[1].name}`;

document.getElementById("match-title").textContent =
matchTitle;

document.getElementById("match-header").src =
`https://www.scorebat.com/embed/matchview/${matchId}/`;

document.getElementById("tv-iframe").src =
streams[0];

document.getElementById("lineup-iframe").src =
`https://www.scorebat.com/embed/line-up/${matchId}/`;

document.getElementById("events-iframe").src =
`https://www.scorebat.com/embed/matchview/${matchId}/`;
