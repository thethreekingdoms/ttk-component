import Markdown from '../../../libs/markdown';
import './style.scss';

export default class DataGrid extends Markdown {
  document(locale) {
    return require(`../../docs/${locale}/DataGrid.md`);
  }
}
