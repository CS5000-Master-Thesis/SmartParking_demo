# SmartParking Demo

## Initial Setup for running the example
### 1. Create identities + env file

```shell
# Enter directory
cd tooling

# Run program
cargo run --release -- https://impierce.smartparking.live oem ta psp plo

# Example
cargo run --release -- https://hopelessly-optimal-seal.ngrok-free.app oem ta psp plo
```

### 2. Start container

```shell
# Build images and start container (only need to have the --build the first time)
docker-compose up -d --build

# Start container
docker-compose up -d

# Stop container
docker-compose down
```

### 3. Open demo site

- http://localhost:3000/


# Build Docker image 
```shell
# Build image
docker build -f backend/Dockerfile -t kobeynator/backend .

# Push to docker hub
docker push kobeynator/backend
```

# NGROK
You can use ngrok to create a tunnel to your localhost:3000.

```shell
# Dynamic domain
ngrok http 3000 --request-header-add "ngrok-skip-browser-warning: 1"

# If you have a static domain 
ngrok http --domain=hopelessly-optimal-seal.ngrok-free.app 3000
```
