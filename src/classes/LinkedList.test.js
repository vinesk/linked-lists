const LinkedList = require('./LinkedList') // Ajuste le chemin selon l'emplacement de ton fichier

describe('LinkedList', () => {
  let list

  beforeEach(() => {
    list = new LinkedList()
  })

  test('is empty on creation', () => {
    expect(list.size()).toBe(0)
  })

  test('can append items', () => {
    list.append('first')
    expect(list.size()).toBe(1)
    list.append('second')
    expect(list.size()).toBe(2)
  })

  test('can prepend items', () => {
    list.prepend('first')
    expect(list.head().value).toBe('first')
    list.prepend('second')
    expect(list.head().value).toBe('second')
  })

  test('can return the tail', () => {
    list.append('first')
    list.append('second')
    expect(list.tail().value).toBe('second')
  })

  test('can find a value', () => {
    list.append('first')
    list.append('searched')
    list.append('third')
    expect(list.contains('searched')).toBe(true)
    expect(list.contains('missing')).toBe(false)
  })

  test('can remove the last item', () => {
    list.append('first')
    list.append('second')
    list.pop()
    expect(list.size()).toBe(1)
    expect(list.tail().value).toBe('first')
  })

  test('can return item at index', () => {
    list.append('first')
    list.append('second')
    list.append('third')
    expect(list.at(1).value).toBe('second')
  })

  test('toString works as expected', () => {
    list.append('first')
    list.append('second')
    expect(list.toString()).toBe('( first ) -> ( second ) -> null')
  })

  test('find returns correct index', () => {
    list.append('first')
    list.append('searched')
    list.append('third')
    expect(list.find('searched')).toBe(1)
    expect(list.find('missing')).toBeNull()
  })

  // Tests pour insertAt et removeAt
  test('insertAt inserts node at specified index', () => {
    list.append('first')
    list.append('third')
    list.insertAt('second', 1)
    expect(list.at(1).value).toBe('second')
    expect(list.size()).toBe(3)
  })

  test('removeAt removes node at specified index', () => {
    list.append('first')
    list.append('to remove')
    list.append('third')
    list.removeAt(1)
    expect(list.size()).toBe(2)
    expect(list.at(1).value).toBe('third')
  })

  test('insertAt handles insertion at the beginning', () => {
    list.insertAt('first', 0)
    expect(list.head().value).toBe('first')
    expect(list.size()).toBe(1)
  })

  test('removeAt handles removal at the beginning', () => {
    list.append('to remove')
    list.append('second')
    list.removeAt(0)
    expect(list.head().value).toBe('second')
    expect(list.size()).toBe(1)
  })

  test('insertAt handles insertion at the end', () => {
    list.append('first')
    list.insertAt('last', 1)
    expect(list.tail().value).toBe('last')
    expect(list.size()).toBe(2)
  })

  test('removeAt handles removal at the end', () => {
    list.append('first')
    list.append('to remove')
    list.removeAt(1)
    expect(list.tail().value).toBe('first')
    expect(list.size()).toBe(1)
  })

  test('insertAt does not insert with invalid index', () => {
    expect(list.insertAt('first', -1)).toBe(false)
    expect(list.insertAt('first', 2)).toBe(false)
    expect(list.size()).toBe(0)
  })

  test('removeAt does not remove with invalid index', () => {
    list.append('only one')
    expect(list.removeAt(-1)).toBeNull()
    expect(list.removeAt(1)).toBeNull()
    expect(list.size()).toBe(1)
  })
})
