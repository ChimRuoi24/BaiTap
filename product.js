class product_content() {
    function choose_product (name) {
        if (name == document.getElementById('product-1-name')){
            this.total= document.createElement('div');
            this.image = document.getElementById('product-1-image');
            image.src=`data:image/jpg;base64,${product_image}`;
            this.oldprice = document.getElementById('product-1-old-price');
            this.price = document.getElementById('product-1-price');
            this.short_desc = document.getElementById('product-1-description');
            this.tag = 'cafe chair';
            this.unit_price = this.image*(100+this.oldprice);

            this.total.appendChild(this.image);
            this.total.appendChild(name);
            this.total.appendChild(this.oldprice);
            this.total.appendChild(this.price);
            this.total.appendChild(this.short_desc);
            this.total.appendChild(this.tag);
            this.total.appendChild(this.unit_price);


            return this.total;
        }
    }
}
        
