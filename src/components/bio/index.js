import React from 'react';
import me from './me.png';
import cuddlingDaffy from './cuddlingDaffy.png'
import drivingDaffy from './drivingDaffy.png'
import './styles.css';


export default function Bio () {
  return ( 
    <div>
      <img src={me} alt="" class="me" />
      <h3>Work Experiences</h3>
      <p>
        I'm a 25 year old learner advocate that currently works at <a href="https://egghead.io">egghead.io</a>. I've been working for egghead for about 3 years doing various data entry jobs. I was contracted for that for about 2 years before being hired on as a full time employee. 
      </p>
      <p>
        Before diving into web development, I worked in the veterinary field for about 4 years. One year I spent working at Antech Diagnostics in the lab running test for things like FIV/FELV, Heartworm, and things like that. After doing that for a year, on the night shift, I decided to change over to trying out working in a clinic. I stared with cleaning cages and mopping floors at <a href="https://www.columbiavetcenter.com/">Columbia Veterinary Center</a>. After working there for a year, I managed to climb to where I assisted in surgeries. I absolutely loved this job but after doing clinic work and seeing the sad side of the job for about three years, I needed a change. 
      </p>
      <p>
        This is where I swapped over to coding! My friend, <a href="https://zacjones.io/">Zac Jones</a>, here is a link to his blog, said I should look into coding. I started out with <a href="https://www.codecademy.com/">codeacademy</a> and <a href="https://www.freecodecamp.org/">freecodecamp</a>. When I initially got hired as a contractor for egghead, I worked on enhancing transcripts for lessons and updating lesson code. I now, after a couple years, work with the amazing team of learner advocates on taking notes on courses, attending live streams, enhancing transcripts. 
      </p>
      <p>
        Recently, I've been really trying to learn how to code and have been working through The Ruby On Rails Tutorial. An end goal for me would be to create my own website and make some solo contributions to the egghead website. 
      </p>
      <br />
      <h3 >Hobbies</h3>
      <h4>Cooking</h4>
      <p>
        I absolutely love to cook! I've basically taught myself everything. I haven't taken any classes. It's all just learning from YouTube and articles online. I spend a good bit of my time cooking my own food. I think my favorite thing to cook is anything with lamb. Lamb leg, lamb chops, lamb shanks, lamb stew. I love making stews and soups all from scratch. I've learned to make my own mayonnaise, which as it turns out is super easy. The hardest dish I've ever made was probably ramen. I make a beef and chicken ramen that took around 20 hours total to make. It was a really fun thing to cook, but I don't think I'm going to be doing that again any time soon.
      </p>
      <h4>Video Games</h4>
      <p>
        I'm a HUGE geek when it comes to video games. My two main games have been League of Legends and Old School RuneScape, (OSRS). I've played league for about 7 years and played in several for fun tournaments. Recently, I've been playing a lot of OSRS and have been furthering my account the past couple years. For those that don't know what OSRS, think of it as a different version to World of Warcraft, but a lot more simpler. 
      </p>
      <h4>Animals</h4>
      <div class="flex">
        <img src={cuddlingDaffy} alt="" class="small"/>   
        <img src={drivingDaffy} alt="" class="small" />
      </div>
      <p>
        I'm sure you could guess that from my past in veterinary, I absolutely love animals. I have a little, 9 year old, Jack Russel Terrier although she still acts like a puppy every day. She doesn't really know any tricks or anything, but really loves to go to the park and chase dogs around. She is one of those small dogs with Big Dog Syndrome. She is an extreme cuddler and hates to leave my side. 
      </p>
    </div>
  )
}