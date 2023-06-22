const express = require('express');
const app = express();
const port = 8080;
const patients = {
	patientList: [
		{
			firstName: 'Julia',
			lastName: 'J.',
			dateOfBirth: '10/01/1966',
			conditions: 'Back Injury',
			doctorAssigned: 'Dr. Sean Maguire',
			nextAppointment: '08/03/2023',
			id: 1,
		},
		{
			firstName: 'Phoebe',
			lastName: 'B.',
			dateOfBirth: '11/07/1988',
			conditions: 'Arthritis',
			doctorAssigned: 'Dr. Sean Maguire',
			nextAppointment: null,
			id: 2,
		},
		{
			firstName: 'Lucy',
			lastName: 'D.',
			dateOfBirth: '02/14/1976',
			conditions: 'Asthma',
			doctorAssigned: 'Dr. Sean Maguire',
			nextAppointment: '05/03/2023',
			id: 3,
		},
		{
			firstName: 'Taylor',
			lastName: 'S.',
			dateOfBirth: '04/10/1984',
			conditions: 'Sinus Infection',
			doctorAssigned: 'Dr. Phil McGraw',
			nextAppointment: '08/03/2023',
			id: 4,
		}
	],
};

app.use(express.json());

app.get('/', function (req, res) {
  res.send('hii');
});

app.listen(port, () => console.log('its alive on', port));

app.get('/patients', (req, res) => {
	res.status(200).send(patients.patientList);
});

app.post('/patients/:id', (req, res) => {
	const { id } = req.params;
	const { patient } = req.body;

	// if (!patient) {
	// 	res.status(418).send({ message: 'Patient required' });
	// }
	// patient.id = id;

	res.send({
		patient
	});
});
