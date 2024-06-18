import { Add } from './const';

test('returns 0 for an empty string', () => {
    expect(Add('')).toBe(0);
});

test('returns the number itself for a single number', () => {
    expect(Add('1')).toBe(1);
});

test('returns the sum of two numbers', () => {
    expect(Add('1,5')).toBe(6);
});

test('handles new lines between numbers', () => {
    expect(Add('1\n2,3')).toBe(6);
});

test('supports different delimiters', () => {
    expect(Add('//;\n1;2')).toBe(3);
});

test('throws an exception for negative numbers', () => {
    expect(() => Add('-1,2,-3')).toThrow('Negatives not allowed: -1, -3');
});
