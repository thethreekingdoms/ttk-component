import Markdown from '../../../libs/markdown';

import './style.scss';

export default class AntdSelect extends Markdown {
  document(locale) {
    return require(`../../docs/${locale}/antdSelect.md`);
  }
}
