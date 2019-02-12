$(document).ready(() => {

$.ajax({
    url: 'http://localhost/employee_cards/php/getData.php',
    method: "GET",
    success: function (data) {
        console.log(data)
        }
    });
});
    
    