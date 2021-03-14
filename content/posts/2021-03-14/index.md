---
slug: firebase-authentication
date: 2021-03-14
title: "Learning Firebase Authentication"
description: 'I learned how to do Firebase Authentication via GitHub'
categories: ['code']
keywords: ['test']
author: 'Lucas Minter'
published: true
redirects:
  - '/invisible-post-423123'
---

# Firebase Authentication

I'm following along through React2025 to learn about implementing firebase authentication. It was fairly easy for me to follow along and the instructor explained everything very clearly. I highly suggest this for anyone that is trying to learn how to implement firebase authentication using github. 

## firebase.js
Here is where we are going to initialize our firebase application. It's a pretty self explanatory file. Just if there is no app, start the app! This is the entire file:

```js
import firebase from 'firebase/app'
import 'firebase/auth';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  });
}

export default firebase;
```

I have my important info hidden in a `.env.local` file.

## auth.js
Setup React context. This allows us to access shared state without having to pass things down through multiple levels of the component tree. React Context allows you to pull that state from anywhere in the application that you want. 

```js
export const useAuth = () => {
  return useContext(authContext);
};
``` 

Here we are going to use the context of auth so that the context provided above can make these values available to the children. 

```html
<authContext.Provider value={auth}>{children}</authContext.Provider>;
```

Inside of `useProvideAuth`, we are going to define the functions that we want and export them out so that we have things such as `signin` and `signout` available to the rest of hte application. 

---

Just like in React2025, I'm going to be using Github initially to do the signin/signup. 

On firebase, I need to add GitHub as a sign-in method which turned out to be fairly easy. Just click on GitHub and enable it. Over on GitHub, you need to create a new OAuth application and fill in the relevant information. It will give you a Client ID and a Client secrets. You'll copy both of those, head back to firebase github login, then past those in. 

Now we need a way to use those in our application. 

In our `auth.js` file, we will want to import firebase. In our `signinWithGithub` function, we will `return firebase`, chain our `auth()`, then chain our `signInWithPopup` that we get from [firebase's docs on github-auth](https://firebase.google.com/docs/auth/web/github-auth). We will pass in `new firebase.auth.GithubAuthProvider()` into that popup. That will return a promise that will set the user to the `response.user`. 

I implemented a button for signing in and signing out on the homepage. This just displays the user's email once logged in. I need to implement more features for a logged in user. 

```html
<button onClick={() => auth.signinWithGithub()}>Sign In</button>
  <div>{auth?.user?.email}</div>
  {auth?.user && (
    <button onClick={() => auth.signout()}>Sign Out</button>
  )}
```

One thing I learned about that I didn't know much about is optional chaining `?`. In this app, I used it to check if there was a user or not returned, `auth?.user`.

This is the first time I've done some authentication and hiding info if the user is/isn't signed in. In the code box above, I'm displaying a button for sign in. I've changed it a little bit to hide the `sign in` button if the user is signed in: 

```html
{!auth.user && (
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => auth.signinWithGithub()}>Sign In</button>
)}
<div>{auth?.user?.email}</div>
{auth?.user && (
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => auth.signout()}>Sign Out</button>
)}
```

This will save my page a bit so that the user isn't seeing buttons that aren't relevant to them. I've also added some styling with tailwind to make it look a little nicer. 

I ended up moving all of the logic to the header so you can login and out no matter what page of my app you are on! Here is what it looks like so far. 

![](images/3-14-2020-sign-in.png)
![](images/3-14-2020-sign-out.png)


## Issue
I've run into an issue: `FirebaseError: Firebase: No Firebase App '[DEFAULT]' has been created - call Firebase App.initializeApp() (app/no-app).`

When running my app, this immediately pops up. I am initializing a firebase app in `firebase.js`

```js
if (!firebase.app.length) {
  ({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID
  });
}
```

My issue is in the `useEffect` in my `auth.js` file. 

```js
useEffect(() => {
  const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
                              ^
    if (user) {
      setUser(user);
    } else {
      setUser(false);
    }
  });

  return () => unsubscribe();
}, []);
```

I thought that I was initializing it in the `firebase.js` file but I guess not. 

## Answer!
Found the issue. Just a simple typo....... `if (!firebase.app.length)` is wrong. `app` needs to be plural... `if (!firebase.apps.length)` is the correct way to do it. 

## Proud of myself

I'm actually really proud of myself for being able to follow along a tutorial on a subject that is fairly unfamiliar to me and get it all implemented by myself. I didn't have to go to anyone to help me with my issues. I was able to work through the problems on my own. This was a big win for me. 