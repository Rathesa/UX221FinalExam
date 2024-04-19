class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class TwoSidedMarket extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<a href="shopping">Shopping</a>&nbsp; <a href="registration">Registration</a>`;
  }
}
customElements.define("x-twosided", TwoSidedMarket);

