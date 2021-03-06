# Corona Tracker

This app shows an Angular Material table with the contents of [https://corona-stats.online](https://corona-stats.online/).
> Special thanks to [sagarkarira](https://github.com/sagarkarira/coronavirus-tracker-cli).

The lastest data is retrieved every minute so that the user does not have to refresh the screen.  

> Online version is hosted in AWS [here](http://corona-tracker-docker.eu-west-1.elasticbeanstalk.com).  
> :information_source: In order to make it run in AWS the outline of [this article](https://medium.com/@ariescamitan/deploying-a-single-docker-to-aws-elastic-beanstalk-using-aws-elb-wizard-ac423bd7aa01) was used.

## Install

Run `npm install` to install the required packages.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
