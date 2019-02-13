$(document).ready(() => {

$.ajax({
    url: 'http://localhost/employee_cards/php/getData.php',
    method: "GET",
    success: function (data) {
        console.log(data)
        // let res = JSON.stringify(data.toString())
        // console.log('res', res)
        // console.log('data', JSON.stringify(data.toString()))
            // for (let i = 0; i < data.length; i++) {
                // console.log('arrData', arrData[i])
            //     let thisOption = [];
            //     let emp = [];
            //     thisOption[i] = `<a id='EMP-dropdown-option[${i}]' class="dropdown-item" href="#"></a>`;
            //     console.log('thisoptionati', thisOption[i])
            //     $(`#EMP-dropdown-option[${i}]`).html(emp[i]) 
            //     $('.dropdown-menu').append(thisOption[i])
            // }
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
    

