async function loadPosts() {
    try {

        // Obtenemos todos los articulos
        let resData = await getPosts();
        // Cargamos el último articulo del array
        let postData = resData.slice(-1);
        postData = postData[0];
        // Sólo necesitamos 3 articulos
        resData = resData.slice(0, 3);

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

        resData.forEach(post => {

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
                        <a href="post.html" class="blue-cta">Learn more</a>
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