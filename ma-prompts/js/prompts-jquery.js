$(document).ready(function () {
    $('.alert-container').addClass('animate__animated animate__flipInX');
    $( ".alert-container" ).toggle();
    $(document).on('click','.al-close-this', function () {

        var alert_container = $(this).parent().parent();

        alert_container.addClass('animate__animated animate__flipOutX');

        setTimeout(() => {

            alert_container.remove('.alert-container');
            
        }, 730);

    });
});