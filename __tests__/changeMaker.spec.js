import changeMaker from './../src/changeMaker';


it('gives proper change.', () => {
  expect(changeMaker(1.99)).toMatchSnapshot();
  expect(changeMaker(2.75)).toMatchSnapshot();
  expect(changeMaker(0.24)).toMatchSnapshot();
  // And so on
});