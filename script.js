// Função de pesquisa
function searchPosts() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let posts = document.getElementsByClassName("post");

    for (let i = 0; i < posts.length; i++) {
        let tags = posts[i].getAttribute("data-tags").toLowerCase();
        let title = posts[i].getElementsByTagName("h2")[0].innerText.toLowerCase();
        let content = posts[i].getElementsByTagName("p")[0].innerText.toLowerCase();

        if (tags.includes(input) || title.includes(input) || content.includes(input)) {
            posts[i].style.display = "block";
        } else {
            posts[i].style.display = "none";
        }
    }
}

// Filtrar por categoria (botões do menu)
function filterCategory(category) {
    let posts = document.getElementsByClassName("post");

    for (let i = 0; i < posts.length; i++) {
        let tags = posts[i].getAttribute("data-tags").toLowerCase();
        if (tags.includes(category)) {
            posts[i].style.display = "block";
        } else {
            posts[i].style.display = "none";
        }
    }
}

// Ativar pesquisa com tecla Enter
document.getElementById("searchInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // evita comportamento padrão do form
        searchPosts(); // chama a função de pesquisa
    }
});
