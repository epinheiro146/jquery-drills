$(document).ready(function () {

    $('#btnSubmit').prop('disabled', true);

    $('#textBox').keypress(function () {

        $('#btnSubmit').prop('disabled', false);

    });

    $('<div></div>').appendTo('body');

    $('body').append('<ul></ul>');

    $('#btnSubmit').click(function () {

        $('#btnSubmit').prop('disabled', true);

        // alert($('#textBox').val());

        /* $('<h2>' + $('#textBox').val() + '</h2>').appendTo('div');

        $('h2').mouseover(function () {
            $(this).css('background-color', 'blue');
            $(this).css('border-radius', '10px');
        }); */

        $('<li>' + $('#textBox').val() + '</li>').appendTo('ul');

        $('li').click(function () {
            $(this).css('color', ('#' + Math.floor(Math.random() * 16777215).toString(16)));
        });

        $('li').dblclick(function () {
            $(this).remove();
        });

        return false;

    });

});