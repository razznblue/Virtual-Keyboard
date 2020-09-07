const keyBtns = document.querySelectorAll(".el");
const capsBtn = document.querySelector(".caps-lock-btn");
const shiftBtn = document.querySelectorAll(".shift-btn");
const textArea = document.querySelector("#input-box");
const documentBody = document.getElementsByTagName("BODY")[0];

const normalColor_js = "rgb(245, 244, 244)";
const clickedColor_js = "rgb(209, 208, 208)";

const app = {
  init() {
    this.addEventListeners();
  },

  onClickStyles(element) {
    element.style.backgroundColor = clickedColor_js;
    element.style.backgroundColor = normalColor_js;
  },

  /* returnPArray() {
    var arr = $(".el")
      .map(function () {
        return +$(this).find("p").text();
      })
      .get();
  }, */

  addEventListeners() {
    for (const key of keyBtns) {
      key.addEventListener("click", () => {
        textArea.focus();
        this.onClickStyles(key);
        this.onClickFunctions(key);
        //this.returnPArray();
      });
    }
    documentBody.addEventListener("click", () => {
      console.log("body pressed");
      for (const key of keyBtns) {
        let elClassList = this.getClassList(key);
        if (elClassList.includes("btn-animation") == true) {
          key.classList.remove("btn-animation");
          key.style.backgroundColor = "normalColor_js";
        }
      }
    });
  },

  insertText(element, text) {
    element.value += text;
    textArea.focus();
  },

  getClassList(key) {
    const cList = key.classList;
    const tArray = [];
    for (var item of cList) {
      tArray.push(item);
    }
    return tArray;
  },

  onClickFunctions(key) {
    const tempArray = this.getClassList(key);
    if (tempArray.includes("back-tick-btn") == true) {
      this.insertText(textArea, "`");
    } else if (tempArray.includes("one-btn") == true) {
      this.insertText(textArea, "1");
    } else if (tempArray.includes("two-btn") == true) {
      this.insertText(textArea, "2");
    } else if (tempArray.includes("three-btn") == true) {
      this.insertText(textArea, "3");
    } else if (tempArray.includes("four-btn") == true) {
      this.insertText(textArea, "4");
    } else if (tempArray.includes("five-btn") == true) {
      this.insertText(textArea, "5");
    } else if (tempArray.includes("six-btn") == true) {
      this.insertText(textArea, "6");
    } else if (tempArray.includes("seven-btn") == true) {
      this.insertText(textArea, "7");
    } else if (tempArray.includes("eight-btn") == true) {
      this.insertText(textArea, "8");
    } else if (tempArray.includes("nine-btn") == true) {
      this.insertText(textArea, "9");
    } else if (tempArray.includes("zero-btn") == true) {
      this.insertText(textArea, "0");
    } else if (tempArray.includes("minus-sign-btn") == true) {
      this.insertText(textArea, "-");
    } else if (tempArray.includes("equals-sign-btn") == true) {
      this.insertText(textArea, "=");
    } else if (tempArray.includes("delete-btn") == true) {
      let val = textArea.value;
      textArea.value = val.substring(0, val.length - 1);
      textArea.focus();
    } else if (tempArray.includes("tab-btn") == true) {
      for (var i = 0; i < 4; i++) {
        let val = textArea.value;
        var start = textArea.selectionStart;
        var end = textArea.selectionEnd;
        textArea.value = val.substring(0, start) + " " + val.substring(end);
        textArea.selectionStart = textArea.selectionEnd = start + 1;
        textArea.focus();
      }
    } else if (tempArray.includes("q-btn") == true) {
      this.insertText(textArea, "q");
    } else if (tempArray.includes("w-btn") == true) {
      this.insertText(textArea, "w");
    } else if (tempArray.includes("e-btn") == true) {
      this.insertText(textArea, "e");
    } else if (tempArray.includes("r-btn") == true) {
      this.insertText(textArea, "r");
    } else if (tempArray.includes("t-btn") == true) {
      this.insertText(textArea, "t");
    } else if (tempArray.includes("y-btn") == true) {
      this.insertText(textArea, "y");
    } else if (tempArray.includes("u-btn") == true) {
      this.insertText(textArea, "u");
    } else if (tempArray.includes("i-btn") == true) {
      this.insertText(textArea, "i");
    } else if (tempArray.includes("o-btn") == true) {
      this.insertText(textArea, "o");
    } else if (tempArray.includes("p-btn") == true) {
      this.insertText(textArea, "p");
    } else if (tempArray.includes("forward-bracket-btn") == true) {
      this.insertText(textArea, "[");
    } else if (tempArray.includes("backward-bracket-btn") == true) {
      this.insertText(textArea, "]");
    } else if (tempArray.includes("backward-slash-btn") == true) {
      //prettier-ignore
      this.insertText(textArea, "\\");
    } else if (tempArray.includes("a-btn") == true) {
      this.insertText(textArea, "a");
    } else if (tempArray.includes("s-btn") == true) {
      this.insertText(textArea, "s");
    } else if (tempArray.includes("d-btn") == true) {
      this.insertText(textArea, "d");
    } else if (tempArray.includes("f-btn") == true) {
      this.insertText(textArea, "f");
    } else if (tempArray.includes("g-btn") == true) {
      this.insertText(textArea, "g");
    } else if (tempArray.includes("h-btn") == true) {
      this.insertText(textArea, "h");
    } else if (tempArray.includes("j-btn") == true) {
      this.insertText(textArea, "j");
    } else if (tempArray.includes("k-btn") == true) {
      this.insertText(textArea, "k");
    } else if (tempArray.includes("l-btn") == true) {
      this.insertText(textArea, "l");
    } else if (tempArray.includes("semi-colon-btn") == true) {
      this.insertText(textArea, ";");
    } else if (tempArray.includes("quote-btn") == true) {
      this.insertText(textArea, "'");
    } else if (tempArray.includes("enter-btn") == true) {
      this.insertText(textArea, "\n");
    } else if (tempArray.includes("z-btn") == true) {
      this.insertText(textArea, "z");
    } else if (tempArray.includes("x-btn") == true) {
      this.insertText(textArea, "x");
    } else if (tempArray.includes("c-btn") == true) {
      this.insertText(textArea, "c");
    } else if (tempArray.includes("v-btn") == true) {
      this.insertText(textArea, "v");
    } else if (tempArray.includes("b-btn") == true) {
      this.insertText(textArea, "b");
    } else if (tempArray.includes("n-btn") == true) {
      this.insertText(textArea, "n");
    } else if (tempArray.includes("m-btn") == true) {
      this.insertText(textArea, "m");
    } else if (tempArray.includes("comma-btn") == true) {
      this.insertText(textArea, ",");
    } else if (tempArray.includes("period-btn") == true) {
      this.insertText(textArea, ".");
    } else if (tempArray.includes("forward-slash-btn") == true) {
      this.insertText(textArea, "/");
    } else if (tempArray.includes("space-bar-btn") == true) {
      this.insertText(textArea, " ");
    }
  },
};

app.init();
