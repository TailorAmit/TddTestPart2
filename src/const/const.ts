export const add = (numbers: string): number | undefined => {
    if (!numbers) {
        if (!numbers) {
            return 0;
        }

        let delimiter = ',';
        if (numbers.startsWith('//')) {
            const parts = numbers.split('\n');
            delimiter = parts[0][2];
            numbers = parts[1];
        }

        const numberList: number[] = numbers.split(new RegExp(`[${delimiter}\n]`)).map(Number);
        const filteredNumbers: number[] = numberList.filter(num => num <= 1000);

        const negatives: number[] = filteredNumbers.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
        }

        return filteredNumbers.reduce((sum, num) => sum + num, 0);
    }
}