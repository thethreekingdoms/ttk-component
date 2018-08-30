import Markdown from '../../../libs/markdown';

import './style.scss';

export default class AutoComplete extends Markdown {
  document(locale) {
    return require(`../../docs/${locale}/auto-complete.md`);
  }
}
