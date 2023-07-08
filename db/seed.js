const client = require("./client");

async function dropTables() {
    try {
      console.log("Dropping All Tables...");
  
      await client.query(`
      DROP TABLE IF EXISTS pendulum;
      DROP TABLE IF EXISTS users;
      `);
  
      console.log("Finished dropping tables");
    } catch (error) {
      console.error("Error dropping tables");
      throw error;
    }
  
    // drop all tables, in the correct order
  }
  
  async function createTables() {
    console.log("Starting to build tables...");
    // create all tables, in the correct order
    try {
      await client.query(`
    
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        "isAdmin" boolean NOT NULL
      );

      CREATE TABLE pendulum (
        id SERIAL PRIMARY KEY,
        "pendulumImage" TEXT NOT NULL,
        answer TEXT NOT NULL
      );
  
    `);
  
      console.log("Finished building tables!");
    } catch (error) {
      console.error("Error building tables!");
      throw error;
    }
  }

  async function createInitialUsers() {
    console.log("Starting to create users...");
    try {
      const usersToCreate = [
        { username: "pendy", password: "pendy123", isAdmin: true },
        { username: "astra", password: "averageGemini", isAdmin: true },
        { username: "jokerfool", password: "divination", isAdmin: true },
        { username: "eighty", password: "ball", isAdmin: true },
      ];
      const users = await Promise.all(usersToCreate.map(createUser));
  
      console.log("Users created:");
      console.log(users);
      console.log("Finished creating users!");
    } catch (error) {
      console.error("Error creating users!");
      throw error;
    }
  }

  async function createInitialPendulumAnswers() {
    console.log("Starting to create pendulum answers...");
    try {
      const panswersToCreate = [
        { 
          pendulumImage: "https://dribbble.com/shots/6268606-Pendulum/attachments/6268606-Pendulum?mode=media",
          answer: "Yes" 
        },
        { pendulumImage: "https://gifer.com/en/gifs/pendulum",
        answer: "Maybe" },
        { pendulumImage: "https://gfycat.com/impossiblesillyiberianemeraldlizard",
        answer: "No" },
      ];
      const panswers = await Promise.all(panswersToCreate.map(pcreateAnswer));
  
      console.log("Pendulum Answers created:");
      console.log(panswers);
      console.log("Finished creating Pendulum answers!");
    } catch (error) {
      console.error("Error creating Pendulum answers!");
      throw error;
    }
  }

  async function rebuildDB() {
    try {
      await dropTables();
      await createTables();
      await createInitialUsers();
      await createInitialPendulumAnswers();
    } catch (error) {
      console.log("Error during rebuildDB");
      throw error;
    }
  }
  
  module.exports = {
    rebuildDB,
    dropTables,
    createTables,
    createInitialUsers
  };