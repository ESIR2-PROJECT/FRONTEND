docker compose -f compose.dev.yml build
docker compose -f compose.dev.yml up dbobjects
docker compose -f compose.dev.yml up nginx api front db adminer datahandler