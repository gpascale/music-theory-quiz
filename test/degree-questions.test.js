import DegreeQuestions from '../src/questions/degree-questions'
const { any } = expect;

test('it exists', () => {
  expect(DegreeQuestions).toBeDefined();
});

test('constructor works', () => {
  const degreeQuestions = new DegreeQuestions();
  expect(degreeQuestions).toMatchObject({
    generate: any(Function),
    options: any(Object)
  })
});