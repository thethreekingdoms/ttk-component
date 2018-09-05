import Markdown from '../../../libs/markdown';

import './style.scss';

export default class Modal extends Markdown {
  document(locale) {
    return require(`../../docs/${locale}/modal.md`);
  }
}
