# Bootstrap React Webpack configuration.
I use the following repo to fork a react application. Will be adding Gatsby & GraphQL support soon.

## Commands
### Dev Build
The following will run in Hot Module Reload mode using webpack dev server. Within config/webpack-dev-config.js, you'll see it is set to run on localhost:7070. When you change code within src, it will automatically load the changes. 
```
npm run start:dev
```

For Authentication with Facebook you do need to have an https local development. For this I use "ngrok". To run simply install ngrok and run the following command: 
```
ngrok http 7070 -host-header="localhost:7070"
```
Make sure the https version of the url is allowed in the Client OAuth Settings within Facebook

### Production Build
The following will build the files neccessary to push to production. The files will be generated in the build folder. 
```
npm run build
```

Once you have generated the build files, you can test out the application using a simple webserver. I personally use python which comes out of the box with web serve capabilities. Run the following command within the build folder: 

```
cd build/
python -m http.server 8000 --bind 127.0.0.1
```

### Environment file
Configurations are handled through dotenv-webpack. Create .env file at the root folder with the following configurations

API_URL=http://localhost:8000/api/v1/
API_CLIENT_ID=<application client id from api>
API_CLIENT_SECRET=<application client secret from api>
FB_APP_ID=<facebook app id>
GOOGLE_CLIENT_ID=<google client id>


### Conventions
imports are aliased, so if you see a relative path that starts with an uppercase, please refer to config/webpack-common-config to see where it points to. 