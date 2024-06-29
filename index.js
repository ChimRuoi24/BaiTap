//products
let pformat = new Intl.NumberFormat('de-DE', { minimumSignificantDigits : 2 }); 

function capitalization(string) { 
    return string.charAt(0).toUpperCase() + string.slice(1); 
}

const truncatePrice = (price, k) => { 
    const factor = Math.pow(10, Math.abs(price).toString().length - k); 
    return Math.floor(price / factor) * factor; 
}

function genprod(product) {
    if(product.image){
        product.image = "data:image/png;base64," + product.image; 
    }
    if(product.old_price){
        product.old_price = pformat.format(product.old_price); 
    }
    if((!('old_price' in product)) && (product.discount !== 0)){
        product.old_price = pformat.format(truncatePrice(Math.floor((product.price)/(1-(product.discount)/(100))),2));
    }
    if(product.tag){
        product.tag = capitalization(product.tag); 
    }
    product.short_desc = capitalization(product.short_desc); 
    product.name = capitalization(product.name); 
    product.unit_price = capitalization(product.unit_price); 
    product.price = pformat.format(product.price); 

    const markup = `
    <div class="product-container2" id="${product.name}"> 
        <div class="product-utility">
            <button class="product-cart">Add to Cart</button>
            <div class="like-share-compare">
                <div><i class="fa-solid fa-share-nodes"></i>Share</div>
                <div><i class="fa-solid fa-code-compare"></i>Compare</div>
                <div><i class="fa-regular fa-heart" onclick="style.color = '#DC143C'"></i>Like</div>
            </div>
        </div>

        <div class = "product-container">
            <img class="product-image" src="${product.image}" alt="${product.name}">
            <p class="product-discount">${product.discount ? `-${product.discount}%` : ""}</p>
            <p class="product-tag">${product.tag ? `${product.tag}` : ""}</p>

            <div class = "product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.short_desc}</p>
                <h4 class="product-price">${product.unit_price} ${product.price}</h4>
                <p class="product-old-price"><del>${product.old_price ? `${product.unit_price} ${product.old_price}` : ""}</del></p>
            </div>
        </div>
        <br></br>
    </div>

    <div class="product-container2" id="${product.name}"> 
        <div class="product-utility">
            <button class="product-cart">Add to Cart</button>
            <div class="like-share-compare">
                <div><i class="fa-solid fa-share-nodes"></i>Share</div>
                <div><i class="fa-solid fa-code-compare"></i>Compare</div>
                <div><i class="fa-regular fa-heart" onclick="style.color = '#DC143C'"></i>Like</div>
            </div>
        </div>

        <div class = "product-container">
            <img class="product-image" src="${product.image}" alt="${product.name}">
            <p class="product-discount">${product.discount ? `-${product.discount}%` : ""}</p>
            <p class="product-tag">${product.tag ? `${product.tag}` : ""}</p>

            <div class = "product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.short_desc}</p>
                <h4 class="product-price">${product.unit_price} ${product.price}</h4>
                <p class="product-old-price"><del>${product.old_price ? `${product.unit_price} ${product.old_price}` : ""}</del></p>
            </div>
        </div>
        <br></br>
    </div>
    
    <div class="product-container2" id="${product.name}"> 
        <div class="product-utility">
            <button class="product-cart">Add to Cart</button>
            <div class="like-share-compare">
                <div><i class="fa-solid fa-share-nodes"></i>Share</div>
                <div><i class="fa-solid fa-code-compare"></i>Compare</div>
                <div><i class="fa-regular fa-heart" onclick="style.color = '#DC143C'"></i>Like</div>
            </div>
        </div>

        <div class = "product-container">
            <img class="product-image" src="${product.image}" alt="${product.name}">
            <p class="product-discount">${product.discount ? `-${product.discount}%` : ""}</p>
            <p class="product-tag">${product.tag ? `${product.tag}` : ""}</p>

            <div class = "product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.short_desc}</p>
                <h4 class="product-price">${product.unit_price} ${product.price}</h4>
                <p class="product-old-price"><del>${product.old_price ? `${product.unit_price} ${product.old_price}` : ""}</del></p>
            </div>
        </div>
        <br></br>
    </div>
    
    <div class="product-container2" id="${product.name}"> 
        <div class="product-utility">
            <button class="product-cart">Add to Cart</button>
            <div class="like-share-compare">
                <div><i class="fa-solid fa-share-nodes"></i>Share</div>
                <div><i class="fa-solid fa-code-compare"></i>Compare</div>
                <div><i class="fa-solid fa-heart" onclick="style.color = '#DC143C'"></i>Like</div>
            </div>
        </div>

        <div class = "product-container">
            <img class="product-image" src="${product.image}" alt="${product.name}">
            <p class="product-discount">${product.discount ? `-${product.discount}%` : ""}</p>
            <p class="product-tag">${product.tag ? `${product.tag}` : ""}</p>

            <div class = "product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.short_desc}</p>
                <h4 class="product-price">${product.unit_price} ${product.price}</h4>
                <p class="product-old-price"><del>${product.old_price ? `${product.unit_price} ${product.old_price}` : ""}</del></p>
            </div>
        </div>
        <br></br>
    </div>`;
    return markup;
}

let fetched = false;
let resp = null;
async function loadprod() {
    if (fetched == true){
        var sth = JSON.parse(sessionStorage.getItem("products"));
        return sth;
    }
    resp = await fetch("https://dummyapi-0uzr.onrender.com/products"); 
    let prod = await resp.json(); 

    prod = prod.product_list;
    
    console.log(prod);

    const container = document.getElementById("product-container3"); 

    
    prod.forEach((product) => { 
        const disprodhtml = genprod(product); 
        container.insertAdjacentHTML("beforeend",disprodhtml);
        var k = JSON.stringify(prod);
        sessionStorage.setItem("product_list",k);
    });
}

loadprod();



//show more
let showMoreBtn = document.querySelector('#showmore-button');
let currentProduct = 4;

showMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.product-container2')];
    for (var i = currentProduct; i < currentProduct + 4; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentProduct += 4;

    if (currentProduct >= boxes.length) {
        showMoreBtn.style.display = 'none'
    }
} 


//fill heart
