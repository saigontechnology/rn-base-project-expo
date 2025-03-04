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

ENV_FILE=".env.$ENV"

# Ensure the environment file exists
if [ ! -f "$ENV_FILE" ]; then
    echo "$ENV_FILE file not found!"
    exit 1
fi

# Push environment variables to EAS
while IFS= read -r line || [ -n "$line" ]; do
    # Ignore comments and empty lines
    if [[ "$line" =~ ^#.*$ || -z "$line" ]]; then
        continue
    fi

    # Extract key and value
    key=$(echo "$line" | cut -d '=' -f 1)
    value=$(echo "$line" | cut -d '=' -f 2-)

    # Push to EAS
    echo "Setting $key on EAS for $ENV environment..."
    eas secret:push --name "$key" --value "$value" --force

done < "$ENV_FILE"

echo "✅ Environment variables for $ENV pushed successfully!"