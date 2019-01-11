$(function () {
    // Sends put request and id to controller when devour button is pushed
    $(".devour").on("click", function (event) {
        event.preventDefault();

        var idv = $(this).data("id");
        var id = {
            id: idv
        };
        console.log(id);

        $.ajax("/", {
            type: "PUT",
            data: id
        }).then(
            function () {
                console.log("om nom");
                location.reload();
            }
        );
    });
    // Sends delete request and id to controller when delete button pressed
    $(".delete").on("click", function (event) {
        event.preventDefault();

        var idv = $(this).data("id");
        var id = {
            id: idv
        };
        console.log(id);

        $.ajax("/", {
            type: "DELETE",
            data: id
        }).then(
            function () {
                console.log("buh bye");
                location.reload();
            }
        );
    });
    // Sends post request to controller with relevant information when submit button is pressed
    $('#subBtn').on("click", function (event) {
        event.preventDefault();

        var burgerName = $('#newBurger').val();
        var burgData = {
            burger_name: burgerName
        };

        $.ajax("/", {
            type: "POST",
            data: burgData
        }).then(
            function () {
                console.log("Yum!");
                location.reload();
            }
        )
    })

});

console.log('Loaded');