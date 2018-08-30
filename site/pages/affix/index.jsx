import Markdown from '../../../libs/markdown';

import './style.scss';

export default class Affix extends Markdown {
  document(locale) {
    return require(`../../docs/${locale}/affix.md`);
  }
}
