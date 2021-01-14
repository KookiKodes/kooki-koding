export interface LetterProps {
    letter: string;
    colors: object;
}

export interface CursorProps {
    isTyping: boolean;
}

export interface WordProps {
    word: string;
    wordIndex: number;
    colors: object;
    start?: number;
    animComplete(): void;
}

export interface TypewriterProps {
    words: string[]
    start?: number;
}