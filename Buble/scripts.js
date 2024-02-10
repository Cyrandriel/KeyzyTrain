const bubbleMaker = () => {
    const createBubble = () => {
        const bulle = document.createElement("span");
        bulle.classList.add("bulle");
        document.body.appendChild(bulle);

        const size = Math.random() * 200 + 100 + "px";
        bulle.style.height = size;
        bulle.style.width = size;

        bulle.style.top = Math.random() * 100 - 10 + "%";
        bulle.style.left = Math.random() * 100 - 10 + "%";

        bulle.addEventListener('click', () => {
            bulle.classList.remove("bulle");
            setTimeout(() => {
                document.body.removeChild(bulle);
                createBubble();
            }, 100);
        });
    };

    createBubble();
};

bubbleMaker();
