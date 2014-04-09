var button = $('<button>');

// make it look like the other buttons
button
  .addClass('btn')
  .text('Click me!')
  .attr('title', 'Show an example alert');
  
// add function to call when clicked
button.click(function () {
  alert('Hello world!');
});
  
// add to end of the second section (0 is the first section)  
$('.gefs-f-standard .setup-section')
  .eq(1)
  .append(button);