export default {
  cellDefinitions: {
    main: {
      children: [
        {
          model: 'firstName'
        },
        {
          model: 'lastName'
        },
        {
          model: 'alias'
        }
      ]
    }
  },
  cells: [
    {
      extends: 'main'
    }
  ],
  type: 'form',
  version: '2.0'
}
