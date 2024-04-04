"use strict";

const section = document.querySelector(".section");
const counters = section.querySelectorAll(".box .counter");
const speed = 200;

counters.forEach((counter) => {
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const difference = target / speed;

        if(count < target) {
            counter.innerText = Math.ceil(count + difference);
            setTimeout(updateCounter, 1);
        }
        else {
            counter.innerText = target;
        }
    }
    updateCounter();
});