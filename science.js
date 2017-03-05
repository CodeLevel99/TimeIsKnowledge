var t;
var x;



var defaultSentence = "In this time, " + parseInt(t) + " seconds, ";

var redBloodCell = {
	equation:2000000*t, 
	sentence:defaultSentence + " red blood cells have been newly created in your body.", 
	did:"Did you know that the formation of red blood cells take approximately 2 days to fully form? Stem cells in the red bone marrow called hemocytoblasts give rise to all of the formed elements in blood. If a hemocytoblast commits to becoming a cell called a proerythroblast, it will develop into a new red blood cell. ",
	link: "https://medlineplus.gov/ency/anatomyvideos/000104.htm",
};

var whiteBloodCell = {
	equation:10000000000 * t / 60 / 60/ 24,
	sentence: defaultSentence +" white blood cells have been newly created in your body.",
	did:"Did you know that almost 1 percent of the body’s red cells are generated each day. Both the red and white blood cells arise through a series of complex, gradual, and successive transformations from primitive stem cells,",
	link:"https://www.britannica.com/science/blood-cell-formation",
};

var caloriesBurned = {
	equation: 2200 * t / 60 /60 /24,
	sentence: defaultSentence  +" calories have been burned by your body.",
	did:"Did you know that while exercise does make up some of your natural daily calorie burn, simply existing -- breathing, pumping blood and digesting food -- also uses calories. The caloric amount used to simply survive is known as your basal metabolic rate, or BMR.",
	link:"http://www.livestrong.com/article/309810-how-to-burn-5-000-calories-per-day/",
};

var semenProduced = {
	equation:60000*t/60,
	sentence: defaultSentence  +" sperm has been produced in the average adult males body.",
	did:"Did you know that a teaspoon of ejaculated semen may not sound like much, but swimming in that teaspoon are usually roughly 250 million sperm, the tadpole-like cells that contain a man’s genetic heritage. But each individual sperm cell takes about three months to grow.",
	link:"http://www.harryfisch.com/the-male-biological-clock.html",
};

var dnaProduced = {
	equation: 50 * t,
	sentence: defaultSentence  +" nucleotides have been replicated in an average human cell.",
	did:"Did you know that replication occurs in three major steps: the opening of the double helix and separation of the DNA strands, the priming of the template strand, and the assembly of the new DNA segment. During separation, the two strands of the DNA double helix uncoil at a specific location called the origin.",
	link:"http://www.nature.com/scitable/topicpage/cells-can-replicate-their-dna-precisely-6524830",
};

var hairGrowth = {
	equation: 1.25 * t / 30 / 25/ 60 /60,
	sentence: defaultSentence  +" cm of hair have grown on your head.",
	did:"Did you know that hair follows a specific growth cycle with three distinct and concurrent phases: anagen, catagen, and telogen phases. Each phase has specific characteristics that determine the length of the hair. All three phases occur simultaneously; one strand of hair may be in the anagen phase, while another is in the telogen phase.",
	link:"https://en.wikipedia.org/wiki/Human_hair_growth",
};

var nailGrowth = {
	equation: 3 * t / 30 / 24/ 60/ 60,
	sentence:defaultSentence  + " mm of finger nail has grown on your index finger.",
	did: "Did you know that fingernails and toenails are made of a tough protective protein called keratin. This protein is also found in the hooves and horns of different animals. The nail consists of the nail plate, the nail matrix and the nail bed below it, and the grooves surrounding it.",
	link: "https://en.wikipedia.org/wiki/Nail_(anatomy)",
};

var neuronFire = {
	equation: 200 * t,
	sentence:defaultSentence + " fires of single neuron have occured in your brain.",
	did:"Did you know the core component of the nervous system is the neuron or nerve cell. The human brain has about 100 billion of them. A neuron is an electrically excitable cell that processes and transmits information by electro-chemical signalling. Unlike other cells, neurons never divide, and neither do they die off to be replaced by new ones",
	link:"http://www.human-memory.net/brain_neurons.html",
};

var skinCells = {
	equation: 35000 * t / 60 /60,
	sentence:defaultSentence  + " skin cells have been shed by your body.",
	did:"Did you know that scientists estimate that the human body is made up of around 10 trillion cells in total. Your skin makes up about 16 percent of your body weight, which means you have roughly 1.6 trillion skin cells.",
	link:"http://health.howstuffworks.com/skin-care/information/anatomy/shed-skin-cells.htm",
};
var heartRate = {
	equation: 72 * 70 * t /60,
	sentence:defaultSentence +  " ml of blood has been pumped by your heart.",
	did:"Did you known that the task of maintaining an adequate interstitial homeostasis (the proper nutritional environment surrounding all cells in your body) requires that blood flows almost continuously through each of the millions of capillaries in the body.",
	link:"http://www.vhlab.umn.edu/atlas/physiology-tutorial/blood-flow.shtml",
};



var lightning = {
	equation: 45 * t,
	sentence: defaultSentence + " lightning strikes have hit the earth.",
	did:"Did you know  that a lightning flash can heat the air around it to temperatures five times hotter than the sun’s surface.This heat causes surrounding air to rapidly expand and vibrate, which creates the pealing thunder we hear a short time after seeing a lightning flash.",
	link:"http://www.nationalgeographic.com/environment/natural-disasters/lightning/",
};



var earthquake = {
	equation: 5 * t / 60,
	sentence: defaultSentence + " earthquakes on earth have occured.",
	did:"Did you know that an earthquake results from the sudden release of energy in the Earth's lithosphere which creates seismic waves. Earthquakes can be violent enough to toss people around and destroy whole cities.",
	link:"https://en.wikipedia.org/wiki/Earthquake",
};


const person = { "name":"John", "age":31, "city":"New York" }

var fact = [redBloodCell, whiteBloodCell, caloriesBurned, semenProduced, dnaProduced, hairGrowth,nailGrowth, neuronFire,skinCells,heartRate, lightning, earthquake];
/*
function science(equation, sentence, did, link){
	this.equation = equation;
	this.sentence = sentence;
	this.did = did;
	this.link = link;

	return this.did;
} */


function changetext(){
	console.log("name");
    document.getElementById("thing").innerHTML = fact[0].did;
}
