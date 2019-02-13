$(document).ready(() => {

$.ajax({
    url: 'http://localhost/employee_cards/php/getData.php',
    method: "GET",
    dataType: "json",
    success: function (data) {
        console.log(data)

            for (let i = 0; i < data.length; i++) {
                let thisOption = [];
                let emp = [];
                thisOption[i] = `<a id='EMP-dropdown-option[${i}]' class="dropdown-item" href="#">${data[i]}</a>`;
                console.log('datI', data[i].name)
                $(`#EMP-dropdown-option[${i}]`).html(emp[i]) 
                $('.dropdown-menu').append(thisOption[i])
            }
        }
    });
    
    // $('#EMP-dropdown').on('click', () => {

    //     $.ajax({
    //         url: 'http://localhost/employee_cards/php/getData.php',
    //         method: "GET",
    //         success: function (data) {
    //             console.log(data)
                
    //         }
    //     });
    // });
});
    

