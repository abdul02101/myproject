import Inputmask from "inputmask.es6.js";

export function rechange(one){
  Inputmask({"mask": "(999) 999-9999"}).mask(one);

}
