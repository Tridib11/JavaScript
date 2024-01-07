const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function () {
    if (count === 0) {
        count = 1;
    } else {
        count++;
    }
    countLabel.textContent = count;
};

resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
};

decreaseBtn.onclick = function () {
    if (count > 0) {
        count--;
        countLabel.textContent = count;
    }
};
