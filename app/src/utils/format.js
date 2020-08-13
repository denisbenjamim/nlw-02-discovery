 
const subjects = [ 
    'Artes',
    'biologia',
    'Ciências',
    'Educação física',
    'Física',
    'Geografia',
    'História',
    'Matemática',
    'Portugues',
    'Química',
];

const weekdays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
]

function getSubject(subjectNumber){
    return subjects[subjectNumber - 1];
}

function convertHoursToMinute(time){
    const [hour, minutes] = time.split(':');
    return Number((hour * 60) + minutes);
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinute
}