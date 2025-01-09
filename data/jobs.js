const jobs = [
  {
    job_id: 1,
    user_id: 1,
    company_name: "Trudoo",
    job_title: "Legal Assistant",
    status: "interview",
    createdAt: "2025-01-12T17:04:32Z",
  },
  {
    job_id: 2,
    user_id: 1,
    company_name: "Bluezoom",
    job_title: "Web Developer III",
    status: "applied",
    createdAt: "2025-01-16T22:35:04Z",
  },
  {
    job_id: 3,
    user_id: 1,
    company_name: "Kwideo",
    job_title: "Nurse Practicioner",
    status: "rejected",
    createdAt: "2025-01-27T01:21:46Z",
  },
  {
    job_id: 4,
    user_id: 1,
    company_name: "Quimm",
    job_title: "Desktop Support Technician",
    status: "applied",
    createdAt: "2025-01-03T17:17:57Z",
  },
  {
    job_id: 5,
    user_id: 1,
    company_name: "Feedspan",
    job_title: "Account Representative I",
    status: "pending",
    createdAt: "2025-01-20T16:30:50Z",
  },
  {
    job_id: 6,
    user_id: 1,
    company_name: "Browsedrive",
    job_title: "Desktop Support Technician",
    status: "interview",
    createdAt: "2025-01-25T10:57:01Z",
  },
  {
    job_id: 7,
    user_id: 1,
    company_name: "Pixope",
    job_title: "Speech Pathologist",
    status: "applied",
    createdAt: "2025-01-16T18:18:50Z",
  },
  {
    job_id: 8,
    user_id: 1,
    company_name: "Devpoint",
    job_title: "Analyst Programmer",
    status: "pending",
    createdAt: "2025-01-10T02:09:09Z",
  },
  {
    job_id: 9,
    user_id: 1,
    company_name: "Voonix",
    job_title: "Quality Engineer",
    status: "interview",
    createdAt: "2025-01-29T07:00:37Z",
  },
  {
    job_id: 10,
    user_id: 1,
    company_name: "Tagpad",
    job_title: "Marketing Assistant",
    status: "applied",
    createdAt: "2025-01-15T14:01:06Z",
  },
  {
    job_id: 11,
    user_id: 11,
    company_name: "Devbug",
    job_title: "Junior Executive",
    status: "applied",
    createdAt: "2025-01-15T21:01:42Z",
  },
  {
    job_id: 12,
    user_id: 12,
    company_name: "Fivebridge",
    job_title: "Design Engineer",
    status: "interview",
    createdAt: "2025-01-20T18:05:18Z",
  },
  {
    job_id: 13,
    user_id: 13,
    company_name: "BlogXS",
    job_title: "Paralegal",
    status: "interview",
    createdAt: "2025-01-27T04:38:54Z",
  },
  {
    job_id: 14,
    user_id: 14,
    company_name: "Oyoyo",
    job_title: "Clinical Specialist",
    status: "interview",
    createdAt: "2025-01-09T06:23:59Z",
  },
  {
    job_id: 15,
    user_id: 15,
    company_name: "Feedmix",
    job_title: "Environmental Tech",
    status: "pending",
    createdAt: "2025-01-11T13:56:22Z",
  },
  {
    job_id: 16,
    user_id: 16,
    company_name: "Riffwire",
    job_title: "Office Assistant II",
    status: "interview",
    createdAt: "2025-01-09T17:53:12Z",
  },
  {
    job_id: 17,
    user_id: 17,
    company_name: "Trilith",
    job_title: "Analyst Programmer",
    status: "rejected",
    createdAt: "2025-01-07T14:59:10Z",
  },
  {
    job_id: 18,
    user_id: 18,
    company_name: "Kayveo",
    job_title: "Cost Accountant",
    status: "applied",
    createdAt: "2025-01-23T09:11:00Z",
  },
  {
    job_id: 19,
    user_id: 19,
    company_name: "Roodel",
    job_title: "Associate Professor",
    status: "pending",
    createdAt: "2025-01-02T13:33:53Z",
  },
  {
    job_id: 20,
    user_id: 20,
    company_name: "Katz",
    job_title: "Registered Nurse",
    status: "rejected",
    createdAt: "2025-01-07T11:08:29Z",
  },
  {
    job_id: 21,
    user_id: 21,
    company_name: "Jatri",
    job_title: "Accounting Assistant IV",
    status: "rejected",
    createdAt: "2025-01-27T01:36:34Z",
  },
  {
    job_id: 22,
    user_id: 22,
    company_name: "Minyx",
    job_title: "Paralegal",
    status: "interview",
    createdAt: "2025-01-03T03:00:56Z",
  },
  {
    job_id: 23,
    user_id: 23,
    company_name: "Jaxnation",
    job_title: "Librarian",
    status: "interview",
    createdAt: "2025-01-08T02:25:54Z",
  },
  {
    job_id: 24,
    user_id: 24,
    company_name: "Kazu",
    job_title: "Quality Control Specialist",
    status: "pending",
    createdAt: "2025-01-23T10:01:05Z",
  },
  {
    job_id: 25,
    user_id: 25,
    company_name: "Demizz",
    job_title: "Accounting Assistant III",
    status: "pending",
    createdAt: "2025-01-20T16:51:03Z",
  },
  {
    job_id: 26,
    user_id: 26,
    company_name: "Fatz",
    job_title: "Software Test Engineer III",
    status: "applied",
    createdAt: "2025-01-29T05:04:34Z",
  },
  {
    job_id: 27,
    user_id: 27,
    company_name: "Yacero",
    job_title: "Chemical Engineer",
    status: "applied",
    createdAt: "2025-01-24T04:45:45Z",
  },
  {
    job_id: 28,
    user_id: 28,
    company_name: "Yadel",
    job_title: "Research Nurse",
    status: "rejected",
    createdAt: "2025-01-11T19:37:31Z",
  },
  {
    job_id: 29,
    user_id: 29,
    company_name: "Yoveo",
    job_title: "Administrative Officer",
    status: "interview",
    createdAt: "2025-01-12T23:08:21Z",
  },
  {
    job_id: 30,
    user_id: 30,
    company_name: "Fiveclub",
    job_title: "Account Executive",
    status: "pending",
    createdAt: "2025-01-02T18:48:02Z",
  },
  {
    job_id: 31,
    user_id: 31,
    company_name: "InnoZ",
    job_title: "Registered Nurse",
    status: "interview",
    createdAt: "2025-01-08T02:21:47Z",
  },
  {
    job_id: 32,
    user_id: 32,
    company_name: "Divanoodle",
    job_title: "Speech Pathologist",
    status: "applied",
    createdAt: "2025-01-13T06:56:58Z",
  },
  {
    job_id: 33,
    user_id: 33,
    company_name: "Plajo",
    job_title: "Cost Accountant",
    status: "interview",
    createdAt: "2025-01-22T04:19:00Z",
  },
  {
    job_id: 34,
    user_id: 34,
    company_name: "Skidoo",
    job_title: "Social Worker",
    status: "pending",
    createdAt: "2025-01-27T23:01:44Z",
  },
  {
    job_id: 35,
    user_id: 35,
    company_name: "Brainbox",
    job_title: "Nurse Practicioner",
    status: "rejected",
    createdAt: "2025-01-01T12:42:48Z",
  },
  {
    job_id: 36,
    user_id: 36,
    company_name: "Skipfire",
    job_title: "Senior Quality Engineer",
    status: "applied",
    createdAt: "2025-01-03T10:08:45Z",
  },
  {
    job_id: 37,
    user_id: 37,
    company_name: "Jabbercube",
    job_title: "Registered Nurse",
    status: "pending",
    createdAt: "2025-01-21T13:45:45Z",
  },
  {
    job_id: 38,
    user_id: 38,
    company_name: "Gigaclub",
    job_title: "Electrical Engineer",
    status: "pending",
    createdAt: "2025-01-28T07:10:13Z",
  },
  {
    job_id: 39,
    user_id: 39,
    company_name: "Tagpad",
    job_title: "VP Quality Control",
    status: "pending",
    createdAt: "2025-01-27T04:10:21Z",
  },
  {
    job_id: 40,
    user_id: 40,
    company_name: "Jetpulse",
    job_title: "Programmer Analyst IV",
    status: "rejected",
    createdAt: "2025-01-09T10:56:08Z",
  },
  {
    job_id: 41,
    user_id: 41,
    company_name: "Zoomcast",
    job_title: "Food Chemist",
    status: "pending",
    createdAt: "2025-01-12T23:16:14Z",
  },
  {
    job_id: 42,
    user_id: 42,
    company_name: "Meeveo",
    job_title: "Office Assistant III",
    status: "rejected",
    createdAt: "2025-01-25T14:00:28Z",
  },
  {
    job_id: 43,
    user_id: 43,
    company_name: "Wikibox",
    job_title: "Staff Scientist",
    status: "applied",
    createdAt: "2025-01-22T01:14:53Z",
  },
  {
    job_id: 44,
    user_id: 44,
    company_name: "Bubblebox",
    job_title: "VP Accounting",
    status: "rejected",
    createdAt: "2025-01-20T22:26:40Z",
  },
  {
    job_id: 45,
    user_id: 45,
    company_name: "Feedmix",
    job_title: "Research Assistant I",
    status: "interview",
    createdAt: "2025-01-10T23:20:38Z",
  },
  {
    job_id: 46,
    user_id: 46,
    company_name: "Photojam",
    job_title: "Assistant Manager",
    status: "rejected",
    createdAt: "2025-01-08T10:58:23Z",
  },
  {
    job_id: 47,
    user_id: 47,
    company_name: "Meedoo",
    job_title: "Administrative Officer",
    status: "rejected",
    createdAt: "2025-01-20T15:52:33Z",
  },
  {
    job_id: 48,
    user_id: 48,
    company_name: "Zoomlounge",
    job_title: "Senior Developer",
    status: "pending",
    createdAt: "2025-01-09T21:06:34Z",
  },
  {
    job_id: 49,
    user_id: 49,
    company_name: "Wikido",
    job_title: "Web Developer III",
    status: "rejected",
    createdAt: "2025-01-09T13:22:32Z",
  },
  {
    job_id: 50,
    user_id: 50,
    company_name: "Eabox",
    job_title: "Business Systems Development Analyst",
    status: "rejected",
    createdAt: "2025-01-07T18:21:39Z",
  },
  {
    job_id: 51,
    user_id: 51,
    company_name: "Kwideo",
    job_title: "Legal Assistant",
    status: "applied",
    createdAt: "2025-01-22T01:05:19Z",
  },
  {
    job_id: 52,
    user_id: 52,
    company_name: "Pixoboo",
    job_title: "Budget/Accounting Analyst I",
    status: "interview",
    createdAt: "2025-01-26T16:37:15Z",
  },
  {
    job_id: 53,
    user_id: 53,
    company_name: "Vinder",
    job_title: "Graphic Designer",
    status: "rejected",
    createdAt: "2025-01-11T06:05:29Z",
  },
  {
    job_id: 54,
    user_id: 54,
    company_name: "Jaxbean",
    job_title: "Speech Pathologist",
    status: "interview",
    createdAt: "2025-01-11T00:12:17Z",
  },
  {
    job_id: 55,
    user_id: 55,
    company_name: "Jamia",
    job_title: "Systems Administrator IV",
    status: "interview",
    createdAt: "2025-01-16T19:53:20Z",
  },
  {
    job_id: 56,
    user_id: 56,
    company_name: "Jabbertype",
    job_title: "Graphic Designer",
    status: "interview",
    createdAt: "2025-01-04T03:04:26Z",
  },
  {
    job_id: 57,
    user_id: 57,
    company_name: "Bluejam",
    job_title: "General Manager",
    status: "interview",
    createdAt: "2025-01-22T22:42:34Z",
  },
  {
    job_id: 58,
    user_id: 58,
    company_name: "Oyoba",
    job_title: "Quality Control Specialist",
    status: "applied",
    createdAt: "2025-01-23T00:39:57Z",
  },
  {
    job_id: 59,
    user_id: 59,
    company_name: "Eare",
    job_title: "Tax Accountant",
    status: "pending",
    createdAt: "2025-01-05T23:45:02Z",
  },
  {
    job_id: 60,
    user_id: 60,
    company_name: "Zooxo",
    job_title: "Pharmacist",
    status: "pending",
    createdAt: "2025-01-14T01:05:52Z",
  },
  {
    job_id: 61,
    user_id: 61,
    company_name: "Zoomdog",
    job_title: "Pharmacist",
    status: "applied",
    createdAt: "2025-01-27T09:26:59Z",
  },
  {
    job_id: 62,
    user_id: 62,
    company_name: "Bubbletube",
    job_title: "Desktop Support Technician",
    status: "interview",
    createdAt: "2025-01-05T08:11:02Z",
  },
  {
    job_id: 63,
    user_id: 63,
    company_name: "Trilith",
    job_title: "Financial Advisor",
    status: "rejected",
    createdAt: "2025-01-09T11:10:44Z",
  },
  {
    job_id: 64,
    user_id: 64,
    company_name: "Nlounge",
    job_title: "Legal Assistant",
    status: "interview",
    createdAt: "2025-01-21T06:57:13Z",
  },
  {
    job_id: 65,
    user_id: 65,
    company_name: "Babblestorm",
    job_title: "Analog Circuit Design manager",
    status: "applied",
    createdAt: "2025-01-09T05:09:16Z",
  },
  {
    job_id: 66,
    user_id: 66,
    company_name: "Skyndu",
    job_title: "VP Product Management",
    status: "applied",
    createdAt: "2025-01-17T16:19:10Z",
  },
  {
    job_id: 67,
    user_id: 67,
    company_name: "Roombo",
    job_title: "Chemical Engineer",
    status: "pending",
    createdAt: "2025-01-07T19:23:09Z",
  },
  {
    job_id: 68,
    user_id: 68,
    company_name: "Skilith",
    job_title: "Legal Assistant",
    status: "pending",
    createdAt: "2025-01-14T08:58:31Z",
  },
  {
    job_id: 69,
    user_id: 69,
    company_name: "Devpoint",
    job_title: "Recruiter",
    status: "interview",
    createdAt: "2025-01-30T11:58:12Z",
  },
  {
    job_id: 70,
    user_id: 70,
    company_name: "Voonder",
    job_title: "Analyst Programmer",
    status: "pending",
    createdAt: "2025-01-22T01:22:20Z",
  },
  {
    job_id: 71,
    user_id: 71,
    company_name: "Quatz",
    job_title: "Nurse",
    status: "pending",
    createdAt: "2025-01-11T22:19:53Z",
  },
  {
    job_id: 72,
    user_id: 72,
    company_name: "Lazz",
    job_title: "Structural Analysis Engineer",
    status: "pending",
    createdAt: "2025-01-23T04:00:15Z",
  },
  {
    job_id: 73,
    user_id: 73,
    company_name: "Aimbo",
    job_title: "Safety Technician I",
    status: "applied",
    createdAt: "2025-01-10T01:51:10Z",
  },
  {
    job_id: 74,
    user_id: 74,
    company_name: "Plajo",
    job_title: "Executive Secretary",
    status: "applied",
    createdAt: "2025-01-05T12:55:34Z",
  },
  {
    job_id: 75,
    user_id: 75,
    company_name: "Teklist",
    job_title: "Occupational Therapist",
    status: "interview",
    createdAt: "2025-01-17T11:15:49Z",
  },
  {
    job_id: 76,
    user_id: 76,
    company_name: "Youopia",
    job_title: "Product Engineer",
    status: "applied",
    createdAt: "2025-01-16T10:31:07Z",
  },
  {
    job_id: 77,
    user_id: 77,
    company_name: "Bluezoom",
    job_title: "Mechanical Systems Engineer",
    status: "rejected",
    createdAt: "2025-01-01T09:21:25Z",
  },
  {
    job_id: 78,
    user_id: 78,
    company_name: "Kimia",
    job_title: "VP Marketing",
    status: "interview",
    createdAt: "2025-01-21T06:42:12Z",
  },
  {
    job_id: 79,
    user_id: 79,
    company_name: "Aibox",
    job_title: "Analyst Programmer",
    status: "pending",
    createdAt: "2025-01-09T13:13:48Z",
  },
  {
    job_id: 80,
    user_id: 80,
    company_name: "Skimia",
    job_title: "Structural Engineer",
    status: "interview",
    createdAt: "2025-01-24T17:45:00Z",
  },
  {
    job_id: 81,
    user_id: 81,
    company_name: "Fanoodle",
    job_title: "Database Administrator I",
    status: "applied",
    createdAt: "2025-01-13T10:13:55Z",
  },
  {
    job_id: 82,
    user_id: 82,
    company_name: "Avamba",
    job_title: "Payment Adjustment Coordinator",
    status: "pending",
    createdAt: "2025-01-06T21:28:08Z",
  },
  {
    job_id: 83,
    user_id: 83,
    company_name: "Feedspan",
    job_title: "General Manager",
    status: "rejected",
    createdAt: "2025-01-08T11:33:13Z",
  },
  {
    job_id: 84,
    user_id: 84,
    company_name: "Linkbuzz",
    job_title: "Senior Sales Associate",
    status: "interview",
    createdAt: "2025-01-26T04:47:24Z",
  },
  {
    job_id: 85,
    user_id: 85,
    company_name: "Jaxspan",
    job_title: "Analyst Programmer",
    status: "pending",
    createdAt: "2025-01-04T05:31:23Z",
  },
  {
    job_id: 86,
    user_id: 86,
    company_name: "Meetz",
    job_title: "Pharmacist",
    status: "pending",
    createdAt: "2025-01-19T05:17:49Z",
  },
  {
    job_id: 87,
    user_id: 87,
    company_name: "Flipopia",
    job_title: "Engineer IV",
    status: "applied",
    createdAt: "2025-01-23T13:27:09Z",
  },
  {
    job_id: 88,
    user_id: 88,
    company_name: "Gabtype",
    job_title: "Financial Analyst",
    status: "rejected",
    createdAt: "2025-01-28T00:52:39Z",
  },
  {
    job_id: 89,
    user_id: 89,
    company_name: "Janyx",
    job_title: "Health Coach IV",
    status: "interview",
    createdAt: "2025-01-10T03:34:30Z",
  },
  {
    job_id: 90,
    user_id: 90,
    company_name: "Brainbox",
    job_title: "Budget/Accounting Analyst III",
    status: "interview",
    createdAt: "2025-01-20T11:03:05Z",
  },
  {
    job_id: 91,
    user_id: 91,
    company_name: "Dabfeed",
    job_title: "GIS Technical Architect",
    status: "rejected",
    createdAt: "2025-01-26T05:41:12Z",
  },
  {
    job_id: 92,
    user_id: 92,
    company_name: "Feedbug",
    job_title: "Staff Accountant III",
    status: "interview",
    createdAt: "2025-01-30T09:18:28Z",
  },
  {
    job_id: 93,
    user_id: 93,
    company_name: "Dynazzy",
    job_title: "Civil Engineer",
    status: "interview",
    createdAt: "2025-01-07T22:31:50Z",
  },
  {
    job_id: 94,
    user_id: 94,
    company_name: "Yamia",
    job_title: "Computer Systems Analyst III",
    status: "pending",
    createdAt: "2025-01-28T15:14:42Z",
  },
  {
    job_id: 95,
    user_id: 95,
    company_name: "Twimbo",
    job_title: "Developer I",
    status: "rejected",
    createdAt: "2025-01-27T01:54:08Z",
  },
  {
    job_id: 96,
    user_id: 96,
    company_name: "Zoomcast",
    job_title: "Database Administrator III",
    status: "interview",
    createdAt: "2025-01-17T15:09:28Z",
  },
  {
    job_id: 97,
    user_id: 97,
    company_name: "Zazio",
    job_title: "Systems Administrator I",
    status: "rejected",
    createdAt: "2025-01-18T06:11:14Z",
  },
  {
    job_id: 98,
    user_id: 98,
    company_name: "Voonyx",
    job_title: "Nurse Practicioner",
    status: "interview",
    createdAt: "2025-01-25T04:09:07Z",
  },
  {
    job_id: 99,
    user_id: 99,
    company_name: "Mydo",
    job_title: "Assistant Professor",
    status: "applied",
    createdAt: "2025-01-29T09:03:18Z",
  },
  {
    job_id: 100,
    user_id: 100,
    company_name: "Ntags",
    job_title: "Budget/Accounting Analyst IV",
    status: "pending",
    createdAt: "2025-01-15T08:49:20Z",
  },
];
module.exports = jobs;
