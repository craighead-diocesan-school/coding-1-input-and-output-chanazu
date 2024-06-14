// ####################################
// #### ----- Non-Maori Mihi ----- ####
// ####################################

function nonMaoriMihi() {
  alert('Non-Māori Mihi')
  alert('This program will help you build a basic mihi.')
  alert("First, you'll be asked a series of questions, then your mihi will be ready.")

  alert('What is your name?')
  let name = prompt('What is your name ?')
  let mountain = prompt('What is your mountain?')
  let river = prompt ('What is the river ?')
  let hometown = prompt ('What is your home town?')

  alert('Ko' + name + ',')
  alert('Ko' + mountain + 'tōku maunga')
  alert('Ko'+ river +'tōku awa')
  alert('Nō' + hometown + 'au')
  alert('Your mihi:')
  alert('Ko ' + name + ' tōku ingoa,')
  alert('Tēnā koutou,')
  alert('Tēnā koutou,')
  alert('Tēnā koutou, katoa.')
}