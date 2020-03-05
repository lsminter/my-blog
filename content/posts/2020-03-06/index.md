---
slug: cannot-execute-binary-file
date: 2020-03-06
title: 'Heroku cannot execute binary file'
description: 'Learning the difference between margin and padding in CSS'
categories: ['test']
keywords: ['test']
author: 'Lucas Minter'
published: true
redirects:
  - '/invisible-post-423123'
---

While working on my blog, I noticed things stopped updating when I deleted a chunk of code and nothing happened. I stopped the server and attempted to start it again. I ran into this error: 

```
Lucass-MacBook-Pro:my-blog lucasminter$ yarn start
/usr/local/heroku/bin/node: /usr/local/heroku/bin/node: cannot execute binary file
```

I've tried deleting and reinstalling yarn and heroku via brew but neither worked. 

For some reason, I wasn't able to run yarn commands in any of my projects. I ran through some stackoverflow threads and none of the solutions worked for me. 

I ended up fixing this issue by installing heroku through heroku's installer on their [website](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

After going through the default installation, I was able to run yarn in my projects again. 