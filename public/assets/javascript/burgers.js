$(function () {
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




// $(document).on('click', '.devour'), function (event) {
//     var id = $(this).data('id');
//     console.log("click")
//     $.ajax('/', {
//         type: 'PUT',
//         data: id
//     }).then(function () {
//         console.log('Devoured');
//         location.reload();
//     });
// };

console.log('Loaded');