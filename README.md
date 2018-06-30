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

This API is not artificially intelligent to distinguish between verbs, nouns, adjectives, etc. Please be sure that **only a verb is sent** in the API request to avoid receiving wierd and strange words as past tense :) 

The data is fetched from a static data-source. Might be unrelaiable and sometimes wrong or out-dated.
