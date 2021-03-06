$(document).ready(function() {
    var t;
    var time;
    var defaultSentence = "In this time, ";

    var clicked = false;
    var countup;
    var second = 0;
    var millisecond = 0;
    var secondstring = "00s ";

    function startTimer() {
        countup = setInterval(function() {
            millisecond++;

            if(millisecond == 100)
            {
                millisecond = 0;
                second++;
                if(second < 10)
                {
                    secondstring = "0" + second.toString() + "s ";
                }
                else
                {
                    secondstring = second.toString() + "s ";
                }
            }

            $("#clock-button").text(secondstring + millisecond.toString() + "ms");
        }, 10);
    }

    var redBloodCell = {
    equation: function (second,millisecond) { return 2000000* (second + millisecond / 100);}, 
    sentence: " red blood cells have been newly created in your body.", 
    did:"Did you know that the formation of red blood cells take approximately 2 days to fully form? Stem cells in the red bone marrow called hemocytoblasts give rise to all of the formed elements in blood. If a hemocytoblast commits to becoming a cell called a proerythroblast, it will develop into a new red blood cell. ",
    link: "https://medlineplus.gov/ency/anatomyvideos/000104.htm",
    };

    var whiteBloodCell = {
    equation: function (second, millisecond) {return 10000000000 * (second + millisecond/100) / 60 / 60/ 24; },
    sentence: " white blood cells have been newly created in your body.",
    did:"Did you know that almost 1 percent of the body\’s red cells are generated each day. Both the red and white blood cells arise through a series of complex, gradual, and successive transformations from primitive stem cells,",
    link:"https://www.britannica.com/science/blood-cell-formation",
    };

    var caloriesBurned = {
    equation: function (second, millisecond) {return 2200 * (second + millisecond/100) / 60 /60 /24;},
    sentence: " calories have been burned by your body.",
    did:"Did you know that while exercise does make up some of your natural daily calorie burn, simply existing -- breathing, pumping blood and digesting food -- also uses calories. The caloric amount used to simply survive is known as your basal metabolic rate, or BMR.",
    link:"http://www.livestrong.com/article/309810-how-to-burn-5-000-calories-per-day/",
    };

    var semenProduced = {
    equation:function (second, millisecond) {return 60000*(second + millisecond/100) /60;},
    sentence: " sperm has been produced in the average adult males body.",
    did:"Did you know that a teaspoon of ejaculated semen may not sound like much, but swimming in that teaspoon are usually roughly 250 million sperm, the tadpole-like cells that contain a man\’s genetic heritage. But each individual sperm cell takes about three months to grow.",
    link:"http://www.harryfisch.com/the-male-biological-clock.html",
    };

    var dnaProduced = {
    equation: function (second, millisecond) {return 50 * (second + millisecond/100);},
    sentence: " nucleotides have been replicated in an average human cell.",
    did:"Did you know that replication occurs in three major steps: the opening of the double helix and separation of the DNA strands, the priming of the template strand, and the assembly of the new DNA segment. During separation, the two strands of the DNA double helix uncoil at a specific location called the origin.",
    link:"http://www.nature.com/scitable/topicpage/cells-can-replicate-their-dna-precisely-6524830",
    };

    var hairGrowth = {
    equation: function (second, millisecond) {return 1.25 * (second + millisecond/100) / 30 / 25/ 60 /60;},
    sentence: " cm of hair have grown on your head.",
    did:"Did you know that hair follows a specific growth cycle with three distinct and concurrent phases: anagen, catagen, and telogen phases. Each phase has specific characteristics that determine the length of the hair. All three phases occur simultaneously; one strand of hair may be in the anagen phase, while another is in the telogen phase.",
    link:"https://en.wikipedia.org/wiki/Human_hair_growth",
    };

    var nailGrowth = {
    equation: function (second, millisecond) {return 3 * (second + millisecond/100) / 30 / 24/ 60/ 60;},
    sentence: " mm of finger nail has grown on your index finger.",
    did: "Did you know that fingernails and toenails are made of a tough protective protein called keratin. This protein is also found in the hooves and horns of different animals. The nail consists of the nail plate, the nail matrix and the nail bed below it, and the grooves surrounding it.",
    link: "https://en.wikipedia.org/wiki/Nail_(anatomy)",
    };
    
    var neuronFire = {
    equation: function (second,millisecond) {return 200 * (second + millisecond/100);},
    sentence:" fires of single neuron have occured in your brain.",
    did:"Did you know the core component of the nervous system is the neuron or nerve cell. The human brain has about 100 billion of them. A neuron is an electrically excitable cell that processes and transmits information by electro-chemical signalling. Unlike other cells, neurons never divide, and neither do they die off to be replaced by new ones",
    link:"http://www.human-memory.net/brain_neurons.html",
    };

    var skinCells = {
    equation: function (second, millisecond) {return 35000 * (second + millisecond/100) / 60 /60;},
    sentence:" skin cells have been shed by your body.",
    did:"Did you know that scientists estimate that the human body is made up of around 10 trillion cells in total. Your skin makes up about 16 percent of your body weight, which means you have roughly 1.6 trillion skin cells.",
    link:"http://health.howstuffworks.com/skin-care/information/anatomy/shed-skin-cells.htm",
    };

    var heartRate = {
    equation: function (second,millisecond) {return 72 * 70 * (second + millisecond/100) /60;},
    sentence:" ml of blood has been pumped by your heart.",
    did:"Did you known that the task of maintaining an adequate interstitial homeostasis (the proper nutritional environment surrounding all cells in your body) requires that blood flows almost continuously through each of the millions of capillaries in the body.",
    link:"http://www.vhlab.umn.edu/atlas/physiology-tutorial/blood-flow.shtml",
    };

    var lightning = {
    equation: function (second,millisecond) {return 45 * (second + millisecond/100);},
    sentence: " lightning strikes have hit the earth.",
    did:"Did you know  that a lightning flash can heat the air around it to temperatures five times hotter than the sun\’s surface.This heat causes surrounding air to rapidly expand and vibrate, which creates the pealing thunder we hear a short time after seeing a lightning flash.",
    link:"http://www.nationalgeographic.com/environment/natural-disasters/lightning/",
    };

    var earthquake = {
    equation: function (second, millisecond) { return 5 * (second + (millisecond/100)) / 60;},
    sentence: " earthquakes on earth have occured.",
    did:"Did you know that an earthquake results from the sudden release of energy in the Earth\'s lithosphere which creates seismic waves. Earthquakes can be violent enough to toss people around and destroy whole cities.",
    link:"https://en.wikipedia.org/wiki/Earthquake",
    };

     var death_rate_US = {
    equation: function (second,millisecond) {return 4 * (second + millisecond / 100);},  
    sentence: " people have died in the US.",
    did: "Did you know that a country\’s population is stable when the fertility rate is equal to replacement rates. These vary by country but globally work out to around 2.1 children per woman.",
    link: "http://brilliantmaps.com/fertility-rates/",
    };

    var death_rate_canada = {
    equation:function (second,millisecond) {return 1.8 * (second + millisecond / 100);},  
    sentence:" people have died in the Canada.",
    did: "Did you know thatSuicide is a major cause of premature and preventable death. It is estimated, that in 2009 alone, there were about 100,000 years of potential life lost to Canadians under the age of 75 as a result of suicides.",
    link: "http://www.statcan.gc.ca/pub/82-624-x/2012001/article/11696-eng.htm",
    };

    var birth_rate = {
    equation: function (second,millisecond) {return 2 * (second + millisecond / 100);},
    sentence:  " have been born in the US.",
    did: "Did you know the increase in U.S. births since 1970 has been driven entirely by births to immigrant mothers. Fertility rates in the United States have fallen since 1990 among all major racial/ethnic groups. ", 
    link: "http://www.pewresearch.org/fact-tank/2016/10/26/5-facts-about-immigrant-mothers-and-u-s-fertility-trends/",
    };

    var oil_consumption = {
    equation:function (second,millisecond) {return 1110 * (second + millisecond / 100);}, 
    sentence:" barrels of oil have been consumed.",
    did: "Did you know that the US has the 10th largest oil reserve in the world. Venezuela has the largest, with 298.35 billion barrels compared to the US\’ 33 billion barrels.", 
    link: "https://www.iea.org/about/faqs/oil/",
    };

    var tortoise_movement = {
    equation: function (second,millisecond) {return 0.075 * (second + millisecond / 100);}, 
    sentence: " m is the amount of distance an average turtle has travesed.",
    did: "Did you know that some turtles lay eggs in the sand and leave them to hatch on their own. The young turtles make their way to the top of the sand and scramble to the water while trying to avoid predators.",
    link: "http://www.sciencekids.co.nz/sciencefacts/animals/turtle.html" ,
    };

    var elephant_heartbeats = {
    equation: function (second,millisecond) {return 0.5 * (second + millisecond / 100);},
    sentence: " is the number of times an elephant's heart has beated.",
    did: "Did you know that elephants have a highly developed brain and the largest of all the land mammals. The brain is 3 or 4 times larger than that of humans although smaller as a proportion of body weight.",
    link: "http://www.happyelephantcontest.com/fun-facts/",
    };

    var hunger_deaths = {
    equation: function (second,millisecond) {return 0.25 * (second + millisecond / 100);},
    sentence: " people have died in the world.",
    did: "Did you know that 795 million people – or one in nine people in the world – do not have enough to eat. Nearly half of all deaths in children under 5 are attributable to under-nutrition.",
    link: "http://www.thp.org/knowledge-center/know-your-world-facts-about-hunger-poverty/",
    };

    var starfish = {
    equation:function (second,millisecond) {return 0.25 * (second + millisecond / 100);},
    sentence: " m is how much an average starfish has moved.",
    did: "Did you know that starfish have no brains and no blood. Their nervous system is spread through their arms and their “blood” is actually filtered sea water.Beyond their distinctive shape, sea stars are famous for their ability to regenerate limbs, and in some cases, entire bodies. ",
    link: "http://awesomeocean.com/2014/11/21/9-cool-facts-starfish/",
    };

    var cancer_deaths = {
    equation: function (second,millisecond) {return 0.20 * (second + millisecond / 100);}, 
    sentence: " people have died from cancer.",
    did: "Did you know that every hour of every day, an average of 21 Canadians will be diagnosed with cancer and nine will die from the disease. Almost half of all Canadians (41 per cent of females and 46 per cent of males) will develop cancer in their lifetimes.",
    link: "https://thetruthaboutcancer.com/17-cancer-facts-every-person-needs-know/",
    };


    var woodpecker = {
    equation: function (second,millisecond) {return 20 * (second + millisecond / 100);}, 
    sentence: " is the average amount of times a woodpecker bird has hammered a tree.",
    did: "Did you know that the woodpecker\'s strong, pointed beak acts as both a chisel and a crowbar to remove bark and find hiding insects. It has a very long tongue, up to four inches in some species - with a glue-like substance on the tip for catching insects.",
    link: "http://www.defenders.org/woodpeckers/basic-facts",
    };

    var facts = [redBloodCell, whiteBloodCell, caloriesBurned, semenProduced, dnaProduced, hairGrowth, nailGrowth, neuronFire, skinCells, heartRate, lightning, earthquake,death_rate_US, death_rate_canada, birth_rate, oil_consumption, tortoise_movement, elephant_heartbeats, hunger_deaths, starfish, cancer_deaths, woodpecker];

    function stopTimer() {
        clearInterval(countup);
    }

   

    $("#fact-container").hide();
    $("time-display").hide();

    $("#clock-button").click(function() {
        if(clicked == false)
        {
            clicked = true;
            startTimer();
            $("#clock").css("animationPlayState", "running");
            $("#clock-button").css("animationPlayState", "running");
            
        }
        else if(clicked == true)
        {
            stopTimer();
            $("#clock").css("animationPlayState", "paused");
            $("#clock-button").css("animationPlayState", "paused");
            $("#clock").fadeOut(1200);
            setTimeout(function() {
                $("#fact-container").show(1200);
            }, 2000);
            $("#time-display").text(secondstring + millisecond.toString() + "ms");
            var position = Math.floor(Math.random()*facts.length);
            $("#fact").text(defaultSentence +facts[position].equation(second, millisecond)+ facts[position].sentence + "\n" + facts[position].did);
            $("#fact").attr("href", facts[position].link);
        }
    });

    $("#fact-button").click(function() {
        clicked = false;
        second = 0;
        millisecond = 0;
        secondstring = "00s ";
        $("#fact-container").hide(1200);
        setTimeout(function() {
                $("#clock").fadeIn(1200);
            }, 2000);
        $("#clock-button").text("00s 00ms");
    });
});




