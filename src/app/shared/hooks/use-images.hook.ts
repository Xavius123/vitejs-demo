interface TestImages {
    image: string;
}

export const useImages = (): TestImages => {
    const env = 'https://qa-assets.naf-connect.com';

    return {
        image: `${env}/assets/images/confetti.svg`,
    };
};
