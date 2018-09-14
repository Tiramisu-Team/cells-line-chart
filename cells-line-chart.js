class CellsLineChart extends Polymer.Element {

  static get is() {
    return 'cells-line-chart';
  }

  static get properties() {
    return {
      points: {
        type: Array,
        value: [[0, 0], [1, 7], [2, 1], [3, 6], [4, 8], [5, 6]]
      },
      title: {
        type: String,
        value: 'Titulo del Grafico'
      },
      yLabel: {
        type: String,
        value: 'Y Label'
      },
      xLabel: {
        type: String,
        value: 'X Label'
      }
    };
  }
}

customElements.define(CellsLineChart.is, CellsLineChart);