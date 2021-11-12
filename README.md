## sigs

This repository is a backup and archive of the Mu Online forums signatures request page, created on 2008-2009.

The original website was hosted on Google Sites, Free Webs, and Photobucket before the services shut down or changed their free hosting policies.

The animated GIFs and large reference graphics files are now hosted on Firebase Storage to save space on GitLab. References to original assets that are still available on Photobucket are retained.

**NOTE:** The original site templates use static files and outdated HTML/JS approaches. Some functionality on various pages may not work on modern browsers.

![screenshot](assets/thumbnail_sigs2.png)

## Demo

https://muonlineph.github.io/sigs/public/

## Assets and Related Files

- local-assets: [ [mirror 1](https://firebasestorage.googleapis.com/v0/b/weaponsforge-demo.appspot.com/o/sigs-request%2Flocal-assets.zip?alt=media&token=9c27b849-8eaa-4ad0-ad1b-e97a2a61f7e1) | [mirror 2](https://drive.google.com/drive/folders/1KdY_BEnuetJ4_Qc5GZcyrSe7oGueP9qC?usp=sharing) ]

### Content

- [Demo](#demo)
- [Assets and Related Files](#assets-and-related-files)
- [Content](#content)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)


### Dependencies

The following dependecies are used for this project. Feel free to experiment using other dependencies and versions.

1. Windows 64-bit OS
2. NodeJS
	- node version 12.16.3
	- npm version 6.14.4
3. NodeJS modules (installed via npm)
	- gulp v.4.0.2
	- browser-sync v.2.26.7


## Installation

1. Clone this repository.  
`https://gitlab.com/arcsource/web-design/sigs.git`

2. Install dependencies.  
`npm install`

3. Download and extract the assets from [mirror 1](https://firebasestorage.googleapis.com/v0/b/weaponsforge-demo.appspot.com/o/sigs-request%2Flocal-assets.zip?alt=media&token=9c27b849-8eaa-4ad0-ad1b-e97a2a61f7e1) or [mirror 2](https://drive.google.com/drive/folders/1D3B-CRLR3iT8PJub1w6vwmqjV9sbxo6V?usp=sharing) for the following directories. These are required when working on `http://localhost:3000/offline/`.
   - /public/300x86
   - /public/downloads
   - /public/files


## Usage

1. Run the localhost static website development environment.  
`npm run dev`

2.  Edit the existing static files from the **./public** directory and wait for live reload. Your updates will reflect on the web browser.
      - `http://localhost:3000/`  
Loads assets and media from online storage references on photobucket and firebase storage.
      - `http://localhost:3000/offline`  
Loads assets and media from public local development environment references.  
Download the required files first for the following directories from the [mirror 1](https://firebasestorage.googleapis.com/v0/b/weaponsforge-demo.appspot.com/o/sigs-request%2Flocal-assets.zip?alt=media&token=9c27b849-8eaa-4ad0-ad1b-e97a2a61f7e1) or [mirror 2](https://drive.google.com/drive/folders/1D3B-CRLR3iT8PJub1w6vwmqjV9sbxo6V?usp=sharing) assets backup before proceeding:
         - /public/300x86
	     - /public/downloads
	     - /public/files

3. To include new static website files on live reload:
	- Stop the localhost **dev** server.
	- Create your new static (.html, .js, .css) files inside the **./public** directory.
	- Re-start the **dev** server.  
`npm run dev`

4. Run the production static website (does not use live reload).  
`npm run start`

@weaponsforge  
20211110
