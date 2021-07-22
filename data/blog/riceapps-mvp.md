---
title: Building MVP at RiceApps
date: '2020-10-01'
tags: ['writings', 'book', 'reflection']
draft: false
summary: 'As a club we struggle with a lot of things. One of our biggest problems is not being able to iterate fast enough.'
---

![](https://i.imgflip.com/2siu6l.jpg)

This is adapted from a talk that I gave in an app development club at Rice University called [RiceApps](riceapps.org).

We build software for various clients around the Houston area. And most of the time, we suck at it.

### Motivation

As a club we struggle with a lot of things.

Aside from project scoping, I would argue that second biggest problem we have is not being able to iterate fast enough.

When the club was first born, the development cycle was literally 5+ years. Meaning the project

Recent years, we have cut that cycle down to about an academic year or semester.

But the goal should really be to get it down to a month or two.

Why?

Because if you fail to launch the MVP fast enough, you might be building something completely off-track that doesn't solve any problem. Without feedback, you have no idea if you're even within the ballpark of building something that will last.

For the two RiceApps projects that I've been a part of, I could make the case that not launching the MVP fast enough lead to both of their demise, and a waste of hundreds of hours of our effort.

### Definition

> A minimum viable product is a version of a product with just enough features to satisfy early customers and provide feedback for future product development. - [Wikipedia](https://en.wikipedia.org/wiki/Minimum_viable_product)

Generally, most people understand the first component of the definition about having "just enough features". It's part of the name: "Minimum", and "Viable".

But the second half of the definition is where the _gotcha_ really lies.

Your MVP must "satisfy early customers and provide feedback".

You can't just build out a few pages of your web app and say that your MVP is finished.

_The MVP is finished once you actually get feedback from your first users about how crappy it is._

### Iterations

To over-simplify, these are the general four steps to our project development process.

![](https://i.imgur.com/2GUKOnN.png)

But what we've historically done is ignored part 3 and 4, and get stuck in a loop of designing and coding. Why? Because we're designers and coders. Obviously, that is what we'd like to optimize.

![](https://i.imgur.com/pzeVmpd.png)

We would design mock-ups, and then implement a page in our web app. Then we'd look back at the design and see what was missing or what could be fixed.

Every time we would finish a single web page, or finish implementing one feature, we would think that we've iterated once. That we've iterated past our MVP.

However, the ideal feedback loop looks more like this.

![](https://i.imgur.com/Eg9IurC.png)

Once you've demo'd and tested your app with your client, you have finally completed a real iteration. And once you've completed the loop for the first time, you have finally competed your MVP, for real.

Do not convince yourself that you've completed your MVP if you've yet to deploy, and you've yet to show the damn thing to your user(s).

### Actionable Advice

Thus, I gave all the teams a few pieces of actionable advice on how to avoid our previous mistakes of building fake MVPs:

1. **Don’t prioritize UI unless it will cost you users (step 1 & 2 should be fast)**

   Our web applications are largely focused on solving functional problems, rather than design-oriented problems. Thus, the UI typically is not a deal-breaker for our clients.

   We need to stop being perfectionists and building things that look perfect in our eyes.

   Practically, this means minimizing the amount of CSS you write before MVP.

   The mantra goes: "If it doesn't work, it shouldn't look nice".

   And the contrapositive: "If it looks nice, it should work".

2. **Deploy immediately (get to step 3 quickly)**

   We're making it a point to setup CI/CD pipelines to auto-deploy on every commit.

   We are going to avoid using localhost:3000 during demos at all costs.

3. **Get the product in your client’s hand ASAP (get to step 4 quickly)**

   The mantra goes: "Always be launching".
