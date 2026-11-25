export type Question = { q: string; options: [string, string, string, string]; answer: 0 | 1 | 2 | 3; explanation: string };
export type Subject = { id: string; name: string; emoji: string; questions: Question[] };

// Add more questions to any subject's array — the app picks them up automatically.
export const subjects: Subject[] = [
  {
    id: "core-maths", name: "Core Mathematics", emoji: "📐",
    questions: [
      { q: "Simplify: 3x + 5x − 2x", options: ["6x", "10x", "8x", "4x"], answer: 0, explanation: "3 + 5 − 2 = 6, so the answer is 6x." },
      { q: "Solve for x: 2x + 7 = 15", options: ["3", "4", "5", "11"], answer: 1, explanation: "2x = 15 − 7 = 8, so x = 4." },
      { q: "What is 25% of 240?", options: ["40", "50", "60", "80"], answer: 2, explanation: "25% = ¼, and 240 ÷ 4 = 60." },
      { q: "Find the area of a rectangle 12 cm by 5 cm.", options: ["17 cm²", "34 cm²", "60 cm²", "120 cm²"], answer: 2, explanation: "Area = length × breadth = 12 × 5 = 60 cm²." },
      { q: "Express 0.375 as a fraction in its lowest terms.", options: ["3/8", "37/100", "3/4", "5/8"], answer: 0, explanation: "0.375 = 375/1000 = 3/8." },
      { q: "If y = 3x − 4, find y when x = 5.", options: ["9", "11", "15", "19"], answer: 1, explanation: "y = 3(5) − 4 = 15 − 4 = 11." },
      { q: "The sum of interior angles of a triangle is:", options: ["90°", "180°", "270°", "360°"], answer: 1, explanation: "Interior angles of any triangle add up to 180°." },
      { q: "Evaluate 2³ × 2²", options: ["2⁵", "2⁶", "4⁵", "4⁶"], answer: 0, explanation: "When multiplying same bases, add powers: 3 + 2 = 5." },
      { q: "Find the mean of 4, 8, 6, 10, 2.", options: ["5", "6", "7", "8"], answer: 1, explanation: "Sum = 30, count = 5, mean = 30 ÷ 5 = 6." },
      { q: "Factorise: x² − 9", options: ["(x − 3)²", "(x + 9)(x − 1)", "(x − 3)(x + 3)", "(x − 9)(x + 1)"], answer: 2, explanation: "Difference of two squares: a² − b² = (a − b)(a + b)." },
    ],
  },
  {
    id: "integrated-science", name: "Integrated Science", emoji: "🔬",
    questions: [
      { q: "Which organelle is the 'powerhouse' of the cell?", options: ["Nucleus", "Ribosome", "Mitochondrion", "Vacuole"], answer: 2, explanation: "Mitochondria release energy through respiration." },
      { q: "The SI unit of force is the:", options: ["Joule", "Newton", "Watt", "Pascal"], answer: 1, explanation: "Force is measured in newtons (N)." },
      { q: "Which gas do plants absorb for photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], answer: 2, explanation: "Plants take in CO₂ and release O₂ during photosynthesis." },
      { q: "The pH of a neutral solution is:", options: ["0", "5", "7", "14"], answer: 2, explanation: "pH 7 is neutral; below is acidic, above is basic." },
      { q: "Malaria is caused by:", options: ["A virus", "Plasmodium", "A bacterium", "A fungus"], answer: 1, explanation: "Plasmodium (a protozoan) is spread by the female Anopheles mosquito." },
      { q: "Which is a renewable energy source?", options: ["Coal", "Crude oil", "Solar", "Natural gas"], answer: 2, explanation: "Solar energy is naturally replenished." },
      { q: "The chemical symbol for sodium is:", options: ["S", "So", "Na", "Sd"], answer: 2, explanation: "Na comes from the Latin 'natrium'." },
      { q: "Blood is pumped around the body by the:", options: ["Lungs", "Liver", "Kidneys", "Heart"], answer: 3, explanation: "The heart is the muscular pump of the circulatory system." },
      { q: "Which soil holds the most water?", options: ["Sandy", "Clay", "Loamy", "Gravel"], answer: 1, explanation: "Clay has tiny particles and small pores that retain water." },
      { q: "Speed = ?", options: ["Distance × Time", "Distance ÷ Time", "Time ÷ Distance", "Mass × Acceleration"], answer: 1, explanation: "Speed is distance covered per unit time." },
    ],
  },
  {
    id: "english", name: "English Language", emoji: "📚",
    questions: [
      { q: "Choose the correct option: She ___ to school every day.", options: ["go", "goes", "going", "gone"], answer: 1, explanation: "Third-person singular present tense takes 'goes'." },
      { q: "The opposite of 'generous' is:", options: ["Kind", "Mean", "Brave", "Humble"], answer: 1, explanation: "'Mean' (stingy) is the antonym of generous." },
      { q: "Identify the noun: 'The happy child ran quickly.'", options: ["happy", "child", "ran", "quickly"], answer: 1, explanation: "'Child' names a person — it's a noun." },
      { q: "Choose the correctly spelt word:", options: ["Accomodation", "Acommodation", "Accommodation", "Acomodation"], answer: 2, explanation: "Accommodation has double 'c' and double 'm'." },
      { q: "'To let the cat out of the bag' means:", options: ["To free an animal", "To reveal a secret", "To go shopping", "To be careless"], answer: 1, explanation: "This idiom means to reveal a secret by accident." },
      { q: "Neither the boys nor the girl ___ late.", options: ["were", "are", "was", "have been"], answer: 2, explanation: "With neither/nor, the verb agrees with the nearer subject ('girl')." },
      { q: "A synonym of 'enormous' is:", options: ["Tiny", "Huge", "Quick", "Weak"], answer: 1, explanation: "Enormous and huge both mean very large." },
      { q: "Which is a complex sentence?", options: ["I ate.", "I ate and slept.", "I ate because I was hungry.", "Eat now!"], answer: 2, explanation: "It has an independent clause plus a dependent clause ('because…')." },
      { q: "The plural of 'phenomenon' is:", options: ["Phenomenons", "Phenomena", "Phenomenas", "Phenomenon"], answer: 1, explanation: "It's a Greek-origin word: phenomenon → phenomena." },
      { q: "He is good ___ Mathematics.", options: ["in", "on", "at", "with"], answer: 2, explanation: "The correct collocation is 'good at'." },
    ],
  },
  {
    id: "social-studies", name: "Social Studies", emoji: "🌍",
    questions: [
      { q: "Ghana gained independence in:", options: ["1957", "1960", "1966", "1979"], answer: 0, explanation: "Ghana became independent on 6 March 1957." },
      { q: "The highest law of a country is the:", options: ["Bye-law", "Constitution", "Decree", "Policy"], answer: 1, explanation: "The constitution is the supreme law of the land." },
      { q: "Which arm of government makes laws?", options: ["Executive", "Judiciary", "Legislature", "Police"], answer: 2, explanation: "The legislature (Parliament) makes laws." },
      { q: "Which is a cause of rural–urban migration?", options: ["Good roads in villages", "Search for jobs", "Fertile farmland", "Low rent in villages"], answer: 1, explanation: "People move to cities mainly seeking employment." },
      { q: "A responsible citizen should:", options: ["Evade taxes", "Vote in elections", "Destroy public property", "Ignore laws"], answer: 1, explanation: "Voting is a key civic responsibility." },
      { q: "Socialisation mainly begins in the:", options: ["School", "Church", "Family", "Market"], answer: 2, explanation: "The family is the primary agent of socialisation." },
      { q: "Deforestation can lead to:", options: ["More rainfall", "Soil erosion", "Fertile soil", "Cooler weather"], answer: 1, explanation: "Without tree roots, topsoil is easily washed away." },
      { q: "ECOWAS was formed in:", options: ["1963", "1975", "1981", "2002"], answer: 1, explanation: "ECOWAS was established by the Treaty of Lagos in 1975." },
      { q: "Self-esteem means:", options: ["Respect for oneself", "Respect for elders", "Fear of others", "Love for money"], answer: 0, explanation: "Self-esteem is confidence in one's own worth." },
      { q: "Ghana's first President was:", options: ["J. B. Danquah", "Kwame Nkrumah", "J. A. Kufuor", "Hilla Limann"], answer: 1, explanation: "Dr Kwame Nkrumah led Ghana to independence and became its first president." },
    ],
  },
];

export const getSubject = (id: string) => subjects.find((s) => s.id === id);
export const bestKey = (id: string) => `wph-best-${id}`;
