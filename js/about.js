const pageUrl = "https://www.michellenarverud.no/villabergaas-api/wp-json/wp/v2/pages?_embed";
//const enableCors = "";

const aboutContainer = document.querySelector(".aboutContainer");

async function getPage() {

    try {

    const response = await fetch(pageUrl);
    const pages = await response.json();

    console.log(pages);
    console.log(pages[0].title.rendered);

    aboutContainer.innerHTML = "";

    aboutContainer.innerHTML += `<div class="about-header">
                                    <img src="${pages[0]._embedded["wp:featuredmedia"][0].source_url}" class="about-img">
                                    <h1 class="about-title">${pages[0].title.rendered}</h1>
                                </div>
                                <p>${pages[0].content.rendered}</p>`

    } catch (error) {
        console.log(error);
        aboutContainer.innerHTML = errorMessage("Oops!" + `<br>` + "Something went wrong in the loading process, please try to refresh the page." + `<br><br>` + error);
    }

}

getPage();
