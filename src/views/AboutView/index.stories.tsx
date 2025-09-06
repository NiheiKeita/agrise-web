import type { Meta, StoryObj } from '@storybook/react'
import AboutView from './index'

const meta = {
  title: 'Views/AboutView',
  component: AboutView,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AboutView>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}