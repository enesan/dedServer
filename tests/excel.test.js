const request = require('supertest')
const auth = require("../controllers/auth.controller")
const basePath = "/api"

// describe('Excel tests', () => {
//     it('should be some array',  function(done)  {
//         const result = await auth.register();
//         expect(result.statusCode).toBe(200)
//     });
//
// });