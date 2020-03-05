---
slug: cannot-execute-binary-file
date: 2020-02-28
title: 'Heroku cannot execute binary file'
description: 'Learning the difference between margin and padding in CSS'
categories: ['test']
keywords: ['test']
author: 'Lucas Minter'
published: false
redirects:
  - '/invisible-post-423123'
---

ERROR: 
Lucass-MacBook-Pro:my-blog lucasminter$ yarn start
/usr/local/heroku/bin/node: /usr/local/heroku/bin/node: cannot execute binary file

I've tried deleting and reinstalling yarn and heroku via brew but neither worked. 

Now I'm trying to install heroku through heroku's installer on their [website](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

This fixed the issue for me. 


npm install --save gatsby-plugin-twitter