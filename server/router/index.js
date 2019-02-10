const routes = (app) => {
    app.get('/', (request, response) => response.status(200).json({
      message: 'Application using graphql',
    }));
  
    app.get('/api/v1', (request, response) => response.status(200).json({
      message: 'Welcome to My first application making use of graphql',
    }));
  };
  
  export default routes;