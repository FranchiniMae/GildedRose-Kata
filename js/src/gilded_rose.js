class Item {
  constructor (name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor (items = []) {
    this.items = items;
  }

  updateNormalItems (item) {
    const MIN_ITEM_QUALITY = 0;

    if (item.quality !== MIN_ITEM_QUALITY) {
      item.sellIn >= 1 ? item.quality -= 1 : item.quality -= 2;
    }

    item.sellIn -= 1;
    return item;
  }

  updateQuality() {
    this.items.forEach(item => {
      if (SPECIAL_ITEMS[item.name]) {
        SPECIAL_ITEMS[item.name](item);
      } else {
        this.updateNormalItems(item);
      }
    })

    return this.items;
  }
}

// TODO: Move util functions to a util directory

const SPECIAL_ITEMS = {
  'Aged Brie': (item) => updateAgedBrie(item),
  'Sulfuras, Hand of Ragnaros': (item ) => updatedSulfuras(item),
  'Backstage passes to a TAFKAL80ETC concert': (item) => updateBackstagePass(item),
  'Conjured Mana Cake': (item) => updateConjured(item)
}

const updateAgedBrie = (item) => {
    const MAX_ITEM_QUALITY = 50;

    if (item.quality !== MAX_ITEM_QUALITY) {
      item.sellIn >= 1 ? item.quality += 1 : item.quality += 2;
    }

    item.sellIn -= 1;
    return item;
}

const updateSulfuras = (item) => item

const updateBackstagePass = (item) => {
    const UPPER_SELL_IN_LIMIT = 10;
    const MID_SELL_IN_LIMIT = 5;
    const MAX_ITEM_QUALITY = 50;


    if (item.quality !== MAX_ITEM_QUALITY) {
      if (item.sellIn > UPPER_SELL_IN_LIMIT) {
        item.quality += 1;
      } else if (item.sellIn <= UPPER_SELL_IN_LIMIT && item.sellIn > MID_SELL_IN_LIMIT) {
        item.quality += 2;
      } else if (item.sellIn <= MID_SELL_IN_LIMIT && item.sellIn > 0) {
        item.quality += 3;
      } else {
        item.quality = 0;
      }
    }

    item.sellIn -= 1;
    return item;
}

const updateConjured = (item) => {
  const MIN_ITEM_QUALITY = 0;

  if (item.quality !== MIN_ITEM_QUALITY) {
    item.sellIn >= 1 ? item.quality -= 2 : item.quality -= 4;
  }

  item.sellIn -= 1;
  return item;
}
