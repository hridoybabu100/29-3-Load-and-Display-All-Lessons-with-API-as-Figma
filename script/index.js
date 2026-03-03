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
        <button onclick="loadbtn(${lession.level_no})" class="btn btn-outline btn-secondary"><i class="fa-solid fa-book-open"></i> Learn - ${lession.level_no}
        </button>

        `;
        lessionConatiner.appendChild(btnDiv);
        
    }
    
}
// loda buttom section code start

const loadbtn = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then((res) => res.json())
    .then((data) => loadDisplay(data.data))
}


const loadDisplay = (words) => {
    // Main container add.
    const wordContainer = document.getElementById("load-word-Container");
    wordContainer.innerHTML = " ";
  
    for ( const word of words ){
        // new div create
        const newdiv = document.createElement('div');
        newdiv.innerHTML = `
              <div id="word-card" class="bg-white py-15 px-5 rounded-md shadow-md space-y-4">
                <p class="font-bold text-black text-[20px]">Eager${word.word}</p>
                <p class="text-black">Meaning /Pronounciation ${word.pronunciation}</p>
                <p class="font-bold text-black text-[20px]">"আগ্রহী / ইগার" ${word.meaning}</p>
                <div class="flex justify-between items-center gap-5">
                    <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                    <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high "></i></button>     
                </div>
            </div>
        `;

        //Mina container with append
        wordContainer.appendChild(newdiv)
        
    }
   
     
}
