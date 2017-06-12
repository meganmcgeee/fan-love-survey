var json = {"pages":
            [{"name":"General Info","elements":
                [{"type":"text","name":"Email address","inputType":"email","placeHolder":"Your email"},
                {"type":"radiogroup","name":"How do you identify?","choices":[{"value":"1","text":"Female"},
                {"value":"2","text":"Male"},{"value":"3","text":"Other"},{"value":"4","text":"I'd rather not"}]},
                {"type":"text","name":"What is your age?","inputType":"number"},
                {"type":"radiogroup","name":"What is your approximate household income?","choices":
                [{"value":"1","text":"$21,999 or less"},{"value":"2","text":"$22,000 - $41,999"},
                {"value":"3","text":"$42,000 - $67,999"},{"value":"4","text":"$68,000 - $109,999"},
                {"value":"5","text":"$110,000 or more"},
                {"value":"6","text":"I'd rather not say, thanks!"}]},
                {"type":"checkbox","name":"Who is joining you when you go to Anime Expo 2017?","choices":
                [{"value":"1","text":"My partner(s)"},{"value":"2","text":"My parent(s) or guardian(s)"},
                {"value":"3","text":"My child(ren)"},{"value":"4","text":"My other relatives"},
                {"value":"5","text":"My friend(s)"},
                {"value":"6","text":"My colleague(s)/co-worker(s) NEXT"}]}]},
                {"name":"What do you like to do when attending AX ALONE?","elements":
                [{"type":"panel","name":"What do you like to do when you attend a convention ALONE?","elements":
                [{"type":"radiogroup","name":"Buy merch and/or show exclusives","choices":[{"value":"1","text":"Yes"},
                {"value":"2","text":"No"}]},{"type":"radiogroup","name":" Meet celebrities or guests of honor","choices":[{"value":"1","text":"Yes"},
                {"value":"2","text":"No"}]},{"type":"radiogroup","name":"Meet new friends","choices":[{"value":"1","text":"Yes"},{"value":"2","text":"No"}]},
                {"type":"radiogroup","name":"Go to concerts","choices":[{"value":"1","text":"Yes"},{"value":"2","text":"No"}]},
                {"type":"radiogroup","name":"Watch premieres of movies or shows","choices":[{"value":"1","text":"Yes"},{"value":"2","text":"No"}]},
                {"type":"radiogroup","name":"Watch live programming (comedy, game shows, martial arts, etc)","choices":[{"value":"1","text":"Yes"},
                {"value":"2","text":"No"}]},{"type":"radiogroup","name":"Participate in events (karaoke, game shows, contests, dances, etc)","choices":[{"value":"1","text":"Yes"},
                {"value":"2","text":"No"}]},{"type":"radiogroup","name":"Learn a new skill or take a class","choices":[{"value":"1","text":"Yes"},{"value":"2","text":"No"}]},
                {"type":"radiogroup","name":"Play video games","choices":[{"value":"1","text":"Yes"},{"value":"2","text":"No"}]},{"type":"radiogroup","name":"Cosplay","choices":[{"value":"1","text":"Yes"},
                {"value":"2","text":"No"}]},{"type":"radiogroup","name":"Take photos or be in photo shoots","choices":[{"value":"1","text":"Yes"},{"value":"2","text":"No"}]},
                {"type":"radiogroup","name":"Party","choices":[{"value":"1","text":"Yes"},{"value":"2","text":"No"}]},
                {"type":"radiogroup","name":"Work as staff or as a volunteer","choices":[{"value":"1","text":"Yes"},
                {"value":"2","text":"No"}]}],"title":"What do you like to do when you attend a convention ALONE?"}]},
                {"name":"What do you like to do when attending AX with COMPANY","elements":[{"type":"panel","name":"What do you like to do when you attend a convention WITH COMPANY?","elements":
                [{"type":"radiogroup","name":"Buy merch and / or show exclusives","choices":[{"value":"1","text":"Yes"},{"value":"2","text":"No"}]},
                {"type":"radiogroup","name":"Meet celebrities or guests of honor","choices":[{"value":"1","text":"Yes"},{"value":"2","text":"No"}]},
                {"type":"radiogroup","name":"Meet new friends","choices":[{"value":"1","text":"Yes"},{"value":"2","text":"No"}]},
                {"type":"radiogroup","name":"Go to concerts","choices":[{"value":"1","text":"Yes"},{"value":"2","text":"No"}]},
                {"type":"radiogroup","name":"Watch premieres of movies or shows","choices":[{"value":"1","text":"Yes"},{"value":"2","text":"No"}]},
                {"type":"radiogroup","name":"Watch live programming (comedy, game shows, martial arts, etc)","choices":[{"value":"1","text":"Yes"},
                {"value":"2","text":"No"}]},{"type":"radiogroup","name":" Learn a new skill or take a class","choices":[{"value":"1","text":"Yes"},
                {"value":"2","text":"No"}]},{"type":"radiogroup","name":"Play video games","choices":[{"value":"1","text":"Yes"},{"value":"2","text":"No"}]},
                {"type":"radiogroup","name":"Cosplay","choices":[{"value":"1","text":"Yes"},{"value":"2","text":"No"}]},
                {"type":"radiogroup","name":"Take photos or be in photo shoots","choices":[{"value":"1","text":"Yes"},{"value":"2","text":"No"}]},
                {"type":"radiogroup","name":"Party","choices":[{"value":"1","text":"Yes"},{"value":"2","text":"No"}]},
                {"type":"radiogroup","name":"Work as staff or as a volunteer","choices":[{"value":"1","text":"Yes"},
                {"value":"2","text":"No"}]}],"title":"What do you like to do when you attend a convention WITH COMPANY?"}]},
                {"name":"Online Content","elements":[{"type":"text","name":"How many fandom conventions do you attend per year?"},
                {"type":"matrixdynamic","name":"Where do you get your online content?","columns":[{"name":"Amazon","cellType":"checkbox"},
                {"name":"Youtube","cellType":"checkbox"},{"name":"Hulu","cellType":"checkbox"},{"name":"Netflix","cellType":"checkbox"},
                {"name":"Torrent","cellType":"checkbox"}],"choices":[{"value":"1","text":"I'm the primary account holder"},
                {"value":2,"text":"I use someone else's account"},{"value":3,"text":"Arr, I'm a pirate"},{"value":4,"text":"I don't use this site"}],"rowCount":"1"}]},
                {"name":"Thank you.","elements":[{"type":"text","name":"What do you call yourself?"},
                {"type":"radiogroup","name":"What do call yourself?","choices":[{"value":"1","text":"YES OMG!"},{"value":"2","text":"I don't like fun stuff. No thank you."}]}]}]}


Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";
Survey.Survey.cssType = "bootstrap";

var model = new Survey.Model(json);

$("#surveyElement").Survey({model:model, onComplete: sendDataToServer});

function sendDataToServer(survey) {
     survey.sendResult('7c745bd0-f520-4df4-8324-4f73e9fc23d4');
}