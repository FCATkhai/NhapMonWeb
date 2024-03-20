const $ = document.querySelector.bind(document);

const search_form = $(".search_form");
const search_input = $(".search_form input");
const search_icon = $("#search_icon");

search_input.addEventListener("keypress", (event) => {
    // console.log(event.keyCode);
    if (event.keyCode == 13) {
        search();
    }
});

search_icon.addEventListener("click", () => search());

function search() {
    if (search_input.value.length > 0) {
        search_form.submit();
    }
}



window.onload = show();
function show(){
	var url = new URL(window.location);
	var kws = url.searchParams.get('search');
    let search_result = $("#search_result");
	search_result.innerHTML='<h1>'+ kws +'</h1>';
}


