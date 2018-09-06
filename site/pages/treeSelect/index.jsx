import Markdown from '../../../libs/markdown';

import './style.scss';

export default class TreeSelect extends Markdown {
  document(locale) {
    return require(`../../docs/${locale}/treeSelect.md`);
  }
}
