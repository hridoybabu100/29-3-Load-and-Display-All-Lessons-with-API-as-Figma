// console.log("JavaScript Conneted");
const createElement = (arr) => {
    const createHtml = arr.map((el) => `<span class="btn" >${el}</span>`);
     return createHtml.join(" ");
    
}


const lessionData = () => {
    const url = "https://openapi.programming-hero.com/api/levels/all"
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayLession(data.data))
}


// "id": 4,
// "level": 5,
// "word": "Diligent",
// "meaning": "পরিশ্রমী",
// "pronunciation": "ডিলিজেন্ট"

const displayLession = (lessions) => {
    // console.log(lessions); 
    // jeikhne rakhbo oi div take Conneted korte hbe.
    const lessionConatiner = document.getElementById("Lession-Container");
    // console.log(lessionConatiner);
    lessionConatiner.innerHTML = " ";
    
    for ( const lession of lessions){
        // console.log(lession);
        
        // Eikhne new dive Create korte hbe
        const btnDiv = document.createElement("div")
        btnDiv.innerHTML = `
        <button id="lessionBtn-${lession.level_no}" onclick="loadbtn(${lession.level_no})" class="btn btn-outline btn-secondary lession-btn "><i class="fa-solid fa-book-open"></i> Learn - ${lession.level_no}
        </button>

        `;
        lessionConatiner.appendChild(btnDiv);
        
    }
    
}
// loda buttom section code start
 const removeActive = () => {
    const allbuttons = document.querySelectorAll('.lession-btn');
    // console.log(allbuttons);
    allbuttons.forEach((btn) => btn.classList.remove("active"));
    
 }

const loadbtn = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const lessionToggolebtn = document.getElementById(`lessionBtn-${id}`)
        // console.log(lessionToggolebtn);
        removeActive();
        lessionToggolebtn.classList.add('active');
        //Ekhn sob gulai ei active sellected hoitache. 
        loadDisplay(data.data)
    })
}


// infor btn Data
const infoLoadBtn = (id) =>{
    const url = `https://openapi.programming-hero.com/api/word/${id}`
    fetch(url)
    .then((res) => res.json())
    .then((data) => infoDisplay(data.data) )
    
}
// info Display

 const infoDisplay = (word) => {
    const infoContainer = document.getElementById('infoContainer');
    infoContainer.innerHTML = `
                <div>
                     <h1 class="text-2xl text-black font-bold">${word.word} (<i class="fa-solid fa-microphone"></i> :${word.pronunciation})</h1>
                     <p class="font-bold">${word.meaning}</p>
                </div>
                <div>
                   <p class="font-bold">Example</p>
                   <p>${word.sentence}</p>
                </div>
                <div>
                    <h2 class="font-bold">সমার্থক শব্দ গুলো</h2>
                    <div>${createElement(word.synonyms)}</div>
                </div>
                    
                    
   
        `
      document.getElementById('my_modal_5').showModal();
    
 }
// infoLoadBtn();
const loadDisplay = (words) => {
    // Main container add.
    const wordContainer = document.getElementById("load-word-Container");
    wordContainer.innerHTML = " ";
    if ( words.length == 0){
        wordContainer.innerHTML = `
              <div class="bg-gray-100 col-span-full space-y-3 p-10">
                <img class="mx-auto" src="../english-janala-resources/assets/alert-error.png" alt="">
                <p class="text-black font-medium">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                <p class="text-black font-bold text-4xl">নেক্সট Lesson এ যান</p>
             </div> 
        `;
    }
  
    for ( const word of words ){
        // new div create
        const newdiv = document.createElement('div');
        newdiv.innerHTML = `
              <div id="word-card" class="bg-white py-15 px-5 rounded-md shadow-md space-y-4">
                <p class="font-bold text-black text-[20px]">${word.word ? word.word : "Found Not" }</p>
                <p class="text-black"> ${word.pronunciation}</p>
                <p class="font-bold text-black text-[20px]"> ${word.meaning ? word.meaning  : "Found Not"} / ${word.pronunciation ? word.pronunciation  :"Found Not"}</p>
                <div class="flex justify-between items-center gap-5">
                    <button onclick="infoLoadBtn(${word.id})" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                    <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high "></i></button>     
                </div>
            </div>
        `;

        //Mina container with append
        wordContainer.appendChild(newdiv)
        
    }
   
     
}

lessionData();

// input feild
document.getElementById('search-btn').addEventListener('click', () => {
    removeActive();
    const input = document.getElementById('search-input');
    const searchValue = input.value.trim().toLowerCase();
    // console.log(searchValue); 
    fetch("https://openapi.programming-hero.com/api/words/all")
    .then((res) => res.json())
    .then((data) => {
        const allwords = data.data ;
        const filterwords = allwords.filter((word) => word.word.toLowerCase().includes(searchValue));
        // console.log(filterwords);
        loadDisplay(filterwords) ;   
    })

    

})