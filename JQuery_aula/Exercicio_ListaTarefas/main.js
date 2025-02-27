$(document).ready(function(){
    $("header button").click(function(){
        $('form').slideDown();
    })

    $("#cancel-button").click(function(){
        $('form').slideUp();
    })

    $("form").on('submit',function(e){
        e.preventDefault();

        const newTask = $('#new-task').val();
        const newItem = $(`<li><span class="task">${newTask}</span></li>`);

        $(newItem).appendTo('#task-list')

        $('#new-task').val('')
    })

    $('#task-list').on('click','span',function(){
        $(this).toggleClass('done')
    })

}) 