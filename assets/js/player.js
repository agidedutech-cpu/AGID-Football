 // Initialize iframes
    document.getElementById("match-header").src = `https://www.scorebat.com/embed/matchview/${matchId}/`;
    document.getElementById("match-header").title = `Live ${matchTitle} | Livescore`;

    document.getElementById("tv-iframe").src = streams[0];
    document.getElementById("tv-iframe").title = `Live ${matchTitle} | Watch Now`;

    document.getElementById("lineup-iframe").src = `https://www.scorebat.com/embed/line-up/${matchId}/`;
    document.getElementById("events-iframe").src = `https://www.scorebat.com/embed/matchview/${matchId}/`;
    document.getElementById("momentum-iframe").src = `https://widgets.sofascore.com/embed/attackMomentum?id=${momentumId}`;

    // Build stream buttons
    const buttonContainer = document.getElementById("button-container");
    streams.forEach((url, i) => {
      const btn = document.createElement("button");
      btn.className = "source-button";
      btn.textContent = `Str ${i + 1}`;
      btn.addEventListener("click", () => {
        document.querySelectorAll(".source-button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById("tv-iframe").src = url;
      });
      if (i === 0) btn.classList.add("active");
      buttonContainer.appendChild(btn);
    });

    // Tab switch
    function changeTab(tabName) {
      document.querySelectorAll(".tab, .tab-content").forEach(el => el.classList.remove("active"));
      document.getElementById(tabName).classList.add("active");
      document.getElementById(tabName + "-tab").classList.add("active");
    }
