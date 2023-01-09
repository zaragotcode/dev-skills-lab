import { skills } from '../data/skill-data.js'

function index (req, res) {
  res.render('skills/index', {
    skills: skills 
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  console.log(req.body)
  req.body.done = false
  Skill.create(req.body)
  .then(skill => {
		// Notice we are doing a redirect here!
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function show(req, res) {
  skills.findById(req.params.id)
  .then(skill => {
		// Notice we are doing a redirect here!
    res.render('skills/show')
    skill: skill
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

export {
  index,
  newSkill as new,
  create,
  show
}