import assign from "lodash/assign";
import Layout from "../../helpers/layout";

export default {
  getBaseline(datasets, calculatedProps, index) {
    const {domain, stacked} = calculatedProps;
    if (index === 0 || stacked === false) {
      // TODO: assumes independent x axis
      const minY = Math.min(...domain.y) > 0 ? Math.min(...domain.y) : 0;
      return datasets[index].data.map((datum) => assign({y0: minY}, datum));
    } else {
      return datasets[index].data.map((datum) => {
        const y0 = Layout.getY0(datasets, datum, index);
        return assign({y0}, datum);
      });
    }
  }
};
