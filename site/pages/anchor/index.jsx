import Markdown from '../../../libs/markdown';

import './style.scss';

export default class Anchor extends Markdown {
  document(locale) {
    return require(`../../docs/${locale}/anchor.md`);
  }
}
