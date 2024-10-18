function solve() {
   const products = Array.from(document.getElementsByClassName("product"));
   const textArea = document.querySelector("textarea");
   const checkoutButton = document.querySelector(".checkout");
   let list = [];
   let totalPrice = 0;

   products.forEach((product) => {
      const button = product.querySelector("button");
      button.addEventListener("click", () => {
         const name = product.querySelector(".product-title").innerText;
         //ей тук беше грешката => аз си намирах елемента така product.etElementsByClassName("product-title")
         const money = product.querySelector(".product-line-price").innerText;
         textArea.textContent += `Added ${name} for ${money} to the cart.\n`;
         list.push(name);
         totalPrice += Number(money);
      });
   });

   checkoutButton.addEventListener("click", () => {
      textArea.textContent = `You bought ${list.join(", ")} for ${totalPrice}.`;
   });
}