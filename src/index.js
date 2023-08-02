import './scss/index.scss';
import Excel from './components/excel/excel';
import HeaderComponent from './components/header/header-component';
import ToolbarComponent from './components/toolbar/toolbar-component';
import FormulaComponent from './components/formula/formula-component';
import TableComponent from './components/table/table-component';

const excel = new Excel('#app', {
  components: [HeaderComponent, ToolbarComponent, FormulaComponent, TableComponent],
});

excel.render();
