DROP TABLE IF EXISTS raffles;
DROP TABLE IF EXISTS participants;
DROP TABLE IF EXISTS winners;

CREATE TABLE raffles (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  secret_token VARCHAR(255) NOT NULL,
  -- created_at TIMESTAMP NOT NULL DEFAULT NOW()

);

CREATE TABLE participants (
  id SERIAL PRIMARY KEY,
  raffle_id INTEGER REFERENCES raffles(id),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE winners (
  id SERIAL PRIMARY KEY,
  raffle_id INTEGER REFERENCES raffles(id),
  participant_id INTEGER REFERENCES participants(id),
  prize VARCHAR(255) NOT NULL
);