import type { Word } from "@types";

export function getCloudConfig(words: Word[]) {
    const cloudWidth = 700;
    const cloudHeight = 400;
    const spiralResolution = 1;
    let angle = 0;
    let radius = 0;

    return words.map((word) => {
        const { name, weight } = word;

        const scale = weight * 10;
        const wordSize = name?.length + 20;

        const maxRadius = Math.min(cloudWidth / 2, cloudHeight / 2) - wordSize;

        const x = cloudWidth / 2 + Math.min(maxRadius, radius) * Math.cos(angle);
        const y = cloudHeight / 2 + Math.min(maxRadius, radius) * Math.sin(angle);

        angle += spiralResolution;
        radius += wordSize;

        return {
            text: name,
            size: scale,
            x,
            y,
            color: Math.random() > 0.5 ? '#104f55' : '#9da6e1',
            rotate: angle
        };
    });
}
