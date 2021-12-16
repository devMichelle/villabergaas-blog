const blogpostContainer = document.querySelector(".blogpostContainer");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");



//console.log(id);

const blogpostUrl = "https://www.michellenarverud.no/villabergaas-api/wp-json/wp/v2/posts/" + id + "?_embed";

async function getBlogpost() {

    try {
        const response = await fetch(blogpostUrl);
        const blogpostDetails = await response.json(); 

        console.log(blogpostDetails);
         //console.log(blogpostDetails._embedded["wp:featuredmedia"][0].source_url)

        document.title = "Villa Bergås | " + `${blogpostDetails.title.rendered}`;

        let date = blogpostDetails.date;
        let dateTrimmed = date.slice(0, date.length-9);
console.log(dateTrimmed)

        blogpostContainer.innerHTML = `<div class="blogpost-header">
        <img src="${blogpostDetails._embedded["wp:featuredmedia"][0].source_url}" class="featured-img">
        <h1 class="blogpost-title">${blogpostDetails.title.rendered} <p>${dateTrimmed}</p> </h1>
        </div>
        <div class="content">${blogpostDetails.content.rendered}</div>
        <div class="modal" id="imgModal">
            <img class="modal-content" id="image">
        </div>
        `


        var modal = document.getElementById("imgModal");

        var img = document.querySelectorAll("figure img");
        var modalImg = document.getElementById("image");

        for(let i = 0; i < img.length; i++) {
            img[i].onclick = function() {
                modal.style.display = "block";
                modalImg.src = img[i].src;
            }
        }

        modal.onclick = function() {
                    modal.style.display = "none";
                }
    

    } catch (error) {
        console.log(error);
        blogpostContainer.innerHTML = errorMessage("Oops!" + `<br>` + "Something went wrong in the loading process, please try to refresh the page." + `<br><br>` + error);

    }
}

getBlogpost()

