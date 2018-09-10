import Markdown from '../../../libs/markdown';

import './style.scss';

export default class ColumnsSetting extends Markdown {
  document(locale) {
    return require(`../../docs/${locale}/columnsSetting.md`);
  }
}
