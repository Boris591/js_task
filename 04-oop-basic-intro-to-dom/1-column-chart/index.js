export default class ColumnChart {
   element;
   chartHeight = 50;

   constructor({
      data = [],
      label = "",
      value = 0,
      link = "",
      formatHeading = data => data
   } = {}) {
      this.data = data;
      this.label = label;
      this.value = formatHeading(value);
      this.link = link;

      this.render();
   }

   get template() {
      return `
      <div class="column-chart column-chart_loading" style="--chart-height: ${this.chartHeight}">
         <div class="column-chart__title">
            Total ${this.label}
            ${this.getLink()}
         </div>
         <div class="column-chart__container">
            <div data-element="header" class="column-chart__header">
               ${this.value}
            </div>
            <div data-element="body" class="column-chart__chart">
               ${this.getColumnBody(this.data)}
            </div>
         </div>
       </div>
      `;
   }

   getLink() {
      return this.link ? `<a class="column-chart__link" href="${this.link}">View all</a>` : '';
   }

   getColumnBody(data) {
      const maxValue = Math.max(...data);
      const scale = this.chartHeight / maxValue;

      return data.map(item => {
         const percent = (item / maxValue * 100).toFixed(0);
         return `<div 
         style="--value:${(Math.floor(item * scale))}" data-tooltip="${percent}%"></div>`;
      }).join('');
   }

   render() {
      const el = document.createElement('div');
      el.innerHTML = this.template;
      this.element = el.firstElementChild;

      if (this.data.length) {
         this.element.classList.remove("column-chart_loading");
      }

      this.subElements = this.getSubElements(this.element);
   }

   getSubElements(element) {
      const result = {};
      const elements = element.querySelectorAll('[data-element]');

      for (const subElement of elements) {
         const name = subElement.dataset.element;
         result[name] = subElement;
      }

      return result;
   }

   update(data) {
      this.subElements.body.innerHTML = this.getColumnBody(data);
   }

   remove() {
      if (this.element) {
         this.element.remove();
      }
   }

   destroy() {
      this.remove();
      this.element = null;
      this.subElements = {};
   }

}