import Markdown from '../../../libs/markdown';

import './style.scss';

export default class Attachment extends Markdown {
  document(locale) {
    return require(`../../docs/${locale}/attachment.md`);
  }
}
