/* CURRENT YEAR */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* FLOAT-UP REVEAL */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.08,

            rootMargin:
                "0px 0px -60px 0px"
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* DECORATIVE COFFEE MARK PARALLAX */

const coffeeMark =
    document.querySelector(".coffee-mark");


let ticking = false;


function updateCoffeeMark() {

    if (!coffeeMark) return;

    const y = window.scrollY;

    coffeeMark.style.transform =
        `translateY(${y * 0.08}px) rotate(12deg)`;

    ticking = false;

}


window.addEventListener(
    "scroll",
    () => {

        if (!ticking) {

            window.requestAnimationFrame(
                updateCoffeeMark
            );

            ticking = true;

        }

    },
    { passive: true }
);


/* SMOOTH ANCHOR NAVIGATION */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const href =
                    link.getAttribute("href");

                if (
                    !href ||
                    href === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(href);


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });
