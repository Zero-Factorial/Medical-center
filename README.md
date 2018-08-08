FORMAT: 1A
HOST: http://polls.apiblueprint.org/

# Medical Center

We are building a restfull api about medical center of University of Rajshahi.By this API user, they can able to know the all the information about medical center. They can know the list of doctors, doctors schedule, list of treatments, list of stuffs and the list of tests that are available in the center. Here we can see data, insert data, delete data and modify data. In this projects we use javascript language, node.js framework, mongodb for database and express.


### GetDataInformation [GET]
You can get your own data using this action. It takes a JSON object containing a question and a collection of answers in the form of choices

+ Response 200 (application/json)

[
    {
        "available": true,
        "_id": "5b69943f909a720728b2fa2e",
        "name": "Abdus Salam",
        "specialist": "Cardiologist",
        "__v": 0,
        "time_schedule": "4pm ---6pm"
    },
    {
        "available": true,
        "_id": "5b6994a5909a720728b2fa2f",
        "name": "Humayon Kabir",
        "specialist": "Anesthesiologist",
        "__v": 0,
        "time_schedule": "6pm ---7pm"
    },
    {
        "available": true,
        "_id": "5b6994ef909a720728b2fa30",
        "name": "Ahsan Kabir",
        "specialist": "Allergist",
        "__v": 0,
        "time_schedule": "6.30pm ---7.30pm"
    },
    {
        "available": true,
        "_id": "5b699535909a720728b2fa31",
        "name": "Iqbal Aziz",
        "specialist": "Anesthesiologist",
        "__v": 0,
        "time_schedule": "7.30pm ---8.30pm"
    },
    {
        "available": true,
        "_id": "5b6a15e2293f722e08695e8b",
        "name": "Dr.Mahbubul Alom",
        "specialist": "Cardiologist",
        "time_schedule": "4pm ---6pm",
        "__v": 0
    },
    {
        "available": true,
        "_id": "5b69638ca65f642620f6878b",
        "name": "Helal Uddin",
        "specialist": "Physiotherapist",
        "__v": 0
    },
    {
        "available": true,
        "_id": "5b6995dc909a720728b2fa32",
        "name": "Iqbal Aziz",
        "specialist": "Anesthesiologist",
        "__v": 0
    },
    {
        "available": true,
        "_id": "5b699651909a720728b2fa33",
        "name": "Abdus Salam",
        "specialist": "Cardiologist",
        "__v": 0
    },
    {
        "available": true,
        "_id": "5b6996a1909a720728b2fa34",
        "name": "Humayon Kabir",
        "specialist": "Anesthesiologist",
        "__v": 0
    },
    {
        "available": true,
        "_id": "5b6996e1909a720728b2fa35",
        "name": "Ahsan Kabir",
        "specialist": "Allergist",
        "__v": 0
    },
    {
        "available": true,
        "_id": "5b69c2494e8c971024d7cca6",
        "name": "Medicine-Dept.",
        "__v": 0
    },
    {
        "available": true,
        "_id": "5b69c2784e8c971024d7cca7",
        "name": "Surgery-Dept.",
        "__v": 0
    },
    {
        "available": true,
        "_id": "5b69c2834e8c971024d7cca8",
        "name": "Oral-Dept.",
        "__v": 0
    },
    {
        "available": true,
        "_id": "5b69c2c04e8c971024d7cca9",
        "name": "Gynecology-Dept.",
        "__v": 0
    },
    {
        "available": true,
        "_id": "5b69be174e8c971024d7cca2",
        "name": "Blood test",
        "__v": 0,
        "expense": "250 tk"
    },
    {
        "available": false,
        "_id": "5b69be7f4e8c971024d7cca3",
        "name": "Magnetic Resonance Imaging (MRI)",
        "__v": 0,
        "expense": "2000 tk"
    },
    {
        "available": true,
        "_id": "5b69bebd4e8c971024d7cca4",
        "name": "Colonoscopy",
        "__v": 0,
        "expense": "2500 tk"
    },
    {
        "available": true,
        "_id": "5b698775fb15f003d8971dc8",
        "name": "Ashraful",
        "rank": "office secretary",
        "__v": 0
    },
    {
        "available": true,
        "_id": "5b69c49e4e8c971024d7ccaa",
        "name": "Mahbubul alam",
        "rank": "Register",
        "__v": 0
    },
    {
        "available": true,
        "_id": "5b69c4c64e8c971024d7ccab",
        "name": "Zillur Rahman",
        "rank": "Compounder",
        "__v": 0
    },
    {
        "available": true,
        "_id": "5b69c4e94e8c971024d7ccac",
        "name": "Mehedi Hasan",
        "rank": "Clark",
        "__v": 0
    }
]

### GetSpecificDataInformation [GET/medical/tests/5b69be174e8c971024d7cca2]
You can get your own data using this action. It takes a JSON
object containing a question and a collection of answers in the
form of choices.

+ Response 200 (application/json)

[
    {
        "available": true,
        "_id": "5b69be174e8c971024d7cca2",
        "name": "Blood test",
        "__v": 0,
        "expense": "250 tk"
    }
]

### PostData [POST/medical/tests]

You may post your own data using this action. It takes a JSON
object containing a question and a collection of answers in the
form of choices.

+ Request 200 (application/json)

[
    {
        "available": true,
        "name": "Eye test",
        "expense": "700 tk"
    }
]

###UpdateDataInformation [PATCH/medical/doctors/5b69be7f4e8c971024d7cca3]

You can update your own question using this action.

+ Request 200 (application/json)

{
    "expense": "500 tk"   
}

+ Response 201 (application/json)

    + Headers

            Location: /medical/doctors

    + Body

{

}

###DELETEdata [DELETE/medical/tests/5b69be174e8c971024d7cca2]
You can delete data from the database using this action.

+ Response 200 (application/json)

[
 {
    "OHH": {
        "message": "Not found!"
    }
}
]
