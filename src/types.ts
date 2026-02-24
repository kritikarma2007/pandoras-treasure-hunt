export interface Clue {
  id: number;
  title: string;
  description: string;
  secret: string;
}

export const CLUES: Clue[] = [
  { id: 1, title: "The Beginning", description: " Every journey begins where footsteps gather the most... 'Step inside the house of learning , Pandora's first whisper waits close..!", secret: "AB 1 Ground Floor" },
  { id: 2, title: "The Rise", description: "Pandora never kept secrets at the base ...'Truth always waits one level higher , So  Climb and search carefully ", secret: "AB 1 Second Floor" },
  { id: 3, title: "The Turn ", description: " Not every path goes forward.. 'Sometimes the right directioon is behind you'..'So Return and find the quieter entrance ", secret: "AB 1 Back Entrace" },
  { id: 4, title: "The Experiment ", description: " Lessons were written in books , but truth was discovered  in experiments ..'Seek the place where learning meets testing..", secret: " Lab Complex Entrance" },
  { id: 5, title: "The Hidden Level ", description: "Many search near the doors and miss what lies above.. 'The next whisper waits on a higher level of experiments.", secret: "Lab Complex First Floor" },
  { id: 6, title: "The Higher Truth", description: " Secrets reveal themselves to those who rise again ..'Stay not where you stand , Look one level higher ..!", secret: "Lab Complex Second Floor" },
  { id: 7, title: "The Living Secret", description: "Concrete and steel hold many answers but one secret lives and breathes ..'Step outside study halls and find where life grows quietly .", secret: "Garden Area" },
  { id: 8, title: "The Return to Design ", description: "From nature back to creation , Seek the building  where ideas become structures..'Start from the lowest level..!", secret: "Architecture Ground Floor" },
  { id: 9, title: "The Climb Again ", description: "Pandora  never hid truths within easy reach , The next sign waits one level above.", secret: " Architecture First Floor" },
  { id: 10, title: "The Noise", description: "Silence guided you this far , Now follow the place where noise replaces quiet and seekers pause to rest ...!", secret: "Mayuri Canteen" },
  { id: 11, title: "The Circle Returns", description: "Every story returns to its beginning ..Go back to the house of learning , Seek the third height but choose the path less traveled...!", secret: "AB 1 Third Floor (Back Side)" },
  { id: 12, title: "The Final Direction (Hard)", description: "You climbing high searching for answers..'But Pandora never trusted walls , Look beyond the buildings where roots hold the earth  and branches touch the sky -- The Final Path Waits ..!.", secret: "Garden Direction" },
  { id: 13, title: "The Finale", description: " The Truth was never hidden in rooms ..'While you searched in corridors it waited in silence , Under wide branches the final secret rests...!", secret: "Mango Tree" },
];
