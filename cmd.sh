#!/bin/bash

args=("$@")
cmd="${args[0]}"
cmd_args=("${args[@]:1}")

dev_container_workdir="/app"

check_is_inside_container () {
    if [ "$(pwd)" != "$dev_container_workdir" ]; then
        echo "This script should be run inside the container."
        exit 1
    fi
}

check_is_outside_container () {
    if [ "$(pwd)" = "$dev_container_workdir" ]; then
        echo "This script should be run on the host machine, not inside the container."
        exit 1
    fi
}

show_available_commands () {
    echo "Available commands:"
    if [ "$(pwd)" != "$dev_container_workdir" ]; then
        echo "  up     - Start the application container"
        echo "  down   - Stop the application container"
        echo "  in     - Open a bash shell inside the application container"
        echo "  logs   - View logs of the application container"
    fi

    if [ "$(pwd)" = "$dev_container_workdir" ]; then
        echo "  run    - Run the application inside the development container"
        echo "  test   - Run tests inside the development container"
    fi
}

case "$cmd" in
    "up")
        check_is_outside_container
        docker compose -f build/docker-compose.yaml up -d
        ;;
    "down")
        check_is_outside_container
        docker compose -f build/docker-compose.yaml down
        ;;
    "in")
        check_is_outside_container
        docker exec -it mail_categorizer_app /bin/bash
        ;;
    "logs")
        check_is_outside_container
        docker logs mail_categorizer_app
        ;;
    "run")
        check_is_inside_container
        cd src
        ./entrypoint.sh
        ;;
    "test")
        check_is_inside_container
        cd test
        ./run_tests.sh
        ;;
    "help")
        show_available_commands
        ;;
    *)
        echo "Unknown command: $cmd"
        show_available_commands
        exit 1
        ;;
esac