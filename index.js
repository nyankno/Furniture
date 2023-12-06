ScrollReveal({
    reset: false,
    distance: '100px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.header, .top', { origin: 'top'});
ScrollReveal().reveal('.bottom', { origin: 'bottom'});
ScrollReveal().reveal('.left', { origin: 'left'});
ScrollReveal().reveal('.right', { origin: 'right'});


/*================== typed js =================*/
const typed = new Typed('.multiple-text',{
    strings: ['Modern Design.', 'Beautiful.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

} );

var cart =[];
function addtocart(a){
    cart.push({...categories[a]});
}

function displaycart(a){
    let j = 0;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
    }
    else{
        document.getElementById('cartItem').innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            return(
                `
                <div class='cart-item'>
                    <div class='row-img'>
                       <img class='rowimg' scr=${image}>

                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>$ ${price}.00</h2>`+ "<i class='bx bx-trash' onclinc='delElement("+ (j++) +")'></i></div>"
                
            )
        }).join('');
    }
}