-- Given a demographics table in the following format:
-- id
-- name
-- birthday
-- race

-- you need to return the same table where all letters are lowercase in the race column.

-- My Solution:

SELECT id, name, birthday, LOWER(race) as race FROM demographics;