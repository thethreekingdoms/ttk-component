import Markdown from '../../../libs/markdown';

import './style.scss';

export default class BackTop extends Markdown {
  document(locale) {
    return require(`../../docs/${locale}/BackTop.md`);
  }
}
