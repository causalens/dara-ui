/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import * as PIXI from 'pixi.js';

export const FONT_FAMILY = 'Manrope';

/**
 * Get default text style to display in nodes
 *
 * @param size text size
 */
export function getTextStyle(size: number): PIXI.TextStyle {
    return new PIXI.TextStyle({
        align: 'center',
        fill: 0xffffff,
        fontFamily: FONT_FAMILY,
        fontSize: size,
        fontWeight: 'normal',
        lineHeight: 1.2 * size,
        whiteSpace: 'normal',
        wordWrap: true,
    });
}

/**
 * Trim given text to fit within maximum size
 *
 * @param text text to fit
 * @param maxSize max vertical and horizontal size
 * @param textStyle pixi text style
 */
export function trimToFit(text: string, maxSize: number, textStyle: PIXI.TextStyle): string {
    // Measure the size of the text
    const { height, maxLineWidth, lines, lineWidths, lineHeight } = PIXI.TextMetrics.measureText(text, textStyle);

    // if either height or width of the text doesn't fit in the node, truncate it
    const overflows = height >= maxSize || maxLineWidth >= maxSize;

    if (!overflows) {
        return text;
    }

    // First figure out how many lines we could fit vertically
    const linesFitVertical = Math.floor(maxSize / lineHeight);

    // No lines fit vertically, edge case - just return first line
    if (linesFitVertical === 0) {
        return lines[0];
    }

    const finalText = [];
    let offendingLine = null;

    // Then pick how many of those fit horizontally
    for (let i = 0; i < Math.min(linesFitVertical, lines.length); i++) {
        const line = lines[i];
        const lineWidth = lineWidths[i];

        if (lineWidth >= maxSize) {
            offendingLine = line;
            break;
        }

        finalText.push(line.trim());
    }

    // If no line was too wide, just add ellipsis to last line that fits
    if (!offendingLine) {
        // If that line is <= 3 characters, leave it as is
        if (finalText[finalText.length - 1].length > 3) {
            finalText[finalText.length - 1] = `${finalText[finalText.length - 1].slice(0, -3)}...`;
        }

        return finalText.join('\n');
    }

    // split the line to have one letter/space per line so we can measure their widths
    const letters = offendingLine.split('');
    const textLetterPerLine = `...\n${letters.join('\n')}`;

    // For the next calculation use a different whitespace setting so it gets the lengths correctly
    const textStyleWhiteSpace = textStyle.clone();
    textStyleWhiteSpace.whiteSpace = 'pre-line';

    // Calculate width of space, dots, and each letter
    const [dotsLength, ...letterLengths] = PIXI.TextMetrics.measureText(
        textLetterPerLine,
        textStyleWhiteSpace
    ).lineWidths;

    // Compute which part of text we can fit in
    let trimmedText = '';
    let currentLength = dotsLength;

    for (let i = 0; i < letterLengths.length; i++) {
        const letterLength = letterLengths[i];
        const letter = letters[i];

        // If adding the letter would overflow, stop adding more
        if (currentLength + letterLength >= maxSize) {
            break;
        }

        trimmedText += letter;
        currentLength += letterLength;
    }

    // If no part fits (somehow, font size must be very large) just leave the offending line as-is
    if (trimmedText.length === 0) {
        finalText.push(offendingLine);
    } else {
        finalText.push(`${trimmedText.trim()}...`);
    }

    return finalText.join(' ');
}
