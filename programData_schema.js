// START schema
{
	"$schema": "http://json-schema.org/draft-06/schema#",
	"title": "Program set",
	//not sure if want object, or keep array..of objects?
	"type": "array",
	"items": {
		"title": "Program",
		"type": "object",
		"properties": {
			"id": {
				"description": "The unique identifier for a program",
				"type": "number"
			},
			"name": {
				"type": "string"
			},
			"description": {
				"type": "string",
			},
			"formats":{
				"type":"array",
				"items":{
					"type":"string"
				},
				"minItems": 1,
			},
			"bucket": {
				"type": "array",
				"items": {
					"type": "string"
				},
				"minItems": 1,
			},
			"degreeType": {
				"type": "object",
				"properties": {
					"masters": { "type": "boolean"},
					"dualDegree": { "type": "boolean"},
					"doctorate": { "type": "boolean"},
					"certificate": { "type": "boolean"},
				},
				"minItems": 1,
			},
			"creditHours": {
				"type": "object",
				"properties": {
					"mimimum": {
						"type": "number"
					},
					"maximum": {
						"type": "number"
					},
				},
				"required": ["minimum"]
			},
			"programStarts": {
				"type": "object",
				"properties": {
					"august": {
						"type": "boolean"
					},
					"september": {
						"type": "boolean"
					},
					"october": {
						"type": "boolean"
					},
					"november": {
						"type": "boolean"
					},
					"december": {
						"type": "boolean"
					},
					"january": {
						"type": "boolean"
					},
					"february": {
						"type": "boolean"
					},
					"march": {
						"type": "boolean"
					},
					"april": {
						"type": "boolean"
					},
					"may": {
						"type": "boolean"
					},
					"june": {
						"type": "boolean"
					},
					"july": {
						"type": "boolean"
					
				},
				"required": ["january","february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
			},
		},
		"required": ["id", "name", "description", "tags", "creditHours", "programStarts"]
	}
}
// END schema
