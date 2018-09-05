import Markdown from '../../../libs/markdown';

import './style.scss';

export default class List extends Markdown {
  document(locale) {
    return require(`../../docs/${locale}/list.md`);
  }
}
