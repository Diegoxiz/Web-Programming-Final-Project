//Drawing Function.

function createCanvas()
{
   var side = 100;
   var tbody = document.getElementById( "tablebody" );
  
   for ( var i = 0; i < side; ++i )
   {
      var row = document.createElement( "tr" );
       
      for ( var j = 0; j < side; ++j )
      {
         var cell = document.createElement( "td" );
         row.appendChild( cell );
      } 

      tbody.appendChild( row );
   } 

  
   document.getElementById( "canvas" ).addEventListener( 
      "mousemove", processMouseMove, false );
}


function processMouseMove( e )
{        
   if ( e.target.tagName.toLowerCase() == "td" )
   {
      // turn the cell blue if the Ctrl key is pressed
      if ( e.ctrlKey )
      {
         e.target.setAttribute( "class", "blue" );
      } 

      // turn the cell red if the Shift key is pressed
      if ( e.shiftKey )
      {
         e.target.setAttribute( "class", "red" );
      } 
   } 
} // end function processMouseMove

window.addEventListener( "load", createCanvas, false );

//Time on web page function

var seconds = 0;

// Called when the page loads
function startTimer()
{
   window.setInterval( updateTime, 1000 );
}

// Updates the timer every second
function updateTime()
{
   ++seconds;

   document.getElementById( "soFar" ).innerHTML = seconds;
}

window.addEventListener( "load", startTimer, false );
