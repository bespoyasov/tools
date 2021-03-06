import expect from 'expect'
import omitKeys from './omitKeys'

const testObject = { 
  id: 42, 
  userName: 'VasyaSuperStar42',
  fullName: 'Vasiliy Pupkin'
}

const keys = ['id', 'fullName']
const result = { userName: 'VasyaSuperStar42' }


describe('omitKeys', () => {
  it('should return empty object, if first argument is not an object', () => {
    const cases = [
      undefined,
      null,
      [],
      '',
      42,
    ]

    cases.forEach((testCase) => {
      expect(omitKeys(testCase)).toEqual({})
    })
  })

  it('should return same object, if keys are not array or empty array', () => {
    const cases = [
      undefined,
      null,
      {},
      [],
      '',
      42,
    ]

    cases.forEach((testCase) => {
      expect(omitKeys(testObject, testCase)).toEqual(testObject)
    })
  })

  it('should return copy of object without specified keys', () => {
    expect(omitKeys(testObject, keys)).toEqual(result)
  })
})