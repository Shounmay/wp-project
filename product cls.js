class product {
    constructor(price , product_name ) {
      this.price = price;
      this.product_name = product_name;
    }
    //Getters and Setters
    get product_name() {
        return this.product_name;
    }
    set product_name(product_name){
        this.product_name = product_name;

    }
    discount(){
        let MRP_price = new mrpprice();
        return MRP_price.getFullcost() - this.price;
    }
    add(newproduct){
        this.product.push(newproduct);
        let product = document.createElement("product");
        product.textContent=newproduct;
        this.price.appendchild(product);
    }
    removeproduct(){
        this.price.removeChild(this.price.firstChild);
    }

   
    
  }

  //Hoisting

  let myproduct = new product (" 3200 , Premium Glass-9 ")
  let myproduct = new product ("300 , Premium Glass-8 ")
  let myproduct = new product ("1300 , Premium Glass-7  ")
  let myproduct = new product ("500 , Premium Glass-6 ")
  let myproduct = new product ("5300 , Premium Glass-5 ")
  let myproduct = new product ("2300 , Premium Glass-4 ")
  let myproduct = new product ("300 , Premium Glass-3 ")
  let myproduct = new product ("300 , Premium Glass-2 ")
  let myproduct = new product ("6700 , Premium Glass-1  ")
