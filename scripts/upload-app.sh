#!bin/bash

# Script will be showed below:

# prompt
prompt="Please select profile to build and upload: "
OPTIONS=(
    "development"
    "preview"
    "production"
)

# Reset
Color_Off='\033[0m'       # Text Reset

# Regular Colors
Red='\033[0;31m'          # Red
Green='\033[0;32m'        # Green

PROFILE=$1

function buildAndUploadApp() {
  fastlane ios build type:build --env $1
  fastlane android build type:build --env $1
}

function main() {

  PS3="$prompt"
  select opt in "${OPTIONS[@]}"; do
      if [ "$opt" == "quit" ]
      then
          break
      fi
      if [ "$opt" == "" ]
      then
          echo "Invalid"
      else
          echo "Profile: $opt"
          PROFILE=$opt
          break
      fi
  done

  buildAndUploadApp $PROFILE
  
  if [ $? -eq 0 ]; then
    printf "\n$Green Build App Successful\n"
  else
    printf "\n$Red Build App Failed\n"
  fi
}

main
