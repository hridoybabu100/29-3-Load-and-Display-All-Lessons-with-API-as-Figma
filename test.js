

const createElement = (arr) => {
    const createHtml = arr.map((el) => `<span class="btn" >${el}</span>`);
    // console.log(createHtml.join(" "));
    
}

const synnmys = ["Hello", "hi", "Babu"];
createElement(synnmys);

