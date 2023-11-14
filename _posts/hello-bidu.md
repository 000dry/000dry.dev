---
title: 'open source guilt (and hello bidu)'
excerpt: 'I am starting a little project in NodeJS and Rust.'
date: '2023-11-09'
---

### am I doing enough?

Is a question I'm increasingly asking myself, and I'm wondering why more devs don't ask themselves the same. Or perhaps we all are and none of us are doing anything to answer the question.

Yet every day as a software engineer, you consume thousands of lines of code that neither you nor your team wrote. You downloaded it from the internet, for free, and have built core features of your applications around it.

Undoubtedly we're all profiting massively off of open source, but are enough of us giving back?

I wonder if most are put off by the thought. When you think "open source" contribution, you might be tempted to think of raising a PR against a much revered project to make a change where you'll need to prove your mettle against top-tier maintainers and the rest of the OS community.

And I'm not saying don't do that.

But also remind yourself that donating money to your favourite projects is also an open source contribution. So is answering questions on stack overflow as part of your morning routine. So is writing a blog. So is creating your own projects and making them publicly available to consumers and contributors.

Actually, on that topic...

### /biːduː/ (["bee-doo"](https://github.com/000dry/bidu))

So I've decided to start a small project that I'll hopefully develop over time into an open source project (perhaps even with contributors if whatever I come up with turns out to be worthy)

The basic premise is a schema validation library written using NodeJS and Rust, the reasons for wanting to develop such a thing being twofold:

- Experience with currently popular solutions have led to some amount of frustration when dealing with large data sets on limited resources, which I would hope to alleviate by offloading the validation process to a more efficient language.
- I would quite like to learn Rust.

The main inspriation for this project is [Pydantic](https://docs.pydantic.dev/latest/), which similarly leverages Rust bindings to optomise the performance of its schema validation but for Python instead of NodeJS.

My main point of curiosity with this project is to see what kind of improvements in speed can be made when validating large datasets, and I will perhaps produce a few benchmarks to illustrate this.

Currently my only objective is to expose a Rust module to the NodeJS runtime that contains within a series of callable functions that perform various type validations. From there, I'll move on to more complex data structures with nested validations and a validation tree. Beyond that, I aim to work on the interface - this idea is vague right now, but I would hope to move from functions to something that more closely resembles the Pydantic implementation, leverage Typescript and classes.

The main technology to enable all of this that I'll be using (for now) is [Neon](https://neon-bindings.com/) - Rust bindings for NodeJS.

Stay tuned for more. In the meantime, you will be able to find the project [here](https://github.com/000dry/bidu).
