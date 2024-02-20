async function loadPosts() {
    try {

        // Obtenemos todos los articulos
        let resData = await getPosts();
        // Cargamos el articulo del array con uuid "1".
        let postData = resData.find(( post => post.uuid == 1));
        // Obtenemos los articulos que no tengan uuid "1"
        let otrosPost = resData.filter(( post => post.uuid != 1));
        // En este caso solo hay 3, pero debemos cojer los 3 ultimos posts, ya que si hay más de 3,
        // imprimirá más de los que caben 
        otrosPost = otrosPost.slice(0, 3);
        
        // Añadimos el contenido del post al html
        const post = document.getElementById('post');
        const postContent = `<h1 class="post-title">${postData.name}</h1>

        <div class="post-intro">
            <span class="post-subtitle intro-text-medium">${postData.description}</span>
            <span class="completed-on ">Completed on <span class="date">${postData.completed_on}</span></span>
        </div>

        <div class="post-banner" style="background-image: url('${postData.image}');">

        </div>

        <div class="post-content">
            <p class="intro-text-regular">
            ${postData.content}
            </p>
        </div>`;

        post.insertAdjacentHTML('afterbegin', postContent);


        // Creamos los ementos que van a las post cards 
        const articleContainer = document.querySelector('.article-container');

        otrosPost.forEach(post => {

            const article =
                `<article class="article-wrapper">
            <div class="article-box">
                <div class="article-img">
                    <img src="${post.image}" alt="">
                </div>
                <div class="info-wrapper bg-white">
                    <div class="article-info">
                        <h3 class="intro-text-medium">${post.name}</h3>
                        <p>${post.description}</p>
                    </div>
                    <div class="cta-box">
                        <a href="projects/1.html" class="blue-cta">Learn more</a>
                    </div>
                </div>
            </div>
        </article>`

            articleContainer.insertAdjacentHTML('afterbegin', article);

        });

    } catch (error) {
        console.error('Error', error)
    }
}

loadPosts();