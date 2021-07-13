class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.length++
    this.items.sort((a, b) => a - b)
  }

  get(pos) {
    if (pos >= this.length) {
      throw new Error('OutOfBounds')
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return this.items[this.length - 1]
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return this.items[0]
    }
  }

  sum() {
    if (this.length === 0) {
      return 0
    } else {
      const sumArray = this.items.reduce((acc, item) => acc + item)
      return sumArray
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return this.sum()/this.length
    }
  }
}

module.exports = SortedList;
