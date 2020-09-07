const inputBox = document.querySelector("#input-box");
const normalColor = "rgb(245, 244, 244)";
const clickedColor = "rgb(170, 169, 169)";
const capsLockBtn = document.querySelector(".caps-lock-btn");

$(document).ready(function () {
  // ---- KeyDown Functions ----//
  $(document).on("keydown", function (event) {
    if (event.which == 13) {
      $(".enter-btn").css({ background: clickedColor });
      $(".enter-btn").addClass("btn-animation");
    } else if (event.which == 8) {
      $(".delete-btn").css({ background: clickedColor });
      $(".delete-btn").addClass("btn-animation");
    } else if (event.which == 9) {
      $(".tab-btn").css({ background: clickedColor });
      $(".tab-btn").addClass("btn-animation");
      $(".tab-btn").removeClass("btn-animation");
    } else if (event.which == 37) {
      $(".left-key").css({ background: clickedColor });
      $(".left-key").addClass("btn-animation");
    } else if (event.which == 38) {
      $(".up-key").css({ background: clickedColor });
      $(".up-key").addClass("btn-animation");
    } else if (event.which == 39) {
      $(".right-key").css({ background: clickedColor });
      $(".right-key").addClass("btn-animation");
    } else if (event.which == 40) {
      $(".down-key").css({ background: clickedColor });
      $(".down-key").addClass("btn-animation");
    } else if (event.which == 32) {
      $(".space-bar-btn").css({ background: clickedColor });
      $(".space-bar-btn").addClass("btn-animation");
    } else if (event.which == 192) {
      $(".back-tick-btn").css({ background: clickedColor });
      $(".back-tick-btn").addClass("btn-animation");
    } else if (event.which == 48) {
      $(".zero-btn").css({ background: clickedColor });
      $(".zero-btn").addClass("btn-animation");
    } else if (event.which == 49) {
      $(".one-btn").css({ background: clickedColor });
      $(".one-btn").addClass("btn-animation");
    } else if (event.which == 50) {
      $(".two-btn").css({ background: clickedColor });
      $(".two-btn").addClass("btn-animation");
    } else if (event.which == 51) {
      $(".three-btn").css({ background: clickedColor });
      $(".three-btn").addClass("btn-animation");
    } else if (event.which == 52) {
      $(".four-btn").css({ background: clickedColor });
      $(".four-btn").addClass("btn-animation");
    } else if (event.which == 53) {
      $(".five-btn").css({ background: clickedColor });
      $(".five-btn").addClass("btn-animation");
    } else if (event.which == 54) {
      $(".six-btn").css({ background: clickedColor });
      $(".six-btn").addClass("btn-animation");
    } else if (event.which == 55) {
      $(".seven-btn").css({ background: clickedColor });
      $(".seven-btn").addClass("btn-animation");
    } else if (event.which == 56) {
      $(".eight-btn").css({ background: clickedColor });
      $(".eight-btn").addClass("btn-animation");
    } else if (event.which == 57) {
      $(".nine-btn").css({ background: clickedColor });
      $(".nine-btn").addClass("btn-animation");
    } else if (event.code == "Minus") {
      $(".minus-sign-btn").css({ background: clickedColor });
      $(".minus-sign-btn").addClass("btn-animation");
    } else if (event.code == "Equal") {
      $(".equals-sign-btn").css({ background: clickedColor });
      $(".equals-sign-btn").addClass("btn-animation");
    } else if (event.code == "KeyQ") {
      $(".q-btn").css({ background: clickedColor });
      $(".q-btn").addClass("btn-animation");
    } else if (event.code == "KeyW") {
      $(".w-btn").css({ background: clickedColor });
      $(".w-btn").addClass("btn-animation");
    } else if (event.code == "KeyE") {
      $(".e-btn").css({ background: clickedColor });
      $(".e-btn").addClass("btn-animation");
    } else if (event.code == "KeyR") {
      $(".r-btn").css({ background: clickedColor });
      $(".r-btn").addClass("btn-animation");
    } else if (event.code == "KeyT") {
      $(".t-btn").css({ background: clickedColor });
      $(".t-btn").addClass("btn-animation");
    } else if (event.code == "KeyY") {
      $(".y-btn").css({ background: clickedColor });
      $(".y-btn").addClass("btn-animation");
    } else if (event.code == "KeyU") {
      $(".u-btn").css({ background: clickedColor });
      $(".u-btn").addClass("btn-animation");
    } else if (event.code == "KeyI") {
      $(".i-btn").css({ background: clickedColor });
      $(".i-btn").addClass("btn-animation");
    } else if (event.code == "KeyO") {
      $(".o-btn").css({ background: clickedColor });
      $(".o-btn").addClass("btn-animation");
    } else if (event.code == "KeyP") {
      $(".p-btn").css({ background: clickedColor });
      $(".p-btn").addClass("btn-animation");
    } else if (event.code == "BracketLeft") {
      $(".forward-bracket-btn").css({ background: clickedColor });
      $(".forward-bracket-btn").addClass("btn-animation");
    } else if (event.code == "BracketRight") {
      $(".backward-bracket-btn").css({ background: clickedColor });
      $(".backward-bracket-btn").addClass("btn-animation");
    } else if (event.code == "Backslash") {
      $(".backward-slash-btn").css({ background: clickedColor });
      $(".backward-slash-btn").addClass("btn-animation");
    } else if (event.code == "KeyA") {
      $(".a-btn").css({ background: clickedColor });
      $(".a-btn").addClass("btn-animation");
    } else if (event.code == "KeyS") {
      $(".s-btn").css({ background: clickedColor });
      $(".s-btn").addClass("btn-animation");
    } else if (event.code == "KeyD") {
      $(".d-btn").css({ background: clickedColor });
      $(".d-btn").addClass("btn-animation");
    } else if (event.code == "KeyF") {
      $(".f-btn").css({ background: clickedColor });
      $(".f-btn").addClass("btn-animation");
    } else if (event.code == "KeyG") {
      $(".g-btn").css({ background: clickedColor });
      $(".g-btn").addClass("btn-animation");
    } else if (event.code == "KeyH") {
      $(".h-btn").css({ background: clickedColor });
      $(".h-btn").addClass("btn-animation");
    } else if (event.code == "KeyJ") {
      $(".j-btn").css({ background: clickedColor });
      $(".j-btn").addClass("btn-animation");
    } else if (event.code == "KeyK") {
      $(".k-btn").css({ background: clickedColor });
      $(".k-btn").addClass("btn-animation");
    } else if (event.code == "KeyL") {
      $(".l-btn").css({ background: clickedColor });
      $(".l-btn").addClass("btn-animation");
    } else if (event.code == "Semicolon") {
      $(".semi-colon-btn").css({ background: clickedColor });
      $(".semi-colon-btn").addClass("btn-animation");
    } else if (event.code == "Quote") {
      $(".quote-btn").css({ background: clickedColor });
      $(".quote-btn").addClass("btn-animation");
    } else if (event.code == "KeyZ") {
      $(".z-btn").css({ background: clickedColor });
      $(".z-btn").addClass("btn-animation");
    } else if (event.code == "KeyX") {
      $(".x-btn").css({ background: clickedColor });
      $(".x-btn").addClass("btn-animation");
    } else if (event.code == "KeyC") {
      $(".c-btn").css({ background: clickedColor });
      $(".c-btn").addClass("btn-animation");
    } else if (event.code == "KeyV") {
      $(".v-btn").css({ background: clickedColor });
      $(".v-btn").addClass("btn-animation");
    } else if (event.code == "KeyB") {
      $(".b-btn").css({ background: clickedColor });
      $(".b-btn").addClass("btn-animation");
    } else if (event.code == "KeyN") {
      $(".n-btn").css({ background: clickedColor });
      $(".n-btn").addClass("btn-animation");
    } else if (event.code == "KeyM") {
      $(".m-btn").css({ background: clickedColor });
      $(".m-btn").addClass("btn-animation");
    } else if (event.code == "Comma") {
      $(".comma-btn").css({ background: clickedColor });
      $(".comma-btn").addClass("btn-animation");
    } else if (event.code == "Period") {
      $(".period-btn").css({ background: clickedColor });
      $(".period-btn").addClass("btn-animation");
    } else if (event.code == "Slash") {
      $(".forward-slash-btn").css({ background: clickedColor });
      $(".forward-slash-btn").addClass("btn-animation");
    } else if (event.which === 20) {
      var bgColor = $(".caps-lock-btn").css("background-color");
      $(".caps-lock-btn").addClass("btn-animation");
      console.log(bgColor);
      if (bgColor == normalColor) {
        $(".caps-lock-btn").css({ background: clickedColor });
      } else {
        $(".caps-lock-btn").css({ background: normalColor });
      }
    } else if (event.code == "ShiftLeft") {
      $(".left-shift-btn").css({ background: clickedColor });
      $(".left-shift-btn").addClass("btn-animation");
    } else if (event.code == "ShiftRight") {
      $(".right-shift-btn").css({ background: clickedColor });
      $(".right-shift-btn").addClass("btn-animation");
    } else if (event.which == 17) {
      $(".control-btn").css({ background: clickedColor });
      $(".control-btn").addClass("btn-animation");
    } else if (event.code == "AltLeft") {
      $(".left-option-btn").css({ background: clickedColor });
      $(".left-option-btn").addClass("btn-animation");
    } else if (event.code == "AltRight") {
      $(".right-option-btn").css({ background: clickedColor });
      $(".right-option-btn").addClass("btn-animation");
    } else if (event.code == "MetaLeft") {
      $(".left-command-btn").css({ background: clickedColor });
      $(".left-command-btn").addClass("btn-animation");
    } else if (event.code == "MetaRight") {
      $(".right-command-btn").css({ background: clickedColor });
      $(".right-command-btn").addClass("btn-animation");
    }
    /* else if (event.code == "CapsLock") {
      if (event.code == "CapsLock") {
        //$(".row3 .caps-lock-btn").toggleClass("pressedCapsLock");
        var bgColor = window
          .getComputedStyle(capsLockBtn, null)
          .getPropertyValue("background-color");
        console.log(bgColor);
        var stringed = bgColor.toString();
        if (stringed == clickedColor) {
          capsLockBtn.style.background = normalColor;
        } else {
          capsLockBtn.style.background = clickedColor;
        }
        const classList = capsLockBtn.classList;
              if (classList.contains("pressedCapsLock")) {
                console.log("pressedCapsLock");
                $(".caps-lock-btn").addClass("unPressedCapsLock");
                $(".caps-lock-btn").removeClass("pressedCapsLock");
              } else {
                console.log("pressedUnCapsLock");
                $(".caps-lock-btn").addClass("pressedCapsLock");
                $(".caps-lock-btn").removeClass("unPressedCapsLock");
              }
      }
    } */
  });

  // Set up a keypress event listener where the transition starts
  /* document.addEventListener("keypress", function (e) {
    if (e.which == 20) {
      console.log(e);
      capsLockBtn.classList.add("pressedCapsLock");
    }
  });

  // Set up a keyup event listener where the transition ends
  document.addEventListener("keyup", function (e) {
    if (e.which == 20) {
      console.log(e);
      capsLockBtn.classList.remove("unPressedCapsLock");
    }
  }); */

  // ---- Keyup Functions ----//
  $(document).on("keyup", function (event) {
    if (event.which == 13) {
      $(".enter-btn").css({ background: normalColor });
      $(".enter-btn").removeClass("btn-animation");
    } else if (event.which == 8) {
      $(".delete-btn").css({ background: normalColor });
      $(".delete-btn").removeClass("btn-animation");
    } else if (event.which == 9) {
      $(".tab-btn").css({ background: normalColor });
      $(".tab-btn").removeClass("btn-animation");
    } else if (event.which == 37) {
      $(".left-key").css({ background: normalColor });
      $(".left-key").removeClass("btn-animation");
    } else if (event.which == 38) {
      $(".up-key").css({ background: normalColor });
      $(".up-key").removeClass("btn-animation");
    } else if (event.which == 39) {
      $(".right-key").css({ background: normalColor });
      $(".right-key").removeClass("btn-animation");
    } else if (event.which == 40) {
      $(".down-key").css({ background: normalColor });
      $(".down-key").removeClass("btn-animation");
    } else if (event.which == 32) {
      $(".space-bar-btn").css({ background: normalColor });
      $(".space-bar-btn").removeClass("btn-animation");
    } else if (event.which == 192) {
      $(".back-tick-btn").css({ background: normalColor });
      $(".back-tick-btn").removeClass("btn-animation");
    } else if (event.which == 48) {
      $(".zero-btn").css({ background: normalColor });
      $(".zero-btn").removeClass("btn-animation");
    } else if (event.which == 49) {
      $(".one-btn").css({ background: normalColor });
      $(".one-btn").removeClass("btn-animation");
    } else if (event.which == 50) {
      $(".two-btn").css({ background: normalColor });
      $(".two-btn").removeClass("btn-animation");
    } else if (event.which == 51) {
      $(".three-btn").css({ background: normalColor });
      $(".three-btn").removeClass("btn-animation");
    } else if (event.which == 52) {
      $(".four-btn").css({ background: normalColor });
      $(".four-btn").removeClass("btn-animation");
    } else if (event.which == 53) {
      $(".five-btn").css({ background: normalColor });
      $(".five-btn").removeClass("btn-animation");
    } else if (event.which == 54) {
      $(".six-btn").css({ background: normalColor });
      $(".six-btn").removeClass("btn-animation");
    } else if (event.which == 55) {
      $(".seven-btn").css({ background: normalColor });
      $(".seven-btn").removeClass("btn-animation");
    } else if (event.which == 56) {
      $(".eight-btn").css({ background: normalColor });
      $(".eight-btn").removeClass("btn-animation");
    } else if (event.which == 57) {
      $(".nine-btn").css({ background: normalColor });
      $(".nine-btn").removeClass("btn-animation");
    } else if (event.code == "Minus") {
      $(".minus-sign-btn").css({ background: normalColor });
      $(".minus-sign-btn").removeClass("btn-animation");
    } else if (event.code == "Equal") {
      $(".equals-sign-btn").css({ background: normalColor });
      $(".equals-sign-btn").removeClass("btn-animation");
    } else if (event.code == "KeyQ") {
      $(".q-btn").css({ background: normalColor });
      $(".q-btn").removeClass("btn-animation");
    } else if (event.code == "KeyW") {
      $(".w-btn").css({ background: normalColor });
      $(".w-btn").removeClass("btn-animation");
    } else if (event.code == "KeyE") {
      $(".e-btn").css({ background: normalColor });
      $(".e-btn").removeClass("btn-animation");
    } else if (event.code == "KeyR") {
      $(".r-btn").css({ background: normalColor });
      $(".r-btn").removeClass("btn-animation");
    } else if (event.code == "KeyT") {
      $(".t-btn").css({ background: normalColor });
      $(".t-btn").removeClass("btn-animation");
    } else if (event.code == "KeyY") {
      $(".y-btn").css({ background: normalColor });
      $(".y-btn").removeClass("btn-animation");
    } else if (event.code == "KeyU") {
      $(".u-btn").css({ background: normalColor });
      $(".u-btn").removeClass("btn-animation");
    } else if (event.code == "KeyI") {
      $(".i-btn").css({ background: normalColor });
      $(".i-btn").removeClass("btn-animation");
    } else if (event.code == "KeyO") {
      $(".o-btn").css({ background: normalColor });
      $(".o-btn").removeClass("btn-animation");
    } else if (event.code == "KeyP") {
      $(".p-btn").css({ background: normalColor });
      $(".p-btn").removeClass("btn-animation");
    } else if (event.code == "BracketLeft") {
      $(".forward-bracket-btn").css({ background: normalColor });
      $(".forward-bracket-btn").removeClass("btn-animation");
    } else if (event.code == "BracketRight") {
      $(".backward-bracket-btn").css({ background: normalColor });
      $(".backward-bracket-btn").removeClass("btn-animation");
    } else if (event.code == "Backslash") {
      $(".backward-slash-btn").css({ background: normalColor });
      $(".backward-slash-btn").removeClass("btn-animation");
    } else if (event.code == "KeyA") {
      $(".a-btn").css({ background: normalColor });
      $(".a-btn").removeClass("btn-animation");
    } else if (event.code == "KeyS") {
      $(".s-btn").css({ background: normalColor });
      $(".s-btn").removeClass("btn-animation");
    } else if (event.code == "KeyD") {
      $(".d-btn").css({ background: normalColor });
      $(".d-btn").removeClass("btn-animation");
    } else if (event.code == "KeyF") {
      $(".f-btn").css({ background: normalColor });
      $(".f-btn").removeClass("btn-animation");
    } else if (event.code == "KeyG") {
      $(".g-btn").css({ background: normalColor });
      $(".g-btn").removeClass("btn-animation");
    } else if (event.code == "KeyH") {
      $(".h-btn").css({ background: normalColor });
      $(".h-btn").removeClass("btn-animation");
    } else if (event.code == "KeyJ") {
      $(".j-btn").css({ background: normalColor });
      $(".j-btn").removeClass("btn-animation");
    } else if (event.code == "KeyK") {
      $(".k-btn").css({ background: normalColor });
      $(".k-btn").removeClass("btn-animation");
    } else if (event.code == "KeyL") {
      $(".l-btn").css({ background: normalColor });
      $(".l-btn").removeClass("btn-animation");
    } else if (event.code == "Semicolon") {
      $(".semi-colon-btn").css({ background: normalColor });
      $(".semi-colon-btn").removeClass("btn-animation");
    } else if (event.code == "Quote") {
      $(".quote-btn").css({ background: normalColor });
      $(".quote-btn").removeClass("btn-animation");
    } else if (event.code == "KeyZ") {
      $(".z-btn").css({ background: normalColor });
      $(".z-btn").removeClass("btn-animation");
    } else if (event.code == "KeyX") {
      $(".x-btn").css({ background: normalColor });
      $(".x-btn").removeClass("btn-animation");
    } else if (event.code == "KeyC") {
      $(".c-btn").css({ background: normalColor });
      $(".c-btn").removeClass("btn-animation");
    } else if (event.code == "KeyV") {
      $(".v-btn").css({ background: normalColor });
      $(".v-btn").removeClass("btn-animation");
    } else if (event.code == "KeyB") {
      $(".b-btn").css({ background: normalColor });
      $(".b-btn").removeClass("btn-animation");
    } else if (event.code == "KeyN") {
      $(".n-btn").css({ background: normalColor });
      $(".n-btn").removeClass("btn-animation");
    } else if (event.code == "KeyM") {
      $(".m-btn").css({ background: normalColor });
      $(".m-btn").removeClass("btn-animation");
    } else if (event.code == "Comma") {
      $(".comma-btn").css({ background: normalColor });
      $(".comma-btn").removeClass("btn-animation");
    } else if (event.code == "Period") {
      $(".period-btn").css({ background: normalColor });
      $(".period-btn").removeClass("btn-animation");
    } else if (event.code == "Slash") {
      $(".forward-slash-btn").css({ background: normalColor });
      $(".forward-slash-btn").removeClass("btn-animation");
    } else if (event.code == "ShiftLeft") {
      $(".left-shift-btn").css({ background: normalColor });
      $(".left-shift-btn").removeClass("btn-animation");
    } else if (event.code == "ShiftRight") {
      $(".right-shift-btn").css({ background: normalColor });
      $(".right-shift-btn").removeClass("btn-animation");
    } else if (event.which == 17) {
      $(".control-btn").css({ background: normalColor });
      $(".control-btn").removeClass("btn-animation");
    } else if (event.code == "AltLeft") {
      $(".left-option-btn").css({ background: normalColor });
      $(".left-option-btn").removeClass("btn-animation");
    } else if (event.code == "AltRight") {
      $(".right-option-btn").css({ background: normalColor });
      $(".right-option-btn").removeClass("btn-animation");
    } else if (event.code == "MetaLeft") {
      $(".left-command-btn").css({ background: normalColor });
      $(".left-command-btn").removeClass("btn-animation");
    } else if (event.code == "MetaRight") {
      $(".right-command-btn").css({ background: normalColor });
      $(".right-command-btn").removeClass("btn-animation");
    } else if (event.which === 20) {
      var bgColor = $(".caps-lock-btn").css("background-color");
      $(".caps-lock-btn").removeClass("btn-animation");
      console.log(bgColor);
      if (bgColor == normalColor) {
        $(".caps-lock-btn").css({ background: clickedColor });
      } else {
        $(".caps-lock-btn").css({ background: normalColor });
      }
    }
  });
});
