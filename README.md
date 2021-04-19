This is Valentin Ivanov project for Travel Republic. 

Please follow these steps to run the project:
1. Make sure you have node v14.16.0
2. Install all node modules by running `npm install`
3. Run fake api provider on separate port by executing this command `json-server db.json --port 3001` (You'll need to choose port 3001 as it is hardcodeed in the project or change port in "src/utils/variables.js")
3.1. If you run on windows your execution policy might be restricted so to allow cmd to run this scrip you'll need to temporary change it to "Bypass" by running this command `Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process`
4. run the main project with `npm start`

Technologies used and why:
ReactJs - reliable framework that by using virtual dom boost performance of the page. It renders only changed content instead of everything from scratch which is of great benefit if multiple hotel cards need to be displayed, who have relatively static data(can be scaled to NextJs for metter SEO)
Typescript - great to document the format and structure of objects shared in project, prevents having semantical and structural issues(please pardon couple of anys inside the code - needed more time to find appropriate type for them)
Redux - single source of truth provider, chosen over apollo client and graphql because in my opinion hotel information(opposite to flying tickets for example)is not frequently changing so there's need to focus more on local "cache" rather than constant connection with BE

I tried to implement as much as possible modularised approach to the project rather than monolitic. However there's not enough time to create each components and element as separate library, please accept them as such. Also feel free to try `npm run generate:container` command, which is created for purpose of mainting same code structure across all the microservice units if this was microservice based.