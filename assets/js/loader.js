(async function () {

    if (typeof matchConfig === "undefined") {
        alert("matchConfig was not found.");
        return;
    }

    const player = document.querySelector("agid-player");

    if (!player) {
        alert("<agid-player> was not found.");
        return;
    }

    player.innerHTML = `
        <div style="
            text-align:center;
            padding:40px;
            font-size:20px;">
            Loading Match...
        </div>
    `;

    try {

        const response = await fetch(
            "https://cdn.jsdelivr.net/gh/agidedutech-cpu/AGID-Football@main/assets/html/player.html"
        );

        const html = await response.text();

        player.innerHTML = html;

        const script = document.createElement("script");

        script.src =
        "https://cdn.jsdelivr.net/gh/agidedutech-cpu/AGID-Football@main/assets/js/player.js";

        document.body.appendChild(script);

    }

    catch (error) {

        player.innerHTML = `
            <h2 style="color:red;">
                Unable to load player.
            </h2>
        `;

        console.error(error);

    }

})();
