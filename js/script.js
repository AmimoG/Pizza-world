//show cart

(function(){
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function(){
        cart.classList.toggle('show-cart');
    })
})();

//add items to the cart

(function(){
    const cartBtn = document.querySelectorAll('.store-item-icon');

    cartBtn.forEach(function(btn){
        btn.addEventListener('click',function(event){
            // console.log(event.target);

            if(event.target.parentElement.classList.contains('store-item-icon')){
                let fullPath =
                event.target.parentElement.previousElementSibling.src;
                let pos = fullPath.indexOf('img') + 3;
                let partPath = fullPath.slice(pos);

                const item = {};
                item.img = `img-cart${partPath}`;
                let name = event.target.parentElement.parentElement.nextElementSibling
                .children[0].children[0].textContent;
                item.name = name;
                let price = event.target.parentElement.parentElement.nextElementSibling
                .children[0].children[1].textContent;
                let finalPrice = price.slice(1).trim();
                item.price = finalPrice;


const cartItem = document.createElement('div');
    cartItem.classList.add(
        "cart-item", 
        "d-flex", 
        "justify-content-between", 
        "text-capitalize", 
        "my-3");
    cartItem.innerHTML =`          
            <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="cart-item-text">

              <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>
          </div>`;
//select cart
const cart = document.getElementById('cart');
const total = document.querySelector('.cart-total-container');

cart.insertBefore(cartItem, total);
swal('', 'item added to the cart', 'success');
showTotals();
$('.deliver').show()
$('#checkout').click(function(){
  swal ('Thank you', 'for shopping with us','success')
})

            }
        })
    })

    //Show totals
    function showTotals(){
        const total = [];
        const items = document.querySelectorAll('.cart-item-price');

        items.forEach(function(item){
            total.push(parseFloat(item.textContent));
        })

        const totalMoney = total.reduce(function(total,item){
            total += item;
            return total;
        },0)
        const finalMoney = totalMoney.toFixed(2);

        document.getElementById('cart-total').textContent = finalMoney;
        document.querySelector('.item-total').textContent = finalMoney;
        document.getElementById('item-count').textContent = total.length;
    }


})();

$("#delivery").click(function(){
    $(".delivery").show()
  });
  //validate delivery form
  $("#confirm").click(function(){
    event.preventDefault()
    var town=["CBD", "Hurlingham", "Muthaiga", "Ngong Road", "South B", "WestLands", "Thika Road"]
    var charges=[50,100,150,100,100, 50, 100]
    var name = $("#name").val();
    var contact = $("#contact").val();
    var location = town[$("#location").val()];
    var street = $("#street").val();
    var delivery = charges[$("#location").val()];
    if (name == '' || contact == '' || location == ''|| street== '' ){
      swal("Error", "Kindly fill all the fields", "error");
    } else {
      swal('Hello ' +name + " we have received your order. And will be delivered to "+ street +' Street, ' + location + " in less than 30 Min. Delivery charges: Ksh " + delivery);
    }
  });
  
