# temamemo
flashcard educational application (2019 - status: concept in refine)

## goals
* sandbox project to use Angular, SpringBoot & HyperSQL

## TODO
credits
    https://game-icons.net/about.html
    https://game-icons.net/1x1/delapouite/files.html
Bug
    - refactor components
    - mp3 insteaed of ogg

## Installation for github

ng build --prod --base-href /temamemo --deploy-url /temamemo/

## difficulty / estimation
* should be manageable (depending of the scope)

## interests
* for work: major, typical single page application
* for me: major

## features
* end-user learn topics with [flashcards](https://en.wikipedia.org/wiki/Flashcard)
* end-user can read a dedicated topic page (if available; e.g a markdown page)
* end-user can see his/her learning status pro topic (e.g. xp game oriented states)
* end-user can register itself to use the application
* end-user can delete its account
* end-user log itself/herself to select the topics he/she want to learn
* end-user can jump from a given flashcard to the associated point in the topic page and go back later in the flashcard
* end-user can use the application offline (login is not required)
* end-user can use the application with a mobile, tablet or computer (responsive-design)
* admin-user can upload topic data (page and flashcards)
* admin-user can delete a topic
* admin-user can delete an user
* admin-user can promote or revoke an user as admin

## planned versions
* beta Version
  * 1 topic preloaded (as SpringBoot/hsql initial data)
  * no user-account management (1 user / machine)
  * no admin-user feature
  * text only flashcard
  * responsive-design
* features for later versions
  * user-management (authentification, authorization)
  * upload of topics / flashcards
  * admin features
  * flashcard with sounds
  * flashcard with bitmap image
  * flashcard with vectorial image
  * offline mode
  
 ## questions
 * find a good typical topic (with "free" data)

## Releases
v0.0.2
* small ui improvements
* add flashcard with more advanced data (e.g. image)

v0.0.1
* basic prototype of the flashcard application
