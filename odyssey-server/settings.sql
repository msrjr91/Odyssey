CREATE DATABASE odyssey;
CREATE USER odysseyuser WITH PASSWORD 'odyssey';
ALTER DATABASE odyssey OWNER TO odysseyuser;
GRANT USAGE, CREATE ON SCHEMA public TO odysseyuser;