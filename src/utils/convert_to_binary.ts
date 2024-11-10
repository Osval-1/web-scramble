//util function to convert a number to a string
export const convertToBinary = (text:any)=> {
    if (typeof text === 'number') {
        if (text < 0) {
            return (text >>> 0).toString(2);
        }
        return text.toString(2);
    }
    
    if (typeof text === 'string') {
        return text.split('')
            .map(char => {
                const binary = char.charCodeAt(0).toString(2);
                return '0'.repeat(8 - binary.length) + binary;
            })
            .join('');
    }
    
    throw new Error('text must be a number or string');
}