import { surpriseMePrompts } from '../constants';

// eslint-disable-next-line consistent-return
export function getRandomPrompt(prompt: string): void {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);
}
