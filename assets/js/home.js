fetch('db.json')
  .then(response => response.json())
  .then(data => {
    data.products.map((item) => {
      document.querySelector(".main-blog").innerHTML += `
        <div class="blog-item">
          <div class="blog-item-pic">
            <img src="${item.image}" alt="">
          </div>
          <div class="blog-item-text">
            <ul>
              <li><i class="fa fa-calendar-o"></i> ${item.date}</li>
              <li><i class="fa fa-comment-o"></i>${item.comments}</li>
            </ul>
            <h3><a href="#">${item.title}</a></h3>
            <p>${item.description}</p>
            <a href="${item.link}" class="blog-btn">${item.button_text} <i class="fa fa-arrow-right"></i><span class="arrow_right"></span></a>
          </div>
        </div>
      `;
    });
  })
  .catch(error => console.error('Error:', error));