#!/bin/bash

prompt="Please select env: "
OPTIONS=(
    "development"
    "staging"
    "production"
)

echo "$prompt"
select opt in "${OPTIONS[@]}"; do
    case $opt in
        "development")
            ENV="development"
            break
            ;;
        "staging")
            ENV="staging"
            break
            ;;
        "production")
            ENV="production"
            break
            ;;
        *)
            echo "Invalid option $REPLY"
            ;;
    esac
done

eas env:pull --environment $ENV

echo "✅ Environment variables for $ENV pushed successfully!"