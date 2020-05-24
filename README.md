<p align="center">
  <img src="docs/imgReadme/Holon38.png">
</p>

<p>
  <strong>IdentityMoney</strong> is a project to manage your identity in a decentralized way. The protocol was create to save user's data in Blockchain and give the power to the <i>user to control they own data</i>. This is an open source project, developed for presentation at HackMoney 2020, it can be used as a protocol for new application models.
  The basis of this module are smart contracts, created to save and manage the user's data and relationship between users, validators and consumers.
</p>

<img src="docs/imgReadme/Persona.png">

### User Story

As a Persona
- I can access the Portis dApp, create a new wallet or import an existing wallet
- I can identify myself as IdentityMoney Persona. So that I can use the dApp and manage my personal financial, personal and other information
- I can add more information to my identity
- I can send my information for validation by choosing who will validate and pay the reward for validating my information

### Behavior

This screen is not displayed if the user has logged in before:
- **Screen: New to Holon!**
This screen user can choose create wallet or importing an existing wallet.
- **Screen: Import your wallet**
This screen user fill  a valid password and have a Mnemonic created
- **Screen: Create your wallet**
This screen user fill  a valid password and have a Mnemonic created
- **Screen: Holon Identity**
This screen user fill  a valid wallet seed
- **Screen: Home**
This screen have all your personal information and your status.
- **Screen: Add Information**
This screen can choose a category information, subcategory information, can put a value you want to get when share this information.
- **Screen: Validation**
This screen can choose information to validate and the validator you want to hire
- **Screen: Home**
This screen show all personal information and the status of validations.

- **Menu Identity**

 Option | Description |
 ------ |------|
Add Information |can add more personal information|
Validate Information|can hire a validator to validate information|
Notifications | recive notifications about consumers data|
Profile | all personal information and status |
Etherscan |link to Etherscan |
Secret Backup phrase| backup secret phrase|
Select Network|choose network for transactions |
Box Balance | show your wallet balance |
Buttons | Deposit and Send |


## Pre Requirements

- It is necessary install [Node](https://nodejs.org/en/), [Npm](https://www.npmjs.com/) and [Ng](https://cli.angular.io/).

## How to Install

To install in developer mode, follow the step-by-step:
1. Download the repository on your computer. 
2. Access the directory where you downloaded this project and run the command below.
```sh
  $ npm install
  $ npm install -g @angular/cli
  $ npm install @portis/web3
```

## How to set up ethereum node

This example uses a Infura Ethereum node. To set up your own node, follow the step-by-step:
- Open the **app** folder and access config folder
  - holon-persona-plugin -> app -> config
- Access **settings.js**. In this file it is possible change the "host" to a local node, Infura node or any node that you want use to run the extension. If you set up to use a local node, it is necessary change the port to your computer port.

<img src="docs/imgReadme/setup-node.png">

## How to Run

Run the command below for generate build on your project.
```sh
 $ ng build
 $ ng serve
```

## Access Project

To install the extension project in your Google Chrome:
- Access the browser and navigate to extensions 
  - Options -> More tools -> Extensions
- Enable "Developer Mode"
- Click in "Load Unpacked"
- Access the package **dist** builded previously in the project
  - holon-persona-plugin -> dist
- The Chrome browser will create your plugin in developer mode and make the icon available in the browser.

## Tech
To build this application was used:

 Technologies | Version |
 ------ |------|
  Angular  | 9.1.7 |
  Bootstrap | 3.3.7 |
