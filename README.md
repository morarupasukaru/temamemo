# temamemo
Flashcard educational application 
* Status: in development (2019)
* Developed with
  * [Angular](https://angular.io/) framework (frontend)
  * [SpringBoot](https://spring.io/projects/spring-boot) framework (backend)
  * [HyperSQL](http://hsqldb.org/) (database)

## Credits
* favicon have been generated from [game-icons.net](https://game-icons.net/1x1/delapouite/files.html)
  
## Releases
* v0.0.3 - Technical improvements
  * technical improvements
* v0.0.2 - Multimedia flashcards
  * small ui improvements
  * add flashcard with more advanced data (e.g. image)
* v0.0.1 - Prototype
  * basic prototype of the flashcard application

## Future features
* End-user features
  * end-user can register itself to use the application
  * end-user can delete its account
  * end-user log itself/herself to select the topics he/she want to learn
  * end-user can use the application offline (login is not required)
  * if user is admin, a button is displayed to jump into another flashcard editor application (will be developped separately)
* Technical features
  * backend
  * design a paypal rest api
  * authentification & authorization (normal, admin roles)
  * offline mode
  * animations (page changes, "level up", etc.)
  * i18n (angular guards?)
  * e2e tests (along with backend) -> embedded tests? (special version of the application with e2e tests)
  * lint, sonar

## Technical
### Installation for github
`ng build --prod --base-href /temamemo --deploy-url /temamemo/`
