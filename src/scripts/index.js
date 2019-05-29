import '../styles/index.scss';

import AutoNumeric from 'autonumeric';

let options ={
  allowDecimalPadding: "true",
  negativePositiveSignPlacement: "l",
  caretPositionOnFocus: "decimalRight",
  emptyInputBehavior: "always",
}

let currencies = {
  gbp: "British",
  eur: "French",
  usa: "NorthAmerican"
}

let widget = document.querySelectorAll('.currency')[0]
//let els = Array.from(widgets).map(w => w.querySelectorAll('.currency__input'));
let input = widget.querySelector('.currency__input')
let anElement = new AutoNumeric(input, 0.00, [AutoNumeric.getPredefinedOptions()['euro'], options]);
let select = widget.querySelector('.currency__select');
select.addEventListener('change', (event) => {
  anElement.update([AutoNumeric.getPredefinedOptions()[currencies[event.target.value]], options]);
  console.log(anElement.rawValue)
})



