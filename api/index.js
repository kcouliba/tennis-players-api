const router = require('express').Router()
const axios = require('axios')

const fetchPlayers = () =>
  axios
    .get(
      'https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json',
    )
    .then(res => res.data.players)

function getFindPlayerById(players) {
  return id => {
    return (
      players &&
      players.length &&
      players.find(p => Number(p.id) === Number(id))
    )
  }
}

router.get('/players', async (req, res) => {
  const players = await fetchPlayers()

  try {
    res.status(200).json(players.sort((pa, pb) => pa.id - pb.id))
  } catch (error) {
    res.sendStatus(400)
  }
})

router.get('/players/:id', async (req, res, next) => {
  try {
    const players = await fetchPlayers()
    const findPlayer = getFindPlayerById(players)
    const player = findPlayer(req.params.id)

    // if (!player) throw new Error(`Player not found for id ${req.params.id}`)
    if (!player) return res.status(404).send(error.message)
    res.json(player)
  } catch (error) {
    next(error.message)
  }
})

module.exports = router
