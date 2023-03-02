docker compose -f compose.prod.yml build dbobjects
docker compose -f compose.prod.yml create dbobjects
docker compose -f compose.prod.yml cp dbobjects:app/target/dbobjects-0.0.1-SNAPSHOT.jar ./DBobjects/out/
docker compose -f compose.prod.yml build
docker compose -f compose.prod.yml up
rm -Rf ./DBobjects/out