import Markdown from '../../../libs/markdown';

import './style.scss';

export default class Timeline extends Markdown {
  document(locale) {
    return require(`../../docs/${locale}/timeline.md`);
  }
}
