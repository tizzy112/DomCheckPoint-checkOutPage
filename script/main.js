// this is an array of the product we are displaying to users
let goods = [
    {
      image:
        "https://images.unsplash.com/photo-1613061527119-56ad37b8a581?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFza2V0fGVufDB8fDB8fHww",
      nameOfProduct: "Basket",
      price: 100,
      isLiked: false,
      quantity: 0,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664302318670-29dee41e85e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29ja3N8ZW58MHx8MHx8fDA%3D",
      nameOfProduct: "Socks",
      price: 20,
      isLiked: false,
      quantity: 0,
    },
    {
      image:
        "https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
      nameOfProduct: "Bag",
      price: 50,
      isLiked: false,
      quantity: 0,
    },
    {
      image:
        "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNha2V8ZW58MHx8MHx8fDA%3D",
      nameOfProduct: "Cake",
      price: 500,
      isLiked: false,
      quantity: 0,
    },
    {
      image:
        "https://images.unsplash.com/photo-1627140290942-7c8f9f56e870?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYm9yZ2hpbmklMjB1cnVzfGVufDB8fDB8fHww",
      nameOfProduct: "Lamborghini",
      price: 250000,
      isLiked: false,
      quantity: 0,
    },
  ];
  
  //get the container to append the data we are working with into
  const cardContainer = document.getElementById("list-products");
  //get the total div from html
  const totalBody = document.querySelector(".total");
  let sum = 0;
  
  const updatePrice = () => {
    sum = goods.reduce(function (total, good) {
      return total + good.price * good.quantity;
    }, 0);
  
    totalBody.textContent = sum;
  };
  
  const add = (good) => {
    good.quantity++;
    console.log("goods", good);
    cardContainer.innerHTML = "";
    updatePrice();
    updateUi();
  };
  const minus = (good) => {
    if(good.quantity > 0){
        good.quantity--;
        console.log(minus, ': is working')
        console.log("goods", good);
        cardContainer.innerHTML = "";
        updateUi();
        updatePrice();
        
    } else {
        console.log("quantity is already 0, cannot minus futher", good);
    }
    
  };
  
  //creating a function that updates the ui
  function updateUi() {
    
    for (let good in goods) {
      const cardBody = document.createElement("div"); 
  
      cardBody.innerHTML = `
     <div class="card-body">
              <div class="card" style="width: 18rem">
                <img src=${goods[good].image} class="card-img-top" alt="socks" />
                <div class="card-body">
                  <h5 class="card-title">${goods[good].nameOfProduct}</h5>
                  <p class="card-text">This is a ${goods[good].nameOfProduct}</p>
                  <h4 class="unit-price">${goods[good].price} $</h4>
                  <div>
                    <i id="plus" class="fas fa-plus-circle"></i>
                    <span class="quantity">${goods[good].quantity}</span>
                    <i id="minus" class="fas fa-minus-circle"></i>
                  </div>
                  <div>
                    <i class="fas fa-trash-alt"></i>
                    <i class="fas fa-heart" id="heart-icon"></i>
                  </div>
                </div>
              </div>
            </div>
     `;
     
    /* for (let good in goods){
        let button = removeBtn[good]
        button.addEventListener("click", function (event) {
            let buttonClicked = event.target 
            buttonClicked.good.remove()
            updatePrice();
            updateUi();
        })
     } */
 /*removeBtn.addEventListener("click", function (event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.remove()
    updatePrice();
 }) */

/*const remove =(good)=>{
    goods[good].remove();
    updatePrice();
    updateUi();
// }; */
/*const remove = (index) => {
    goods.splice(index, 1);
    updatePrice();
    updateUi();
  };
  console.log(remove) */

      //plus and minus button for each items mapped
    /*  const plus = cardBody.querySelector("#plus"); //plus
      const minus = cardBody.querySelector("#minus"); //minus
      
  
      plus.addEventListener("click", () => add(goods[good]));
      minus.addEventListener("click", () => minus(goods[good]));*/
      cardBody.querySelector ("#plus").addEventListener("click", () => add(goods[good])); //plus
      cardBody.querySelector ("#minus").addEventListener("click", () => minus(goods[good])); //minus
          // adding the remove button to delete item
    const removeBtn = cardBody.querySelector(".fa-trash-alt");
    removeBtn.addEventListener("click",()=> {
        alert(`${goods[good].nameOfProduct} has been deleted`);
        goods.splice(good,1);
        cardContainer.innerHTML="";
        updatePrice();
        updateUi();
    })


  
      //adding event listener that control the like button
      const heart = cardBody.querySelector("#heart-icon"); //heart
      heart.addEventListener("click", () => {
        if (goods[good].isLiked) {
          goods[good].isLiked = false;
          heart.style.color = "black";
        } else {
          goods[good].isLiked = true;
          heart.style.color = "red";
        }
      });
      cardContainer.appendChild(cardBody);
    }
  }

  //invoking the function that updates the UI
  updateUi();

