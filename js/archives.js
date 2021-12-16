const postsUrl = "https://www.michellenarverud.no/villabergaas-api/wp-json/wp/v2/posts?_embed&page=";
//const enableCors = "";

const archiveContainer = document.querySelector(".archiveContainer");
const loader = document.querySelector(".loading");

const loadMore = document.getElementById("button");
let counter = 1;


async function getPosts() {

    try {

        const response = await fetch(postsUrl + counter);
        const posts = await response.json();
        //console.log(posts);
        
        loader.style.display = "none";

        for (let i = 0; i < posts.length; i++) {
            console.log(posts[i].date);

            let date = posts[i].date;
            let dateTrimmed = date.slice(0, date.length-9);
           

            archiveContainer.innerHTML +=   `<div class ="blogpost-conainer">
                                                <a href="blogpost.html?id=${posts[i].id}" class="blogpost">
                                                    <div class="blog-img" 
                                                    style="background-image: url(${posts[i]._embedded["wp:featuredmedia"][0].source_url});">
                                                        <div class="blogpost-header">
                                                            <p class="category">${posts[i]._embedded["wp:term"][0][0].slug}</p>
                                                            <p class="date">${dateTrimmed}</p>
                                                            <h2 class="blogpost-title">${posts[i].title.rendered}</h2>
                                                        </div>
                                                    </div>
                                                    
                                                </a>
                                            </div>`
        }

    } catch (error) {
        console.log(error);
        loader.style.display = "none";
        archiveContainer.innerHTML = errorMessage("Oops!" + `<br>` + "Something went wrong in the loading process, please try to refresh the page." + `<br><br>` + error);
    }
}

getPosts();



const noPosts = document.querySelector(".no-posts");

loadMore.onclick = function() {
    counter++

        if(counter >= 2) {
            loadMore.disabled = "true";
            loadMore.style.display = "none";
            noPosts.style.display = "block";
        } else {
            loadMore.disabled = "false";
        }
        getPosts()

}