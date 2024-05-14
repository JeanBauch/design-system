import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@jbauch-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {},
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
