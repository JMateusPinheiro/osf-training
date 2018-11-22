// function editContact(id){
//     $.ajax({
//         url: "/contacts/" + id,
//         type: "PUT",
//         success: function(){
//             console.log('Funfou')
//         }
//       });
// }

function deleteContact(id){
    $.ajax({
        type: "DELETE",
        url: "/contacts/" + id,
        success: function(result){
            location.replace('/');
        }
    })
}

$('#search-form').submit(function(){
    $('#search-form').attr('action', '/contacts/'+$("#id").val());
 });

 $('#update-form').submit(function(){
    $('#update-form').attr('action', '/contacts/'+$("#id").val());
 });

// $(".search").click(()=>{
//     console.log($("#id").val())
//     $.ajax({
//         type: "GET",
//         url: "/contacts/" + $("#id").val(),
//         success: function(result){
//             console.log(result)
//             location.replace('/contacts/search')
//             // location.reload()
//         }
//     })
// })