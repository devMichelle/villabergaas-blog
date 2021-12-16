const postsUrl = "https://www.michellenarverud.no/villabergaas-api/wp-json/wp/v2/posts?_embed";
//const enableCors = "";

const slidepostsContainer = document.querySelector(".slider-post-container");
var slideIndex = 1;
showSlides(slideIndex);



async function showSlides(n) {

    try {
        const response = await fetch(postsUrl);
        const posts = await response.json();

        //console.log(posts);

        slidepostsContainer.innerHTML = "";

    
        for (let i = 0; i < posts.length; i++) {
            console.log(posts[i]);

            // console.log(posts[i]._embedded["wp:featuredmedia"][0].source_url);
            // console.log(posts[i]._embedded["wp:term"][0][0].slug);
            let date = posts[i].date;
            let dateTrimmed = date.slice(0, date.length-9);

            slidepostsContainer.innerHTML +=    `<figure class="slider-post">
                                                    <a href="blogpost.html?id=${posts[i].id}" class="slide-blogpost">
                                                    <div>
                                                        <img class="slider-post-img" src="${posts[i]._embedded["wp:featuredmedia"][0].source_url}">
                                                            <div class="slider-post-header">
                                                                    <p class="category">${posts[i]._embedded["wp:term"][0][0].slug}</p>
                                                                    <p class="date">${dateTrimmed}</p>
                                                                    <h2 class="blogpost-title">${posts[i].title.rendered}</h2>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                `
        }

        // ======= SlideShow =======

        var i;
        var slides = document.getElementsByClassName("slider-post");
        
        if (n > slides.length) {slideIndex = 1} 
        if (n < 1) {slideIndex = slides.length}

        for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
                slides[slideIndex-1].style.display = "block";


    } catch (error) {
        console.log(error);
        slidepostsContainer.innerHTML = errorMessage("Oops!" + `<br>` + "Something went wrong in the loading process, please try to refresh the page." + `<br><br>` + error);
    }

};


showSlides();


// ======= SlideShow =======

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}






