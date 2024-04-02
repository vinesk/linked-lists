class Node {
  constructor(value) {
    this.value = value
    this.nextNode = null
  }
}

class LinkedList {
  constructor() {
    this.headNode = null
    this.listSize = 0
  }

  append(value) {
    const newNode = new Node(value)
    if (!this.headNode) {
      this.headNode = newNode
    } else {
      let current = this.headNode
      while (current.nextNode) {
        current = current.nextNode
      }
      current.nextNode = newNode
    }
    this.listSize++
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.nextNode = this.headNode
    this.headNode = newNode
    this.listSize++
  }

  size() {
    return this.listSize
  }

  head() {
    return this.headNode
  }

  tail() {
    let current = this.headNode
    while (current && current.nextNode) {
      current = current.nextNode
    }
    return current
  }

  at(index) {
    let current = this.headNode
    let count = 0
    while (current) {
      if (count === index) return current
      count++
      current = current.nextNode
    }
    return null
  }

  pop() {
    if (!this.headNode) return null

    if (!this.headNode.nextNode) {
      this.headNode = null
    } else {
      let current = this.headNode
      while (current.nextNode.nextNode) {
        current = current.nextNode
      }
      current.nextNode = null
    }
    this.listSize--
  }

  contains(value) {
    let current = this.headNode
    while (current) {
      if (current.value === value) return true
      current = current.nextNode
    }
    return false
  }

  find(value) {
    let current = this.headNode
    let index = 0
    while (current) {
      if (current.value === value) return index
      current = current.nextNode
      index++
    }
    return null
  }

  toString() {
    let current = this.headNode
    let str = ''
    while (current) {
      str += `( ${current.value} ) -> `
      current = current.nextNode
    }
    return str + 'null'
  }

  insertAt(value, index) {
    if (index < 0 || index > this.listSize) return false

    const newNode = new Node(value)
    if (index === 0) {
      newNode.nextNode = this.headNode
      this.headNode = newNode
    } else {
      let current = this.headNode
      let previous
      for (let i = 0; i < index; i++) {
        previous = current
        current = current.nextNode
      }
      newNode.nextNode = current
      previous.nextNode = newNode
    }
    this.listSize++
    return true
  }

  removeAt(index) {
    if (index < 0 || index >= this.listSize) return null

    let current = this.headNode
    if (index === 0) {
      this.headNode = current.nextNode
    } else {
      let previous
      for (let i = 0; i < index; i++) {
        previous = current
        current = current.nextNode
      }
      previous.nextNode = current.nextNode
    }
    this.listSize--
    return current.value
  }
}

module.exports = LinkedList
