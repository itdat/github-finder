# Github Finder App

## Description

URL: [https://githubfinder-v100.netlify.app/](https://githubfinder-v100.netlify.app/).

This is a mini project using React from statefull to stateless components by using Hooks

## Usage

For using in localhost

1. ### `npm i`

Installs all dependencies from `package.json`

2. ### Register a new OAuth application

Go to this site [https://github.com/settings/applications/new](https://github.com/settings/applications/new) and register a new OAuth Application to get `client_id` and `client_secret` codes

3. ### Create environment varibles

In root directory, create new file its name `.env.local`

Add 2 varibles with format:

	REACT_APP_GITHUB_CLIENT_ID='client_id'
	REACT_APP_GITHUB_CLIENT_SECRET='client_secret'

3. ### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
