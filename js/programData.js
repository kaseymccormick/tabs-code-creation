// iea 1 is check the date, and show the month of or following ie if it's march show april start instead of august. so april august start vs august april start
// if the application deadline is within a month or two, add a line under program starts in read saying deadline approcahing, concern to much 
const programs = [
	{
		"id": 1,
        "name": "Executive Healthcare MBA (Master of Business Administration)",
		"description": "This accelerated 18-month program is designed to position those working in healthcare to take the next step into an administrative role in healthcare management.",
		"programLink":"/program/accounting-mac",
		"formats":["Hybrid", "Accelerated"],
		"buckets":["Healthcare"],
		"creditHours": "45",
		"degreeType": {
			"masters": true,
			"dual_degree": false,
			"doctorate": false,
			"certificate": false,
		},
		"programStarts":["October", "April"],
	},
	{
		"id": 2,	
        "name": "Health and Wellness Coaching (Master of Science)",
		"description": "Empower individuals to take charge of their own health by teaching life-changing healthy behaviors and ways to sustain them.",	
		"programLink":"/program/accounting-mac",
		"formats":["Online"],
		"buckets": ["Healthcare"],
		"creditHours":"36",
		"degreeType": {
			"masters": true,
			"dual_degree": false,
			"doctorate": false,
			"certificate": false,
		},
		"programStarts":["August", "January"],
	},
	{
		"id": 3,	
        "name": "Health Care Ethics (Master of Science)",
		"description": "Understand and apply critical thinking to respond to ethical issues that arise in health care.",	
		"programLink":"/program/accounting-mac",
		"formats":["Online"],
		"buckets": ["Healthcare"],
		"creditHours":"33",
		"degreeType": {
			"masters": true,
			"dual_degree": false,
			"doctorate": false,
			"certificate": false,
		},
		"programStarts":["August","January","May"],
	},	
	{
		"id": 4,	
        "name": "Health Care Ethics",
		"description": "Learn the basics behind understanding and responding to ethical issues in the health care industry. ",	
		"programLink":"/program/accounting-mac",
		"formats":["Online"],
		"buckets": ["Healthcare"],
				"creditHours":"15",
		"degreeType": {
			"masters": false,
			"dual_degree": false,
			"doctorate": false,
			"certificate": true,
		},
		"programStarts":["August","January"],
	},
	{
		"id": 5,	
        "name": "Fake program test",
		"description": "making sure falses are real",	
		"programLink":"/program/accounting-mac",
		"formats":["random","on-campus"],
		"buckets": ["leadership"],
		"creditHours":"15-20",
		"degreeType": {
			"masters": false,
			"dual_degree": false,
			"doctorate": false,
			"certificate": false,
		},
		"programStarts":["August","January"],
	}
]
