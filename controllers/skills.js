import { skills } from '../data/skill-data.js'
import { Skill } from '../models/skill.js'

function index (req, res) {
  res.render('skills/index', {
    skills: skills,
    time: req.time
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
  Skill.findById(req.params.id)
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

function deleteSkill(req, res) {
  Skill.findByIdAndDelete(req.params.id)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function edit (req, res) {
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('skills/edit', {
      todo: todo
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function update(req, res) {
  req.body.done = !!req.body.done
  Skill.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(skill => {
    // redirect back to show view
    res.redirect(`/skills/${skill._id}`)
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
  show,
  deleteSkill as delete,
  edit,
  update
}