class product {
    constructor(price , product_name ) {
      this.price = price;
      this.product_name = product_name;
    }
    //Getters and Setters
    get product_name {
        return this.product_name;
    }
    set product_name(Premium Glass-9){
        this.product_name = Premium Glass-9;

    }
    discount(){
        let MRP_price = new mrpprice();
        return MRP_price.getFullcost() - this.price;
    }
    
   
    
  }

  //Hoisting

  let myproduct = new product ("Premium Glass-9 , 3200")
  let myproduct = new product ("Premium Glass-8 , 300")
  let myproduct = new product ("Premium Glass-7 , 1300 ")
  let myproduct = new product ("Premium Glass-6 , 500")
  let myproduct = new product ("Premium Glass-5 , 5300")
  let myproduct = new product ("Premium Glass-4 , 2300")
  let myproduct = new product ("Premium Glass-3 , 300")
  let myproduct = new product ("Premium Glass-2 , 300")
  let myproduct = new product ("Premium Glass-1 , 6700 ")
