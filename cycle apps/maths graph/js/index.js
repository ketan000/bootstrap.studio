var formula = "2x^2+29x-9=y";
var elt = document.getElementById('u1spp1');

    var calculator = Desmos.Calculator(elt,
    {zoomButtons: true, expressions: true, settingsMenu: true});
  

  (function () {
    var QUEUE = MathJax.Hub.queue;  // shorthand for the queue
    var math = null;                // the element jax for the math output.

    //
    //  Get the element jax when MathJax has produced it.
    //
    QUEUE.Push(function () {
      math = MathJax.Hub.getAllJax("MathOutput")[0];
    });

    //
    //  The onchange event handler that typesets the
    //  math entered by the user
    //
    window.UpdateMath = function (TeX) {
      QUEUE.Push(["Text",math,"\\displaystyle{"+TeX+"}"]);
    }
  })();


function mathchange() {
    
    var a = Math.floor((Math.random() * 10) + 2);
  var b = Math.floor((Math.random() * 20) + 10);
    var c = Math.floor((Math.random() * 50) + 1);    
 formula = a+"x^2 +" + b + "x -" + c + "= y" 
 console.log("formula is: " + formula);
UpdateMath(formula);

    calculator.setExpressions([
    //don't change the id, but change the latex formula
      {id:'graph', latex:formula}
    ]);
     calculator.setMathBounds({
 //change below to change graph bounds
 left: -10,
  right: 10,
  bottom: -10,
  top: 10
});
 calculator.setGraphSettings({
 //change values below to set axis scale or labels - set to 0 for auto
 xAxisLabel: '', //set this to 2 single quotes for nothing ''
 yAxisLabel: '',
 xAxisStep: 0,  // x axis count step
 yAxisStep: 0
 }); //end the graph item


}

//hide button for answers
function toggleanswers() {

  console.log("entered answer toggle function, answersVisible is " + answersVisible);

  if (answersVisible == false) {
    show();
  } else {
    hide();
  }
}

//hide button for answers
function hide() {
  console.log("entered hide function");
  var tagslist = document.getElementsByTagName("EM");
  var numtabs = tagslist.length;
  answersVisible = false;

  i = 0;
  while (i < tagslist.length) {
//    tagslist[i].style.display = "none";
    tagslist[i].style.visibility = "hidden";
    i++;
  }
}

//show button for answers
function show() {
  console.log("entered show function");
  var tagslist = document.getElementsByTagName("EM");
  var numtabs = tagslist.length;
  answersVisible = true;

  i = 0;
  while (i < tagslist.length) {
  //  tagslist[i].style.display = "inline-block";
    tagslist[i].style.visibility = "visible";
    i++;
  }
}


mathchange();