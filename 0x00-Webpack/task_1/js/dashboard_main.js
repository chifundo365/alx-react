import _  from 'lodash';
import $ from 'jquery';


$(function() {
    $('body').append('<p>ALX Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button>Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - ALX</p>');

    function updateCounter()
    {
        let currentText  =  $('#count').text();
        let count = currentText ? parseInt(currentText) || 0 : 0;
        count += 1;
        if (count === 1) {
            $('#count').text(`${count} click on the button`);
        } else {
            $('#count').text(`${count} clicks on the button`);
        }
    }

    $('button').on('click', _.debounce(updateCounter, 500))
});

