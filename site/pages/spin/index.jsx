import Markdown from '../../../libs/markdown';

import './style.scss';

export default class Spin extends Markdown {
  document(locale) {
    return require(`../../docs/${locale}/spin.md`);
  }
}
