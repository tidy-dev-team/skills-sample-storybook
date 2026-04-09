import { fn, userEvent, within } from 'storybook/test';
import { Button } from './Button';

/** @type {import('@storybook/react').Meta<typeof Button>} */
export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['crazy', 'outline', 'ghost'],
      description: 'crazy = contained/neon  |  outline = border only  |  ghost = text only',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'sm=32px  md=40px  lg=48px',
    },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
    onClick: { table: { disable: true } },
  },
  args: { onClick: fn(), children: 'Button' },
};

/** Contained button with neon-green fill and glow animation. */
export const Crazy = {
  args: { variant: 'crazy', size: 'md' },
};

/** Outlined button — transparent background, green border. */
export const Outline = {
  args: { variant: 'outline', size: 'md' },
};

/** Ghost button — text only, no visible border. */
export const Ghost = {
  args: { variant: 'ghost', size: 'md' },
};

/** Small — 32px height. */
export const SizeSm = {
  name: 'Size / Small',
  args: { variant: 'crazy', size: 'sm' },
};

/** Large — 48px height. */
export const SizeLg = {
  name: 'Size / Large',
  args: { variant: 'crazy', size: 'lg' },
};

/** 50% opacity, pointer-events disabled. */
export const Disabled = {
  args: { variant: 'crazy', disabled: true },
};

/** Hover — cyan #1AC6FF glitch state. */
export const Hovered = {
  args: { variant: 'crazy' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button'));
  },
};

/** Focus — green glow ring via :focus-visible. */
export const Focused = {
  args: { variant: 'crazy' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getByRole('button').focus();
  },
};

/** All variant x size combinations. */
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 24 }}>
      {['crazy', 'outline', 'ghost'].map(variant => (
        <div key={variant} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {['sm', 'md', 'lg'].map(size => (
            <Button key={size} variant={variant} size={size}>
              {variant} / {size}
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
};
