console.log("Welcome to project 3");
// To give space use : (&nbsp;)
//Creating a news website using News API(Application programming interaface)
//api-key = 702c9e23ed7545daa43e5c1bb1ec4a2b
 
//Initializing the news api parameters:
let source = "the-hindu";
let apiKey = "702c9e23ed7545daa43e5c1bb1ec4a2b";
// https://newsapi.org/v2/top-headlines?country=in&apiKey=702c9e23ed7545daa43e5c1bb1ec4a2b

//Grab the news container.  
let newsAccordion = document.getElementById("newsAccordion");


// Create an ajax get request.
const xhr = new XMLHttpRequest();
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=702c9e23ed7545daa43e5c1bb1ec4a2b`, true);

// What to do when response is ready.
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";

        articles.forEach(function(element,index) {
            let news = `<div class="card">
                        <div class="card-header" id="heading${index}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            <b>Breaking News ${index+1}: &nbsp; </b> ${element["title"]}
                            </button>
                        </div>

                        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
                            <div class="accordion-body">${element["content"]}. <a href="${element['url']}" target="_blank"> Read more here </a></div>
                            </div>
                        </div> `    

                newsHtml += news;
            
            });
        newsAccordion.innerHTML = newsHtml;
    } else {
        console.log("Some error occured");
    }
}

xhr.send();

