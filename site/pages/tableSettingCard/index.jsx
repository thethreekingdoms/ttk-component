import Markdown from '../../../libs/markdown';

export default class TableSettingCard extends Markdown {
  document(locale) {
    return require(`../../docs/${locale}/tableSettingCard.md`);
  }
}
