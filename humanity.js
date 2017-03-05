
function fact(equation, sentence, did, link) {

    this.equation = equation; 
    this.sentence = sentence;
    this.did = did;
    this.link = link;
}

var time; 

var facts = [death_rate_US, death_rate_canada, birth_rate, oil_consumption, tortoise_movement, elephant_heartbeats, hunger_deaths, starfish, cancer_deaths, woodpecker];

var defaultSentence = "In this time: " + parseInt(time) + " seconds"; 

var death_rate_US = {
    equation: 4 * time,  
    sentence: defaultSentence + " has died in the US.",
    did: "A country’s population is stable when the fertility rate is equal to replacement rates. These vary by country but globally work out to around 2.1 children per woman. Learn more here:",
    link: "http://brilliantmaps.com/fertility-rates/",
};

var death_rate_canada = {
    equation: 1.8 * time,  
    sentence: defaultSentence + " has died in the Canada.",
    did: "Suicide is a major cause of premature and preventable death. It is estimated, that in 2009 alone, there were about 100,000 years of potential life lost to Canadians under the age of 75 as a result of suicides. Learn more here:",
    link: "http://www.statcan.gc.ca/pub/82-624-x/2012001/article/11696-eng.htm",
};

var birth_rate = {
    equation: 2 * time,
    sentence: defaultSentence + " have been born in the US.",
    did: "Did you know the increase in U.S. births since 1970 has been driven entirely by births to immigrant mothers. Learn more here:", 
    link: "http://www.pewresearch.org/fact-tank/2016/10/26/5-facts-about-immigrant-mothers-and-u-s-fertility-trends/",
};

var oil_consumption = {
    equation: 1110 * time, 
    sentence: defaultSentence + " barrels of oil has been consumed.",
    did: "In the next five years, non-OECD Asia will remain the major source of oil demand growth, with volumes increasing from 23.7 mb/d in 2015 to 28.9 mb/d in 2021. Learn more here:", 
    link: "https://www.iea.org/about/faqs/oil/",
};

var tortoise_movement = {
    equation: 0.075 * time, 
    sentence: defaultSentence + ", a turtle has mo ", meters.",
    did: "Some turtles lay eggs in the sand and leave them to hatch on their own. The young turtles make their way to the top of the sand and scramble to the water while trying to avoid predators. Learn more here:",
    link: "http://www.sciencekids.co.nz/sciencefacts/animals/turtle.html" ,
};

var elephant_heartbeats = {
    equation: 0.5 * time,
    sentence: defaultSentence + " an elephant's heart has beated.",
    did: "Elephants have a highly developed brain and the largest of all the land mammals. The brain is 3 or 4 times larger than that of humans although smaller as a proportion of body weight. Learn more here:",
    link: "http://www.happyelephantcontest.com/fun-facts/",
};

var hunger_deaths = {
    equation: 0.25 * time,
    sentence: defaultSentence + " people has died.",
    did: "795 million people – or one in nine people in the world – do not have enough to eat. Nearly half of all deaths in children under 5 are attributable to under-nutrition. Learn more here:",
    link: "http://www.thp.org/knowledge-center/know-your-world-facts-about-hunger-poverty/",
};

var starfish = {
    equation: 0.25 * time,
    sentence: defaultSentence + ", a starfish has moved in distance.",
    did: "Starfish are not actually a fish. They're actually related to sand dollars and sea urchins.",
    link: "http://awesomeocean.com/2014/11/21/9-cool-facts-starfish/",
};

var cancer_deaths = {
    equation: 0.20 * time, 
    sentence: defaultSentence + " has died from cancer.",
    did: "Sleep deprivation (defined as getting less than 6 hours of sleep per day), increases risk of colon cancer. Learn more here: ",
    link: "https://thetruthaboutcancer.com/17-cancer-facts-every-person-needs-know/",
};


var woodpecker = {
    equation: 20 * time, 
    sentence: defaultSentence + ", a humming bird has hammered a tree times.",
    did: "The woodpecker's strong, pointed beak acts as both a chisel and a crowbar to remove bark and find hiding insects. It has a very long tongue, up to four inches in some species - with a glue-like substance on the tip for catching insects.",
    link: "http://www.defenders.org/woodpeckers/basic-facts",
};

function generateFact() {
    document.getElementById("demo").innerHTML = facts[0].did;
}



