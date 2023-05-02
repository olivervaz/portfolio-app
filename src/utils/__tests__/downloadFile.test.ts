import downloadFile from '../downloadFile'
import { describe, it, expect } from 'vitest';

const filename = 'file.txt'
const link = {
    click: vi.fn(),
}

global.URL.createObjectURL = vi.fn(() => 'https://file.txt')
global.URL.revokeObjectURL = vi.fn()
global.Blob = function(content, options) {
    return { content, options }
}

describe('downloadFile utils', () => {

    it('should have correct href attribute', () => {
        downloadFile('', filename)

        expect(link.href).toEqual('https://file.txt')
    })

    it('should have correct download attribute', () => {
        downloadFile('', filename)

        expect(link.download).toEqual(filename)
    })

    it('should call click method', () => {
        downloadFile('', filename)

        expect(link.click).toBeCalled()
    })
})
