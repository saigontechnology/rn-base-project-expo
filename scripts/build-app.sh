#!bin/bash

# prompt
prompt="Please select profile to build: "
OPTIONS=(
    "development"
    "preview"
    "production"
)

# Regular Colors
Red='\033[0;31m'          # Red
Green='\033[0;32m'        # Green

PROFILE=$1

function buildApp() {
  OUTPUT_DIR="build"
  mkdir -p $OUTPUT_DIR

  VERSION=$(jq -r '.version' package.json)
  FILE_NAME="app-$1-$VERSION"
  FILE_NAME_IOS="$FILE_NAME.ipa"

  if [ $1 == "development" ]
  then
    FILE_NAME_ANDROID="$FILE_NAME.apk"
  else 
    FILE_NAME_ANDROID="$FILE_NAME.aab"
  fi

  # eas build -p ios --local --profile $1 --output "$OUTPUT_DIR/$FILE_NAME_IOS"
  eas build -p android --local --profile $1 --output "$OUTPUT_DIR/$FILE_NAME_ANDROID"
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

  buildApp $PROFILE

  # increaseVersion
  if [ $? -eq 0 ]; then
    printf "\n$Green Build App Successful\n"
  else
    printf "\n$Red Build App Failed\n"
  fi
}

main