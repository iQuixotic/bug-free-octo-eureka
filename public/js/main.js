$(document).ready(() => {
   

$.ajax({
    url: 'http://localhost/employee_cards/php/getNames.php',
    method: "GET",
    dataType: "json",
    
    success: function (data) {
        console.log(data)
            for (let i = 0; i < data.length; i++) {
                let thisOption = [];
                let emp = [];
                thisOption[i] = `<a value =${data[i].id} id='EMP_ID${data[i].id}' class="option dropdown-item" href="#">${data[i]['name']}</a>`;
                $(`#EMP-dropdown-option${data['id']}`).html(emp[i]) 
                $('.dropdown-menu').append(thisOption[i])
            }
        }
    }); 

    $(document).on('click', 'a', (e) => {
        let target = e.target.id.slice(6)
        
        $.ajax({
            url: 'http://localhost/employee_cards/php/getData.php',
            method: "GET",
            dataType: "json",
            cache:true,
                data: {
                  id: target
                },            
            success: function (data) {
                console.log('this made it all the way around !!! ', data)
                console.log(data[0]);
                // console.log(JSON.parse(data.id));
                console.log(data.id);


                console.log(`<h2>${data[0].name}</h2>`);
                console.log(`<h2>${data[0].id}</h2>`);
                console.log(`<h2>${data[0].position}</h2>`);
                console.log(`<h2>${data[0].phone}</h2>`);
                console.log(`<h2>${data[0].email}</h2>`);

            }
        });         
    });
    
});
    
    