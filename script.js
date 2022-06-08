let ratingList = document.querySelectorAll('li');
let boxContent = document.querySelector('.content');
let rateReview = document.querySelector('.rate-review');
let submitBtn = document.querySelector('.submitBtn');
let flag = document.querySelector('.flag');

let rateNum = 0;




ratingList.forEach((num) => {
    num.addEventListener('click' , (e) => {
        ratingList.forEach((ele) => {
            ele.classList.remove('active');
        });

        e.currentTarget.classList.add('active');

        rateNum = e.currentTarget.innerHTML;
    });
});


submitBtn.addEventListener('click' , () => {
    if(rateNum == 0) {
        flag.classList.add('active');
        setTimeout(() => {
        flag.classList.remove('active');
        flag.classList.add('unactive');
        }, 2300);
        flag.classList.remove('unactive');
        
        return;
    }
    boxContent.classList.add('hide');

    const rate = document.querySelector('.rate');

    rate.innerHTML = `You selected ${rateNum} of 5`;

    rateReview.classList.add('show');
})