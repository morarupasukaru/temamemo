import { FlashcardItemType } from './flashcard-item-type';

export class FlashcardItem {
  readonly type: FlashcardItemType;
  readonly value: string;
  readonly centered: boolean;
  readonly bigText: boolean;
  readonly description?: string;
  readonly width?: string;
  readonly mediatype?: string;
  readonly autoplay?: boolean;

  constructor(type: FlashcardItemType,
              value: string,
              centered: boolean,
              bigText: boolean,
              description?: string,
              width?: string,
              mediatype?: string,
              autoplay?: boolean) {
    this.type = type;
    this.value = value;
    this.centered = centered;
    this.bigText = bigText;
    this.description = description;
    this.width = width;
    this.mediatype = mediatype;
    this.autoplay = autoplay;
  }

  static buildText(specs: { text: string, bigText?: boolean, centered?: boolean }): FlashcardItem {
    return new FlashcardItem(
      FlashcardItemType.Text,
      specs.text,
      specs.centered !== undefined ? specs.centered : false,
      specs.bigText !== undefined ? specs.bigText : false);
  }

  static buildImage(specs: { url: string, centered?: boolean, description?: string, width?: string }): FlashcardItem {
    return new FlashcardItem(
      FlashcardItemType.Image,
      specs.url,
      specs.centered !== undefined ? specs.centered : true,
      false,
      specs.description,
      specs.width);
  }

  static buildLink(specs: { url: string, centered?: boolean, description?: string }): FlashcardItem {
    return new FlashcardItem(
      FlashcardItemType.Link,
      specs.url,
      specs.centered !== undefined ? specs.centered : false,
      false,
      specs.description);
  }

  static buildSound(specs: { url: string, centered?: boolean, mediatype: string, autoplay?: boolean }): FlashcardItem {
    return new FlashcardItem(
      FlashcardItemType.Sound,
      specs.url,
      specs.centered !== undefined ? specs.centered : true,
      false,
      undefined,
      undefined,
      specs.mediatype,
      specs.autoplay !== undefined ? specs.autoplay : true);
  }
}
