async function renderProducts() {
    const container = document.getElementById("productContainer");
    container.style.display = "flex";
    container.innerHTML = "";
    document.getElementById('hidden-form').style.display = "none";
  
    try {
      const response = await axios.get('http://localhost:4000/products');
      const products = response.data;
      
  
      products.forEach(product => {
        const uniqId = product.id;
        const article = document.createElement("article");
        article.classList.add("card", "product-item");
  
        const header = document.createElement("header");
        header.classList.add("card__header");
  
        const title = document.createElement("h1");
        title.classList.add("product__title");
        title.textContent = product.title;
        header.appendChild(title);
  
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("card__image");
  
        const image = document.createElement("img");
        image.src = product.imageUrl;
        image.alt = product.title;
        imageContainer.appendChild(image);
  
        const content = document.createElement("div");
        content.classList.add("card__content");
  
        const price = document.createElement("h2");
        price.classList.add("product__price");
        price.textContent = product.price;
        content.appendChild(price);
  
        const description = document.createElement("p");
        description.classList.add("product__description");
        description.textContent = product.description;
        content.appendChild(description);
  
        const actions = document.createElement("div");
        actions.classList.add("card__actions");
  
        const detailsLink = document.createElement("a");
        detailsLink.classList.add("btn");
        detailsLink.href = "/home";
        detailsLink.textContent = "Details";
        actions.appendChild(detailsLink);
  
        const addToCartButton = document.createElement("button");
        addToCartButton.classList.add("btn");
        addToCartButton.textContent = "Add to Cart";

        function addToCart(uniqId) {
          addToCartButton.onclick = (event) => {
              event.preventDefault();
              console.log('clicked');
              axios.get(`http://localhost:4000/add-to-cart/${uniqId}`);
          }
      }
      addToCart(uniqId);



        actions.appendChild(addToCartButton);
  
        article.appendChild(header);
        article.appendChild(imageContainer);
        article.appendChild(content);
        article.appendChild(actions);
  
        container.appendChild(article);
      });
    } catch (error) {
      console.log(error);
    }
  }