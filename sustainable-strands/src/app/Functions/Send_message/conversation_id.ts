
export function get_conversation_id(email1: string, email2: string): string {
    const combinedAsciiValues: number[] = [];

    for (const char of email1) {
        combinedAsciiValues.push(char.charCodeAt(0));
    }

    for (const char of email2) {
        combinedAsciiValues.push(char.charCodeAt(0));
    }

    combinedAsciiValues.sort((a, b) => a - b);

    return combinedAsciiValues.map(value => String.fromCharCode(value)).join('');
}
