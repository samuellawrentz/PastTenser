# PastTenser
A web API that returns the past tense and the past participle tense of a given verb.
View the demo on https://samuellawrentz.github.io/PastTenser

## Requests
You could send your API requests to https://pastenser.herokuapp.com/Verb

The response would be an json consisting of the pastense and the past-participle of the requested verb.

### Example
Request

https://pastenser.herokuapp.com/Eat

Response 

        {
        "past tense":"Ate",
        "past participle":"Eaten"
        }
## Note
The first letter of the verb must be capital.

The data is fetched from a static data-source. Might be unrelaiable and sometimes wrong or out-dated.
