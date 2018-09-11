import Markdown from '../../../libs/markdown';

import './style.scss';

export default class SearchCard extends Markdown {
  document(locale) {
    return require(`../../docs/${locale}/SearchCard.md`);
  }
}
