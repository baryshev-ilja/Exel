import './scss/index.scss';
import ExcelBoard from './components/excel/excel-board';
import HeaderComponent from './components/header/header-component';
import ToolbarComponent from './components/toolbar/toolbar-component';
import FormulaComponent from './components/formula/formula-component';
import TableComponent from './components/table/table-component';

const excel = new ExcelBoard('#app', {
  components: [HeaderComponent, ToolbarComponent, FormulaComponent, TableComponent],
});

excel.render();
