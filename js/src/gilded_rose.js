class Item {
  constructor (name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class AgedBrie extends Item {
  constructor (name, sellIn, quality) {
    super(name, sellIn, quality);

    this._maxQuality = 50;
  }

  updateQuality () {
    if (this.quality !== this._maxQuality) {
      this.sellIn >= 1 ? this.quality += 1 : this.quality += 2;
    }
     this.sellIn -= 1;
  }
}

class Sulfuras extends Item {
  constructor (name, sellIn, quality) {
    super (name, sellIn, quality);

    this.quality = 80;
  }
}

class BackstagePass extends Item {
  constructor (name, sellIn, quality) {
    super(name, sellIn, quality);

    this._maxQuality = 50;
    this._upperSellInLimit = 10;
    this._midSellInLimit = 5;
  }

  updateQuality () {
    if (this.quality !== this._maxQuality) {
      if (this.sellIn > this._upperSellInLimit) {
        this.quality += 1;
      } else if (this.sellIn <= this._upperSellInLimit && this.sellIn > this._midSellInLimit) {
        this.quality += 2;
      } else if (this.sellIn <= this._midSellInLimit && this.sellIn > 0) {
        this.quality += 3;
      } else {
        this.quality = 0;
      }
    }
     this.sellIn -= 1;
  }
}

class Conjured extends Item {
  constructor (name, sellIn, quality) {
    super (name, sellIn, quality);

    this._minItemQuality = 0;
  }

  updateQuality () {
    if (this.quality !== this._minItemQuality) {
      this.sellIn >= 1 ? this.quality -= 2 : this.quality -= 4;
    }
     this.sellIn -= 1;
  }
}

class Shop {
  constructor (items = []) {
    this.items = items;
    this.specialItems = {
      'Aged Brie': (item) => updateAgedBrie(item),
      'Sulfuras, Hand of Ragnaros': (item ) => updatedSulfuras(item),
      'Backstage passes to a TAFKAL80ETC concert': (item) => updateBackstagePass(item),
      'Conjured Mana Cake': (item) => updateConjured(item)
    }
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
      if (this.specialItems[item.name]) {
        this.specialItems[item.name](item);
      } else {
        this.updateNormalItems(item);
      }
    })

    return this.items;
  }
}
