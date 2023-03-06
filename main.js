const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
const ignore = ' .\n\r';
const elements = document.getElementsByClassName("magic");
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("mouseover", event => {
        let iterations = 0;
        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split("").map((letter, index) => {
                if (index < iterations) {
                    return event.target.dataset.value[index].toUpperCase();
                }
                if (ignore.indexOf(event.target.dataset.value[index]) >= 0) {
                    return event.target.dataset.value[index].toUpperCase();
                }
                return letters[Math.floor(Math.random() * letters.length)];
            }).join("");
            if (iterations >= event.target.dataset.value.length) clearInterval(interval)
            iterations += 1 / 6 * event.target.dataset.value.length / 15;
        }, 30);
    });
}

function filterThis(filter = false) {
    console.log(filter)
    if ((filter != false && isNaN(filter)) || filter == '') {
        ActiveGenreFilter = filter;
    } else if (!isNaN(filter)) {
        ActiveCostFilter = filter;
    }
    if (ActiveGenreFilter != '' && isNaN(ActiveGenreFilter)) {
        for (let i = 0; i < document.getElementById("gameList").children.length; i++) {
            if (games[i].genre.includes(ActiveGenreFilter) && games[i].price <= ActiveCostFilter) {
                document.getElementById("gameList").children[i].style.display = "";
            } else {
                document.getElementById("gameList").children[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < document.getElementById("gameList").children.length; i++) {
            if (games[i].price <= ActiveCostFilter) {
                document.getElementById("gameList").children[i].style.display = "";
            } else {
                document.getElementById("gameList").children[i].style.display = "none";
            }
        }
    }
}