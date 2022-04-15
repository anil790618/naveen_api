"use strict"

const url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=7455cf01bce6460f8982793dcac11b6d"

let papers = document.querySelectorAll("img");
let Title = document.querySelectorAll("h2");
let Description = document.querySelectorAll("p");
let readMore = document.querySelectorAll("a");

fetch(url)
    .then(news =>{
        return news.json()
    })
    .then(data =>{

        let imgurl1 = data.articles[0].urlToImage;
        let img = papers[0].setAttribute("src", imgurl1)

        
        let title =data.articles[0].title
        Title[0].innerText= title
        
        let description = data.articles[0].description
        Description[0].innerText= description
        
        let moreDate = data.articles[0].url
        readMore[5].setAttribute("href",moreDate)

        // ================================================================================

        let imgurl2 = data.articles[1].urlToImage
        let img2 = papers[1].setAttribute("src", imgurl2)
        
        let title2 =data.articles[1].title
        Title[1].innerText= title2

        let description2 = data.articles[1].description
        Description[1].innerText= description2

        let moreDate1 = data.articles[1].url
        readMore[6].setAttribute("href",moreDate1)

        // ===============================================================================

        let imgurl3 = data.articles[2].urlToImage
        let img3 = papers[2].setAttribute("src", imgurl3)
        
        let title3=data.articles[2].title
        Title[2].innerText= title3

        let description3 = data.articles[2].description
        Description[2].innerText= description3

        let moreDate2 = data.articles[2].url
        readMore[7].setAttribute("href",moreDate2)

        // ===========================================================================

        let imgurl4 = data.articles[3].urlToImage
        let img4 = papers[3].setAttribute("src", imgurl4)
        
        let title4=data.articles[3].title
        Title[3].innerText= title4

        let description4 = data.articles[3].description
        Description[3].innerText= description4

        let moreDate3 = data.articles[3].url
        readMore[8].setAttribute("href",moreDate3)

        // =============================================================================

        let imgurl5 = data.articles[4].urlToImage
        let img5 = papers[4].setAttribute("src", imgurl5)
        
        let title5=data.articles[4].title
        Title[4].innerText= title5

        let description5 = data.articles[4].description
        Description[4].innerText= description5

        let moreDate4 = data.articles[4].url
        readMore[9].setAttribute("href",moreDate4)

        // =============================================================================

         let imgurl6 = data.articles[5].urlToImage
         let img6 = papers[5].setAttribute("src", imgurl6)
         
         let title6=data.articles[5].title
         Title[5].innerText= title6
 
         let description6 = data.articles[5].description
         Description[5].innerText= description6
 
         let moreDate5 = data.articles[5].url
         readMore[10].setAttribute("href",moreDate5)

         // =============================================================================

         let imgurl7 = data.articles[6].urlToImage
         let img7 = papers[6].setAttribute("src", imgurl7)
         
         let title7=data.articles[6].title
         Title[6].innerText= title7
 
         let description7 = data.articles[6].description
         Description[6].innerText= description7
 
         let moreDate6 = data.articles[6].url
         readMore[11].setAttribute("href",moreDate6)
        
          // =============================================================================

          let imgurl8 = data.articles[7].urlToImage
          let img8 = papers[7].setAttribute("src", imgurl8)
          
          let title8=data.articles[7].title
          Title[7].innerText= title8
  
          let description8 = data.articles[7].description
          Description[7].innerText= description8
  
          let moreDate7 = data.articles[7].url
          readMore[12].setAttribute("href",moreDate7)
        
         // =============================================================================

         let imgurl9 = data.articles[8].urlToImage
         let img9 = papers[8].setAttribute("src", imgurl9)
         
         let title9=data.articles[8].title
         Title[8].innerText= title9
 
         let description9 = data.articles[8].description
         Description[8].innerText= description9
 
         let moreDate8 = data.articles[8].url
         readMore[13].setAttribute("href",moreDate8)
        
        // =============================================================================

        let imgurl10 = data.articles[9].urlToImage
        let img10 = papers[9].setAttribute("src", imgurl10)
        
        let title10=data.articles[9].title
        Title[9].innerText= title10

        let description10 = data.articles[9].description
        Description[8].innerText= description10

        let moreDate9 = data.articles[9].url
        readMore[14].setAttribute("href",moreDate9)

    })