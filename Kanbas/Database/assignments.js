const assignments = [
  {
    "_id": "A101",
    "title": "Propulsion Assignment",
    "course": "RS101",
    "description": "Assignment on the basics of propulsion systems.",
    "points": 100,
    "dueDate": "2024-09-15",
    "availableFrom": "2024-09-01",
    "availableUntil": "2024-09-30"
  },
  {
    "_id": "A102",
    "title": "Combustion Analysis",
    "course": "RS101",
    "description": "Analysis of combustion processes in rocket engines.",
    "points": 100,
    "dueDate": "2024-10-01",
    "availableFrom": "2024-09-15",
    "availableUntil": "2024-10-15"
  },
  {
    "_id": "A103",
    "title": "Nozzle Design Project",
    "course": "RS101",
    "description": "Project focused on designing efficient nozzles for propulsion.",
    "points": 150,
    "dueDate": "2024-10-15",
    "availableFrom": "2024-10-01",
    "availableUntil": "2024-10-31"
  },
  {
    "_id": "A201",
    "title": "Aerodynamics Quiz",
    "course": "RS102",
    "description": "Quiz covering fundamental concepts in aerodynamics.",
    "points": 50,
    "dueDate": "2024-09-10",
    "availableFrom": "2024-09-01",
    "availableUntil": "2024-09-15"
  },
  {
    "_id": "A202",
    "title": "Flow Analysis",
    "course": "RS102",
    "description": "Analysis of fluid flow in various aerospace applications.",
    "points": 100,
    "dueDate": "2024-09-25",
    "availableFrom": "2024-09-10",
    "availableUntil": "2024-09-30"
  },
  {
    "_id": "A203",
    "title": "Heating Analysis",
    "course": "RS102",
    "description": "Study of heating effects on aerospace structures.",
    "points": 100,
    "dueDate": "2024-10-05",
    "availableFrom": "2024-09-20",
    "availableUntil": "2024-10-10"
  },
  {
    "_id": "A301",
    "title": "Structural Design Task",
    "course": "RS103",
    "description": "Task involving the design of aerospace structures.",
    "points": 150,
    "dueDate": "2024-09-20",
    "availableFrom": "2024-09-05",
    "availableUntil": "2024-09-25"
  },
  {
    "_id": "A302",
    "title": "Orbital Calculations",
    "course": "RS103",
    "description": "Calculations related to orbital mechanics and satellite trajectories.",
    "points": 100,
    "dueDate": "2024-10-10",
    "availableFrom": "2024-09-25",
    "availableUntil": "2024-10-15"
  },
  {
    "_id": "A303",
    "title": "Systems Engineering Exam",
    "course": "RS103",
    "description": "Exam on systems engineering principles and practices.",
    "points": 200,
    "dueDate": "2024-10-20",
    "availableFrom": "2024-10-05",
    "availableUntil": "2024-10-25"
  },
  {
    "_id": "A401",
    "title": "Flight Dynamics Assignment",
    "course": "RS104",
    "description": "Assignment on the principles of flight dynamics.",
    "points": 100,
    "dueDate": "2024-09-15",
    "availableFrom": "2024-09-01",
    "availableUntil": "2024-09-30"
  },
  {
    "_id": "A402",
    "title": "Stability Analysis",
    "course": "RS104",
    "description": "Analysis of stability in flight systems.",
    "points": 100,
    "dueDate": "2024-10-01",
    "availableFrom": "2024-09-15",
    "availableUntil": "2024-10-15"
  },
  {
    "_id": "A403",
    "title": "Control Systems Project",
    "course": "RS104",
    "description": "Project on designing control systems for aircraft.",
    "points": 150,
    "dueDate": "2024-10-15",
    "availableFrom": "2024-10-01",
    "availableUntil": "2024-10-31"
  },
  {
    "_id": "A501",
    "title": "Thermodynamics Quiz",
    "course": "RS105",
    "description": "Quiz on basic thermodynamics concepts.",
    "points": 50,
    "dueDate": "2024-09-10",
    "availableFrom": "2024-09-01",
    "availableUntil": "2024-09-15"
  },
  {
    "_id": "A502",
    "title": "Heat Transfer Analysis",
    "course": "RS105",
    "description": "Analysis of heat transfer in aerospace applications.",
    "points": 100,
    "dueDate": "2024-09-25",
    "availableFrom": "2024-09-10",
    "availableUntil": "2024-09-30"
  },
  {
    "_id": "A503",
    "title": "Thermal Systems Design",
    "course": "RS105",
    "description": "Design project for thermal systems in spacecraft.",
    "points": 100,
    "dueDate": "2024-10-05",
    "availableFrom": "2024-09-20",
    "availableUntil": "2024-10-10"
  },
  {
    "_id": "A601",
    "title": "Materials Science Assignment",
    "course": "RS106",
    "description": "Assignment on the properties of aerospace materials.",
    "points": 100,
    "dueDate": "2024-09-15",
    "availableFrom": "2024-09-01",
    "availableUntil": "2024-09-30"
  },
  {
    "_id": "A602",
    "title": "Composite Materials Analysis",
    "course": "RS106",
    "description": "Analysis of composite materials used in aerospace.",
    "points": 100,
    "dueDate": "2024-10-01",
    "availableFrom": "2024-09-15",
    "availableUntil": "2024-10-15"
  },
  {
    "_id": "A603",
    "title": "Materials Testing Project",
    "course": "RS106",
    "description": "Project on testing and evaluating aerospace materials.",
    "points": 150,
    "dueDate": "2024-10-15",
    "availableFrom": "2024-10-01",
    "availableUntil": "2024-10-31"
  },
  {
    "_id": "A701",
    "title": "Avionics Systems Quiz",
    "course": "RS107",
    "description": "Quiz on avionics systems and their functions.",
    "points": 50,
    "dueDate": "2024-09-10",
    "availableFrom": "2024-09-01",
    "availableUntil": "2024-09-15"
  },
  {
    "_id": "A702",
    "title": "Navigation Systems Analysis",
    "course": "RS107",
    "description": "Analysis of navigation systems used in aircraft.",
    "points": 100,
    "dueDate": "2024-09-25",
    "availableFrom": "2024-09-10",
    "availableUntil": "2024-09-30"
  },
  {
    "_id": "A703",
    "title": "Communication Systems Project",
    "course": "RS107",
    "description": "Project on designing communication systems for spacecraft.",
    "points": 100,
    "dueDate": "2024-10-05",
    "availableFrom": "2024-09-20",
    "availableUntil": "2024-10-10"
  },
  {
    "_id": "A801",
    "title": "Spacecraft Design Assignment",
    "course": "RS108",
    "description": "Assignment on the principles of spacecraft design.",
    "points": 100,
    "dueDate": "2024-09-15",
    "availableFrom": "2024-09-01",
    "availableUntil": "2024-09-30"
  },
  {
    "_id": "A802",
    "title": "Mission Planning Analysis",
    "course": "RS108",
    "description": "Analysis of mission planning for space missions.",
    "points": 100,
    "dueDate": "2024-10-01",
    "availableFrom": "2024-09-15",
    "availableUntil": "2024-10-15"
  },
  {
    "_id": "A803",
    "title": "Payload Integration Project",
    "course": "RS108",
    "description": "Project on integrating payloads into spacecraft.",
    "points": 150,
    "dueDate": "2024-10-15",
    "availableFrom": "2024-10-01",
    "availableUntil": "2024-10-31"
  },
  {
    "_id": "A901",
    "title": "Satellite Systems Quiz",
    "course": "RS109",
    "description": "Quiz on satellite systems and their operations.",
    "points": 50,
    "dueDate": "2024-09-10",
    "availableFrom": "2024-09-01",
    "availableUntil": "2024-09-15"
  },
  {
    "_id": "A902",
    "title": "Orbital Mechanics Analysis",
    "course": "RS109",
    "description": "Analysis of orbital mechanics for satellite trajectories.",
    "points": 100,
    "dueDate": "2024-09-25",
    "availableFrom": "2024-09-10",
    "availableUntil": "2024-09-30"
  },
  {
    "_id": "A903",
    "title": "Satellite Design Project",
    "course": "RS109",
    "description": "Project on designing and building satellite systems.",
    "points": 100,
    "dueDate": "2024-10-05",
    "availableFrom": "2024-09-20",
    "availableUntil": "2024-10-10"
  },
  {
    "_id": "A1001",
    "title": "Rocket Propulsion Quiz",
    "course": "RS110",
    "description": "Quiz on the basics of rocket propulsion.",
    "points": 50,
    "dueDate": "2024-09-10",
    "availableFrom": "2024-09-01",
    "availableUntil": "2024-09-15"
  },
  {
    "_id": "A1002",
    "title": "Engine Performance Analysis",
    "course": "RS110",
    "description": "Analysis of rocket engine performance.",
    "points": 100,
    "dueDate": "2024-09-25",
    "availableFrom": "2024-09-10",
    "availableUntil": "2024-09-30"
  },
  {
    "_id": "A1003",
    "title": "Propulsion Systems Design",
    "course": "RS110",
    "description": "Design project for rocket propulsion systems.",
    "points": 150,
    "dueDate": "2024-10-15",
    "availableFrom": "2024-10-01",
    "availableUntil": "2024-10-31"
  },
  {
    "_id": "A1101",
    "title": "Advanced Propulsion Quiz",
    "course": "RS111",
    "description": "Quiz on advanced propulsion concepts.",
    "points": 50,
    "dueDate": "2024-09-10",
    "availableFrom": "2024-09-01",
    "availableUntil": "2024-09-15"
  },
  {
    "_id": "A1102",
    "title": "Propulsion Systems Analysis",
    "course": "RS111",
    "description": "Analysis of advanced propulsion systems.",
    "points": 100,
    "dueDate": "2024-09-25",
    "availableFrom": "2024-09-10",
    "availableUntil": "2024-09-30"
  },
  {
    "_id": "A1103",
    "title": "Propulsion Design Project",
    "course": "RS111",
    "description": "Project on designing advanced propulsion systems.",
    "points": 150,
    "dueDate": "2024-10-15",
    "availableFrom": "2024-10-01",
    "availableUntil": "2024-10-31"
  },
  {
    "_id": "A1201",
    "title": "Space Systems Quiz",
    "course": "RS112",
    "description": "Quiz on space systems and their operations.",
    "points": 50,
    "dueDate": "2024-09-10",
    "availableFrom": "2024-09-01",
    "availableUntil": "2024-09-15"
  },
  {
    "_id": "A1202",
    "title": "Space Systems Analysis",
    "course": "RS112",
    "description": "Analysis of space systems and their components.",
    "points": 100,
    "dueDate": "2024-09-25",
    "availableFrom": "2024-09-10",
    "availableUntil": "2024-09-30"
  },
  {
    "_id": "A1203",
    "title": "Space Systems Design Project",
    "course": "RS112",
    "description": "Project on designing space systems.",
    "points": 150,
    "dueDate": "2024-10-15",
    "availableFrom": "2024-10-01",
    "availableUntil": "2024-10-31"
  },
  {
    "_id": "A1301",
    "title": "Aerospace Materials Quiz",
    "course": "RS113",
    "description": "Quiz on aerospace materials and their properties.",
    "points": 50,
    "dueDate": "2024-09-10",
    "availableFrom": "2024-09-01",
    "availableUntil": "2024-09-15"
  },
  {
    "_id": "A1302",
    "title": "Materials Analysis",
    "course": "RS113",
    "description": "Analysis of materials used in aerospace applications.",
    "points": 100,
    "dueDate": "2024-09-25",
    "availableFrom": "2024-09-10",
    "availableUntil": "2024-09-30"
  },
  {
    "_id": "A1303",
    "title": "Materials Design Project",
    "course": "RS113",
    "description": "Project on designing and testing aerospace materials.",
    "points": 150,
    "dueDate": "2024-10-15",
    "availableFrom": "2024-10-01",
    "availableUntil": "2024-10-31"
  },
  {
    "_id": "A1401",
    "title": "Flight Mechanics Quiz",
    "course": "RS114",
    "description": "Quiz on the principles of flight mechanics.",
    "points": 50,
    "dueDate": "2024-09-10",
    "availableFrom": "2024-09-01",
    "availableUntil": "2024-09-15"
  },
  {
    "_id": "A1402",
    "title": "Flight Mechanics Analysis",
    "course": "RS114",
    "description": "Analysis of flight mechanics in aerospace applications.",
    "points": 100,
    "dueDate": "2024-09-25",
    "availableFrom": "2024-09-10",
    "availableUntil": "2024-09-30"
  },
  {
    "_id": "A1403",
    "title": "Flight Mechanics Design Project",
    "course": "RS114",
    "description": "Project on designing flight mechanics systems.",
    "points": 150,
    "dueDate": "2024-10-15",
    "availableFrom": "2024-10-01",
    "availableUntil": "2024-10-31"
  },
  {
    "_id": "A1501",
    "title": "Space Mission Quiz",
    "course": "RS115",
    "description": "Quiz on the basics of space missions.",
    "points": 50,
    "dueDate": "2024-09-10",
    "availableFrom": "2024-09-01",
    "availableUntil": "2024-09-15"
  },
  {
    "_id": "A1502",
    "title": "Mission Analysis",
    "course": "RS115",
    "description": "Analysis of space mission planning and execution.",
    "points": 100,
    "dueDate": "2024-09-25",
    "availableFrom": "2024-09-10",
    "availableUntil": "2024-09-30"
  },
  {
    "_id": "A1503",
    "title": "Mission Design Project",
    "course": "RS115",
    "description": "Project on designing and planning space missions.",
    "points": 150,
    "dueDate": "2024-10-15",
    "availableFrom": "2024-10-01",
    "availableUntil": "2024-10-31"
  },
  {
    "_id": "A1601",
    "title": "Satellite Communication Quiz",
    "course": "RS116",
    "description": "Quiz on satellite communication systems.",
    "points": 50,
    "dueDate": "2024-09-10",
    "availableFrom": "2024-09-01",
    "availableUntil": "2024-09-15"
  },
  {
    "_id": "A1602",
    "title": "Communication Systems Analysis",
    "course": "RS116",
    "description": "Analysis of communication systems in satellites.",
    "points": 100,
    "dueDate": "2024-09-25",
    "availableFrom": "2024-09-10",
    "availableUntil": "2024-09-30"
  },
  {
    "_id": "A1603",
    "title": "Communication Systems Design Project",
    "course": "RS116",
    "description": "Project on designing satellite communication systems.",
    "points": 150,
    "dueDate": "2024-10-15",
    "availableFrom": "2024-10-01",
    "availableUntil": "2024-10-31"
  },
  {
    "_id": "A1701",
    "title": "Space Robotics Quiz",
    "course": "RS117",
    "description": "Quiz on the basics of space robotics.",
    "points": 50,
    "dueDate": "2024-09-10",
    "availableFrom": "2024-09-01",
    "availableUntil": "2024-09-15"
  },
  {
    "_id": "A1702",
    "title": "Robotics Systems Analysis",
    "course": "RS117",
    "description": "Analysis of robotic systems used in space.",
    "points": 100,
    "dueDate": "2024-09-25",
    "availableFrom": "2024-09-10",
    "availableUntil": "2024-09-30"
  },
  {
    "_id": "A1703",
    "title": "Robotics Design Project",
    "course": "RS117",
    "description": "Project on designing robotic systems for space missions.",
    "points": 150,
    "dueDate": "2024-10-15",
    "availableFrom": "2024-10-01",
    "availableUntil": "2024-10-31"
  },
  {
    "_id": "A1801",
    "title": "Space Propulsion Quiz",
    "course": "RS118",
    "description": "Quiz on space propulsion systems.",
    "points": 50,
    "dueDate": "2024-09-10",
    "availableFrom": "2024-09-01",
    "availableUntil": "2024-09-15"
  },
  {
    "_id": "A1802",
    "title": "Propulsion Systems Analysis",
    "course": "RS118",
    "description": "Analysis of propulsion systems used in space.",
    "points": 100,
    "dueDate": "2024-09-25",
    "availableFrom": "2024-09-10",
    "availableUntil": "2024-09-30"
  },
  {
    "_id": "A1803",
    "title": "Propulsion Design Project",
    "course": "RS118",
    "description": "Project on designing propulsion systems for space missions.",
    "points": 150,
    "dueDate": "2024-10-15",
    "availableFrom": "2024-10-01",
    "availableUntil": "2024-10-31"
  },
  {
    "_id": "A1901",
    "title": "Spacecraft Systems Quiz",
    "course": "RS119",
    "description": "Quiz on spacecraft systems and their functions.",
    "points": 50,
    "dueDate": "2024-09-10",
    "availableFrom": "2024-09-01",
    "availableUntil": "2024-09-15"
  },
  {
    "_id": "A1902",
    "title": "Spacecraft Systems Analysis",
    "course": "RS119",
    "description": "Analysis of spacecraft systems and their components.",
    "points": 100,
    "dueDate": "2024-09-25",
    "availableFrom": "2024-09-10",
    "availableUntil": "2024-09-30"
  },
  {
    "_id": "A1903",
    "title": "Spacecraft Design Project",
    "course": "RS119",
    "description": "Project on designing spacecraft systems.",
    "points": 150,
    "dueDate": "2024-10-15",
    "availableFrom": "2024-10-01",
    "availableUntil": "2024-10-31"
  },
  {
    "_id": "A2001",
    "title": "Aerospace Engineering Quiz",
    "course": "RS120",
    "description": "Quiz on aerospace engineering principles.",
    "points": 50,
    "dueDate": "2024-09-10",
    "availableFrom": "2024-09-01",
    "availableUntil": "2024-09-15"
  },
  {
    "_id": "A2002",
    "title": "Engineering Systems Analysis",
    "course": "RS120",
    "description": "Analysis of engineering systems in aerospace.",
    "points": 100,
    "dueDate": "2024-09-25",
    "availableFrom": "2024-09-10",
    "availableUntil": "2024-09-30"
  },
  {
    "_id": "A2003",
    "title": "Engineering Design Project",
    "course": "RS120",
    "description": "Project on designing engineering systems for aerospace applications.",
    "points": 150,
    "dueDate": "2024-10-15",
    "availableFrom": "2024-10-01",
    "availableUntil": "2024-10-31"
  },
  {
    "_id": "A2101",
    "title": "Space Exploration Quiz",
    "course": "RS121",
    "description": "Quiz on the basics of space exploration.",
    "points": 50,
    "dueDate": "2024-09-10",
    "availableFrom": "2024-09-01",
    "availableUntil": "2024-09-15"
  },
  {
    "_id": "A2102",
    "title": "Exploration Systems Analysis",
    "course": "RS121",
    "description": "Analysis of systems used in space exploration.",
    "points": 100,
    "dueDate": "2024-09-25",
    "availableFrom": "2024-09-10",
    "availableUntil": "2024-09-30"
  },
  {
    "_id": "A2103",
    "title": "Exploration Design Project",
    "course": "RS121",
    "description": "Project on designing systems for space exploration.",
    "points": 150,
    "dueDate": "2024-10-15",
    "availableFrom": "2024-10-01",
    "availableUntil": "2024-10-31"
  }
];
export default assignments;
