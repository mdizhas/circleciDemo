# allynet-automation
AllyNet Automation

Step-1: Open Command prompt and go to your Project Directory where you want to clone allynet-automation

Step-2: Clone the project using following command
        git clone git@github.com:MDAlly911/allynet-automation.git

Step-3: Configure the following details in the environment variables:
        export provider_username=<username>+md@mdally.com
        export provider_password=
        export emt_username=<username>+emt@mdally.com
        export emt_password=
        export ops_username=<username>@mdally.com
        export ops_password=
        export admin_username=<username>+admin@mdally.com
        export admin_password=
        export BROSWERSTACK_USERNAME=
        export BROSWERSTACK_KEY=

Step-4: run the below command from inside the allynet-automation project folder
        npm init

Step-5: run the below command from inside the allynet-automation project folder
        npm install --save-dev @wdio/cli

All Done!!!

In order to run the complete Suite of Specs, run below command
        npm run test

In order to run a Specific Specs, Ex. for provider Specs, run below command
        npm run test --spec ./specs/provider
