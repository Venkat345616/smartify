const productcontainers = [...document.querySelectorAll('.product-container')]


const nxtBtn = [...document.querySelectorAll('.arrow-right')];
const preBtn = [...document.querySelectorAll('.arrow-left')];

productcontainers.forEach((item, i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click',()=>{
        item.scrollLeft += 300;
    })


    preBtn[i].addEventListener('click',() => {
        item.scrollLeft -= 300;
    })
})


