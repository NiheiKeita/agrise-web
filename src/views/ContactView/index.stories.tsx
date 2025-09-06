import type { Meta, StoryObj } from '@storybook/react'
import ContactView from './index'

const meta = {
  title: 'Views/ContactView',
  component: ContactView,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ContactView>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}