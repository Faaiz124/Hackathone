const logout = () => {
    localStorage.clear();
    location.href = "login.html"
}
// getUserData()
window.logout = logout


var NewsDataArr = [];

let getNews = () => {
    const apiKey = 'da82a580dc16bf30bcdc67cc94974662';
    // const apiKey = '558ad559292b277ea0a3978963a9dec0';
    const searchQuery = 'blogs'; // Change this to your desired search term
    const url = `https://gnews.io/api/v4/search?q=${searchQuery}&lang=en&country=us&max=8&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const articles = data.articles;
            const main = document.getElementById("main");
            
            for (let i = 0; i < articles.length; i++) {
                const year = moment().year();
                const { image, title, content, publishedAt } = articles[i];
                const url =articles[i].url;

                const newPost = `
                <div class="card mb-3">
                <div class="row">
                    <!-- Carousel start -->
                    <div class="col-md-5">
                        <div id="CarouselTest" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block" width="500px" height="500px" src="${image}" alt="Image">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End of carousel -->
                    <div class="col-md-7 px-3">
                        <div class="card-block px-6">
                            <h4 class="card-title">Title: ${title.slice(0, 40)}....</h4>
                            <p class="card-text">Content: ${content.slice(0, 600)}....</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated ${publishedAt.slice(0, 10)}</small>
                            <small class="text-muted">Last updated ${year}</small>
                        </div>
                        
                            <div class="container-login100-form-btn btn">
                                <div class="wrap-login100-form-btn">
                                    <div class="login100-form-bgbtn"></div>
                                    <a href="${url}" target="_blank" class="login100-form-btn">
                                        <div class="login100-form-btn" id="postButton">
                                            Read More</div>
                                    </a>
                                </div>
                            </div>
                       
                    </div>
                </div>
            </div>`;
                    
                // Append the new post HTML to the existing content
                main.innerHTML += newPost;
            }
        })
        .catch(error => {
            console.error(error);
        });
}

getNews();

// let openLinkInNewTab = (url) => {
//    window.location.href=url
// };






var userData = localStorage.getItem("user");

var logoutButtonElement = document.getElementById("logoutButton");

if (userData) {
    logoutButtonElement.style.display = "inline-block";
    logoutButtonElement.innerHTML = "Log-out";
} else {
    logoutButtonElement.style.display = "inline-block";
    logoutButtonElement.innerHTML = "Log-in";
}
