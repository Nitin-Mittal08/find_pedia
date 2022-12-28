const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const input = searchInput.target.value;
const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${input}`;

function displaySearchResult(txt){
    console.log(txt);
}


searchForm.addEventListener('submit',displaySearchResult(url));