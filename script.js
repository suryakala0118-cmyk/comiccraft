document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeComicForm();

        initializePrintButton();

        initializeAnimations();

    }
);


// ---------------------------------------------
// Comic generation form
// ---------------------------------------------

function initializeComicForm() {

    const form =
        document.getElementById(
            "comic-form"
        );

    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        () => {

            const loading =
                document.getElementById(
                    "loading"
                );

            const button =
                form.querySelector(
                    "button[type='submit']"
                );


            if (loading) {

                loading.style.display =
                    "flex";

            }


            if (button) {

                button.disabled =
                    true;

                button.textContent =
                    "Creating Comic...";

            }

        }
    );
}


// ---------------------------------------------
// Print
// ---------------------------------------------

function initializePrintButton() {

    const button =
        document.getElementById(
            "print-button"
        );

    if (!button) {
        return;
    }


    button.addEventListener(
        "click",
        () => {
            window.print();
        }
    );
}


// ---------------------------------------------
// Panel animation
// ---------------------------------------------

function initializeAnimations() {

    const panels =
        document.querySelectorAll(
            ".comic-panel"
        );


    panels.forEach(
        (panel, index) => {

            panel.style.opacity =
                "0";

            panel.style.transform =
                "translateY(20px)";


            setTimeout(
                () => {

                    panel.style.transition =
                        "opacity 0.5s ease, transform 0.5s ease";

                    panel.style.opacity =
                        "1";

                    panel.style.transform =
                        "translateY(0)";

                },
                index * 100
            );

        }
    );
}
