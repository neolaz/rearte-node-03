class Product{
    constructor (id, code, title, description, price, thumbnail, stock){
        this.id = id
        this.code = code;
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.stock = stock;
    }
}

class ProductManager{
    constructor (){
        this.products = [];
    }

    addProduct(code, title, description, price, thumbnail, stock){
        const codeOk = this.checkCode(code);
        const fieldsOk = this.checkFields(code, title, description, price, thumbnail, stock);

        if (codeOk && fieldsOk) {
            const newProduct = new Product(this.generateProductId(), code, title, description, price, thumbnail, stock);
            this.products.push(newProduct);
        } else {
            let msgError = "";

            if (!codeOk) msgError += "El código del producto que está intentando agregar está repetido.";
            if (!fieldsOk) msgError += "Alguno de los campos ingresados para el nuevo producto está vacío.";

            console.log(msgError);
        }
    }

    getProducts(){
        console.log(this.products.length > 0 ? console.log(this.products) : console.log("Aún no hay productos cargados."));
    }

    getProductById(id){
        const p = this.products.find(p => p.id == id);
        p === undefined ? console.log("Not Found.") : console.log(p);
    }

    checkCode(code){
        const p = this.products.find(p => p.code == code);
        return ((p === undefined && code != "") ? true : false);
    }

    checkFields(code, title, description, price, thumbnail, stock){
        return ((code != "" && title != "" && description != "" && price > 0 && thumbnail != "" && stock > 0) ? true : false);
    }

    generateProductId(){
        return (this.products.length > 0 ? this.products[this.products.length -1].id + 1 : 1);
    }
}

// Testing
const productManager = new ProductManager();

productManager.getProducts();

productManager.addProduct("abc123", "producto prueba", "Este es un producto prueba", 200, "Sin imagen", 25);

productManager.getProducts();

productManager.addProduct("abc123", "producto prueba", "Este es un producto prueba", 200, "Sin imagen", 25);

productManager.getProductById(10);



