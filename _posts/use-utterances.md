---
title: 'useUtterances'
excerpt: 'I really like utterances'
date: '2023-11-10'
---

I'm a big fan of [utterances](https://utteranc.es/) so I have written a library for it.

It's so simple and effective and I feel like it's a super neat way of including something on your site that encourages contribution, conversation, and generally promotes dev culture (if I can be forgiven for stretching to equating github with dev culture in this way).

My old blog site also used it, and I've come across it multiple times on my journeys across the vast expanse.

It's also fun to get started with. Their main page consists of a straightforward setup wizard to kick you off and the whole process is pretty seemless.

Okay... maybe there is *one seem*.

It's fairly trivial, but there's one snag when getting set up with an app that uses a routing system like that of NextJS or Gatsby (I've encountered it on both). I won't go into too much detail, as both the problem and a fix have [already been detailed](https://ianobermiller.com/blog/comments-utterances-nextjs) by others before me.

But just because there's a fix, doesn't mean there's room for one more.

Inspired by the simplicity of utterances' setup journey, I've created a complimentary React hook to go alongside it. The intention is that once you're done setting up on utterances, you can take the final blob of HTML and simply paste it into this hook to get it on your page, abstracting away all of that `scriptElement` jiggery-pokery.