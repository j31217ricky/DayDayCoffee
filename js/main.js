var abc = document.querySelector(".btnstyle");

if (abc) {
  abc.addEventListener(
    "click",
    function (event) {
      event.preventDefault();

      // 新增：回傳 GA4 add_to_cart 事件
      if (typeof gtag === "function") {
        gtag("event", "add_to_cart", {
          currency: "TWD", // 幣別新台幣
          value: 1500, // 購物車總金額 (數字，不可有千分位逗號)
          items: [
            {
              item_id: "PROD_001", // 商品 ID
              item_name: "測試商品", // 商品名稱
              price: 1500, // 商品單價
              quantity: 1 // 數量
            }
          ]
        });
      }

      alert("您已將商品加入購物車");
    },
    false
  );
}