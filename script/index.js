// console.log("JavaScript Conneted");

const lessionData = () => {
    const url = "https://openapi.programming-hero.com/api/levels/all"
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayLession(data.data))
}
lessionData();
// {
//     "id": 101,
//     "level_no": 1,
//     "lessonName": "Basic Vocabulary"
// }
const displayLession = (lessions) => {
    // console.log(lessions); 
    // jeikhne rakhbo oi div take Conneted korte hbe.
    const lessionConatiner = document.getElementById("Lession-Container");
    // console.log(lessionConatiner);
    lessionConatiner.innerHTML = " ";
    
    for ( const lession of lessions){
        console.log(lession);
        
        // Eikhne new dive Create korte hbe
        const btnDiv = document.createElement("div")
        btnDiv.innerHTML = `
        <button class="btn btn-outline btn-secondary"><i class="fa-solid fa-book-open"></i> Learn - ${lession.level_no}
        </button>

        `
        lessionConatiner.appendChild(btnDiv);
        
    }
    
}
