// const searchTerm = notesObject

const notes = [
{
    id: 1,
    subject: "gitHub",
    date: "12 JUL 2021",
    feeling: "capable",
    timeSpent: '8 hours'
},
{
    id: 2,
    subject: "JavaScript",
    date: "14 JUL 2021",
    feeling: "like a novice",
    timeSpent: "16 hours"
},
{
    id: 3,
    subject: "CSS",
    date: "11 JUL 2021",
    feeling: "like I'm getting there",
    timeSpent: "20 hours"
}
]

const noteAboutToday = {
    id: 4,
    subject: "JavaScript",
    feeling: "wobbly but improving",
    timeSpent: "4 hours"
}



const addNewNote = (notesObject) => {
    const lastIndex = notes.length -1
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = Date.now
    notesObject.id = idForNewNote
    notes.push(notesObject)}

    addNewNote(noteAboutToday)


for (const item of notes) {
   
    {
        console.log(`Today is ${item.date} and i worked on ${item.subject} and 
I feel ${item.feeling}
~~~~~~~~~~~~        
`);
    }
}