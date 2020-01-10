---
slug: ruby-part-i
date: 2020-01-10
title: 'Learner Ruby: Conditionals, User Input, and Arithmetic'
description: 'This is my first post on my learning Ruby'
categories: ['test']
keywords: ['test']
author: 'Lucas Minter'
published: true
redirects:
  - '/invisible-post-423123'
---

Made it all the way up to lesson 27 today in [thefirehoseproject](http://thefirehoseproject.com/)! Learned about if/elsif/else statements, the Bang(!) operator, how to use remainders, and a few other things that I can't think of right now. Did all this to and from the train ride to Seattle today.

I've been able to complete every exercise so far pretty easily for the most part as well as figure out some stuff on my own such as using gets in a function to get user input for a function. gets and puts were pretty weird. The if/else statements were pretty easy as they were the same as in JS. Creating variables is easier, I like how ruby does their variables. You don't need any keywords to declare them. def and end were easy to understand as well for creating functions. One thing I've liked about ruby so far is the gets command. It makes it very easy to get user input in the terminal. (Not sure of how to do it in JS). I just though it was cool.

This was the activity that I did on how to use if/elsif/else. 

```ruby
def likes_cats(bool)
  is_a_cat_liker = bool
  if is_a_cat_liker == 'yes'
    return "Ken does too."
  elsif is_a_cat_liker == 'no'
    return "Dogs are better!"
  else
    return "It's hard to decide."
  end
end

puts likes_cats('test')
```

The only real issue I had with this is that in JavaScript, its if/elseif/else and that confused me. I was trying to figure out why my code wasn't working when I realized that in Ruby, you don't use `elseif`, you use `elsif`. Took me a couple minutes to figure that out lol. 

Here is another example of how to use if/elsif/else: 

```ruby
def dog_age(age)
  if age == 0
    return 0
  elsif age == 1
    return 10.5
  elsif age == 2
    return 21
  else
    return 21 + (age - 2) * 4
  end
end

puts "0 human years is #{dog_age(0)} dog years"
puts "1 human years is #{dog_age(1)} dog years"
puts "2 human years is #{dog_age(2)} dog years"
puts "3 human years is #{dog_age(3)} dog years"
puts "4 human years is #{dog_age(4)} dog years"
puts "5 human years is #{dog_age(5)} dog years"
```


I learned how to get user input and change that input to get from celsius to fahrenheit. 

```ruby
def ctf 
  n = gets.to_f
  return (n * 9/5) + 32
end

puts ctf
```

It took me a second to figure out how to use `gets` to get user input and manipulate that input to get the desired output. I was trying to use it outside of the function. Once I figured out that wasn't going to work, I tried using `gets` inside of the function and came up with what you see in the example above. 


Something that I didn't use in JavaScript was modulo, `%`. This is what you would use to calculate the reminder of a division math equation. In this next example, I calculated the way to figure out if a number was odd or even, depending on wether or not it was divisible by two. If the number was divisible by two with a remainder of 0, then it was even, if the number was not divisible by two, with a remainder that wasn't 0, then it was odd. In this example, I also learned how to use the Bang, `!` operator. It's basically the opposite operator where in JavaScript you would use it to say something does not equal something, `!==`. 

```ruby
def is_even?(number)
  remainder_when_divided_by_2 = number % 2

  if remainder_when_divided_by_2 == 0
    return true
  else
    return false
  end
end

def is_odd?(number)
  return ! is_even?(number)
end

puts "1 is_odd? #{is_odd?(1)}"
puts "2 is_odd? #{is_odd?(2)}"
puts "3 is_odd? #{is_odd?(3)}"
puts "4 is_odd? #{is_odd?(4)}"
puts "5 is_odd? #{is_odd?(5)}"
puts "6 is_odd? #{is_odd?(6)}"
```


I've been enjoying learning ruby so far and it has been a nice refresher to learn something different than Javascript. I think my past couple years doing data entry/content wrangling at [egghead](egghead.io) and doing free JavaScript online courses through [freecodecamp](freecodecamp.org) and [codeacademy](codeacademy.com) made learning Ruby fairly easy so far. It's been really cool to see the similarities and differences between the two languages so far. 