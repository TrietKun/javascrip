const urluser = "https://jsonplaceholder.typicode.com/users";

function getData(url) {
    $.ajax({
        method: "GET",
        url: urluser,
        dataType: "json"
    }).done(function(data) {
        console.log(data);
    }).fail(function() {
        alert("No user !")
    })
}
getData(urluser)