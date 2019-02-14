$(document).ready(() => {

$.ajax({
    url: 'http://localhost/employee_cards/php/getNames.php',
    method: "GET",
    dataType: "json",
    
    success: function (data) {
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
                let emp = {
                    name: data[0].name,
                    id: data[0].id,
                    position: data[0].position,
                    email: data[0].email,
                    phone: data[0].phone
                }
                $('#emp_id').html(emp.id);
                $('#emp_name').html(emp.name);
                $('#emp_position').html(emp.position);
                $('#emp_phone').html(emp.phone);
                $('#emp_email').html(emp.email);
            }
        });         
    });
    
});
    
