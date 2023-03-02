mkdir ./API/lib
docker compose -f compose.prod.yml build dbobjects
docker compose -f compose.prod.yml create dbobjects
docker compose -f compose.prod.yml cp dbobjects:app/target/dbobjects-0.0.1-SNAPSHOT.jar ./API/lib/dbobjects.jar
docker compose -f compose.prod.yml build
docker compose -f compose.prod.yml up
rm -Rf ./API/lib