const makeRouter = require('./makeRouter');

describe('makeRouter', () => {
  test('Correctly return handler for router', () => {
    const testRouterHandler = jest.fn();
    const routes = [
      {
        path: '/courses',
        handler: testRouterHandler,
      },
      {
        path: '/courses/basics',
        handler: () => 'basics',
      },
    ];

    const router = makeRouter(routes);
    router.serve('/courses')()
    expect(testRouterHandler).toBeCalled()
  });

  test('Throw error on unknown route', () => {
    const router = makeRouter([]);
    expect(() => router.serve('/courses')()).toThrowError(new Error(`Unknown route: /courses`));
  })
})
