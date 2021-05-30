import toCapitalizeFirstLetter from "./example";

describe('toCapitalizeFirstLetter',()=>{

    let expected: string = 'Some string';
    test('Returns first capital symbol if first symbol is capital in imput',()=>{
        const input: string = 'Some string';
        const result: string = toCapitalizeFirstLetter(input);
        expect(expected).toBe(result);
    })

    test('Returns first capital symbol if first symbol is cursive in imput',()=>{
        const input: string = 'some string';
        const result: string = toCapitalizeFirstLetter(input);
        expect(expected).toBe(result);
    })

    test('Returns empty string if input is empty string',()=>{
        const input: string = '';
        expected = '';
        const result: string = toCapitalizeFirstLetter(input);
        expect(expected).toBe(result);
    })
    test('Returns number first if first symbol is number in input',()=>{
        const input: string = '1 some string';
        expected = '1 some string';
        const result: string = toCapitalizeFirstLetter(input);
        expect(expected).toBe(result);
    })
})

