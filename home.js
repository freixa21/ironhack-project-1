async function loadPosts() {
  try {
    let resData = await getPosts();
    // Sólo necesitamos 3 articulos
    resData = resData.slice(-3);


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