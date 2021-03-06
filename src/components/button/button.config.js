module.exports = {
  title: 'Button',
  status: 'wip',
  context: {
    text: 'Default button text'
  },
  variants: [{
    name: 'primary',
    context: {
      isPrimary: true,
      text: 'Primary button text'
    }
  }],
  arguments: ['text', 'type', 'isPrimary']
}
