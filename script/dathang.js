const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const itemList={"sp001":{"name":"Sữa Chua Vị Kiwi","price":21000,"photo":"images/sanpham/kiwi.jpg"},
				"sp002":{"name":"Sữa Chua Vị Xoài","price":22000,"photo":"images/sanpham/mango.jpg"},
				"sp003":{"name":"Sữa Chua Vị Dưa lưới","price":23000,"photo":"images/sanpham/cantaloupe.jpg"},
				"sp004":{"name":"Sữa Chua Vị Mâm Xôi","price":24000,"photo":"images/sanpham/blackberry.jpg"},
				"sp005":{"name":"Sữa Chua Vị Dâu Tây","price":25000,"photo":"images/sanpham/strawberry.jpg"},
				"sp006":{"name":"Sữa Chua Vị Việt Quất","price":26000,"photo":"images/sanpham/blueberry.jpg"},
				"sp007":{"name":"Sữa Chua Vị Bưởi","price":27000,"photo":"images/sanpham/grapes.jpg"},
				"sp008":{"name":"Sữa Chua Vị Táo Xanh","price":28000,"photo":"images/sanpham/green-apple.jpg"},
				"sp009":{"name":"Sữa Chua Vị Dứa","price":29000,"photo":"images/sanpham/pineapple.jpg"},
			   };


let code_sps = Object.keys(itemList);

dathang = $$("button");
dathang.forEach((button, index) => {
    input = $("*:has(+ button)");
    button.addEventListener("click", (event) => {
        addCart(code_sps[index], input);
    })
})

const addCart = (code_sp, input) => {
    let soluong = parseInt(input.value);
    console.log(soluong)
    if (soluong == 0) return;
    if (typeof localStorage[code_sp] === undefined) {
        window.localStorage.setItem(code_sp, soluong);
    } else {
        let soluong_curr = parseInt(window.localStorage.getItem(code_sp));
        let tong_sp = soluong + soluong_curr;
        if (tong_sp > 100) {
            alert("Gio hang day (>100)");
            window.localStorage.setItem(code_sp, 100);
        } else {
            window.localStorage.setItem(code_sp, tong_sp);
            alert("Them san pha, thanh cong");

        }
    }
}