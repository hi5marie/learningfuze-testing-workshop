import {threadsController } fron '../threadsController'

describe('threadsController', () => {
    test('should return 200 and a list of threads on a GET request', () => {
    // arrange
    const req = {
        method: 'GET',
    }

    const myMock = jest.fn()

    const res = {
        status: () =>{
            return {
                json: myMock,
            }
        },
    }

    // act
    threadsController(req, res)

    // assert
    // what do we assert
    })
})

