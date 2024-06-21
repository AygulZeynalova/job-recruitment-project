
    const blogPosts = [
        {
            "title": "Blog Title here",
            "date": "19 Feb, 2016",
            "comments": 3,
            "imageUrl": "https://www.konnectplugins.com/recruit/img/news/news1.jpg",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "link": "blog-single.html"
          },
          {
            "title": "Blog Title here",
            "date": "10 Feb, 2016",
            "comments": 20,
            "imageUrl": "https://www.konnectplugins.com/recruit/img/news/news2.jpg",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "link": "blog-single.html"
          },
          {
            "title": "Blog Title here",
            "date": "21 Jan, 2016",
            "comments": 92,
            "imageUrl": "https://www.konnectplugins.com/recruit/img/news/news3.jpg",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "link": "blog-single.html"
          }
    ];

    const blogContainer = document.getElementById("blog-posts");

    blogPosts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `
            <h3><a href="${post.link}">${post.title}</a></h3>
            <p>${post.content}</p>
            <img src="${post.imageUrl}" alt="${post.title}">
            <p>Date: ${post.date}</p>
            <p>Comments: ${post.comments}</p>
        `;
        blogContainer.appendChild(postElement);
    });
