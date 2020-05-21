'use strict';

/**
 * THIS IS NOT RESPONSIVE PAGE
 * Simple Calculator using JavaScript
 * By: Jc Velarde
 * 
 */

let Calculator =  function() {

  //Global Variable within the function
  var current = '', secVal = ''; //Store the Current Display Values (eg. 1+2+4-3/2*1)
  var time, sDisplay, opt, logs = '';


  //Inialize DOM first
  var _initDOM = () => {

    $('#logs').html('>Init Calculator.........');
    sDisplay = $('.cheader-style');  // Display the Current User Input(s)
    

    // Flip Card AND CHANGES THE FLIP BUTTON TEXT
    $('#change-calc').on('click',
      function () {
        if ($(this).text() === "Advanced") {
          $(this).text("Standard");
          $(this).removeClass('pull-right');
          $(this).removeClass('btn-danger');
          $(this).addClass('btn-primary');
          $(this).addClass('pull-left');
        } else {
          $(this).text("Advanced");
          $(this).removeClass('btn-primary');
          $(this).removeClass('pull-left');
          $(this).addClass('btn-danger');
          $(this).addClass('pull-right');
        }
        $('.flip-card').toggleClass('flipped');
        $('#standard').toggleClass('hide');

        sDisplay.val('');
        current = '';
      }
    );

  };


  //Standard and Advanced Calculator w/ switch case
  var _standardCalc =  () => {
    $('button').click((e) => {
      var _this = $(e.target).text();
      switch (_this) {
        case "AC":
          _logs(' ... reset \n>');
          _resetCalc();
          break;
        case "<-":
          opt = '';
          _backspace(current);
          _logs('<-');
          break;
        case "SQ":
          opt = 'sqrt';
          var nVal = eval((current == '')? secVal : current);
          sDisplay.val('sqrt('+nVal+')');
          _logs( ' ... sqrt(' + nVal + ')' );
          break;
        case "=":
          _logs(_this);
          _normalizeSum(current);
          _scrollDown();
          opt = '';
          current = '';
          break;

        //Advanced ===================================
        case "abs":
          var nVal = eval((current == '')? secVal : current);
          sDisplay.val('abs(' + nVal + ')');
          _logs(' ... abs(' + nVal + ')');
          opt = _this;
          break;
        case "acos":
          var nVal = eval((current == '')? secVal : current);
          sDisplay.val('acos(' + nVal + ')');
          _logs(' ... acos(' + nVal + ')');
          opt = _this;
          break;
        case "asin":
          var nVal = eval((current == '')? secVal : current);
          sDisplay.val('asin(' + nVal + ')');
          _logs(' ... asin(' + nVal + ')');
          opt = _this;
          break;
        case "atan":
          var nVal = eval((current == '')? secVal : current);
          sDisplay.val('atan(' + nVal + ')');
          _logs(' ... atan(' + nVal + ')');
          opt = _this;
          break;
        case "cos":
          var nVal = eval((current == '')? secVal : current);
          sDisplay.val('cos(' + nVal + ')');
          _logs(' ... cos(' + nVal + ')');
          opt = _this;
          break;
        case "exp":
          var nVal = eval((current == '')? secVal : current);
          sDisplay.val('exp(' + nVal + ')');
          _logs(' ... exp(' + nVal + ')');
          opt = _this;
          break;
        case "flr":
          var nVal = eval((current == '')? secVal : current);
          sDisplay.val('floor(' + nVal + ')');
          _logs(' ... floor(' + nVal + ')');
          opt = _this;
          break;
        case "log":
          var nVal = eval((current == '')? secVal : current);
          sDisplay.val('log(' + nVal + ')');
          _logs(' ... logs(' + nVal + ')');
          opt = _this;
          break;
        case "pow":
          var nVal = ((current == '')? secVal : current);
          sDisplay.val('pow(' + nVal + ')');
          _logs(' ... pow(' + nVal + ')');
          opt = _this;
          break;
        case "rnd":
          var nVal = eval((current == '')? secVal : current);
          sDisplay.val('round(' + nVal + ')');
          _logs(' ... round(' + nVal + ')');
          opt = _this;
          break;
        case "sin":
          var nVal = eval((current == '')? secVal : current);
          sDisplay.val('sin(' + nVal + ')');
          _logs(' ... sin(' + nVal + ')');
          opt = _this;
          break;
        case "tan":
          var nVal = eval((current == '')? secVal : current);
          sDisplay.val('tan(' + nVal + ')');
          _logs(' ... tan (' + nVal + ')');
          opt = _this;
          break;

          
        //Number & other Operators ===================================
        default:
          var newVal = _added_operators(current,_this);
          _storeCurrentValue( (newVal != "")? newVal : '' );
          _logs(_this);
          break;
      }
    });
  }

  //Always scroll down
  var _scrollDown = function(){
    $('#logs').animate({
      scrollTop : 1000
    });
  };

  // Do not Duplicate the entered Operators
  var _added_operators = (_val,_this) => {
    var nVal = _val.toString().slice(-1);
    var isNo = (Number(_this))? true : false;
    if(nVal != _this || isNo === true){
      return _this;
    }else{
      return '';
    }
  };


  //Back Space 1 at a time
  var _backspace = (_val) => {
    var val = _val.toString().slice(0, -1);
    current = (val === "") ? '' : val;
    sDisplay.val((current == "") ? '0' : current);
  };

  //Store The Current Value Selected
  var _storeCurrentValue =  (_val) => {
    current += _val;
    sDisplay.val(current);
  };

  // Normalize Sum
  var _normalizeSum =  (_sum) => {
    if(opt === "sqrt"){
      var nVal = Math.sqrt((_sum == '')? secVal : _sum);
      current = nVal.toFixed(4);
      sDisplay.val(current);
      _logs(current);
    }else if (opt === "abs") {
      var nVal = Math.abs((_sum == '')? secVal : _sum);
      current = nVal;
      sDisplay.val(current);
      _logs(current);
    } else if (opt === "acos") {
      var nVal = Math.acos((_sum == '')? secVal : _sum);
      current = nVal.toFixed(4);
      sDisplay.val(current);
      _logs(current);
    } else if (opt === "asin") {
      var nVal = Math.asin((_sum == '')? secVal : _sum);
      current = nVal.toFixed(4);
      sDisplay.val(current);
      _logs(current);
    } else if (opt === "atan") {
      var nVal = Math.atan((_sum == '')? secVal : _sum);
      current = nVal.toFixed(4);
      sDisplay.val(current);
      _logs(current);
    } else if (opt === "cos") {
      var nVal = Math.cos((_sum == '')? secVal : _sum);
      current = nVal.toFixed(4);
      sDisplay.val(current);
      _logs(current);
    } else if (opt === "exp") {
      var nVal = Math.exp((_sum == '')? secVal : _sum);
      current = nVal.toFixed(4);
      sDisplay.val(current);
      _logs(current);
    } else if (opt === "flr") {
      var nVal = Math.floor((_sum == '')? secVal : _sum);
      current = nVal.toFixed(4);
      sDisplay.val(current);
      _logs(current);
    } else if (opt === "log") {
      var nVal = Math.log((_sum == '')? secVal : _sum);
      current = nVal.toFixed(4);
      sDisplay.val(current);
      _logs(current);
    } else if (opt === "pow") {
      var nVal = (_sum == '')? secVal : _sum;
      var xVal = nVal.split('*');
      nVal = Math.pow(Number(xVal[0]),Number(xVal[1]));
      current = nVal.toFixed(4);
      sDisplay.val(current);
      _logs(current);
    } else if (opt === "rnd") {
      var nVal = Math.round((_sum == '')? secVal : _sum);
      current = nVal.toFixed(4);
      sDisplay.val(current);
      _logs(current);
    } else if (opt === "sin") {
      var nVal = Math.sin((_sum == '')? secVal : _sum);
      current = nVal.toFixed(4);
      sDisplay.val(current);
      _logs(current);
    } else if (opt === "tan") {
      var nVal = Math.tan((_sum == '')? secVal : _sum);
      current = nVal.toFixed(4);
      sDisplay.val(current);
      _logs(current);
    } else {
      try{
        var nSum = _handelOctalVal(_sum);
        var val = eval(nSum);
        var _val = (Number.isInteger(val) === true) ? val : val.toFixed(4);
        current = _val.toString();
        secVal = current;
        sDisplay.val(current);
        _logs(current);
      }catch(e){
        console.log("error handled");
        _logs('Unhandled Value');
      }
    }

    _logs("\n> ");
  }


  //Handle Octal Value (eg. 01, 02, 03)
  var _handelOctalVal = (_val) => {
    var nSum = _val.toString().charAt(0);
    var xSum = (nSum === '0')? _val.slice(1) : _val;
    return xSum;
  };

  //Reset Calculator
  var _resetCalc = () => {
    opt = '';
    current = '';
    sDisplay.val('0');
  };

  //Clear Logs
  var _clearLogs = () => {
    $('#clearlogs').on('click',()=>{
      logs = '';
      $('#logs').html("");
    });
  };

  //Add log(s) data
  var _logs = function (data) {
    logs += data;
    $('#logs').html("> "+logs);
  };

  //Render Calendar===================================
  var _calendar = () => {
    var calendarEl = document.getElementById('calender');
    var settings = {
      Color: 'white',
      LinkColor: '',
      NavShow: true,
      NavVertical: false,
      NavLocation: '',
      DateTimeShow: true,
      DateTimeFormat: 'mmm, yyyy',
      DatetimeLocation: '',
      EventClick: '',
      EventTargetWholeDay: false,
      DisabledDays: [],
    };
    var events = [
    ];

    caleandar(calendarEl, events, settings);
  };


  //Render Current Time using MOMENTjs
  var _time =  () => {
    setInterval(() => {
      time = moment().format("MMM Do YY h:mm:ss a");
      $('#xtime').html("DATE & TIME: " + time);
    });
  };

  // Animate Info (div element)
  var _animate = () => {
    anime({
      targets: '#info',
      // translateY: 270,
      translateY: function () {
        return anime.random(0, 100);
      },
      easing: function (el, i, total) {
        return function (t) {
          return Math.pow(Math.sin(t * (i + 1)), total);
        }
      },
      duration: 750,
      complete: _animate
    });
  };

  // Animate Box (div Element)
  var _animate_box = ()=>{
    anime({
      targets: "#boxanime",
      keyframes: [
        {translateY: -40},
        {translateX: 380},
        {translateY: 200},
        {translateX: 0},
        {translateY: 0}
      ],
      duration: 4000,
      easing: 'easeOutElastic(1, .8)',
      loop: true
    })
  }

  // Return Functions w/ new Fn Name
  return {
    time: () => _time(),
    initDOM: () => _initDOM(),
    animate: () => _animate(), //> _animate_box(),
    calendar: () => _calendar(),
    standardCal: () => _standardCalc(),
    clearLogs : () => _clearLogs(),
  }

}();

//Render First the DOM Elements Before Javascript Functions
document.addEventListener('DOMContentLoaded', () => {
  Calculator.initDOM();
  Calculator.time();
  Calculator.animate();
  Calculator.calendar();
  Calculator.standardCal();
  Calculator.clearLogs();
});
