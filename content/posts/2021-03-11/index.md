---
slug: tailwind-and-organization
date: 2021-03-11
title: "Tailwind and Organization"
description: 'Learning about Tailwind and organization in an application'
categories: ['code']
keywords: ['test']
author: 'Lucas Minter'
published: true
redirects:
  - '/invisible-post-423123'
---

## Things I've Learned

I've only build one full application before, my [streamer app](https://github.com/lsminter/next-streamer-center). It's very difficult to see what's going on in the code base because I didn't have any fundamental understanding of how to organize an application. With this application, I really want to focus on keeping things clean and clear so that anyone else can read and understand what I'm doing. 

The next thing I really want to focus on is really understanding authentication. In that `streamer app`, I implemented Twitch.tv's authentication that made it easy to pull a user's info. To tell you the truth, I know next to nothing about it. I worked with a friend that helped me to implement it. I followed tutorials and copy/pasted the code so I never got a real understanding of what the code even does. 

I've started to implement firebase authentication into my gaming articles website. This time around, I want to write the code myself, run into problems and fix them myself. I really want to make sure that the code that I'm implementing into my app that I understand all of it to the point where I can explain it to someone else. 

This past week, I've been working on making a very simple home page and login page using Next and Tailwind. Setting up Tailwind was actually super easy using [Tailwind's documents](https://tailwindcss.com/docs/guides/nextjs) on implementing Tailwind in a next.js application. Following that game me absolutely no issues at all. Adam Wathan's course on how to [build a Responsive Navbar with Tailwind](https://egghead.io/courses/build-a-responsive-navbar-with-tailwind-4d328a35) was super helpful for getting mine nav bar initially setup. 

I've also made Header and Footer components that I can use on every page using Tailwind. Tailwind has been relatively easy to learn. The main difficulty is trying to remember the names of things. What made this really easy was this [Transformation Tool](https://transform.tools/css-to-tailwind). I am fairly familiar with CSS so all I had to do is plug in my css to this tool and it would output my tailwind code. 

Next has made making a multi page application very easy. All you have to do is just make another .js file in the pages directory and there you go. You've made another route. Linking between each of these pages in my nav bar was very easy. Just a simple `<link>` with an `href` with the value of `/{page-name}` and it works like a charm. I had trouble editing the properties of text in a `<Link>` using Tailwind. My work around was using an `<h1>` inside of that `<Link>` and I can edit the properties of that `<h1>` to change how the text looks.

I've added in a `handleSubmit` to my `<form>` that only just logs out a string. This is where my authentication is going to come into play. When someone hits the `submit` button, it'll log them in. I'm going to need to make a second form for users to be able to sign up as well. 

## Up Next

Next I'm going to probably extract all of the login in the `login.js` page into it's own component for clarity. I'll have to separate it into two different components, one for logging in and the other for signing up. 

I'm going to be using this [React 2025](https://react2025.com/) course to learn about firebase authentication in a next.js application. If that doesn't work, I'm going to be try using this [fireship course](https://fireship.io/courses/react-next-firebase/) to do the same thing.