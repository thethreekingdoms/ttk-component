import Markdown from '../../../libs/markdown';
import './style.scss';

export default class DateRangeDatePicker extends Markdown {
  document(locale) {
    return require(`../../docs/${locale}/dateRangeDatePicker.md`);
  }
}
