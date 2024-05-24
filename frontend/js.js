const sectionProducts = document.getElementById("products");
const fetchProducts = () => {
	fetch("./api/products")
		.then((res) => res.json())
		.then((res) => {
			res.forEach((product) => {
				const article = document.createElement("article");
				article.className = "article";
				article.innerHTML = `
			<img src="${product.img}" alt="${product.title}" >
			<p class="article__title">${product.title}</p>
			<p class="article__category">Categoría: ${product.category}</p>
			<p class="article__price">$${product.price}</p>
			`;
				sectionProducts.append(article);
				const addProduct = document.createElement("button");
				addProduct.innerHTML = `Agregar al carrito`;
				addProduct.className = "btn-add";
				article.append(addProduct);
			});
		});
};

fetchProducts();
