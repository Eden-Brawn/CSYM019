var module = {//using JSON for objects
    "course": "msc computing",
    "code": "CSYM019",
    "tutor": {
        "firstname": "tom",
        "lastname": "dave"
    }
}

alert(module.code);//calling objects
alert(module.tutor.firstname);

var nod = [//using JSON for arrays
    'csy1',
    'csy2'
]

alert(nod[0]);
alert(nod[1]);//calling arrays

var course = [//An object inside an array
    {
        "course": "msc computing",
        "code": "CSYM019"
    },
    'yo'
]

alert(course[0].course);
alert(course[1]);//calling arrays

var courseTwo = {//An array inside an object
    "name": "name",
    "class": [
        'room',
        'students'
    ]
} 

alert(courseTwo.name);//calling objects
alert(courseTwo.class);