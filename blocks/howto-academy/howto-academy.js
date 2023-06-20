import { getLibs } from '../../scripts/utils.js';

export default async function init(el) {
  if (el.querySelector('ol')) {
    el.querySelector('ol').parentElement.classList.add('order-list');
    // const newList = el.querySelectorAll('.order-list');
    const list = el.querySelectorAll('.order-list li');
    let i = 1;
    list.forEach((elem) => {
      el.querySelector('.order-list').insertAdjacentHTML(
        'beforeEnd',
        `<div><span class="num">${i}</span>${elem.innerHTML}</div>`
      );
      i++;
    });
    el.querySelector('ol').remove();
  }
}
