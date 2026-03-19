const quotes = [
"Discipline beats motivation every day.",
"Start where you are. Use what you have. Do what you can.",
"Small progress is still progress.",
"Consistency creates confidence.",
"Dream big. Start small. Act now.",
"Success is built in silence.",
"Your future is created by what you do today.",
"Don’t stop until you’re proud.",
"Hard work never betrays.",
"Focus on progress, not perfection.",

"You don’t need luck, you need discipline.",
"Make yourself so strong that no one can ignore you.",
"Pain is temporary, results are permanent.",
"Work hard in silence, let success make noise.",
"Your only competition is you.",
"Excuses kill dreams.",
"Stay consistent, results will follow.",
"Be obsessed with your goals.",
"Success demands sacrifice.",
"Do it even when you don’t feel like it.",

"Winners don’t wait for chances, they create them.",
"Push yourself because no one else will.",
"Growth begins at the end of comfort.",
"One day or day one — you decide.",
"Hustle until your haters ask if you’re hiring.",
"Dreams don’t work unless you do.",
"Your mindset is your power.",
"Be stronger than your excuses.",
"The grind never lies.",
"Turn pressure into power.",

"Success is a habit, not a one-time event.",
"Stay hungry, stay foolish.",
"Don’t fear failure, fear regret.",
"You are capable of more than you think.",
"Discomfort is the price of growth.",
"Keep going. You’re closer than you think.",
"Action is the key to success.",
"Be the hardest worker in the room.",
"Confidence comes from preparation.",
"No shortcuts, just hard work.",
"Level up your habits, level up your life.",
"Your effort today builds your tomorrow.",
"Make your dreams louder than your fears.",
"Stay focused and never settle.",
"Great things take time.",
"You don’t fail until you quit.",
"Success starts with self-belief.",
"Keep showing up.",
"Do it for your future self.",
"The best investment is in yourself."
];

function changeQuote(){
    const element=document.getElementById('quote');
    const index=Math.floor(Math.random()*quotes.length);
    element.textContent=quotes[index];
    let x=Math.floor(Math.random()*250);
    let y=Math.floor(Math.random()*250);
    let z=Math.floor(Math.random()*250);
    const quote_box=document.getElementsByClassName("quote-box")[0];
    quote_box.style.backgroundColor=`rgb(${x}, ${y}, ${z})`

}

setInterval(changeQuote,5000);