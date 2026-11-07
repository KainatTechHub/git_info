/* =========================================
   PETAL SYSTEM
========================================= */

const petalsContainer = document.getElementById("petals");

const petalTypes = [
    "🌸",
    "🌸",
    "🌷",
    "🌺",
    "🌹",
    "✿"
];

function createPetal() {

    if (!petalsContainer) return;

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerText =
        petalTypes[
            Math.floor(
                Math.random() * petalTypes.length
            )
        ];

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.fontSize =
        (12 + Math.random() * 13) + "px";

    const duration =
        6 + Math.random() * 6;

    petal.style.animationDuration =
        `${duration}s`;

    petalsContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}


/* Start petals */

for (let i = 0; i < 20; i++) {

    setTimeout(
        createPetal,
        i * 180
    );

}

setInterval(
    createPetal,
    350
);


/* =========================================
   SCREEN SYSTEM
========================================= */

const intro =
    document.getElementById("intro");

const message =
    document.getElementById("message");

const dua =
    document.getElementById("dua");

const cards =
    document.getElementById("cards");

const final =
    document.getElementById("final");


function showScreen(screen) {

    if (!screen) return;

    document
        .querySelectorAll(".screen")
        .forEach(item => {

            item.classList.remove(
                "active"
            );

        });

    screen.classList.add("active");
}


/* =========================================
   INTRO BUTTON
========================================= */

const startBtn =
    document.getElementById("startBtn");

if (startBtn) {

    startBtn.addEventListener(
        "click",
        function () {

            console.log(
                "Open Your Surprise clicked"
            );

            showScreen(message);

        }
    );

}


/* =========================================
   MESSAGE BUTTON
========================================= */

const duaBtn =
    document.getElementById("duaBtn");

if (duaBtn) {

    duaBtn.addEventListener(
        "click",
        function () {

            showScreen(dua);

        }
    );

}


/* =========================================
   DUA BUTTON
========================================= */

const surpriseBtn =
    document.getElementById("surpriseBtn");

if (surpriseBtn) {

    surpriseBtn.addEventListener(
        "click",
        function () {

            showScreen(cards);

        }
    );

}


/* =========================================
   SURPRISE DATA
========================================= */

const surprises = [

    {
        image: "images/friend1.jpg",

        dua:
            "Allah tumhare naseeb mein hamesha khair, khushiyan aur barkat likhe, aur tumhari zindagi ka har naya qadam behtareen ho."
    },

    {
        image: "images/friend2.jpg",

        dua:
            "Allah tumhari nayi zindagi ko sukoon, asani aur apni rehmaton se bhar de, aur har mushkil ko tumhare liye asaan farmaye."
    },

    {
        image: "images/friend3.jpg",

        dua:
            "Allah tumhare mustaqbil ko roshan farmaye, tumhari har jaiz dua qabool kare aur tumhein duniya aur aakhirat ki har bhalaai ata farmaye."
    }

];


/* =========================================
   CARD ELEMENTS
========================================= */

const cardElements =
    document.querySelectorAll(
        ".surprise-card"
    );

const countElement =
    document.getElementById("count");

const modal =
    document.getElementById(
        "surpriseModal"
    );

const surpriseImage =
    document.getElementById(
        "surpriseImage"
    );

const surpriseDua =
    document.getElementById(
        "surpriseDua"
    );

const closeModal =
    document.getElementById(
        "closeModal"
    );

const nextCardBtn =
    document.getElementById(
        "nextCardBtn"
    );


let selectedCards = [];

let surpriseIndex = 0;


/* =========================================
   SELECT CARD
========================================= */

cardElements.forEach(card => {

    card.addEventListener(
        "click",
        function () {

            /* Don't allow used card */

            if (
                card.classList.contains(
                    "used"
                )
            ) {

                return;

            }


            /* Maximum 3 cards */

            if (
                selectedCards.length >= 3
            ) {

                return;

            }


            /* Mark selected card */

            card.classList.add(
                "used"
            );


            selectedCards.push(
                card.dataset.card
            );


            /* Update counter */

            if (countElement) {

                countElement.innerText =
                    selectedCards.length;

            }


            /* Open surprise */

            openSurprise(
                surpriseIndex
            );


            surpriseIndex++;


            /* Update instruction */

            updateInstruction();

        }
    );

});


/* =========================================
   OPEN SURPRISE
========================================= */

function openSurprise(index) {

    if (
        !surprises[index] ||
        !modal
    ) {

        return;

    }

    const surprise =
        surprises[index];


    if (surpriseImage) {

        surpriseImage.src =
            surprise.image;

    }


    if (surpriseDua) {

        surpriseDua.innerText =
            surprise.dua;

    }


    modal.classList.add(
        "show"
    );


    /* Extra celebration petals */

    for (
        let i = 0;
        i < 12;
        i++
    ) {

        setTimeout(
            createPetal,
            i * 100
        );

    }

}


/* =========================================
   CLOSE MODAL
========================================= */

if (closeModal) {

    closeModal.addEventListener(
        "click",
        function () {

            modal.classList.remove(
                "show"
            );

            checkFinished();

        }
    );

}


/* =========================================
   NEXT CARD
========================================= */

if (nextCardBtn) {

    nextCardBtn.addEventListener(
        "click",
        function () {

            modal.classList.remove(
                "show"
            );

            checkFinished();

        }
    );

}


/* =========================================
   CHECK THREE CARDS
========================================= */

function checkFinished() {

    if (
        selectedCards.length === 3
    ) {

        setTimeout(
            showFinal,
            700
        );

    }

}


/* =========================================
   UPDATE CARD INSTRUCTION
========================================= */

function updateInstruction() {

    const remaining =
        3 - selectedCards.length;

    const hint =
        document.querySelector(
            ".bottom-hint"
        );

    if (!hint) return;


    if (remaining === 2) {

        hint.innerText =
            "✨ Two more surprises are waiting...";

    }

    else if (remaining === 1) {

        hint.innerText =
            "🌸 One more surprise is waiting...";

    }

    else {

        hint.innerText =
            "✨ Your three surprises are complete!";

    }

}


/* =========================================
   FINAL SCREEN
========================================= */

function showFinal() {

    if (!final) return;

    showScreen(final);


    /* Celebration petals */

    for (
        let i = 0;
        i < 45;
        i++
    ) {

        setTimeout(
            createPetal,
            i * 70
        );

    }

}


/* =========================================
   CLOSE MODAL BY OUTSIDE CLICK
========================================= */

if (modal) {

    modal.addEventListener(
        "click",
        function (event) {

            if (
                event.target === modal
            ) {

                modal.classList.remove(
                    "show"
                );

                checkFinished();

            }

        }
    );

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            if (modal) {

                modal.classList.remove(
                    "show"
                );

                checkFinished();

            }

        }

    }
);


/* =========================================
   DEBUG
========================================= */

console.log(
    "Nikah Surprise website loaded successfully."
);

console.log(
    "Start button:",
    startBtn
);

console.log(
    "Message screen:",
    message
);

console.log(
    "Petal container:",
    petalsContainer
);