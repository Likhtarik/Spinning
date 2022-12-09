let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
var value = Math.ceil(Math.random() * 3600);
console.log(value);
console.log(spinBtn);

spinBtn.onclick = function () {
    wheel.style.transform = 'rotate(' + value + 'deg)';
    value += Math.ceil(Math.random() * 3600);
};
