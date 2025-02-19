#! /bin/bash

help() {
  echo "Usage: $0 [options]"
  echo "Options:"
  echo "  -g, --get <id>    Get a task by ID"
  echo "  -c, --create <json>    Create a new task"
  echo "  -u, --update <id> <json>    Update a task by ID"
  echo "  -d, --delete <id>    Delete a task by ID"
  echo "  -l, --list    List all tasks"
  echo "  -h, --help    Show this help message"
}

url="https://ca4bb038-ee44-49a8-bcdb-2e48a341652e.mock.pstmn.io"

get() {
  curl -X GET "$url/task/$1"
}

create() {
  curl -X POST "$url/task" -H "Content-Type: application/json" -d "$1"
}

update() {
  curl -X PUT "$url/task/$1" -H "Content-Type: application/json" -d "$2"
}

delete() {
  curl -X DELETE "$url/task/$1"
}

list() {
  curl -X GET "$url/task"
}

if [ $# -eq 0 ]; then
  help
  exit 1
fi

while [[ $# -gt 0 ]]; do
  case $1 in
    -g|--get)
      get $2
      exit 0
      ;;
    -c|--create)
      create $2
      exit 0
      ;;
    -u|--update)
      update $2
      exit 0
      ;;
    -d|--delete)
      delete $2
      exit 0
      ;;
    -l|--list)
      list
      exit 0
      ;;
    -h|--help)
      help
      exit 0
      ;;
    -*)
      help
      exit 1
      ;;
  esac
done
