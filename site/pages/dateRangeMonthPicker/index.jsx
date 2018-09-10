import Markdown from '../../../libs/markdown';
import './style.scss';

export default class DateRangeMonthPicker extends Markdown {
  document(locale) {
    return require(`../../docs/${locale}/dateRangeMonthPicker.md`);
  }
}
