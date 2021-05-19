import { helloNPM } from '../index';
test('My Greeter', () => {
    expect(helloNPM('Carl')).toBe('Hello Carl');
});