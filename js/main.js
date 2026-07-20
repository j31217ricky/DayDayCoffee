var abc = document.querySelector(".btnstyle");

if (abc) {
  abc.addEventListener(
    "click",
    function (event) {
      event.preventDefault();
      alert("您已將商品加入購物車");
    },
    false
  );
}
