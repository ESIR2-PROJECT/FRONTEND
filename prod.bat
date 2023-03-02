mkdir ./API/lib
mkdir ./DataHandler/lib
docker compose -f compose.prod.yml build dbobjects
docker compose -f compose.prod.yml create dbobjects
docker compose -f compose.prod.yml cp dbobjects:app/target/dbobjects-0.0.1-SNAPSHOT.jar ./API/lib/dbobjects.jar
docker compose -f compose.prod.yml cp dbobjects:app/target/dbobjects-0.0.1-SNAPSHOT.jar ./DataHandler/lib/dbobjects.jar
docker compose -f compose.prod.yml build
docker compose -f compose.prod.yml up db api front datahandler nginx
rm -Rf ./API/lib
rm -Rf ./DataHandler/lib
