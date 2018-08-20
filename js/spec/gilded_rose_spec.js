describe('gileded rose - normal items', () => {
  it("decreases normal item sellIn by 1", () => {
    const gildedRose = new Shop([ new Item("normal", 5, 10) ]);
    const updatedNormal = gildedRose.updateQuality();

    expect(updatedNormal[0].sellIn).toEqual(4);
  });

  it("decreases normal item quality by 1 if sellIn is > 1", () => {
    const gildedRose = new Shop([ new Item("normal", 5, 10) ]);
    const updatedNormal = gildedRose.updateQuality();

    expect(updatedNormal[0].quality).toEqual(9);
  });

  it("decreases normal item quality by 1 if sellIn is === 1", () => {
    const gildedRose = new Shop([ new Item("normal", 1, 5) ]);
    const updatedNormal = gildedRose.updateQuality();

    expect(updatedNormal[0].quality).toEqual(4);
  });

  it("decreases normal item quality by 2 if sellIn is === 0", () => {
    const gildedRose = new Shop([ new Item("normal", 0, 5) ]);
    const updatedNormal = gildedRose.updateQuality();

    expect(updatedNormal[0].quality).toEqual(3);
  });

  it("decreases normal item quality by 2 if sellIn is < 0", () => {
    const gildedRose = new Shop([ new Item("normal", -1, 3) ]);
    const updatedNormal = gildedRose.updateQuality();

    expect(updatedNormal[0].quality).toEqual(1);
  });

  it("does not decrease quality if quality === 0", () => {
    const gildedRose = new Shop([ new Item("normal", 0, 0) ]);
    const updatedNormal = gildedRose.updateQuality();

    expect(updatedNormal[0].quality).toEqual(0);
  });
})

describe('aged brie', () => {
  it ('decreases aged brie sellIn by 1', () => {
    const brie = new AgedBrie('Aged Brie', 2, 0)
    brie.updateQuality(brie)

    expect(brie.sellIn).toEqual(1)
  })

  it ('increases aged brie quality by 1 if sellIn > 1', () => {
    const brie = new AgedBrie('Aged Brie', 2, 0)
    brie.updateQuality(brie)

    expect(brie.quality).toEqual(1)
  })

  it ('increases aged brie quality by 1 if sellIn === 1', () => {
    const brie = new AgedBrie('Aged Brie', 1, 0)
    brie.updateQuality(brie)

    expect(brie.quality).toEqual(1)
  })

  it ('increases aged brie quality by 2 if sellIn < 1', () => {
    const brie = new AgedBrie('Aged Brie', 0, 0)
    brie.updateQuality(brie)

    expect(brie.quality).toEqual(2)
  })

  it ('does not change aged brie quality if quality === 50', () => {
    const brie = new AgedBrie('Aged Brie', 2, 50)
    brie.updateQuality(brie)

    expect(brie.quality).toEqual(50)
  })
})

describe('sulfuras', () => {
  it('does not change sulfuras sellIn', () => {
    const sulfuras = new Sulfuras('Sulfuras, Hand of Ragnaros', 0, 80)

    expect(sulfuras.sellIn).toEqual(0)
  })

  it('does not change sulfuras quality', () => {
    const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 0, 80)

    expect(sulfuras.quality).toEqual(80)
  })
})

describe('backstage passes', () => {
  it('decreases backstage pass sellIn by 1', () => {
    const backstagePass = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 15, 20)
    backstagePass.updateQuality(backstagePass)

    expect(backstagePass.sellIn).toEqual(14)
  })

  it('increases backstage pass quality by 1 if sellIn > 10', () => {
    const backstagePass = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 15, 20)
    backstagePass.updateQuality(backstagePass)

    expect(backstagePass.quality).toEqual(21)
  })

  it('increases backstage pass quality by 2 if sellIn === 10', () => {
    const backstagePass = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 10, 20)
    backstagePass.updateQuality(backstagePass)

    expect(backstagePass.quality).toEqual(22)
  })

  it('increases backstage pass quality by 2 if sellIn <= 10 and sellIn > 5', () => {
    const backstagePass = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 7, 20)
    backstagePass.updateQuality(backstagePass)

    expect(backstagePass.quality).toEqual(22)
  })

  it('increases backstage pass quality by 3 if sellIn === 5', () => {
    const backstagePass = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 5, 20)
    backstagePass.updateQuality(backstagePass)

    expect(backstagePass.quality).toEqual(23)
  })

  it('increases backstage pass quality by 3 if sellIn <= 5 and sellIn > 0', () => {
    const backstagePass = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 3, 20)
    backstagePass.updateQuality(backstagePass)

    expect(backstagePass.quality).toEqual(23)
  })

  it('sets backstage pass quality to 0 if sellIn === 0', () => {
    const backstagePass = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 0, 20)
    backstagePass.updateQuality(backstagePass)

    expect(backstagePass.quality).toEqual(0)
  })

  it('sets backstage pass quality to 0 if sellIn < 0', () => {
    const backstagePass = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', -1, 20)
    backstagePass.updateQuality(backstagePass)

    expect(backstagePass.quality).toEqual(0)
  })

  it('does not increase backstage pass quality if quality === 50', () => {
    const backstagePass = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 3, 50)
    backstagePass.updateQuality(backstagePass)

    expect(backstagePass.quality).toEqual(50)
  })
})

describe('conjured', () => {
  it('decreases conjured sellIn by 1', () => {
    const conjured = new Conjured('Conjured Mana Cake', 3, 6)
    conjured.updateQuality(conjured)

    expect(conjured.sellIn).toEqual(2)
  })

  it('decreases conjured quality by 2 if quality !== 0 and if sellIn is > 1', () => {
    const conjured = new Conjured('Conjured Mana Cake', 3, 6)
    conjured.updateQuality(conjured)

    expect(conjured.quality).toEqual(4)
  })


  it('decreases conjured quality by 2 if quality !== 0 and if sellIn is === 1', () => {
    const conjured = new Conjured('Conjured Mana Cake', 1, 5)
    conjured.updateQuality(conjured)

    expect(conjured.quality).toEqual(3)
  })

  it('decreases conjured quality by 4 if quality !== 0 and if sellIn is === 0', () => {
    const conjured = new Conjured('Conjured Mana Cake', 0, 6)
    conjured.updateQuality(conjured)

    expect(conjured.quality).toEqual(2)
  })


  it('decreases conjured quality by 4 if quality !== 0 and if sellIn is < 0', () => {
    const conjured = new Conjured('Conjured Mana Cake', -1, 5)
    conjured.updateQuality(conjured)

    expect(conjured.quality).toEqual(1)
  })

  it('does not decrease conjured quality if quality === 0', () => {
    const conjured = new Conjured('Conjured Mana Cake', -1, 0)
    conjured.updateQuality(conjured)

    expect(conjured.quality).toEqual(0)
  })
})
