const client = require("./client");

async function createPendulumAnswer({pendulumImage, answer}){
  try {
      const {
        rows: [pendulum],
      } = await client.query(
        `
      INSERT INTO pendulum ("pendulumImage", answer)
      VALUES ($1, $2)
      RETURNING *
      `,
        [pendulumImage, answer]
      );
      return pendulum;
    } catch (error) {
      console.log(error);
    }
}

async function getPendulumAnswerById(id){
  try {
      const {
        rows: [pendulum],
      } = await client.query(`
        SELECT *
        FROM pendulum
        WHERE id=${id}
        `);
      if (!pendulum) {
        return null;
      }
      return pendulum;
    } catch (error) {
      console.log(error);
    }
}

async function getAllPendulumAnswers(){
  try {
    const { rows: pendulum } = await client.query(`
    SELECT *
    FROM pendulum;
    `);
    return pendulum;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createPendulumAnswer,
  getPendulumAnswerById,
  getAllPendulumAnswers
}