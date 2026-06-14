const segmenter = new Intl.Segmenter();
const segment = (input: string) =>
  Array.from(segmenter.segment(input), item => item.segment);

export const reverse = (input: string) =>
  segment(input)
    .toReversed()
    .join("");
