
// Get elements
const decrementBtn = document.querySelector(".minus");
const incrementBtn = document.querySelector(".plus");
const qtyInput = document.getElementById("qty");

// End function button  Quantity order product
decrementBtn.addEventListener("click", function() {
  const currentValue = parseInt(qtyInput.value);
  /**
   * If the order value is more than 1, then if you click on the minus(-) button the order value can be reduced by 1
   */
  if (currentValue > 1) {
    qtyInput.value = currentValue - 1;
  }
});

incrementBtn.addEventListener("click", function() {
  const currentValue = parseInt(qtyInput.value);
  // condition if you click buttom increment(+), then value will add 1 every clicked
  qtyInput.value = currentValue + 1;
});
// End function button order product


// start chosee image product
//Get elements 
const smallImgCols = document.querySelectorAll(".small-img-col");
const mainImage = document.querySelector(".main-image > img");

smallImgCols.forEach(function(smallImgCol) {
  // if you clicked all on  ".small-img-col" will be searching and display main image that you choose
  smallImgCol.addEventListener("click", function() {
    const newImageSrc = this.querySelector("img").src;
    mainImage.src = newImageSrc;
  });
});
// End chosee image product

// order by WhatsApp as input quantity
const sewaBtn = document.querySelector(".sewa-btn");
sewaBtn.addEventListener("click", function() {
  const jumlahPesanan = parseInt(qtyInput.value);
  const pesanWhatsApp = `Halo, saya ingin memesan ${jumlahPesanan} produk.`;
  const nomorWhatsApp = "+6285774512290"; 

  const encodedPesan = encodeURIComponent(pesanWhatsApp);
  const apiURL = `https://wa.me/${nomorWhatsApp}?text=${encodedPesan}`;
  window.open(apiURL);
});
// End function order by WhatsApp as input quantity


