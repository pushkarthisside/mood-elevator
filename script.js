const homePage = document.getElementById("home-page");
const moodPage = document.getElementById("mood-page");
const quoteText = document.getElementById("quote-text");
const quoteExplanation = document.getElementById("quote-explanation");

let currentMood = null;

const quotes = {
  sad: [
    {
      quote: "The cave you fear to enter holds the treasure you seek.",
      explanation: "The thing you're avoiding—the memory, the task, the truth—isn't there to destroy you; it's where your power is hiding. When you slowly face what scares you, you don't collapse, you evolve into someone stronger and more honest. You're closer to that hidden treasure than you feel right now."
    }, 
    {
      quote: "This too shall pass. But while it's here, let it teach you.",
      explanation: "You don't have to fix this feeling instantly or pretend it doesn't hurt. It's moving through you, not moving in forever, and while it stays, it can quietly show you what you care about and what needs to change. You're allowed to feel, learn, and then gently step forward lighter than before."
    },
    {
      quote: "Sadness flies on the wings of the morning and out of the heart of darkness comes the light.",
      explanation: "It might feel like your mind is stuck in a long night, but mornings always arrive, even when you doubt they will. Your heart is already preparing little sparks of light you can't see yet, and every heavy moment you survive is proof you're still moving. You won't feel like this forever—light is already on its way to you."
    }
  ],

  lonely: [
    {
      quote: "The greatest prison people live in is the fear of what other people think.",
      explanation: "A lot of your loneliness isn't just about who's around you—it's about feeling like you can't show your real self. The walls you feel might just be expectations and imagined judgments, not actual rejection. As you choose your own truth over their opinions, you'll start attracting people who vibe with the real you, and you'll realize you were never truly empty, just hidden."
    },
    {
      quote: "Solitude is painful when one is young, but delightful when one is old.",
      explanation: "Right now, being alone can sting, like you're watching life from outside the glass. But this quiet time is secretly building your self-respect, independence, and inner world. Future you will look back and be grateful you used this season to become someone who feels at home in their own company."
    },
    {
      quote: "You yourself, as much as anybody in the entire universe, deserve your love and affection.",
      explanation: "You've been waiting for someone to show up and treat you like you matter, but you don't have to stand in line for your own care. You're allowed to offer yourself softness, patience, and kindness right now, without any conditions. The more you stand beside yourself instead of against yourself, the less abandoned you'll feel—you are your own first home."
    }
  ],

  overwhelmed: [
    {
      quote: "You don't have to see the whole staircase, just take the first step.",
      explanation: "Your brain is trying to hold the entire future at once, which is why it feels so heavy. You're not required to know every step—only the next small, honest move. Shrink the problem until it becomes one doable action, and let that be enough for today."
    },
    {
      quote: "Comparison is the thief of joy. Subtract the noise.",
      explanation: "A lot of what's drowning you isn't your actual tasks—it's the constant comparison to everyone else's progress. You don't need their timeline or their speed; you just need a pace that you can sustain. When you close the door on the noise and return to your lane, your life starts feeling possible again."
    },
    {
      quote: "Let it all go. Not because you don't care, but because you can't carry it all.",
      explanation: "You've been holding so much that of course you feel like you're about to snap. Letting some things go or postponing them isn't apathy; it's self-preservation. You still care deeply—you're just choosing to survive and move sanely instead of collapsing under a load no one could carry alone."
    }
  ],

  unfocused: [
    {
      quote: "The secret of getting ahead is getting started.",
      explanation: "You keep waiting for the ideal plan or perfect mindset, and meanwhile the clock is ticking. Progress doesn't begin when everything feels right; it begins when you take one awkward step anyway. Take that small action, and let your focus grow from the movement, not from endless thinking."
    },
    {
      quote: "Focus is the gateway drug to success. Everything else is noise waiting to distract you.",
      explanation: "Your attention is scattered across tabs, thoughts, and half-finished tasks, so of course you feel out of control. You don't need superhuman discipline; you just need to choose one important thing and guard it for a short, focused block of time. When you narrow your beam, your power comes back online."
    },
    {
      quote: "A person who never made a mistake never tried anything new. But a person who chases ten rabbits catches none.",
      explanation: "Wanting to do everything at once is stretching you so thin that nothing really moves. It's okay to let some options go so you can actually catch one \"rabbit\" fully. Picking a direction doesn't trap you—it frees you from the chaos of trying to live ten lives in one body."
    }
  ],

  anxious: [
    {
      quote: "Anxiety is just experiencing failure in advance. Stop rehearsing the disaster.",
      explanation: "Your mind is staging a full movie of everything that could go wrong, and your body is reacting like it's already real. Right now, none of that has actually happened. You deserve a break from those imaginary disasters—pause the rehearsal and give yourself a chance to feel what's actually happening in this moment."
    },
    {
      quote: "The problem you're worried about hasn't happened yet, and if it does, you're stronger than you think.",
      explanation: "Anxiety keeps insisting that disaster is guaranteed and you'll be helpless when it hits. But for now, it's just a \"maybe,\" not a fact. And if it ever becomes real, you won't face it empty—you'll bring all the strength that's carried you through every hard day so far."
    },
    {
      quote: "Worry is like a rocking chair: it gives you something to do but gets you nowhere.",
      explanation: "Your brain believes that worrying is a kind of preparation, but it's really just draining your energy in circles. You don't have to blame yourself for it; it's just your mind trying to protect you in a clumsy way. Even one tiny action or plan will move you farther than another hour of spiraling thoughts."
    }
  ],

  grind: [
    {
      quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
      explanation: "You could spend forever replaying how early you should have started, but that just keeps you stuck. You can't rewind, and that's okay—you still get to plant something real today. A year from now, you'll be glad you chose movement over regret on this exact day."
    },
    {
      quote: "You don't have to be great to start, but you have to start to be great.",
      explanation: "Wanting to skip the awkward beginner phase is normal, but that phase is where all greatness is born. You're allowed to start messy, unsure, and slow. The moment you begin, you're already ahead of the version of you that only dreams and never moves."
    },
    {
      quote: "The grind doesn't reward the talented—it rewards the committed. Show up.",
      explanation: "It's easy to believe others are just naturally built for this, but consistency quietly beats raw talent over time. You don't need to be gifted—you just need to keep arriving, even on the days you don't feel like it. Every session you show up for is proof you're building something real."
    }
  ],

  inspiration: [
    {
      quote: "If I can see it, I can be it.",
      explanation: "When you imagine a future version of yourself, it can feel unreal, like a fantasy. But the fact that you can see it at all means it's within your range, not random. That vision is a signal, not a tease—every small step you take now is you moving toward what you already sensed was possible."
    },
    {
      quote: "The master has failed more times than the beginner has even tried.",
      explanation: "You might feel behind because you're not good yet, but that's exactly how the \"masters\" once felt. The difference isn't magic; it's how many attempts they were willing to make. Each time you try and fail, you're not exposing your weakness—you're collecting the very failures that eventually turn into skill."
    },
    {
      quote: "It always seems impossible until it's done.",
      explanation: "From where you're standing, your dream might look out of reach, and that can be discouraging. But that \"impossible\" feeling is just how big things look from the starting line. As you keep moving, what feels unrealistic now can slowly become your new normal."
    }
  ],

  beast_mode: [
    {
      quote: "I'm not motivated by money. I'm motivated by the work. The work is the only thing that matters.",
      explanation: "Chasing results alone—status, praise, money—burns you out because they’re never fully in your control. When you fall in love with the process itself, you flip the game. No one can stop you from doing the work, and that makes you dangerous in the best way."
    },
    {
      quote : "While they sleep, you work. While they eat, you train. While they party, you grind. This is the only way." ,
      explanation : "There will always be an easier path calling your name, and most people take it. Choosing the harder route when others relax is how you quietly separate yourself from average. Every focused block you put in while the world drifts is you voting for your future with your time."
    },
    {
      quote:  "Your limitation—it's only your lack of vision.",
      explanation : " Hitting a wall can trick you into believing that’s all you’re capable of. But often it’s not your ability that’s capped—it’s your idea of what’s possible for you. When you expand that inner picture, your effort and creativity rise to match it, and suddenly the “wall” becomes just another step."
    }
  ],

  random: [],
  urge: [
    {
      quote: "The urge will fade. The damage will stay.",
      explanation: "Right now the craving feels like everything, like it will only stop if you give in. But this wave is temporary; it always passes if you don't feed it. The regret, the shame, the setback—that's what actually lasts. Breathe, move, delay. Give yourself 10 minutes to choose your future self over this moment."
    },
    {
      quote: "You've already survived worse than this urge.",
      explanation: "Your brain is acting like this temptation is stronger than you are, but it's lying. You've pushed through harder days, deeper pain, and bigger storms than this. This urge is loud, not powerful. Remember how many times you thought you'd break and didn't. That same strength is in you right now—ride this out and prove your addiction wrong."
    },
    {
      quote: "Don't throw away a life you want for a feeling that won't last.",
      explanation: "In this moment, the hit, scroll, binge, relapse seems like relief, but it's a trade: your long-term peace for a few seconds of numbness. You know exactly how you'll feel after—empty, disappointed, reset to zero. Look at the life you're trying to build and ask if this choice protects it or attacks it. You deserve better than a temporary escape."
    }
  ]
};

// MOOD BUTTON CLICKS
document.querySelectorAll(".mood-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    let mood = btn.dataset.mood;

    if (mood === "random") {
      const keys = Object.keys(quotes).filter(k => k !== "random");
      mood = keys[Math.floor(Math.random() * keys.length)];
    }

    currentMood = mood;
    showMoodPage();
  });
});

function showMoodPage() {
  homePage.classList.remove("active");
  moodPage.classList.add("active");
  showRandomQuote();
}

function showRandomQuote() {
  const moodQuotes = quotes[currentMood];
  if (!moodQuotes || moodQuotes.length === 0) return;

  const randomIndex = Math.floor(Math.random() * moodQuotes.length);
  const selected = moodQuotes[randomIndex];

  quoteText.textContent = `"${selected.quote}"`;
  quoteExplanation.textContent = selected.explanation;
}

document.getElementById("another-btn").addEventListener("click", showRandomQuote);
document.getElementById("exit-btn").addEventListener("click", goHome);
document.querySelectorAll(".home-btn").forEach(btn => btn.addEventListener("click", goHome));

function goHome() {
  moodPage.classList.remove("active");
  homePage.classList.add("active");
}
