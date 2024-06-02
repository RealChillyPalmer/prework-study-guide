const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
<<<<<<< HEAD
    for (let x = 0; x < topics.length; x++) {
=======
    for(let x = 0; x < topics.length; x++) {
>>>>>>> 0fe4eb8613ff09841c17fb2256c0d0db8eb04e44
        console.log(topics[x]);
    }
}

function selectTopic() {
    if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
      console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics ();
<<<<<<< HEAD

=======
>>>>>>> 0fe4eb8613ff09841c17fb2256c0d0db8eb04e44
console.log('Which topic should we study first?');
selectTopic ();

