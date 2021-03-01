# Bootstrap React Webpack configuration.
I use the following repo to fork a react application. Will be adding Gatsby & GraphQL support soon.

## Commands
### Dev Build
The following will run in Hot Module Reload mode using webpack dev server. Within config/webpack-dev-config.js, you'll see it is set to run on localhost:7070. When you change code within src, it will automatically load the changes. 
```
npm run start:dev
```

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